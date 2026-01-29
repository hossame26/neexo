"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              Pret a simplifier votre gestion ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
              Rejoignez les artisans qui gagnent du temps chaque jour avec Neexo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/inscription"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Commencer gratuitement
                <ArrowRight size={18} />
              </Link>
              <Link
                href="mailto:contact@neexo.fr"
                className="text-white/90 hover:text-white font-medium"
              >
                Nous contacter
              </Link>
            </div>

            <p className="text-sm text-white/70 mt-6">
              Pas de carte bancaire requise
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
