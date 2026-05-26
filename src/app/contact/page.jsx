import { Suspense } from 'react';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact UnityESS | Energy Storage Solutions & BESS Projects India',
  description: 'Start your energy storage project with UnityESS. Contact our team to discuss system requirements, deployment, and BESS solutions across India.',
  keywords: ['Contact UnityESS', 'BESS Projects India', 'Energy Storage Solutions'],
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ContactClient />
    </Suspense>
  );
}
