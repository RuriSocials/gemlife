import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};
