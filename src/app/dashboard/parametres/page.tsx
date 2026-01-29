"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import {
  User,
  Building,
  CreditCard,
  Bell,
  Shield,
  Palette,
  FileText,
  HelpCircle,
  ChevronRight,
  Camera,
  Check,
} from "lucide-react";

const menuItems = [
  { id: "profil", label: "Profil", icon: User, description: "Informations personnelles" },
  { id: "entreprise", label: "Entreprise", icon: Building, description: "Informations de votre entreprise" },
  { id: "abonnement", label: "Abonnement", icon: CreditCard, description: "Gerer votre plan et paiement" },
  { id: "notifications", label: "Notifications", icon: Bell, description: "Preferences de notifications" },
  { id: "securite", label: "Securite", icon: Shield, description: "Mot de passe et connexion" },
  { id: "personnalisation", label: "Personnalisation", icon: Palette, description: "Documents et apparence" },
  { id: "mentions", label: "Mentions legales", icon: FileText, description: "CGV, mentions sur vos documents" },
  { id: "aide", label: "Aide", icon: HelpCircle, description: "Support et documentation" },
];

export default function ParametresPage() {
  const [activeSection, setActiveSection] = useState("profil");

  return (
    <>
      <Header title="Parametres" subtitle="Gerez votre compte et vos preferences" />

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar menu */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-1"
        >
          <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 p-4 text-left transition-colors ${
                  activeSection === item.id
                    ? "bg-[var(--accent)]/10 text-[var(--accent)] border-l-2 border-[var(--accent)]"
                    : "hover:bg-[var(--background)] border-l-2 border-transparent"
                }`}
              >
                <item.icon size={20} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{item.label}</p>
                  <p className="text-xs text-[var(--muted)] truncate">{item.description}</p>
                </div>
                <ChevronRight size={16} className="text-[var(--muted)]" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-3"
        >
          {activeSection === "profil" && <ProfilSection />}
          {activeSection === "entreprise" && <EntrepriseSection />}
          {activeSection === "abonnement" && <AbonnementSection />}
          {activeSection === "notifications" && <NotificationsSection />}
          {activeSection === "securite" && <SecuriteSection />}
          {activeSection === "personnalisation" && <PersonnalisationSection />}
          {activeSection === "mentions" && <MentionsSection />}
          {activeSection === "aide" && <AideSection />}
        </motion.div>
      </div>
    </>
  );
}

function ProfilSection() {
  return (
    <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
      <h2 className="text-lg font-semibold mb-6">Informations personnelles</h2>

      {/* Avatar */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--accent)] to-purple-500 flex items-center justify-center text-white text-3xl font-semibold">
            JD
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[var(--background)] border border-[var(--border)] flex items-center justify-center hover:bg-[var(--card)] transition-colors">
            <Camera size={14} />
          </button>
        </div>
        <div>
          <p className="font-medium">Photo de profil</p>
          <p className="text-sm text-[var(--muted)]">JPG, PNG ou GIF. 1MB max.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Prenom</label>
          <input
            type="text"
            defaultValue="Jean"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Nom</label>
          <input
            type="text"
            defaultValue="Dupont"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          defaultValue="jean.dupont@exemple.fr"
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Telephone</label>
        <input
          type="tel"
          defaultValue="06 12 34 56 78"
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>

      <button className="btn-primary">Enregistrer les modifications</button>
    </div>
  );
}

function EntrepriseSection() {
  return (
    <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
      <h2 className="text-lg font-semibold mb-6">Informations de l'entreprise</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nom de l'entreprise</label>
          <input
            type="text"
            defaultValue="Plomberie Dupont"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">SIRET</label>
            <input
              type="text"
              defaultValue="123 456 789 00012"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">N° TVA</label>
            <input
              type="text"
              defaultValue="FR12345678901"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Adresse</label>
          <input
            type="text"
            defaultValue="12 Rue de la Plomberie"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Code postal</label>
            <input
              type="text"
              defaultValue="13001"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Ville</label>
            <input
              type="text"
              defaultValue="Marseille"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
        </div>
      </div>

      <button className="btn-primary mt-6">Enregistrer</button>
    </div>
  );
}

function AbonnementSection() {
  return (
    <div className="space-y-6">
      {/* Current plan */}
      <div className="bg-gradient-to-br from-[var(--accent)] to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/70 text-sm">Plan actuel</p>
            <p className="text-2xl font-semibold">Pro</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">19€</p>
            <p className="text-white/70 text-sm">/mois</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Check size={16} />
          <span>Renouvellement le 15 fevrier 2024</span>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
        <h3 className="font-semibold mb-4">Utilisation ce mois</h3>
        <div className="space-y-4">
          {[
            { label: "Clients", used: 48, max: "Illimite" },
            { label: "Devis", used: 12, max: "Illimite" },
            { label: "Factures", used: 8, max: "Illimite" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-[var(--muted)]">{item.label}</span>
              <span className="font-medium">
                {item.used} / {item.max}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment method */}
      <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
        <h3 className="font-semibold mb-4">Moyen de paiement</h3>
        <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--background)]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-8 rounded bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
              VISA
            </div>
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-[var(--muted)]">Expire 12/26</p>
            </div>
          </div>
          <button className="text-sm text-[var(--accent)] hover:underline">
            Modifier
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="btn-primary">Changer de plan</button>
        <button className="px-6 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--card)] transition-colors text-red-500">
          Annuler l'abonnement
        </button>
      </div>
    </div>
  );
}

function NotificationsSection() {
  const [notifications, setNotifications] = useState({
    email_devis: true,
    email_facture: true,
    email_paiement: true,
    email_relance: false,
    push_devis: true,
    push_paiement: true,
  });

  return (
    <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
      <h2 className="text-lg font-semibold mb-6">Preferences de notifications</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-4">Notifications par email</h3>
          <div className="space-y-4">
            {[
              { key: "email_devis", label: "Devis accepte/refuse" },
              { key: "email_facture", label: "Facture envoyee" },
              { key: "email_paiement", label: "Paiement recu" },
              { key: "email_relance", label: "Relances automatiques" },
            ].map((item) => (
              <label key={item.key} className="flex items-center justify-between cursor-pointer">
                <span>{item.label}</span>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      [item.key]: !notifications[item.key as keyof typeof notifications],
                    })
                  }
                  className={`w-12 h-7 rounded-full transition-colors ${
                    notifications[item.key as keyof typeof notifications]
                      ? "bg-[var(--accent)]"
                      : "bg-[var(--border)]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      notifications[item.key as keyof typeof notifications]
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border)]">
          <h3 className="font-medium mb-4">Notifications push</h3>
          <div className="space-y-4">
            {[
              { key: "push_devis", label: "Nouveau devis" },
              { key: "push_paiement", label: "Paiement recu" },
            ].map((item) => (
              <label key={item.key} className="flex items-center justify-between cursor-pointer">
                <span>{item.label}</span>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      [item.key]: !notifications[item.key as keyof typeof notifications],
                    })
                  }
                  className={`w-12 h-7 rounded-full transition-colors ${
                    notifications[item.key as keyof typeof notifications]
                      ? "bg-[var(--accent)]"
                      : "bg-[var(--border)]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      notifications[item.key as keyof typeof notifications]
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button className="btn-primary mt-6">Enregistrer</button>
    </div>
  );
}

function SecuriteSection() {
  return (
    <div className="space-y-6">
      <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
        <h2 className="text-lg font-semibold mb-6">Changer le mot de passe</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Mot de passe actuel</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Nouveau mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Confirmer le nouveau mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
        </div>

        <button className="btn-primary mt-6">Mettre a jour</button>
      </div>

      <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
        <h3 className="font-semibold mb-4">Sessions actives</h3>
        <div className="space-y-3">
          {[
            { device: "MacBook Pro - Chrome", location: "Marseille, France", current: true },
            { device: "iPhone 14 - Safari", location: "Marseille, France", current: false },
          ].map((session, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-[var(--background)]">
              <div>
                <p className="font-medium flex items-center gap-2">
                  {session.device}
                  {session.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">
                      Session actuelle
                    </span>
                  )}
                </p>
                <p className="text-sm text-[var(--muted)]">{session.location}</p>
              </div>
              {!session.current && (
                <button className="text-sm text-red-500 hover:underline">
                  Deconnecter
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PersonnalisationSection() {
  return (
    <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
      <h2 className="text-lg font-semibold mb-6">Personnalisation des documents</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Logo de l'entreprise</label>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-xl bg-[var(--background)] border border-dashed border-[var(--border)] flex items-center justify-center">
              <span className="text-[var(--muted)] text-sm">Logo</span>
            </div>
            <button className="px-4 py-2 rounded-xl border border-[var(--border)] hover:bg-[var(--background)] transition-colors text-sm">
              Telecharger un logo
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Couleur principale</label>
          <div className="flex gap-3">
            {["#0071e3", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"].map((color) => (
              <button
                key={color}
                className="w-10 h-10 rounded-full border-2 border-transparent hover:border-[var(--foreground)] transition-colors"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Police des documents</label>
          <select className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
            <option>Inter (par defaut)</option>
            <option>Roboto</option>
            <option>Open Sans</option>
            <option>Lato</option>
          </select>
        </div>
      </div>

      <button className="btn-primary mt-6">Enregistrer</button>
    </div>
  );
}

function MentionsSection() {
  return (
    <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
      <h2 className="text-lg font-semibold mb-6">Mentions legales sur vos documents</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Conditions de paiement</label>
          <textarea
            rows={3}
            defaultValue="Paiement a reception de facture. Penalites de retard : 3 fois le taux d'interet legal."
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Validite des devis</label>
          <select className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
            <option>30 jours</option>
            <option>60 jours</option>
            <option>90 jours</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Mentions particulieres (devis)</label>
          <textarea
            rows={3}
            defaultValue="Devis gratuit et sans engagement. TVA non applicable, art. 293B du CGI."
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Mentions particulieres (factures)</label>
          <textarea
            rows={3}
            defaultValue="En cas de retard de paiement, indemnite forfaitaire de 40€ pour frais de recouvrement."
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
          />
        </div>
      </div>

      <button className="btn-primary mt-6">Enregistrer</button>
    </div>
  );
}

function AideSection() {
  return (
    <div className="space-y-6">
      <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
        <h2 className="text-lg font-semibold mb-4">Centre d'aide</h2>
        <p className="text-[var(--muted)] mb-6">
          Trouvez des reponses a vos questions dans notre documentation.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Premiers pas", description: "Guide de demarrage rapide" },
            { title: "Creer un devis", description: "Tutoriel pas a pas" },
            { title: "Gerer les factures", description: "Suivi et relances" },
            { title: "FAQ", description: "Questions frequentes" },
          ].map((item) => (
            <a
              key={item.title}
              href="#"
              className="p-4 rounded-xl bg-[var(--background)] hover:bg-[var(--border)]/50 transition-colors"
            >
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-[var(--muted)]">{item.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
        <h3 className="font-semibold mb-4">Contacter le support</h3>
        <p className="text-[var(--muted)] mb-4">
          Notre equipe repond sous 24h (jours ouvres).
        </p>
        <div className="flex gap-3">
          <button className="btn-primary">Envoyer un message</button>
          <button className="px-6 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--background)] transition-colors">
            Voir mes tickets
          </button>
        </div>
      </div>
    </div>
  );
}
