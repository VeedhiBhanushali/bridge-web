import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Logo from "@/components/Layout/Header/Logo";
import { CryptoData } from "@/app/api/data"; // Adjust import as necessary

interface Crypto {
  name: string;
  price: number;
}

const SellCrypto = () => {
  const [loading, setLoading] = useState(false);
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [formData, setFormData] = useState<{
    name: string;
    price: number;
    amount: string;
  }>({
    name: "",
    price: 0,
    amount: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setCryptos(CryptoData);
    if (CryptoData.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        name: CryptoData[0].name,
        price: CryptoData[0].price,
      }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === "amount") {
      setFormData((prevData) => ({ ...prevData, amount: value }));
    }
  };

  const handleDropdownSelect = (crypto: Crypto) => {
    setFormData((prevData) => ({
      ...prevData,
      name: crypto.name,
      price: crypto.price,
    }));
    setIsDropdownOpen(false);
  };

  const totalCost = formData.amount
    ? (formData.price * parseFloat(formData.amount)).toFixed(2)
    : "0.00";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Crypto purchase successful!");
      setFormData((prevData) => ({ ...prevData, amount: "" }));
    } catch (error) {
      toast.error("An error occurred during the purchase.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-center mb-12">
        <Logo />
      </div>
      <h2 className="font-display font-semibold text-24 text-midnight_text text-center mb-2">Quick Survey</h2>
      <p className="text-muted text-14 text-center mb-8">Help us shape Bridge by sharing your feedback.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <div
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="cursor-pointer text-midnight_text bg-white border border-border rounded-xl px-4 py-3 text-start hover:border-primary/50 transition-colors"
          >
            {formData.name}
          </div>
          {isDropdownOpen && (
            <div className="absolute z-10 bg-white border border-border mt-2 rounded-xl w-full shadow-lg overflow-hidden">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.name}
                  onClick={() => handleDropdownSelect(crypto)}
                  className="px-4 py-3 text-midnight_text hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                >
                  {crypto.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-4">
          <input
            id="crypto-price"
            type="text"
            name="price"
            className="text-midnight_text bg-grey/50 border border-border rounded-xl px-4 py-3 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 focus-visible:outline-0 transition-all"
            value={`$${formData.price.toLocaleString()}`}
            disabled
            required
          />
        </div>
        <div className="mb-4">
          <input
            id="amount"
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            min="0"
            required
            className="text-midnight_text placeholder:text-muted bg-grey/50 border border-border rounded-xl px-4 py-3 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 focus-visible:outline-0 transition-all"
          />
        </div>
        <div className="flex justify-between mb-6 text-midnight_text font-medium">
          <p>Total Price:</p>
          <p>${totalCost}</p>
        </div>
        <button className="font-medium text-18 bg-white w-full border-2 border-primary rounded-xl py-3.5 text-primary hover:bg-primary hover:text-white transition-all duration-300">
          Submit Survey
        </button>
      </form>
    </div>
  );
};

export default SellCrypto;
