import type { Metadata } from 'next';
import TenthRockHome from '@/components/home/TenthRockHome';

export const metadata: Metadata = {
  title: 'Tenth Rock Waste Solutions | Nationwide Commercial Waste Management',
  description: 'Leading commercial waste management solutions across 48 states. Dumpster rental, emergency overflow, event services, and centralized waste programs for businesses.',
  openGraph: {
    title: 'Tenth Rock Waste Solutions | Nationwide Commercial Waste Management',
    description: 'Leading commercial waste management solutions across 48 states. Dumpster rental, emergency overflow, event services, and centralized waste programs for businesses.',
    type: 'website',
  },
};

export default function Home() {
  return <TenthRockHome />;
}
