'use client';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  details: string;
}

export default function TimelineItem({ title, details }: TimelineItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-card shadow-card p-4 w-44 cursor-pointer border-t-4 border-burgundy"
    >
      <h3 className="font-serif text-burgundy text-sm font-bold mb-1">{title}</h3>
      <p className="text-xs text-gray-600 font-sans leading-relaxed">{details}</p>
    </motion.div>
  );
}