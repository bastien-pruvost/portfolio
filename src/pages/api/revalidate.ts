import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.query.token !== process.env.REVALIDATION_TOKEN) {
    return response.status(401).json({ message: 'Invalid token.' })
  }

  const pathToRevalidate = request.query.path ?? 'profile'

  if (Array.isArray(pathToRevalidate)) {
    return response.status(400).json({ message: 'Invalid path.' })
  }

  try {
    await response.revalidate(`/${pathToRevalidate}`)
    return response.status(200).json({
      success: true,
      revalidated: true,
      message: `Data successfully revalidated.`,
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: 'An error occurred during data revalidation.',
      error,
    })
  }
}

export default handler
