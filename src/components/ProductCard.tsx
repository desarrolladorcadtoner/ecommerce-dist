import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition bg-white">
      {/* Imagen */}
      {product.imagen && (
        <div className="w-full h-40 overflow-hidden mb-4">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Nombre y descripción */}
      <h3 className="text-lg font-bold mb-2">{product.nombre}</h3>
      <p className="text-gray-500 text-sm mb-2">{product.descripcion}</p>
      
      {/* Código del producto */}
      {product.stock && (
        <p className="text-xs text-gray-400 mb-2">Stock: {product.stock}</p>
      )}

      {/* Precio */}
      <p className="text-blue-500 font-bold mb-2">${product.precio}</p>

      {/* Botón Leer Más */}
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition">
        Leer Más
      </button>
    </div>
  );
};

export default ProductCard;
