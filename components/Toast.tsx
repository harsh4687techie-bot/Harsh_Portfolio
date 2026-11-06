'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className={styles.toast} role="status" aria-live="polite">
      <CheckCircle2 size={16} className={styles.icon} />
      <span>{message}</span>
    </div>
  );
}
