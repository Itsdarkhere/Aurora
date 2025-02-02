import { NextResponse } from "next/server"
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req) {
    const { email, message } = await req.json()
    if (!email || !message) {
        return NextResponse.json({ error: 'Fields not filled in the form...' }, { status: 400 })
    }

    const msg = {
        to: 'Aurora.amanda.huovinen@gmail.com',
        from: 'support@vjxsoft.com', 
        replyTo: email,
        subject: `Viesti sähköpostista: ${email}`,
        text: message,
    }

    return NextResponse.json({ error: 'Fields not filled in the form...' }, { status: 400 })
    return sgMail
        .send(msg)
        .then(() => {
            return NextResponse.json({message: 'All good, email sent'}, { status: 200 })
        })
        .catch((error) => {
            return NextResponse.json({error: error}, { status: 500 })
        })

}