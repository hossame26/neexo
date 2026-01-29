"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Est-ce que Neexo est vraiment gratuit ?",
    answer: "Oui, le plan gratuit est 100% gratuit, sans engagement et sans carte bancaire requise. Vous pouvez gerer jusqu'a 5 clients et creer 3 devis/factures par mois.",
  },
  {
    question: "Puis-je importer mes clients existants ?",
    answer: "Absolument ! Vous pouvez importer vos clients depuis un fichier Excel ou CSV en quelques clics. Notre assistant d'importation vous guide pas a pas.",
  },
  {
    question: "Mes donnees sont-elles securisees ?",
    answer: "La securite est notre priorite. Toutes vos donnees sont chiffrees (SSL/TLS), stockees sur des serveurs en France, et sauvegardees quotidiennement. Nous sommes conformes au RGPD.",
  },
  {
    question: "Puis-je personnaliser mes devis et factures ?",
    answer: "Oui, vous pouvez ajouter votre logo, personnaliser les couleurs, les mentions legales, les conditions de paiement. Vos documents auront un aspect 100% professionnel.",
  },
  {
    question: "Comment fonctionne l'essai gratuit de 14 jours ?",
    answer: "En vous inscrivant au plan Pro, vous beneficiez automatiquement de 14 jours d'essai gratuit avec toutes les fonctionnalites. Aucune carte bancaire n'est requise.",
  },
  {
    question: "Puis-je annuler a tout moment ?",
    answer: "Oui, vous pouvez annuler votre abonnement a tout moment depuis votre espace client. Pas de frais d'annulation, pas de questions.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-orange-500 transition-colors"
      >
        <span className="text-lg font-medium text-gray-900 pr-8">{faq.question}</span>
        <span className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-orange-500" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Questions frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir pour bien demarrer
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl border border-gray-200 px-8">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-gray-600">
            Vous ne trouvez pas la reponse ?{" "}
            <a href="mailto:contact@neexo.fr" className="text-orange-500 hover:underline font-medium">
              Contactez-nous
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
