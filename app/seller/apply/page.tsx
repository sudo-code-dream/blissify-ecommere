"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShopApplicationForm() {
  const [form, setForm] = useState({
    shopName: "",
    image: "",
    phone: "",
    description: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/shop/apply", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);

    if (res.ok) {
      alert("Application submitted!");
      router.push("/profile");
    } else {
      alert("Failed to submit. Try again.");
    }
  };

  return (
    <div className='max-w-2xl mx-auto px-4 py-10'>
      <h1 className='text-2xl font-bold mb-4'>Apply for a Shop</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          className='w-full border p-2 rounded'
          name='shopName'
          placeholder='Shop Name'
          required
          value={form.shopName}
          onChange={handleChange}
        />
        <input
          className='w-full border p-2 rounded'
          name='image'
          placeholder='Image URL'
          value={form.image}
          onChange={handleChange}
        />
        <input
          className='w-full border p-2 rounded'
          name='phone'
          placeholder='Phone Number'
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          className='w-full border p-2 rounded'
          name='description'
          placeholder='Description'
          rows={3}
          value={form.description}
          onChange={handleChange}
        />
        <input
          className='w-full border p-2 rounded'
          name='address'
          placeholder='Address'
          value={form.address}
          onChange={handleChange}
        />
        <input
          className='w-full border p-2 rounded'
          name='city'
          placeholder='City'
          value={form.city}
          onChange={handleChange}
        />
        <input
          className='w-full border p-2 rounded'
          name='province'
          placeholder='Province'
          value={form.province}
          onChange={handleChange}
        />
        <input
          className='w-full border p-2 rounded'
          name='postalCode'
          placeholder='Postal Code'
          value={form.postalCode}
          onChange={handleChange}
        />
        <input
          className='w-full border p-2 rounded'
          name='country'
          placeholder='Country'
          value={form.country}
          onChange={handleChange}
        />

        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
          disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
