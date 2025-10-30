import { useState } from "react";
import Header from "./components/Header.jsx";
import EssentialsGrid from "./components/EssentialsGrid.jsx";
import SustainableSolutions from "./components/SustainableSolutions.jsx";
import DetailView from "./components/DetailView.jsx";

function App() {
  const [view, setView] = useState("home"); // home | sustainable | finance | health

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 text-gray-900">
      <Header onHome={() => setView("home")} />

      {view === "home" && (
        <>
          <Hero onAction={() => setView("sustainable")} />
          <EssentialsGrid onSelectSection={(v) => setView(v)} />
        </>
      )}

      {view === "sustainable" && (
        <SustainableSolutions onBack={() => setView("home")} />
      )}

      {view === "finance" && (
        <DetailView type="finance" onBack={() => setView("home")} />
      )}

      {view === "health" && (
        <DetailView type="health" onBack={() => setView("home")} />
      )}

      <footer className="mt-12 border-t border-gray-200 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Real Estate Consulting Co.</p>
          <p className="hidden sm:block">Sustainable living • Smart finance • Healthy lifestyles</p>
        </div>
      </footer>
    </div>
  );
}

function Hero({ onAction }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-medium">
              Trusted Advisory
            </span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Essentials for Smarter, Healthier Homes</h2>
            <p className="mt-3 text-gray-600">
              We combine sustainability, finance expertise, and wellness to help you build value and live better.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={onAction}
                className="rounded-md bg-emerald-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-emerald-700"
              >
                Explore Sustainable Solutions
              </button>
              <a href="#essentials" className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                View all essentials
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="font-semibold">Energy Savings</p>
                  <p className="text-emerald-700 mt-1">Up to 60%</p>
                </div>
                <div className="rounded-xl bg-indigo-50 p-4">
                  <p className="font-semibold">Approval Speed</p>
                  <p className="text-indigo-700 mt-1">48-72 hrs</p>
                </div>
                <div className="rounded-xl bg-rose-50 p-4">
                  <p className="font-semibold">Wellness Meals</p>
                  <p className="text-rose-700 mt-1">Chef-designed</p>
                </div>
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="font-semibold">Client NPS</p>
                  <p className="text-amber-700 mt-1">+72</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="essentials" />
    </section>
  );
}

export default App;
