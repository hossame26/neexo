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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 ${
        plan.highlighted
          ? "bg-white border-2 border-orange-500 shadow-xl scale-105"
          : "bg-white border border-gray-200"
      }`}
    >
      {/* Popular badge */}
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-sm font-medium">
            Le plus populaire
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-lg font-medium text-gray-500 mb-2">
        {plan.name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-5xl font-bold text-gray-900">{plan.price}€</span>
        <span className="text-gray-500">/mois</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        {plan.description}
      </p>

      {/* CTA */}
      <Link
        href="/inscription"
        className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
          plan.highlighted
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        {plan.cta}
      </Link>

      {/* Features */}
      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-center gap-3">
            {feature.included ? (
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                <X className="w-3 h-3 text-gray-400" />
              </div>
            )}
            <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
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
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="tarifs" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-4">
            Tarifs
          </span>
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Simple et transparent
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pas de frais caches. Choisissez le plan qui correspond a vos besoins.
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-500 mt-12"
        >
          Tous les prix sont HT. Annulation possible a tout moment.
        </motion.p>
      </div>
    </section>
  );
}
