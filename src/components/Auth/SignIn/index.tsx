"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo"
import Loader from "@/components/Common/Loader";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);

  const loginUser = (e: any) => {
    e.preventDefault();

    setLoading(true);
    signIn("credentials", { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
          console.log(callback?.error);
          setLoading(false);
          return;
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
          setLoading(false);
          router.push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignIn />

      <span className="relative z-[1] my-8 block text-center before:absolute before:left-0 before:top-1/2 before:h-px before:w-[42%] before:-translate-y-1/2 before:bg-border after:absolute after:right-0 after:top-1/2 after:h-px after:w-[42%] after:-translate-y-1/2 after:bg-border">
        <span className="relative z-10 inline-block bg-white px-3 text-16 font-medium text-muted">
          or continue with email
        </span>
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <label htmlFor="signin-email" className="sr-only">
            Email
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full rounded-xl border border-border bg-grey/40 px-5 py-3.5 text-16 text-midnight_text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="mb-[22px]">
          <label htmlFor="signin-password" className="sr-only">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full rounded-xl border border-border bg-grey/40 px-5 py-3.5 text-16 text-midnight_text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="w-full rounded-xl border border-primary bg-primary py-3.5 text-18 font-medium text-white transition-colors hover:bg-primaryDark"
          >
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href="/forgot-password"
        className="mb-3 inline-block text-16 text-midnight_text hover:text-primary"
      >
        Forgot password?
      </Link>
      <p className="text-16 text-muted">
        Not a member yet?{" "}
        <Link href="/" className="font-medium text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default Signin;