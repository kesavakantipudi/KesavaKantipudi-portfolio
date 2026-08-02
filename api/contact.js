const REQUIRED_FIELDS = ['name', 'email', 'subject', 'message'];
const MAX_BODY_BYTES = 16 * 1024;
const WEBHOOK_TIMEOUT_MS = 10000;
const EMBED_FIELD_LIMIT = 1024;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DISCORD_WEBHOOK_URL_REGEX = /^https:\/\/discord\.com\/api\/webhooks\/.+$/;

function truncate(value, max = EMBED_FIELD_LIMIT) {
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;

    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('Request body too large.'), { statusCode: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8');
      if (!raw.trim()) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(Object.assign(new Error('Invalid JSON payload.'), { statusCode: 400 }));
      }
    });

    req.on('error', reject);
  });
}

function validatePayload(payload) {
  const source = payload && typeof payload === 'object' ? payload : {};
  const data = {};
  const errors = {};

  for (const field of REQUIRED_FIELDS) {
    const value = typeof source[field] === 'string' ? source[field].trim() : '';
    data[field] = value;
    if (!value) {
      errors[field] = 'This field is required.';
    }
  }

  if (!errors.email && !EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  return { data, errors };
}

function buildDiscordPayload(data) {
  return {
    username: 'Portfolio Contact',
    embeds: [
      {
        title: 'New message from the contact form',
        color: 0x0ea5e9,
        fields: [
          { name: 'Name', value: truncate(data.name), inline: true },
          { name: 'Email', value: truncate(data.email), inline: true },
          { name: 'Subject', value: truncate(data.subject), inline: false },
          { name: 'Message', value: truncate(data.message || '-'), inline: false }
        ],
        timestamp: new Date().toISOString(),
        footer: { text: 'Kesava Kantipudi Portfolio' }
      }
    ]
  };
}

async function sendToDiscord(payload) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl || !DISCORD_WEBHOOK_URL_REGEX.test(webhookUrl)) {
    throw new Error('Discord webhook is not configured.');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`Discord webhook rejected the message (${response.status}).`);
    }
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  if (!process.env.DISCORD_WEBHOOK_URL) {
    return res.status(503).json({ error: 'Contact service is not configured.' });
  }

  let payload;
  try {
    payload = await readJsonBody(req);
  } catch (error) {
    return res.status(error.statusCode || 400).json({ error: error.message });
  }

  const { data, errors } = validatePayload(payload);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Validation failed.', errors });
  }

  try {
    await sendToDiscord(buildDiscordPayload(data));
  } catch (error) {
    console.error('Failed to send contact message to Discord:', error);
    return res.status(502).json({ error: 'Failed to send your message. Please try again.' });
  }

  return res.status(200).json({ success: true, message: 'Message sent successfully.' });
}
