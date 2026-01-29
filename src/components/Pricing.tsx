"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Gratuit",
    price: "0",
    description: "Pour demarrer et tester",
    features: [
      { text: "5 clients maximum", included: true },
      { text: "3 devis par mois", included: true },
      { text: "3 factures par mois", included: true },
      { text: "Dashboard basique", included: true },
      { text: "Catalogue services", included: false },
      { text: "Statistiques avancees", included: false },
      { text: "Export comptable", included: false },
      { text: "Support prioritaire", included: false },
    ],
    cta: "Commencer gratuitement",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "19",
    description: "Pour les artisans actifs",
    features: [
      { text: "Clients illimites", included: true },
      { text: "Devis illimites", included: true },
      { text: "Factures illimitees", included: true },
      { text: "Dashboard complet", included: true },
      { text: "Catalogue services", included: true },
      { text: "Statistiques avancees", included: true },
      { text: "Export comptable", included: true },
      { text: "Support prioritaire", included: false },
    ],
    cta: "Essayer 14 jours gratuit",
    highlighted: true,
  },
  {
    name: "Business",
    price: "49",
    description: "Pour les entreprises",
    features: [
      { text: "Tout du plan Pro", included: true },
      { text: "Multi-utilisateurs (5)", included: true },
      { text: "API & integrations", included: true },
      { text: "Marque blanche", included: true },
      { text: "Rapports personnalises", included: true },
      { text: "Support prioritaire 24/7", included: true },
      { text: "Formation dediee", included: true },
      { text: "Account manager", included: true },
    ],
    cta: "Contacter les ventes",
    highlighted: false,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative rounded-3xl p-8 ${
        plan.highlighted
          ? "bg-[var(--foreground)] text-[var(--background)] glow scale-105"
          : "bg-[var(--card)] border border-[var(--border)]"
      }`}
    >
      {/* Popular badge */}
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full bg-[var(--accent)] text-white text-sm font-medium">
            Le plus populaire
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className={`text-lg font-medium mb-2 ${plan.highlighted ? "text-[var(--background)]/70" : "text-[var(--muted)]"}`}>
        {plan.name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-5xl font-semibold">{plan.price}€</span>
        <span className={plan.highlighted ? "text-[var(--background)]/70" : "text-[var(--muted)]"}>/mois</span>
      </div>

      {/* Description */}
      <p className={`mb-8 ${plan.highlighted ? "text-[var(--background)]/70" : "text-[var(--muted)]"}`}>
        {plan.description}
      </p>

      {/* CTA */}
      <Link
        href="/inscription"
        className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-all duration-300 mb-8 ${
          plan.highlighted
            ? "bg-[var(--background)] text-[var(--foreground)] hover:opacity-90"
            : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
        }`}
      >
        {plan.cta}
      </Link>

      {/* Features */}
      <ul className="space-y-4">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-center gap-3">
            {feature.included ? (
              <Check className={`w-5 h-5 ${plan.highlighted ? "text-green-400" : "text-green-500"}`} />
            ) : (
              <X className={`w-5 h-5 ${plan.highlighted ? "text-[var(--background)]/30" : "text-[var(--muted)]"}`} />
            )}
            <span className={feature.included ? "" : plan.highlighted ? "text-[var(--background)]/50" : "text-[var(--muted)]"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Pricing() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="tarifs" className="section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-wider mb-4 block">
            Tarifs
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Simple et transparent
          </h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Pas de frais caches, pas de surprises. Choisissez le plan qui correspond a vos besoins.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-[var(--muted)] mt-12"
        >
          Tous les prix sont HT. Annulation possible a tout moment.
        </motion.p>
      </div>
    </section>
  );
}
