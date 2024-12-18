import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-blue-500 font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
