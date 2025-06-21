export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Your Brand</h1>
        <nav className="space-x-4">
          <a href="#products" className="text-gray-700 hover:text-black">
            商品
          </a>
          <a href="#contact" className="text-gray-700 hover:text-black">
            聯絡
          </a>
        </nav>
      </div>
    </header>
  );
}
