import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: fromEmail || 'no-reply@atnantas.com',
      to: ['atnan.tas.pro@gmail.com'],
      subject: `Nouveau message de ${name}`,
      html: `
        <div>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });
    return NextResponse.json({ success: true, data });
    } catch (error) {
    console.error('Erreur API Resend:', (error as Error).message || error);
    return NextResponse.json({ error: (error as Error).message || 'Erreur serveur' }, { status: 500 });
    }
  }
