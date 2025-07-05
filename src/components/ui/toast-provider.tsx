import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toast, ToastProps } from './toast';

interface ToastContextType {
  showToast: (message: string, type?: ToastProps['type']) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<{ message: string; type: ToastProps['type'] } | null>(null);

  const showToast = (message: string, type: ToastProps['type'] = 'info') => {
    setToast({ message, type });
  };

  const handleClose = () => setToast(null);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast message={toast.message} type={toast.type} onClose={handleClose} />}
    </ToastContext.Provider>
  );
}; 