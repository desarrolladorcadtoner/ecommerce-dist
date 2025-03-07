"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { fetchProductsByQuery } from "@/services/productService"
import type { Product } from "@/types"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard" 

const SearchPage = () => {
  const router = useRouter()
  const { query } = router.query
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (query) {
      fetchProductsByQuery(query as string)
        .then((data) => {
          setProducts(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error("Error fetching products:", error)
          setError(`Error fetching products: ${error.message}`)
          setLoading(false)
        })
    }
  }, [query])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-8">Resultados de búsqueda para "{query}"</h1>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No se encontraron productos.</p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default SearchPage