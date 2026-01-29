"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Send,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
  Euro,
} from "lucide-react";

const factures = [
  {
    id: "2024-089",
    client: "M. Martin Pierre",
    objet: "Reparation fuite salle de bain",
    montant: "580,00 €",
    date: "25 Jan 2024",
    echeance: "25 Fev 2024",
    statut: "payee",
  },
  {
    id: "2024-088",
    client: "Mme. Dubois Marie",
    objet: "Debouchage canalisation",
    montant: "220,00 €",
    date: "22 Jan 2024",
    echeance: "22 Fev 2024",
    statut: "envoyee",
  },
  {
    id: "2024-087",
    client: "SCI Les Oliviers",
    objet: "Intervention urgente fuite",
    montant: "890,00 €",
    date: "18 Jan 2024",
    echeance: "18 Fev 2024",
    statut: "retard",
  },
  {
    id: "2024-086",
    client: "M. Leroy Thomas",
    objet: "Installation douche italienne",
    montant: "2 100,00 €",
    date: "15 Jan 2024",
    echeance: "15 Fev 2024",
    statut: "payee",
  },
  {
    id: "2024-085",
    client: "Mme. Petit Sophie",
    objet: "Remplacement robinetterie",
    montant: "450,00 €",
    date: "12 Jan 2024",
    echeance: "12 Fev 2024",
    statut: "payee",
  },
  {
    id: "2024-084",
    client: "M. Bernard Jacques",
    objet: "Diagnostic plomberie",
    montant: "150,00 €",
    date: "10 Jan 2024",
    echeance: "10 Fev 2024",
    statut: "envoyee",
  },
];

const statutColors: Record<string, { bg: string; text: string; label: string; icon: typeof CheckCircle }> = {
  brouillon: { bg: "bg-gray-500/10", text: "text-gray-500", label: "Brouillon", icon: Clock },
  envoyee: { bg: "bg-blue-500/10", text: "text-blue-500", label: "Envoyee", icon: Send },
  payee: { bg: "bg-green-500/10", text: "text-green-500", label: "Payee", icon: CheckCircle },
  retard: { bg: "bg-red-500/10", text: "text-red-500", label: "En retard", icon: AlertCircle },
};

export default function FacturesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFactures = factures.filter(
    (f) =>
      f.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.objet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.id.includes(searchQuery)
  );

  const totalPayees = factures
    .filter((f) => f.statut === "payee")
    .reduce((acc, f) => acc + parseFloat(f.montant.replace(/[^\d,]/g, "").replace(",", ".")), 0);

  const totalEnAttente = factures
    .filter((f) => f.statut === "envoyee" || f.statut === "retard")
    .reduce((acc, f) => acc + parseFloat(f.montant.replace(/[^\d,]/g, "").replace(",", ".")), 0);

  return (
    <>
      <Header
        title="Factures"
        subtitle={`${factures.length} factures au total`}
        action={{
          label: "Nouvelle facture",
          onClick: () => {},
        }}
      />

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
      >
        {[
          { label: "Payees ce mois", value: `${totalPayees.toFixed(2).replace(".", ",")} €`, icon: CheckCircle, color: "text-green-500" },
          { label: "En attente", value: `${totalEnAttente.toFixed(2).replace(".", ",")} €`, icon: Clock, color: "text-blue-500" },
          { label: "En retard", value: "1", icon: AlertCircle, color: "text-red-500" },
          { label: "CA mensuel", value: "4 390 €", icon: Euro, color: "text-purple-500" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[var(--card)] rounded-xl p-4 border border-[var(--border)]"
          >
            <div className="flex items-center gap-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <div>
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 mb-6"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
          <input
            type="text"
            placeholder="Rechercher une facture..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          {["Toutes", "Payees", "En attente", "En retard"].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                filter === "Toutes"
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--background)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Factures list */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">N° Facture</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Client</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Objet</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Montant</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Echeance</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Statut</th>
                <th className="text-right p-4 text-sm font-medium text-[var(--muted)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFactures.map((f, index) => {
                const statut = statutColors[f.statut];
                return (
                  <motion.tr
                    key={f.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-[var(--border)] hover:bg-[var(--background)] transition-colors"
                  >
                    <td className="p-4">
                      <span className="font-mono text-sm font-medium">#{f.id}</span>
                    </td>
                    <td className="p-4">
                      <span className="font-medium">{f.client}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-[var(--muted)]">{f.objet}</span>
                    </td>
                    <td className="p-4">
                      <span className="font-semibold">{f.montant}</span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm">{f.echeance}</p>
                        {f.statut === "retard" && (
                          <p className="text-xs text-red-500">5 jours de retard</p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statut.bg} ${statut.text}`}
                      >
                        <statut.icon size={12} />
                        {statut.label}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors" title="Voir">
                          <Eye size={16} />
                        </button>
                        {f.statut !== "payee" && (
                          <button className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors" title="Relancer">
                            <Send size={16} />
                          </button>
                        )}
                        <button className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors" title="Telecharger">
                          <Download size={16} />
                        </button>
                        {f.statut !== "payee" && (
                          <button
                            className="p-2 rounded-lg hover:bg-green-500/10 text-green-500 transition-colors"
                            title="Marquer comme payee"
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}
                        <button className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick stats cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-6 grid md:grid-cols-2 gap-6"
      >
        {/* Relances a faire */}
        <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            Relances a faire
          </h3>
          <div className="space-y-3">
            {factures
              .filter((f) => f.statut === "retard" || f.statut === "envoyee")
              .slice(0, 3)
              .map((f) => (
                <div
                  key={f.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-[var(--background)]"
                >
                  <div>
                    <p className="font-medium text-sm">{f.client}</p>
                    <p className="text-xs text-[var(--muted)]">#{f.id} - {f.montant}</p>
                  </div>
                  <button className="text-sm text-[var(--accent)] hover:underline">
                    Relancer
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Dernieres encaissees */}
        <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Dernieres factures encaissees
          </h3>
          <div className="space-y-3">
            {factures
              .filter((f) => f.statut === "payee")
              .slice(0, 3)
              .map((f) => (
                <div
                  key={f.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-[var(--background)]"
                >
                  <div>
                    <p className="font-medium text-sm">{f.client}</p>
                    <p className="text-xs text-[var(--muted)]">#{f.id}</p>
                  </div>
                  <span className="font-semibold text-green-500">{f.montant}</span>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
