import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Ecommerce</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/products" className="hover:underline">Products</Link>
          </li>
          <li>
            <Link href="/cart" className="hover:underline">Cart</Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

