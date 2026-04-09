'use client'

import { useSearchParams } from 'next/navigation'; // useRouter ni olib tashladik
import { useState } from 'react';

const goldBtnGradient = "linear-gradient(135deg, #D4AF37 0%, #FDE68A 50%, #D4AF37 100%)";

export default function LeadForm() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: phone,
      age: formData.get('age'),
      address: formData.get('address'),
      utm_source: searchParams.get('utm_source') || 'organic',
      utm_medium: searchParams.get('utm_medium') || 'direct',
      utm_campaign: searchParams.get('utm_campaign') || 'none',
    };

    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // ASOSIY O'ZGARISH MANA SHU YERDA:
        // React'ning routeri o'rniga, brauzerning o'zini yo'naltiramiz. 
        // Bu removeChild xatosini 100% yo'q qiladi.
        window.location.href = '/thanks'; 
      } else {
        throw new Error('Tarmoq xatosi');
      }
    } catch (error) {
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
      setLoading(false); // Xato bo'lsa tugmani yana faollashtiramiz
    } 
    // finally { setLoading(false); } qismini olib tashladik, 
    // chunki sahifa o'zgarib ketayotganda state o'zgartirish ham xato berishi mumkin.
  };

  const inputStyle = `
    w-full 
    bg-[#F9FAFB] 
    border border-gray-200 
    px-6 py-5 
    rounded-2xl 
    text-gray-900 text-lg font-medium 
    placeholder:text-gray-400 
    
    focus:border-[#D4AF37]
    focus:bg-white
    focus:ring-4 focus:ring-[#D4AF37]/10
    
    outline-none 
    transition-all duration-300
  `;

  return (
    <div className="bg-white p-10 md:p-12 rounded-4xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden border border-gray-100">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#D4AF37] to-[#FDE68A]"></div>
      
      <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
        
        <div>
          <label className="text-gray-500 text-sm mb-2 block ml-1 font-semibold tracking-wide">To&apos;liq ismingiz</label>
          <input 
            name="name" 
            type="text"
            placeholder="Masalan: Ali Valiyev" 
            required 
            className={inputStyle} 
          />
        </div>

        <div>
          <label className="text-gray-500 text-sm mb-2 block ml-1 font-semibold tracking-wide">Telefon raqamingiz</label>
          <input 
            name="phone" 
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+998 90 123 45 67" 
            required 
            className={inputStyle}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-500 text-sm mb-2 block ml-1 font-semibold tracking-wide">Yoshingiz</label>
            <input 
              name="age" 
              type="number" 
              placeholder="Masalan: 25" 
              required 
              className={inputStyle} 
            />
          </div>
          <div>
            <label className="text-gray-500 text-sm mb-2 block ml-1 font-semibold tracking-wide">Manzilingiz</label>
            <input 
              name="address" 
              type="text"
              placeholder="Viloyat / Shahar" 
              required 
              className={inputStyle} 
            />
          </div>
        </div>
        
        <div className="pt-6">
          <button 
            type="submit"
            disabled={loading}
            className={`
              w-full 
              text-[#1A1A1A] 
              font-extrabold 
              py-6 
              rounded-2xl 
              text-xl 
              uppercase 
              tracking-tight 
              shadow-[0_10px_25px_rgba(212,175,55,0.3)] 
              hover:shadow-[0_15px_35px_rgba(212,175,55,0.4)] 
              hover:scale-[1.02] 
              active:scale-95 
              transition-all duration-300 
              flex items-center justify-center gap-3
            `}
            style={{ backgroundImage: goldBtnGradient }}
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-t-2 border-[#1A1A1A] rounded-full animate-spin"></div>
                Yuborilmoqda...
              </>
            ) : (
              <>
                RO&apos;YXATDAN O&apos;TISH
                <span className="text-2xl leading-none">→</span>
              </>
            )}
          </button>
        </div>
      </form>
      
      <p className="text-gray-400 text-xs text-center mt-8 tracking-wide font-medium flex items-center justify-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Ma&apos;lumotlaringiz maxfiyligi qat&apos;iy himoyalangan.
      </p>
    </div>
  );
}