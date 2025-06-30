import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.OMNIDIM_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OmniDimension API key not set' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, agent_id, message } = req.body;
  if (!to || !agent_id) {
    return res.status(400).json({ error: 'Missing required fields: to, agent_id' });
  }

  // Example: Start an outbound call (adjust endpoint and payload as needed)
  const response = await fetch('https://api.omnidim.io/v1/call/start', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to,
      agent_id,
      message, // Optional: pass a message to start the call with
    }),
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
