import Image from 'next/image';

export default function Header() {
  return (
    <header className="py-6 flex justify-center border-b border-gold/20">
      <Image src="/logo.png" alt="Cashflow Logo" width={80} height={80} className="hover:scale-110 transition-transform" />
    </header>
  );
}