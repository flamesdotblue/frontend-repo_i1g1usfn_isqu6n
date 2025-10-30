import { Home } from "lucide-react";

export default function Header({ onHome }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-emerald-600 text-white grid place-items-center font-bold">RE</div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Real Estate Consulting</h1>
            <p className="text-sm text-gray-500 -mt-1">Essentials</p>
          </div>
        </div>
        <button
          onClick={onHome}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          aria-label="Back to essentials"
        >
          <Home size={18} />
          Home
        </button>
      </div>
    </header>
  );
}
