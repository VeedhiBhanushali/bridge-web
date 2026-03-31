import { useState } from "react";
import toast from "react-hot-toast";
import Logo from "../../Layout/Header/Logo";

const WaitlistForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("You're on the list—we'll be in touch soon!");
      setFormData({ firstName: "", lastName: "", email: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "text-midnight_text placeholder:text-muted bg-grey/50 border border-border rounded-xl px-4 py-3 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 focus-visible:outline-0 transition-all";

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-center mb-12">
        <Logo />
      </div>
      <h2 className="font-display font-semibold text-24 text-midnight_text text-center mb-2">
        Join the Waitlist
      </h2>
      <p className="text-muted text-14 text-center mb-8">
        Be the first to know when we launch.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="waitlist-first-name" className="sr-only">
            First name
          </label>
          <input
            id="waitlist-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={inputBase}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="waitlist-last-name" className="sr-only">
            Last name
          </label>
          <input
            id="waitlist-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={inputBase}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="waitlist-email" className="sr-only">
            Email
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputBase}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-white font-medium text-18 bg-primary w-full border border-primary rounded-xl py-3.5 hover:bg-primaryDark transition-all duration-300 shadow-primary disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting…" : "Join Waitlist"}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
