"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-green-50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Essai gratuit 14 jours
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-gray-900"
            >
              La gestion simplifiee pour{" "}
              <span className="text-orange-500">artisans</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Gerez vos clients, creez des devis et factures en quelques clics.
              Simple, rapide et professionnel.
            </motion.p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {["Devis en 2 min", "Factures automatiques", "Suivi paiements"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/inscription"
                className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-4"
              >
                Commencer gratuitement
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#fonctionnalites"
                className="btn-secondary flex items-center justify-center gap-2 text-base px-8 py-4"
              >
                Voir les fonctionnalites
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["M", "P", "S", "L"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white text-sm font-medium"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">500+ artisans</p>
                  <p className="text-sm text-gray-500">nous font confiance</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main dashboard card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-white border border-gray-200 text-xs text-gray-500">
                      app.neexo.fr
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6 bg-gray-50">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Ce mois</p>
                      <p className="text-2xl font-bold text-gray-900">12 450€</p>
                      <p className="text-xs text-green-600 font-medium">+12%</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Clients</p>
                      <p className="text-2xl font-bold text-gray-900">48</p>
                      <p className="text-xs text-green-600 font-medium">+3</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Devis</p>
                      <p className="text-2xl font-bold text-gray-900">7</p>
                      <p className="text-xs text-orange-600 font-medium">en attente</p>
                    </div>
                  </div>

                  {/* Recent items */}
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-medium text-sm text-gray-900">Activite recente</p>
                    </div>
                    {[
                      { label: "Facture #089 payee", amount: "+580€", color: "text-green-600" },
                      { label: "Devis #156 envoye", amount: "1 250€", color: "text-orange-600" },
                      { label: "Nouveau client", amount: "M. Martin", color: "text-gray-600" },
                    ].map((item, i) => (
                      <div key={i} className="px-4 py-3 flex items-center justify-between border-b border-gray-50 last:border-0">
                        <span className="text-sm text-gray-700">{item.label}</span>
                        <span className={`text-sm font-medium ${item.color}`}>{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-8 top-1/3 bg-white rounded-xl p-4 shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Paiement recu</p>
                    <p className="text-xs text-gray-500">+580,00 €</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
