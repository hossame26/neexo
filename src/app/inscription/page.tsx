"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react";

const benefits = [
  "Essai gratuit de 14 jours",
  "Aucune carte bancaire requise",
  "Configuration en 2 minutes",
  "Support inclus",
];

export default function Inscription() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Visual */}
      <div className="hidden lg:flex flex-1 bg-[var(--foreground)] text-[var(--background)] items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--accent)] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-lg"
        >
          <h2 className="text-4xl font-semibold mb-6 leading-tight">
            Rejoignez les artisans qui gagnent du temps chaque jour
          </h2>
          <p className="text-lg opacity-70 mb-12">
            Plus de 500 professionnels utilisent deja Neexo pour gerer leur activite efficacement.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
          >
            <p className="italic mb-4">
              "Neexo m'a fait gagner un temps fou. Je cree mes devis en 2 minutes et mes factures sont envoyees automatiquement."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-purple-500" />
              <div>
                <p className="font-medium">Marc Dupont</p>
                <p className="text-sm opacity-70">Plombier a Marseille</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="font-semibold text-2xl tracking-tight">Neexo</span>
          </Link>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            <div className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-[var(--accent)]" : "bg-[var(--border)]"}`} />
            <div className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-[var(--accent)]" : "bg-[var(--border)]"}`} />
          </div>

          {/* Header */}
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            {step === 1 ? "Creez votre compte" : "Parlez-nous de vous"}
          </h1>
          <p className="text-[var(--muted)] mb-8">
            {step === 1
              ? "Commencez gratuitement, sans engagement"
              : "Ces informations nous aident a personnaliser votre experience"}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium mb-2">
                      Prenom
                    </label>
                    <input
                      id="prenom"
                      type="text"
                      required
                      placeholder="Jean"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <input
                      id="nom"
                      type="text"
                      required
                      placeholder="Dupont"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email professionnel
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jean@monentreprise.fr"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={8}
                      placeholder="8 caracteres minimum"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="entreprise" className="block text-sm font-medium mb-2">
                    Nom de l'entreprise
                  </label>
                  <input
                    id="entreprise"
                    type="text"
                    required
                    placeholder="Mon Entreprise SARL"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="metier" className="block text-sm font-medium mb-2">
                    Votre metier
                  </label>
                  <select
                    id="metier"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                  >
                    <option value="">Selectionnez votre metier</option>
                    <option value="plombier">Plombier</option>
                    <option value="electricien">Electricien</option>
                    <option value="chauffagiste">Chauffagiste</option>
                    <option value="serrurier">Serrurier</option>
                    <option value="peintre">Peintre</option>
                    <option value="menuisier">Menuisier</option>
                    <option value="macon">Macon</option>
                    <option value="carreleur">Carreleur</option>
                    <option value="couvreur">Couvreur</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium mb-2">
                    Telephone
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    required
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="cgu"
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
                  />
                  <label htmlFor="cgu" className="text-sm text-[var(--muted)]">
                    J'accepte les{" "}
                    <Link href="/cgu" className="text-[var(--accent)] hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="/confidentialite" className="text-[var(--accent)] hover:underline">
                      politique de confidentialite
                    </Link>
                  </label>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {step === 1 ? "Continuer" : "Creer mon compte"}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {step === 1 && (
            <>
              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-[var(--border)]" />
                <span className="text-sm text-[var(--muted)]">ou</span>
                <div className="flex-1 h-px bg-[var(--border)]" />
              </div>

              {/* Social login */}
              <button className="w-full py-3 px-4 rounded-xl border border-[var(--border)] hover:bg-[var(--card)] transition-colors flex items-center justify-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                S'inscrire avec Google
              </button>
            </>
          )}

          {/* Sign in link */}
          <p className="text-center mt-8 text-[var(--muted)]">
            Deja un compte ?{" "}
            <Link href="/connexion" className="text-[var(--accent)] hover:underline font-medium">
              Se connecter
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
