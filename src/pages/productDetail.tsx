"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Image from "next/image"
import { fetchProductById } from "@/services/productService"
import type { Product } from "@/types"
import { ShoppingCart } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const ProductDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    if (id) {
      fetchProductById(id as string).then(setProduct)
    }
  }, [id])

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <>
    <Header/>
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={product.imagen}
            alt={product.nombre}
            width={400}
            height={400}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {product.nombre}
          </h1>
          <p className="mt-4 text-xl text-gray-500">Stock disponible: {product.stock}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">${product.precio.toFixed(2)}</p>
          <div className="mt-6">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out">
              <ShoppingCart className="mr-2" />
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default ProductDetail

