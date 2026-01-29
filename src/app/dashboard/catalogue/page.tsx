"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/dashboard/Header";
import {
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  X,
  Package,
  Wrench,
  Clock,
  Euro,
} from "lucide-react";

const categories = [
  { id: "tous", label: "Tous", count: 15 },
  { id: "intervention", label: "Interventions", count: 8 },
  { id: "installation", label: "Installations", count: 4 },
  { id: "divers", label: "Divers", count: 3 },
];

const services = [
  {
    id: 1,
    nom: "Debouchage canalisation",
    description: "Debouchage de canalisation avec furet ou haute pression",
    categorie: "intervention",
    prix: 120,
    unite: "forfait",
    duree: "1h",
  },
  {
    id: 2,
    nom: "Reparation fuite",
    description: "Recherche et reparation de fuite d'eau",
    categorie: "intervention",
    prix: 80,
    unite: "forfait",
    duree: "45min",
  },
  {
    id: 3,
    nom: "Installation robinet",
    description: "Fourniture et pose d'un robinet mitigeur",
    categorie: "installation",
    prix: 60,
    unite: "unite",
    duree: "30min",
  },
  {
    id: 4,
    nom: "Installation chauffe-eau",
    description: "Depose ancien et installation nouveau chauffe-eau",
    categorie: "installation",
    prix: 350,
    unite: "forfait",
    duree: "3h",
  },
  {
    id: 5,
    nom: "Main d'oeuvre",
    description: "Tarif horaire main d'oeuvre qualifiee",
    categorie: "divers",
    prix: 45,
    unite: "heure",
    duree: "1h",
  },
  {
    id: 6,
    nom: "Deplacement",
    description: "Frais de deplacement zone Marseille",
    categorie: "divers",
    prix: 35,
    unite: "forfait",
    duree: "-",
  },
  {
    id: 7,
    nom: "Remplacement WC",
    description: "Depose et pose WC complet avec raccordements",
    categorie: "installation",
    prix: 180,
    unite: "forfait",
    duree: "2h",
  },
  {
    id: 8,
    nom: "Intervention urgente",
    description: "Majoration pour intervention en urgence (nuit/WE)",
    categorie: "divers",
    prix: 50,
    unite: "forfait",
    duree: "-",
  },
];

export default function CataloguePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("tous");
  const [showNewService, setShowNewService] = useState(false);
  const [editingService, setEditingService] = useState<typeof services[0] | null>(null);

  const filteredServices = services.filter((s) => {
    const matchesSearch =
      s.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "tous" || s.categorie === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header
        title="Catalogue"
        subtitle={`${services.length} services et prestations`}
        action={{
          label: "Nouveau service",
          onClick: () => setShowNewService(true),
        }}
      />

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex gap-2 mb-6 overflow-x-auto pb-2"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--background)]"
            }`}
          >
            {cat.label}
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${
                selectedCategory === cat.id
                  ? "bg-white/20"
                  : "bg-[var(--border)]"
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative mb-6"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
        <input
          type="text"
          placeholder="Rechercher un service..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
        />
      </motion.div>

      {/* Services grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-5 hover:border-[var(--accent)]/30 transition-colors group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                {service.categorie === "intervention" ? (
                  <Wrench size={24} />
                ) : service.categorie === "installation" ? (
                  <Package size={24} />
                ) : (
                  <Euro size={24} />
                )}
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                <button
                  onClick={() => setEditingService(service)}
                  className="p-2 rounded-lg hover:bg-[var(--background)] transition-colors"
                >
                  <Edit size={16} />
                </button>
                <button className="p-2 rounded-lg hover:bg-[var(--background)] text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <h3 className="font-semibold mb-1">{service.nom}</h3>
            <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
              {service.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-[var(--muted)]">
                  <Clock size={14} />
                  {service.duree}
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--background)]">
                  {service.unite}
                </span>
              </div>
              <p className="text-xl font-semibold">{service.prix} €</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-12 h-12 mx-auto text-[var(--muted)] mb-4" />
          <p className="text-[var(--muted)]">Aucun service trouve</p>
        </div>
      )}

      {/* New/Edit service modal */}
      <AnimatePresence>
        {(showNewService || editingService) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowNewService(false);
              setEditingService(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[var(--background)] rounded-2xl w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  {editingService ? "Modifier le service" : "Nouveau service"}
                </h2>
                <button
                  onClick={() => {
                    setShowNewService(false);
                    setEditingService(null);
                  }}
                  className="p-2 rounded-lg hover:bg-[var(--card)] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom du service</label>
                  <input
                    type="text"
                    defaultValue={editingService?.nom || ""}
                    placeholder="Ex: Debouchage canalisation"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    rows={2}
                    defaultValue={editingService?.description || ""}
                    placeholder="Description du service..."
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Categorie</label>
                  <select
                    defaultValue={editingService?.categorie || ""}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  >
                    <option value="">Selectionner une categorie</option>
                    <option value="intervention">Intervention</option>
                    <option value="installation">Installation</option>
                    <option value="divers">Divers</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prix (€)</label>
                    <input
                      type="number"
                      defaultValue={editingService?.prix || ""}
                      placeholder="0"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Unite</label>
                    <select
                      defaultValue={editingService?.unite || "forfait"}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    >
                      <option value="forfait">Forfait</option>
                      <option value="heure">Heure</option>
                      <option value="unite">Unite</option>
                      <option value="m2">m²</option>
                      <option value="ml">ml</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Duree estimee</label>
                  <input
                    type="text"
                    defaultValue={editingService?.duree || ""}
                    placeholder="Ex: 1h30"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowNewService(false);
                      setEditingService(null);
                    }}
                    className="flex-1 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--card)] transition-colors"
                  >
                    Annuler
                  </button>
                  <button type="submit" className="flex-1 btn-primary">
                    {editingService ? "Enregistrer" : "Creer le service"}
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
