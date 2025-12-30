// pages/api/secret.js
export default function handler(req, res) {
  const apiKey = req.headers['x-api-key'];
  
  // Demo mode: show info about the API
  if (req.method === 'GET') {
    return res.status(200).json({
      message: '🔐 Secret API Endpoint',
      status: 'active',
      info: 'This is a protected API route example',
      usage: 'Send a request with header "x-api-key" to authenticate',
      demo: {
        authenticated: apiKey === process.env.SECRET_API_KEY,
        secret: apiKey === process.env.SECRET_API_KEY 
          ? '🎉 Next.js is awesome!' 
          : '🔒 Provide valid API key to unlock',
      },
      timestamp: new Date().toISOString(),
    });
  }
  
  res.status(405).json({ message: 'Method not allowed' });
}
