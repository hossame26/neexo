"use client";

import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import {
  TrendingUp,
  TrendingDown,
  Users,
  FileText,
  Receipt,
  Euro,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Chiffre d'affaires",
    value: "12 450 €",
    change: "+12%",
    trend: "up",
    icon: Euro,
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "Clients actifs",
    value: "48",
    change: "+3",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "Devis en attente",
    value: "7",
    change: "2 450 €",
    trend: "neutral",
    icon: FileText,
    color: "from-orange-500 to-amber-500",
  },
  {
    label: "Factures impayees",
    value: "3",
    change: "1 890 €",
    trend: "down",
    icon: Receipt,
    color: "from-red-500 to-pink-500",
  },
];

const recentActivity = [
  {
    type: "facture_payee",
    title: "Facture #2024-089 payee",
    client: "M. Martin Pierre",
    amount: "580,00 €",
    time: "Il y a 2h",
    icon: CheckCircle2,
    iconColor: "text-green-500",
  },
  {
    type: "devis_envoye",
    title: "Devis #2024-156 envoye",
    client: "Mme. Dubois Marie",
    amount: "1 250,00 €",
    time: "Il y a 4h",
    icon: FileText,
    iconColor: "text-blue-500",
  },
  {
    type: "facture_echeance",
    title: "Facture #2024-082 en retard",
    client: "SCI Les Oliviers",
    amount: "890,00 €",
    time: "Echeance depassee de 5j",
    icon: AlertCircle,
    iconColor: "text-red-500",
  },
  {
    type: "nouveau_client",
    title: "Nouveau client ajoute",
    client: "M. Bernard Jacques",
    amount: "",
    time: "Hier",
    icon: Users,
    iconColor: "text-purple-500",
  },
  {
    type: "devis_accepte",
    title: "Devis #2024-149 accepte",
    client: "M. Leroy Thomas",
    amount: "2 100,00 €",
    time: "Hier",
    icon: CheckCircle2,
    iconColor: "text-green-500",
  },
];

const upcomingTasks = [
  { title: "Relancer devis #2024-148", date: "Aujourd'hui", priority: "high" },
  { title: "Intervention chez M. Petit", date: "Demain 9h", priority: "medium" },
  { title: "Envoyer facture Projet Dubois", date: "Demain", priority: "medium" },
  { title: "Rappeler Mme. Garcia", date: "Vendredi", priority: "low" },
];

export default function Dashboard() {
  return (
    <>
      <Header
        title="Bonjour, Jean"
        subtitle="Voici un resume de votre activite"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up"
                    ? "text-green-500"
                    : stat.trend === "down"
                    ? "text-red-500"
                    : "text-[var(--muted)]"
                }`}
              >
                {stat.trend === "up" && <TrendingUp size={16} />}
                {stat.trend === "down" && <TrendingDown size={16} />}
                {stat.change}
              </div>
            </div>
            <p className="text-3xl font-semibold mb-1">{stat.value}</p>
            <p className="text-sm text-[var(--muted)]">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="lg:col-span-2 bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden"
        >
          <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
            <h2 className="font-semibold text-lg">Activite recente</h2>
            <Link
              href="/dashboard/activite"
              className="text-sm text-[var(--accent)] hover:underline flex items-center gap-1"
            >
              Tout voir
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="divide-y divide-[var(--border)]">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="p-4 flex items-center gap-4 hover:bg-[var(--background)] transition-colors"
              >
                <div className={`w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center ${activity.iconColor}`}>
                  <activity.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{activity.title}</p>
                  <p className="text-sm text-[var(--muted)] truncate">{activity.client}</p>
                </div>
                <div className="text-right">
                  {activity.amount && (
                    <p className="font-medium">{activity.amount}</p>
                  )}
                  <p className="text-xs text-[var(--muted)]">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden"
        >
          <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
            <h2 className="font-semibold text-lg">A faire</h2>
            <button className="text-sm text-[var(--accent)] hover:underline">
              + Ajouter
            </button>
          </div>
          <div className="p-4 space-y-3">
            {upcomingTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl bg-[var(--background)] hover:bg-[var(--border)]/50 transition-colors cursor-pointer"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    task.priority === "high"
                      ? "bg-red-500"
                      : task.priority === "medium"
                      ? "bg-orange-500"
                      : "bg-green-500"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{task.title}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-[var(--muted)]">
                    <Clock size={12} />
                    {task.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Nouveau client", href: "/dashboard/clients/nouveau", icon: Users },
          { label: "Creer un devis", href: "/dashboard/devis/nouveau", icon: FileText },
          { label: "Creer une facture", href: "/dashboard/factures/nouveau", icon: Receipt },
          { label: "Ajouter un service", href: "/dashboard/catalogue/nouveau", icon: Euro },
        ].map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex items-center gap-3 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/30 hover:bg-[var(--background)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
              <action.icon size={20} />
            </div>
            <span className="font-medium text-sm">{action.label}</span>
          </Link>
        ))}
      </motion.div>
    </>
  );
}
