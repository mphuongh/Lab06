// pages/api/secret.js
export default function handler(req, res) {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === process.env.SECRET_API_KEY) {
    res.status(200).json({ secret: 'Next.js is cool' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}
