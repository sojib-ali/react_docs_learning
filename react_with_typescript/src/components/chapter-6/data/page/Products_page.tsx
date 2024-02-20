import { products } from "../products";

export function Products_page() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">
        Here are some great tools for react
      </h2>
      <ul className="list-none m-0 p-0">
        {products.map((product) => (
          <li key={product.id} className="p-1 text-base text-slate-800">
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
