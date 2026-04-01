"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useState, type FormEvent } from "react";
import Loader from "@/components/Common/Loader";
const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const form = new FormData(e.currentTarget);
    const value = Object.fromEntries(form.entries());
    const finalData = { ...value };

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully registered");
        setLoading(false);
        router.push("/signin");
      })
      .catch((err: unknown) => {
        toast.error(err instanceof Error ? err.message : "Registration failed");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignUp />

      <span className="relative z-[1] my-8 block text-center before:absolute before:left-0 before:top-1/2 before:h-px before:w-[42%] before:-translate-y-1/2 before:bg-border after:absolute after:right-0 after:top-1/2 after:h-px after:w-[42%] after:-translate-y-1/2 after:bg-border">
        <span className="relative z-10 inline-block bg-white px-3 text-16 font-medium text-muted">
          or continue with email
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full rounded-xl border border-border bg-grey/40 px-5 py-3.5 text-16 text-midnight_text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full rounded-xl border border-border bg-grey/40 px-5 py-3.5 text-16 text-midnight_text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="w-full rounded-xl border border-border bg-grey/40 px-5 py-3.5 text-16 text-midnight_text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="mb-9">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-xl border border-primary bg-primary px-5 py-3.5 text-18 font-medium text-white transition-colors hover:bg-primaryDark"
          >
            Sign Up {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className="mb-4 text-16 leading-relaxed text-muted">
        By creating an account you agree with our{" "}
        <Link href="/#" className="font-medium text-primary hover:underline">
          Privacy
        </Link>{" "}
        and{" "}
        <Link href="/#" className="font-medium text-primary hover:underline">
          Policy
        </Link>
        .
      </p>

      <p className="text-16 text-muted">
        Already have an account?{" "}
        <Link href="/" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
};

export default SignUp;
