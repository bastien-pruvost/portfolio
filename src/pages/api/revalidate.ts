import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query.token)

  if (request.query.token !== process.env.REVALIDATION_TOKEN) {
    return response.status(401).json({ message: 'Token invalide' })
  }

  try {
    await response.revalidate('/')
    return response.status(200).json({
      success: true,
      revalidated: true,
      message: 'Revalidation des données éfféctuée avec succés',
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: 'Une erreur est survenu durant la revalidation des données.',
      error,
    })
  }
}

export default handler
