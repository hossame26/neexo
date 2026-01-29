"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,113,227,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Nouveau : Essai gratuit 14 jours
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6"
        >
          Gerez votre activite
          <br />
          <span className="gradient-text">comme un pro.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Clients, devis, factures — tout au meme endroit.
          <br className="hidden md:block" />
          Simple. Rapide. Efficace.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/inscription"
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
          >
            Commencer gratuitement
            <ArrowRight size={20} />
          </Link>
          <button className="btn-secondary flex items-center gap-2 text-lg">
            <Play size={18} className="fill-current" />
            Voir la demo
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex items-center -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#00c7be] border-2 border-[var(--background)] flex items-center justify-center text-white text-xs font-medium"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-[var(--muted)]">
            Rejoignez <span className="text-[var(--foreground)] font-medium">500+ artisans</span> qui nous font confiance
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 relative"
        >
          <div className="glow rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
            <div className="p-1">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1.5 rounded-lg bg-[var(--background)] text-xs text-[var(--muted)]">
                    app.neexo.fr
                  </div>
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="aspect-[16/10] bg-[var(--background)] p-6">
                <div className="grid grid-cols-12 gap-4 h-full">
                  {/* Sidebar */}
                  <div className="col-span-2 bg-[var(--card)] rounded-xl p-4">
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`h-8 rounded-lg ${
                            i === 1 ? "bg-[var(--accent)]/20" : "bg-[var(--border)]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="col-span-10 space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-[var(--card)] rounded-xl p-4">
                          <div className="h-3 w-16 bg-[var(--border)] rounded mb-2" />
                          <div className="h-6 w-24 bg-[var(--accent)]/20 rounded" />
                        </div>
                      ))}
                    </div>

                    {/* Table */}
                    <div className="bg-[var(--card)] rounded-xl p-4 flex-1">
                      <div className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-10 bg-[var(--border)] rounded-lg opacity-50" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -left-8 top-1/3 bg-[var(--background)] border border-[var(--border)] rounded-xl p-4 shadow-xl hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-500 text-lg">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium">Facture payee</p>
                <p className="text-xs text-[var(--muted)]">+580,00 €</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute -right-8 top-1/2 bg-[var(--background)] border border-[var(--border)] rounded-xl p-4 shadow-xl hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                <span className="text-[var(--accent)] text-lg">📄</span>
              </div>
              <div>
                <p className="text-sm font-medium">Nouveau devis</p>
                <p className="text-xs text-[var(--muted)]">Client: M. Martin</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
