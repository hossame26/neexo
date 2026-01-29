"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/dashboard/Header";
import {
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  FileText,
  Receipt,
  Trash2,
  Edit,
  Eye,
  X,
  Plus,
} from "lucide-react";

const clients = [
  {
    id: 1,
    nom: "Martin",
    prenom: "Pierre",
    email: "pierre.martin@email.fr",
    telephone: "06 12 34 56 78",
    adresse: "12 Rue de la Paix, 13001 Marseille",
    devis: 5,
    factures: 12,
    ca: "4 580 €",
    statut: "actif",
  },
  {
    id: 2,
    nom: "Dubois",
    prenom: "Marie",
    email: "marie.dubois@email.fr",
    telephone: "06 98 76 54 32",
    adresse: "45 Avenue du Prado, 13008 Marseille",
    devis: 2,
    factures: 8,
    ca: "2 150 €",
    statut: "actif",
  },
  {
    id: 3,
    nom: "Bernard",
    prenom: "Jacques",
    email: "j.bernard@entreprise.fr",
    telephone: "04 91 22 33 44",
    adresse: "78 Boulevard Longchamp, 13004 Marseille",
    devis: 1,
    factures: 0,
    ca: "0 €",
    statut: "prospect",
  },
  {
    id: 4,
    nom: "SCI Les Oliviers",
    prenom: "",
    email: "contact@sci-oliviers.fr",
    telephone: "04 91 55 66 77",
    adresse: "23 Rue Paradis, 13006 Marseille",
    devis: 3,
    factures: 15,
    ca: "8 900 €",
    statut: "actif",
  },
  {
    id: 5,
    nom: "Leroy",
    prenom: "Thomas",
    email: "thomas.leroy@gmail.com",
    telephone: "06 11 22 33 44",
    adresse: "156 Corniche Kennedy, 13007 Marseille",
    devis: 4,
    factures: 6,
    ca: "3 200 €",
    statut: "actif",
  },
  {
    id: 6,
    nom: "Petit",
    prenom: "Sophie",
    email: "sophie.petit@outlook.fr",
    telephone: "06 55 44 33 22",
    adresse: "8 Place Castellane, 13006 Marseille",
    devis: 0,
    factures: 2,
    ca: "450 €",
    statut: "inactif",
  },
];

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);
  const [showNewClient, setShowNewClient] = useState(false);

  const filteredClients = clients.filter(
    (client) =>
      client.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.prenom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header
        title="Clients"
        subtitle={`${clients.length} clients au total`}
        action={{
          label: "Nouveau client",
          onClick: () => setShowNewClient(true),
        }}
      />

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mb-6"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
          <input
            type="text"
            placeholder="Rechercher un client..."
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

      {/* Clients table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Client</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Contact</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Devis</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Factures</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">CA Total</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--muted)]">Statut</th>
                <th className="text-right p-4 text-sm font-medium text-[var(--muted)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client, index) => (
                <motion.tr
                  key={client.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-[var(--border)] hover:bg-[var(--background)] transition-colors cursor-pointer"
                  onClick={() => setSelectedClient(client)}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-purple-500 flex items-center justify-center text-white font-medium">
                        {client.prenom ? client.prenom[0] : client.nom[0]}
                        {client.prenom ? client.nom[0] : ""}
                      </div>
                      <div>
                        <p className="font-medium">
                          {client.prenom} {client.nom}
                        </p>
                        <p className="text-sm text-[var(--muted)]">{client.adresse.split(",")[1]}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="text-sm flex items-center gap-2">
                        <Mail size={14} className="text-[var(--muted)]" />
                        {client.email}
                      </p>
                      <p className="text-sm flex items-center gap-2">
                        <Phone size={14} className="text-[var(--muted)]" />
                        {client.telephone}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm">{client.devis}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm">{client.factures}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-medium">{client.ca}</span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        client.statut === "actif"
                          ? "bg-green-500/10 text-green-500"
                          : client.statut === "prospect"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {client.statut}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Client detail modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[var(--background)] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent)] to-purple-500 flex items-center justify-center text-white font-semibold text-xl">
                    {selectedClient.prenom ? selectedClient.prenom[0] : selectedClient.nom[0]}
                    {selectedClient.prenom ? selectedClient.nom[0] : ""}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">
                      {selectedClient.prenom} {selectedClient.nom}
                    </h2>
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mt-1 ${
                        selectedClient.statut === "actif"
                          ? "bg-green-500/10 text-green-500"
                          : selectedClient.statut === "prospect"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {selectedClient.statut}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedClient(null)}
                  className="p-2 rounded-lg hover:bg-[var(--card)] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Contact info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[var(--card)]">
                    <div className="flex items-center gap-2 text-[var(--muted)] mb-1">
                      <Mail size={16} />
                      <span className="text-sm">Email</span>
                    </div>
                    <p className="font-medium">{selectedClient.email}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--card)]">
                    <div className="flex items-center gap-2 text-[var(--muted)] mb-1">
                      <Phone size={16} />
                      <span className="text-sm">Telephone</span>
                    </div>
                    <p className="font-medium">{selectedClient.telephone}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--card)]">
                  <div className="flex items-center gap-2 text-[var(--muted)] mb-1">
                    <MapPin size={16} />
                    <span className="text-sm">Adresse</span>
                  </div>
                  <p className="font-medium">{selectedClient.adresse}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[var(--card)] text-center">
                    <p className="text-3xl font-semibold">{selectedClient.devis}</p>
                    <p className="text-sm text-[var(--muted)]">Devis</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--card)] text-center">
                    <p className="text-3xl font-semibold">{selectedClient.factures}</p>
                    <p className="text-sm text-[var(--muted)]">Factures</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--card)] text-center">
                    <p className="text-3xl font-semibold">{selectedClient.ca}</p>
                    <p className="text-sm text-[var(--muted)]">CA Total</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                    <FileText size={18} />
                    Nouveau devis
                  </button>
                  <button className="flex-1 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--card)] transition-colors flex items-center justify-center gap-2">
                    <Receipt size={18} />
                    Nouvelle facture
                  </button>
                </div>

                <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
                  <button className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                    <Edit size={16} />
                    Modifier
                  </button>
                  <button className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors">
                    <Trash2 size={16} />
                    Supprimer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* New client modal */}
      <AnimatePresence>
        {showNewClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewClient(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[var(--background)] rounded-2xl w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
                <h2 className="text-xl font-semibold">Nouveau client</h2>
                <button
                  onClick={() => setShowNewClient(false)}
                  className="p-2 rounded-lg hover:bg-[var(--card)] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prenom</label>
                    <input
                      type="text"
                      placeholder="Jean"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom</label>
                    <input
                      type="text"
                      placeholder="Dupont"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="jean@exemple.fr"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telephone</label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Adresse</label>
                  <input
                    type="text"
                    placeholder="12 Rue Exemple, 13001 Marseille"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowNewClient(false)}
                    className="flex-1 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--card)] transition-colors"
                  >
                    Annuler
                  </button>
                  <button type="submit" className="flex-1 btn-primary">
                    Creer le client
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
