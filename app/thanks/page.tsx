'use client'
import { useEffect, useState } from 'react';

export default function Thanks() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minut = 600 soniya

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      window.location.href = "https://t.me/SizningKanal"; // Kanal linki
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-gold text-4xl font-bold mb-4">Rahmat!</h1>
      <p className="text-white text-xl">Ma&apos;lumotlaringiz qabul qilindi.</p>
      <div className="mt-8 p-6 border border-gold/20 rounded-lg">
        <p className="text-gray-400 mb-2">Siz 10 daqiqadan so&apos;ng eksklyuziv kanalimizga o&apos;tasiz:</p>
        <span className="text-3xl font-mono text-gold">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <a 
        href="https://t.me/SizningKanal" 
        className="mt-6 text-gold underline hover:text-white transition"
      >
        Hozirroq o&apos;tish
      </a>
    </div>
  );
}