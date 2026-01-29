"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/dashboard/Header";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Send,
  FileText,
  Download,
  Copy,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  X,
  Plus,
  Minus,
} from "lucide-react";

const devis = [
  {
    id: "2024-156",
    client: "Mme. Dubois Marie",
    objet: "Installation chauffe-eau thermodynamique",
    montant: "1 250,00 €",
    date: "28 Jan 2024",
    validite: "27 Fev 2024",
    statut: "envoye",
  },
  {
    id: "2024-155",
    client: "M. Martin Pierre",
    objet: "Reparation fuite salle de bain",
    montant: "380,00 €",
    date: "27 Jan 2024",
    validite: "26 Fev 2024",
    statut: "accepte",
  },
  {
    id: "2024-154",
    client: "SCI Les Oliviers",
    objet: "Renovation plomberie appartement T3",
    montant: "4 800,00 €",
    date: "25 Jan 2024",
    validite: "24 Fev 2024",
    statut: "brouillon",
  },
  {
    id: "2024-153",
    client: "M. Leroy Thomas",
    objet: "Debouchage canalisation",
    montant: "220,00 €",
    date: "24 Jan 2024",
    validite: "23 Fev 2024",
    statut: "refuse",
  },
  {
    id: "2024-152",
    client: "Mme. Petit Sophie",
    objet: "Remplacement robinetterie cuisine",
    montant: "450,00 €",
    date: "22 Jan 2024",
    validite: "21 Fev 2024",
    statut: "expire",
  },
  {
    id: "2024-151",
    client: "M. Bernard Jacques",
    objet: "Installation douche italienne",
    montant: "2 100,00 €",
    date: "20 Jan 2024",
    validite: "19 Fev 2024",
    statut: "accepte",
  },
];

const services = [
  { id: 1, nom: "Main d'oeuvre (heure)", prix: 45 },
  { id: 2, nom: "Deplacement", prix: 35 },
  { id: 3, nom: "Debouchage canalisation", prix: 120 },
  { id: 4, nom: "Reparation fuite", prix: 80 },
  { id: 5, nom: "Installation robinet", prix: 60 },
  { id: 6, nom: "Installation chauffe-eau", prix: 350 },
];

const statutColors: Record<string, { bg: string; text: string; label: string }> = {
  brouillon: { bg: "bg-gray-500/10", text: "text-gray-500", label: "Brouillon" },
  envoye: { bg: "bg-blue-500/10", text: "text-blue-500", label: "Envoye" },
  accepte: { bg: "bg-green-500/10", text: "text-green-500", label: "Accepte" },
  refuse: { bg: "bg-red-500/10", text: "text-red-500", label: "Refuse" },
  expire: { bg: "bg-orange-500/10", text: "text-orange-500", label: "Expire" },
};

