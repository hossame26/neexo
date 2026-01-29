"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Receipt,
  Package,
  BarChart3,
  Bell,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard intuitif",
    description: "Vue d'ensemble de votre activite en un coup d'oeil. Chiffre d'affaires, devis en attente, factures impayees.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Gestion clients",
    description: "Centralisez toutes les informations de vos clients. Historique, coordonnees, notes et documents.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Devis en 2 minutes",
    description: "Creez des devis professionnels rapidement. Modeles personnalisables, envoi par email en 1 clic.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Receipt,
    title: "Factures automatiques",
    description: "Transformez vos devis en factures. Suivi des paiements, relances automatiques, export comptable.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Package,
    title: "Catalogue services",
    description: "Gerez vos prestations et tarifs. Ajoutez-les en un clic dans vos devis et factures.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: BarChart3,
    title: "Statistiques",
    description: "Analysez vos performances. Revenus mensuels, taux de conversion, clients les plus rentables.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Restez informe en temps reel. Nouveau paiement, devis accepte, echeance a venir.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "Application mobile",
    description: "Gerez tout depuis votre telephone. Disponible sur iOS et Android. (Bientot)",
    color: "from-rose-500 to-pink-500",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative bg-[var(--card)] rounded-2xl p-8 border border-[var(--border)] card-hover"
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <feature.icon className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-[var(--muted)] leading-relaxed">{feature.description}</p>

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="fonctionnalites" className="section bg-[var(--background)]">
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
            Fonctionnalites
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Des outils puissants, simples a utiliser. Concus pour les artisans qui veulent se concentrer sur leur metier.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
