import { Suspense } from 'react';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

// Ochiq fonda ishlatiladigan oltin gradient (matnlar uchun)
const goldTextGradient = "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #B8860B 100%)";

export default function Home() {
  return (
    // Saytning umumiy foni oq (#FFFFFF) yoki juda mayin kulrang (#F9FAFB) qilinadi
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111] pb-8 selection:bg-[#D4AF37]/30 selection:text-black">
      
      {/* 1. Logotip (Oq fonda ham yaxshi ko'rinishi uchun) */}
      <header className="pt-6 pb-6 flex justify-center">
        <div className="relative group">
          <Image 
            src="/logo2.png" // Agar logotipingiz faqat qora fonda ishlasa, logotipni o'zgartirishingizga to'g'ri kelishi mumkin
            alt="Cashflow Logo" 
            width={170} 
            height={170} 
            className="relative drop-shadow-md"
            priority
          />
        </div>
      </header>

      {/* 2. Matnlar qismi (Oq fon uchun to'q matnlar) */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-6">
        <p className="text-[#B8860B] tracking-[0.4em] uppercase text-xs font-bold opacity-90">
          Eksklyuziv Moliya Tizimi
        </p>
        
        <h1 className="text-5xl md:text-7xl font-900 tracking-tighter leading-none text-[#0A0A0A]">
          CASHFLOW <br />
          <span 
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: goldTextGradient }}
          >
            STRATEGIYASI
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-400 leading-relaxed">
          Kapitalingizni professional darajada boshqarish va har bir investitsiyadan maksimal foyda olishni o&apos;rganing.
        </p>
      </section>


      {/* 4. Forma qismi (Asosiy urg'u berilgan blok) */}
      <section id="register" className="max-w-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-800 tracking-tight text-[#111111]">Ro&apos;yxatdan o&apos;tish</h2>
          <p className="text-gray-500 mt-2">Ma&apos;lumotlaringizni qoldiring, biz tez orada bog&apos;lanamiz.</p>
        </div>

        <Suspense fallback={<div className="text-center text-[#D4AF37] py-20">Yuklanmoqda...</div>}>
          <LeadForm />
        </Suspense>
      </section>

      {/* Footer */}
      <footer className="mt-32 py-10 text-center border-t border-gray-200">
        <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-medium">
          © 2026 Vision Group. Barcha huquqlar himoyalangan.
        </p>
      </footer>
    </main>
  );
}