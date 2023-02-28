import sgMail from '@sendgrid/mail'
import { headers } from 'next/headers'

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { SENDGRID_API_KEY, SENDGRID_EMAIL_TO, SENDGRID_EMAIL_FROM, RECAPTCHA_SECRET_KEY } =
    process.env

  const json = await request.json()
  const mailData = json.data.mailData
  const reCaptchaToken = json.data.reCaptchaToken

  const message = mailData.message.replace(/\n/gi, '<p></p>')

  const headersList = headers()

  const ip = request.ip || 'Unknown'
  const ipRequestHeadersForwarded = request.headers.get('x-forwarded-for') ?? 'Unknown'
  const ipNextHeadersForwarded = headersList.get('x-forwarded-for') ?? 'Unknown'
  const ipRequestHeadersReal = request.headers.get('x-real-ip') ?? 'Unknown'
  const ipNextHeadersReal = headersList.get('x-real-ip') ?? 'Unknown'

  const emailContent = {
    to: SENDGRID_EMAIL_TO ?? '',
    from: SENDGRID_EMAIL_FROM ?? '',
    subject: '⚠️ Prise de contact depuis le Portfolio ⚠️',
    // text: 'and easy to do anywhere, even with Node.js',
    html: `
      <h2>Quelqu'un t'as contacté depuis le portfolio :</h2>
      <p></p>
      <p></p>
      <p><strong>Nom : </strong>${mailData.fullname}</p>
      <p></p>
      <p><strong>Email : </strong>${mailData.email}</p>
      <p></p>
      <p></p>
      <p><strong>Message : </strong></p>
      <p></p>
      <p>${message}</p>
      <p></p>
      <p></p>
      <p></p>
      <p><strong>Adresse IP : </strong>${ip}</p>
      <p></p>
      <p><strong>Adresse IP (request headers forwarded-for): </strong>${ipRequestHeadersForwarded}</p>
      <p></p>
      <p><strong>Adresse IP (next headers forwarded-for): </strong>${ipNextHeadersForwarded}</p>
      <p></p>
      <p><strong>Adresse IP (request headers real-ip): </strong>${ipRequestHeadersReal}</p>
      <p></p>
      <p><strong>Adresse IP (next headers real-ip): </strong>${ipNextHeadersReal}</p>
      <p></p>
    `,
  }

  try {
    const verifyCaptchaParams = new URLSearchParams({
      secret: RECAPTCHA_SECRET_KEY ?? '',
      response: reCaptchaToken ?? '',
    })
    const verifyCaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?${verifyCaptchaParams}`
    const isCaptchaValid = await fetch(verifyCaptchaUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((reCaptchaRes) => reCaptchaRes.json())
      .then((reCaptchaRes) => {
        console.log(`Reponse de l'API de verification de Google reCaptcha : `, reCaptchaRes)
        if (reCaptchaRes?.score > 0.5) {
          console.log('SCORE OK')
          return true
        } else {
          console.log('SCORE NOT OK')
          return false
        }
      })

    if (!isCaptchaValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'La validation du reCaptcha Google à échouée',
        },
        { status: 429 },
      )
    }

    sgMail.setApiKey(SENDGRID_API_KEY ?? '')
    await sgMail.send(emailContent)

    return NextResponse.json(
      {
        success: true,
        message: `Message envoyé avec succès. Je vous répondrais dans les plus brefs délais`,
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Une erreur est survenu sur le serveur.',
        error,
      },
      { status: 500 },
    )
  }
}
