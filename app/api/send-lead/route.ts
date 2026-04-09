import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, age, address, utm_source, utm_medium, utm_campaign } = body;

    // O'zbekiston vaqti bilan hozirgi sanani olish
    const date = new Date().toLocaleString('uz-UZ', { 
      timeZone: 'Asia/Tashkent',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Telegramga yuboriladigan xabar (Sana qo'shildi)
    const message = `
🚀 **YANGI LID (CASHFLOW)**
🕒 **Sana:** ${date}
━━━━━━━━━━━━━━━━━━
👤 **Ism:** ${name}
📞 **Tel:** ${phone}
🎂 **Yosh:** ${age}
📍 **Manzil:** ${address}

📊 **MARKETING (UTM):**
🔗 **Manba:** ${utm_source}
📢 **Kampaniya:** ${utm_campaign}
━━━━━━━━━━━━━━━━━━
    `;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Telegram xatosi:", errorData);
      return NextResponse.json({ error: "Telegramga yuborilmadi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server xatosi:", error);
    return NextResponse.json({ error: "Ichki xatolik" }, { status: 500 });
  }
}