export default function DevisPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewDevis, setShowNewDevis] = useState(false);
  const [lignes, setLignes] = useState([
    { service: "", description: "", quantite: 1, prixUnitaire: 0 },
  ]);

  const filteredDevis = devis.filter(
    (d) =>
      d.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.objet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.id.includes(searchQuery)
  );

  const addLigne = () => {
    setLignes([...lignes, { service: "", description: "", quantite: 1, prixUnitaire: 0 }]);
  };

  const removeLigne = (index: number) => {
    if (lignes.length > 1) {
      setLignes(lignes.filter((_, i) => i !== index));
    }
  };

  const total = lignes.reduce((acc, ligne) => acc + ligne.quantite * ligne.prixUnitaire, 0);

  return (
    <>
      <Header
        title="Devis"
        subtitle={`${devis.length} devis au total`}
        action={{
          label: "Nouveau devis",
          onClick: () => setShowNewDevis(true),
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
          { label: "En attente", value: "3", icon: Clock, color: "text-blue-500" },
          { label: "Acceptes", value: "12", icon: CheckCircle, color: "text-green-500" },
          { label: "Refuses", value: "2", icon: XCircle, color: "text-red-500" },
          { label: "Montant total", value: "9 200 €", icon: FileText, color: "text-purple-500" },
        ].map((stat, index) => (
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
            placeholder="Rechercher un devis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--background)] transition-colors">
          <Filter size={18} />
          Filtrer
        </button>
      </motion.div>

      {/* Devis list */}
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
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">N° Devis</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Client</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Objet</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Montant</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Date</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Statut</th>
                <th className="text-right p-4 text-sm font-medium text-[var(--muted)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDevis.map((d, index) => (
                <motion.tr
                  key={d.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-[var(--border)] hover:bg-[var(--background)] transition-colors"
                >
                  <td className="p-4">
                    <span className="font-mono text-sm font-medium">#{d.id}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-medium">{d.client}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-[var(--muted)]">{d.objet}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold">{d.montant}</span>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="text-sm">{d.date}</p>
                      <p className="text-xs text-[var(--muted)]">Valide jusqu'au {d.validite}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${statutColors[d.statut].bg} ${statutColors[d.statut].text}`}
                    >
                      {statutColors[d.statut].label}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors" title="Voir">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors" title="Envoyer">
                        <Send size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors" title="Telecharger">
                        <Download size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* New devis modal */}
      <AnimatePresence>
        {showNewDevis && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewDevis(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[var(--background)] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-[var(--border)] flex items-center justify-between sticky top-0 bg-[var(--background)] z-10">
                <h2 className="text-xl font-semibold">Nouveau devis</h2>
                <button
                  onClick={() => setShowNewDevis(false)}
                  className="p-2 rounded-lg hover:bg-[var(--card)] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form className="p-6 space-y-6">
                {/* Client selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Client</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
                      <option value="">Selectionner un client</option>
                      <option value="1">M. Martin Pierre</option>
                      <option value="2">Mme. Dubois Marie</option>
                      <option value="3">SCI Les Oliviers</option>
                      <option value="4">M. Leroy Thomas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date de validite</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Objet du devis</label>
                  <input
                    type="text"
                    placeholder="Ex: Installation chauffe-eau thermodynamique"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </div>

                {/* Lignes */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm font-medium">Lignes du devis</label>
                    <button
                      type="button"
                      onClick={addLigne}
                      className="text-sm text-[var(--accent)] hover:underline flex items-center gap-1"
                    >
                      <Plus size={16} />
                      Ajouter une ligne
                    </button>
                  </div>

                  <div className="space-y-3">
                    {lignes.map((ligne, index) => (
                      <div key={index} className="flex gap-3 items-start p-4 rounded-xl bg-[var(--card)]">
                        <div className="flex-1 grid md:grid-cols-4 gap-3">
                          <div className="md:col-span-2">
                            <select
                              value={ligne.service}
                              onChange={(e) => {
                                const newLignes = [...lignes];
                                const service = services.find((s) => s.id === parseInt(e.target.value));
                                newLignes[index].service = e.target.value;
                                newLignes[index].prixUnitaire = service?.prix || 0;
                                setLignes(newLignes);
                              }}
                              className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            >
                              <option value="">Selectionner un service</option>
                              {services.map((s) => (
                                <option key={s.id} value={s.id}>
                                  {s.nom} - {s.prix} €
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <input
                              type="number"
                              min="1"
                              value={ligne.quantite}
                              onChange={(e) => {
                                const newLignes = [...lignes];
                                newLignes[index].quantite = parseInt(e.target.value) || 1;
                                setLignes(newLignes);
                              }}
                              placeholder="Qte"
                              className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              value={ligne.prixUnitaire}
                              onChange={(e) => {
                                const newLignes = [...lignes];
                                newLignes[index].prixUnitaire = parseFloat(e.target.value) || 0;
                                setLignes(newLignes);
                              }}
                              placeholder="Prix"
                              className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeLigne(index)}
                          className="p-2 rounded-lg hover:bg-[var(--background)] text-[var(--muted)] hover:text-red-500 transition-colors"
                        >
                          <Minus size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-end">
                  <div className="w-64 p-4 rounded-xl bg-[var(--card)]">
                    <div className="flex justify-between mb-2">
                      <span className="text-[var(--muted)]">Sous-total HT</span>
                      <span>{total.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[var(--muted)]">TVA (20%)</span>
                      <span>{(total * 0.2).toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[var(--border)] font-semibold">
                      <span>Total TTC</span>
                      <span>{(total * 1.2).toFixed(2)} €</span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium mb-2">Notes (optionnel)</label>
                  <textarea
                    rows={3}
                    placeholder="Conditions particulieres, informations complementaires..."
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
                  <button
                    type="button"
                    onClick={() => setShowNewDevis(false)}
                    className="px-6 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--card)] transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--card)] transition-colors"
                  >
                    Enregistrer brouillon
                  </button>
                  <button type="submit" className="btn-primary flex-1 flex items-center justify-center gap-2">
                    <Send size={18} />
                    Creer et envoyer
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
