"use client";
import React, { useEffect, useState } from "react";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";

export function getViewContent(view: string): React.ReactNode {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/seller/products")
      .then((res) => res.json())
      .then((res) => {
        const formatted = res.products.map((product: any) => ({
          id: product.id.toString(),
          header: product.name,
          type: "N/A",
          status: "Available",
          target: String(product.price),
          limit: String(product.stock),
          reviewer: "Assign reviewer",
        }));

        setProducts(formatted);
      });
  }, []);

  console.log(products);

  switch (view) {
    case "Dashboard":
      return (
        <>
          <SectionCards />
          <div className='px-4 lg:px-6'>
            <ChartAreaInteractive />
          </div>
          {products.length > 0 ? (
            <DataTable data={products} />
          ) : (
            <div className='text-muted-foreground text-center py-8'>
              Loading...
            </div>
          )}
        </>
      );

    case "Analytics":
      return (
        <div className='px-4 lg:px-6'>
          <h2 className='text-2xl font-semibold'>Analytics View</h2>
        </div>
      );

    case "Projects":
      return (
        <div className='px-4 lg:px-6'>
          <h2 className='text-2xl font-semibold'>Projects Overview</h2>
        </div>
      );

    default:
      return (
        <div className='px-4 lg:px-6'>
          <p>Not implemented</p>
        </div>
      );
  }
}
