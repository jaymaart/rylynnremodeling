import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';
import ServiceList from '@/components/ServiceList';
import { INTERIOR } from '@/lib/data';

export const metadata: Metadata = { title: 'Interior Remodeling' };

export default function InteriorPage() {
  return (
    <>
      <div className="tint">
        <div className="wrap split-hero">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="eyebrow">OUR WORK · INTERIOR</span>
            <h1 className="page-title" style={{ fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.02 }}>Interior</h1>
            <p className="lead">At Rylynn Remodeling, we believe that every home deserves to be beautiful and functional.</p>
          </div>
          <img className="arch" src="https://static.wixstatic.com/media/66ee84_7dcb361c41324aa4af4a396df6bf939f~mv2.png/v1/fill/w_1200,h_700,al_c,q_85/int.png" alt="" style={{ height: 360 }} />
        </div>
      </div>
      <ServiceList services={INTERIOR} />
      <CtaBand />
    </>
  );
}
