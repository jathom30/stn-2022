import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const usePortal = () => {
  return (element: ReactNode) => createPortal(element, document.body)
}