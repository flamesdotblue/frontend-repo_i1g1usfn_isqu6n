import { Sun, Droplets, Wallet, Leaf } from "lucide-react";

export default function EssentialsGrid({ onSelectSection }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Company Essentials</h2>
        <p className="text-gray-600 mt-2">Explore our core services designed to elevate living and investment outcomes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => onSelectSection("sustainable")}
          className="group rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-left hover:shadow-md hover:bg-white transition"
        >
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 rounded-xl bg-emerald-600 text-white grid place-items-center">
              <Sun />
            </span>
            <div>
              <h3 className="text-xl font-semibold">Sustainable Solutions</h3>
              <p className="text-sm text-gray-600">Solar energy and water treatment built for longevity.</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-medium">
              <Sun size={14} /> Solar
            </span>
            <span className="inline-flex items-center gap-2 rounded-md bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-medium">
              <Droplets size={14} /> Water Treatment
            </span>
          </div>
        </button>

        <button
          onClick={() => onSelectSection("finance")}
          className="group rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-left hover:shadow-md hover:bg-white transition"
        >
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 rounded-xl bg-indigo-600 text-white grid place-items-center">
              <Wallet />
            </span>
            <div>
              <h3 className="text-xl font-semibold">Home Finance</h3>
              <p className="text-sm text-gray-600">Advisory and access to flexible, competitive options.</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onSelectSection("health")}
          className="group rounded-2xl border border-rose-200 bg-rose-50 p-6 text-left hover:shadow-md hover:bg-white transition"
        >
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 rounded-xl bg-rose-600 text-white grid place-items-center">
              <Leaf />
            </span>
            <div>
              <h3 className="text-xl font-semibold">Health Food Subscription</h3>
              <p className="text-sm text-gray-600">Weekly and monthly plans curated for wellness.</p>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
