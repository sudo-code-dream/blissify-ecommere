"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreateProductForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: 0,
    stock: 0,
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/seller/products/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success("Product created successfully!");
      router.push("/dashboard/products");
    } else {
      const data = await res.json();
      toast.error(data.error || "Failed to create product");
    }
  };

  return (
    <div className='space-y-4 max-w-lg'>
      <Input name='name' placeholder='Product Name' onChange={handleChange} />
      <Input
        name='description'
        placeholder='Description'
        onChange={handleChange}
      />
      <Input name='image' placeholder='Image URL' onChange={handleChange} />
      <Input
        name='price'
        type='number'
        placeholder='Price'
        onChange={handleChange}
      />
      <Input
        name='stock'
        type='number'
        placeholder='Stock'
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Create Product</Button>
    </div>
  );
}
