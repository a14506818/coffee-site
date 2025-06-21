interface Product {
  name: string;
  origin: string;
  roast: string;
  flavor: string;
  image: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.origin}</p>
        <p className="text-sm text-gray-600">烘焙度：{product.roast}</p>
        <p className="text-sm text-gray-600">風味：{product.flavor}</p>
      </div>
    </div>
  );
}
