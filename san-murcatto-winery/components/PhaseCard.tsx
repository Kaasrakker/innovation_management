'use client';
import { motion } from 'framer-motion';

interface PhaseCardProps {
  title: string;
  description: string;
  actions: string[];
  color?: string;
}

export default function PhaseCard({ title, description, actions, color = 'bg-cream' }: PhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${color} rounded-card shadow-card p-6 border border-gray-100`}
    >
      <h3 className="font-serif text-burgundy text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm font-sans text-gray-700 mb-4">{description}</p>
      <ul className="space-y-1">
        {actions.map((action) => (
          <li key={action} className="text-sm font-sans text-gray-600 flex items-start gap-2">
            <span className="text-green mt-0.5">✦</span>
            {action}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}