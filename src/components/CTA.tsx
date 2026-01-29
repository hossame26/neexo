"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 rounded-full" />

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Pret a simplifier
          <br />
          <span className="gradient-text">votre gestion ?</span>
        </h2>

        <p className="text-xl text-[var(--muted)] mb-10 max-w-xl mx-auto">
          Rejoignez les artisans qui gagnent du temps chaque jour avec Neexo. Gratuit pour commencer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/inscription"
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
          >
            Commencer gratuitement
            <ArrowRight size={20} />
          </Link>
          <Link
            href="mailto:contact@neexo.fr"
            className="btn-secondary text-lg"
          >
            Nous contacter
          </Link>
        </div>

        <p className="text-sm text-[var(--muted)] mt-8">
          Pas de carte bancaire requise • Configuration en 2 minutes
        </p>
      </motion.div>
    </section>
  );
}
