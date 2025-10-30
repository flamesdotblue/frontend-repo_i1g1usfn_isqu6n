import { ArrowLeft, Wallet, Leaf, Check } from "lucide-react";
import { useState } from "react";

export default function DetailView({ type, onBack }) {
  if (type === "finance") {
    return <HomeFinance onBack={onBack} />;
  }
  return <HealthFood onBack={onBack} />;
}

function HomeFinance({ onBack }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Home Finance</h2>
          <p className="text-gray-600 mt-2">Navigate mortgages and refinancing with clarity and confidence.</p>
        </div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <ArrowLeft size={16} /> Back to Essentials
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "First-time Buyer",
            desc: "End-to-end support from pre-approval to closing.",
            badge: "Best for new homeowners",
          },
          {
            title: "Refinance",
            desc: "Lower rates, cash-out options, and term optimization.",
            badge: "Reduce monthly payments",
          },
          {
            title: "Investors",
            desc: "Portfolio analysis and lending structures for ROI.",
            badge: "Scale strategically",
          },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-indigo-200 bg-white p-6">
            <span className="inline-flex items-center gap-2 rounded-md bg-indigo-100 text-indigo-800 px-3 py-1 text-xs font-medium">
              <Wallet size={14} /> {card.badge}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><Check className="mt-0.5 text-indigo-600" size={16}/> Rate shopping across lenders</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 text-indigo-600" size={16}/> Documentation checklist</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 text-indigo-600" size={16}/> Closing coordination</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function HealthFood({ onBack }) {
  const [plan, setPlan] = useState("weekly");

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Health Food Subscription</h2>
          <p className="text-gray-600 mt-2">Chef-crafted, nutrient-dense menus delivered to your door.</p>
        </div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <ArrowLeft size={16} /> Back to Essentials
        </button>
      </div>

      <div className="inline-flex rounded-lg border border-rose-200 bg-white p-1">
        <button
          onClick={() => setPlan("weekly")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            plan === "weekly" ? "bg-rose-600 text-white" : "text-rose-700 hover:bg-rose-50"
          }`}
        >
          Weekly Plan
        </button>
        <button
          onClick={() => setPlan("monthly")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            plan === "monthly" ? "bg-rose-600 text-white" : "text-rose-700 hover:bg-rose-50"
          }`}
        >
          Monthly Plan
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {plan === "weekly" ? (
          <>
            <PlanCard
              icon={<Leaf className="text-rose-600" />}
              title="Balanced Week"
              price="$89/week"
              items={["3 meals/day", "Macro-balanced", "Free delivery"]}
            />
            <PlanCard
              icon={<Leaf className="text-rose-600" />}
              title="Active Week"
              price="$109/week"
              items={["High-protein", "Snacks included", "Hydration pack"]}
            />
          </>
        ) : (
          <>
            <PlanCard
              icon={<Leaf className="text-rose-600" />}
              title="Wellness Month"
              price="$320/month"
              items={["Dietician kickoff", "Varied seasonal menu", "Priority support"]}
            />
            <PlanCard
              icon={<Leaf className="text-rose-600" />}
              title="Performance Month"
              price="$380/month"
              items={["Higher calories", "Protein focus", "Weekly check-ins"]}
            />
          </>
        )}
      </div>
    </section>
  );
}

function PlanCard({ icon, title, price, items }) {
  return (
    <div className="rounded-2xl border border-rose-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="h-11 w-11 rounded-xl bg-rose-100 grid place-items-center">
          {icon}
        </span>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{price}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <Check className="mt-0.5 text-rose-600" size={16} /> {it}
          </li>
        ))}
      </ul>
      <button className="mt-5 w-full rounded-md bg-rose-600 text-white px-4 py-2 text-sm font-medium hover:bg-rose-700">
        Subscribe
      </button>
    </div>
  );
}
