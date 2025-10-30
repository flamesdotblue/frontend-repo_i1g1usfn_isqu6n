import { ArrowLeft, Sun, Droplets, Shield, Battery, Leaf } from "lucide-react";

export default function SustainableSolutions({ onBack }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sustainable Solutions</h2>
          <p className="text-gray-600 mt-2">Reduce operating costs and environmental impact with modern utilities.</p>
        </div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <ArrowLeft size={16} /> Back to Essentials
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Solar Solution */}
        <div className="rounded-2xl border border-emerald-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 rounded-xl bg-emerald-600 text-white grid place-items-center">
              <Sun />
            </span>
            <div>
              <h3 className="text-xl font-semibold">Solar Solution</h3>
              <p className="text-sm text-gray-600">On-grid and hybrid systems tailored to your property.</p>
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2"><Shield className="mt-0.5 text-emerald-600" size={16}/> Tier-1 panels with 25-year performance warranty</li>
            <li className="flex items-start gap-2"><Battery className="mt-0.5 text-emerald-600" size={16}/> Battery-ready inverters and energy monitoring</li>
            <li className="flex items-start gap-2"><Leaf className="mt-0.5 text-emerald-600" size={16}/> Utility bill optimization and net-metering support</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">Site audit</span>
            <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">Design & sizing</span>
            <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">Installation</span>
            <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">O&M</span>
          </div>
        </div>

        {/* Water Treatment */}
        <div className="rounded-2xl border border-sky-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 rounded-xl bg-sky-600 text-white grid place-items-center">
              <Droplets />
            </span>
            <div>
              <h3 className="text-xl font-semibold">Water Treatment</h3>
              <p className="text-sm text-gray-600">Potable water systems for villas, communities, and estates.</p>
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2"><Shield className="mt-0.5 text-sky-600" size={16}/> Filtration + UV/RO for safe, great-tasting water</li>
            <li className="flex items-start gap-2"><Battery className="mt-0.5 text-sky-600" size={16}/> Greywater recycling options to cut usage</li>
            <li className="flex items-start gap-2"><Leaf className="mt-0.5 text-sky-600" size={16}/> Preventive maintenance and remote alerts</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-xs font-medium">Water test</span>
            <span className="rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-xs font-medium">System design</span>
            <span className="rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-xs font-medium">Installation</span>
            <span className="rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-xs font-medium">AMC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
