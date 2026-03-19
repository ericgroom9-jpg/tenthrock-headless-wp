import type { Metadata } from 'next';
import TenthRockHome from '@/components/home/TenthRockHome';

export const metadata: Metadata = {
  title: 'Tenth Rock Waste Solutions | Nationwide Commercial Waste Management',
  description: 'Nationwide commercial waste management: waste removal, pressure washing, dumpster rental, and hauling services. 24/7 dispatch across 48 states.',
  openGraph: {
    title: 'Tenth Rock Waste Solutions | Nationwide Commercial Waste Management',
    description: 'Nationwide commercial waste management: waste removal, pressure washing, dumpster rental, and hauling services. 24/7 dispatch across 48 states.',
    type: 'website',
  },
};

export default function Home() {
  return <TenthRockHome />;
}
