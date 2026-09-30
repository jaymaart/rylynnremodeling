import type { Metadata } from 'next';
import BallparkEstimator from '@/components/BallparkEstimator';

export const metadata: Metadata = { title: 'Ballpark Estimate Range' };

export default function BallparkPage() {
  return <BallparkEstimator />;
}
