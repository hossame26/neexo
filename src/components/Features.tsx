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
    description: "Vue d'ensemble de votre activite. Chiffre d'affaires, devis en attente, factures impayees.",
    color: "bg-orange-500",
    lightColor: "bg-orange-100",
  },
  {
    icon: Users,
    title: "Gestion clients",
    description: "Centralisez toutes les informations de vos clients. Historique, coordonnees, documents.",
    color: "bg-green-500",
    lightColor: "bg-green-100",
  },
  {
    icon: FileText,
    title: "Devis en 2 minutes",
    description: "Creez des devis professionnels rapidement. Modeles personnalisables, envoi par email.",
    color: "bg-orange-500",
    lightColor: "bg-orange-100",
  },
  {
    icon: Receipt,
    title: "Factures automatiques",
    description: "Transformez vos devis en factures. Suivi des paiements et relances automatiques.",
    color: "bg-green-500",
    lightColor: "bg-green-100",
  },
  {
    icon: Package,
    title: "Catalogue services",
    description: "Gerez vos prestations et tarifs. Ajoutez-les en un clic dans vos devis.",
    color: "bg-orange-500",
    lightColor: "bg-orange-100",
  },
  {
    icon: BarChart3,
    title: "Statistiques",
    description: "Analysez vos performances. Revenus mensuels, taux de conversion, meilleurs clients.",
    color: "bg-green-500",
    lightColor: "bg-green-100",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Restez informe en temps reel. Nouveau paiement, devis accepte, echeance a venir.",
    color: "bg-orange-500",
    lightColor: "bg-orange-100",
  },
  {
    icon: Smartphone,
    title: "Application mobile",
    description: "Gerez tout depuis votre telephone. Disponible sur iOS et Android bientot.",
    color: "bg-green-500",
    lightColor: "bg-green-100",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${feature.lightColor} flex items-center justify-center mb-5`}>
        <feature.icon className={`w-6 h-6 ${feature.color === "bg-orange-500" ? "text-orange-500" : "text-green-500"}`} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="fonctionnalites" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Fonctionnalites
          </span>
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des outils simples et puissants pour gerer votre activite d'artisan au quotidien.
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
