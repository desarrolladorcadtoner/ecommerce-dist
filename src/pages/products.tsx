"use client";

import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductsPage: React.FC = () => {
  const router = useRouter();

  const products: Product[] = [
    { id: 1, name: "Producto 1", price: 100, image: "/product1.jpg" },
    { id: 2, name: "Producto 2", price: 200, image: "/product2.jpg" },
    { id: 3, name: "Producto 3", price: 300, image: "/product3.jpg" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            subTitle={`$${product.price}`}
            header={
              <img
                alt={product.name}
                src={product.image}
                className="w-full h-40 object-cover"
              />
            }
            className="shadow-md"
          >
            <div className="flex justify-between mt-2">
              <Button
                label="Ver Detalle"
                icon="pi pi-search"
                onClick={() => router.push(`/product/${product.id}`)}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
