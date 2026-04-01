'use client';

import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { syncUserToFirestore } from '@/lib/syncUser';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleAuth = async () => {
    setErrorMsg('');
    console.log(`🚀 ${isSignUp ? 'Signing up' : 'Signing in'} with email...`);
    try {
      if (!email || !password) {
        setErrorMsg('Email and password are required');
        return;
      }
      
      let userCred;
      if (isSignUp) {
        userCred = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCred = await signInWithEmailAndPassword(auth, email, password);
      }
      
      console.log('✅ Auth success:', userCred.user);
      await syncUserToFirestore(userCred.user);
      router.push('/dashboard');
    } catch (err: unknown) {
      console.error('❌ Auth failed:', err);
      const code =
        err && typeof err === "object" && "code" in err
          ? String((err as { code?: string }).code)
          : "";
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      if (code === "auth/user-not-found") {
        setErrorMsg("No account found with this email");
      } else if (code === "auth/wrong-password") {
        setErrorMsg("Invalid password");
      } else if (code === "auth/invalid-credential") {
        setErrorMsg("Invalid credentials - please check your email and password");
      } else if (code === "auth/email-already-in-use") {
        setErrorMsg("An account already exists with this email");
      } else {
        setErrorMsg(message);
      }
    }
  };
  
  const handleGoogleLogin = async () => {
    setErrorMsg('');
    console.log('🌐 Signing in with Google...');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('✅ Google auth success:', result.user);
      await syncUserToFirestore(result.user);
      router.push('/dashboard');
    } catch (err: unknown) {
      console.error('❌ Google login failed:', err);
      setErrorMsg(err instanceof Error ? err.message : "Google sign-in failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-xl font-bold">Bridge Admin {isSignUp ? 'Sign Up' : 'Login'}</h2>

        {errorMsg && (
          <div className="bg-red-50 text-red-500 p-3 rounded text-sm">
            {errorMsg}
          </div>
        )}

        <input
          type="email"
          className="border w-full p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border w-full p-2 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          className="w-full bg-blue-300 text-white py-2 rounded hover:bg-blue-400" 
          onClick={handleAuth}
        >
          {isSignUp ? 'Sign Up' : 'Sign in'} with Email
        </button>

        <div className="text-center text-sm">
          <button 
            className="text-blue-500 hover:underline" 
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </button>
        </div>

        <hr className="my-2" />

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white border border-gray-300 py-2 rounded flex items-center justify-center hover:bg-gray-50"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
