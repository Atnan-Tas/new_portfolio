import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error('API key manquante. Assurez-vous que RESEND_API_KEY est défini dans vos variables d’environnement.');
    }

    console.log('🛠️ Envoi d\'e-mail en cours...');
    console.log('API KEY:', process.env.RESEND_API_KEY);
    console.log('FROM EMAIL:', process.env.FROM_EMAIL);

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'no-reply@atnantas.com',
      to: ['atnan.tas.pro@gmail.com'],
      subject: `Nouveau message de ${name}`,
      text: `Vous avez reçu un message de ${name} (${email}):\n\n${message}`,
    });
 
    console.log('✅ E-mail envoyé avec succès:', data);

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('❌ Erreur API Resend:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error('❌ Erreur inconnue:', error);
      return NextResponse.json({ error: 'Erreur inconnue lors de l\'envoi de l\'e-mail.' }, { status: 500 });
    }
  }
}
