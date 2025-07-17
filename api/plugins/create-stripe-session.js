// pages/api/plugins/create-stripe-session.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { pluginId, email } = req.body;

  if (!pluginId || !email) {
    return res.status(400).json({ error: 'Missing pluginId or email' });
  }

  try {
    // Thêm dữ liệu vào bảng plugins
    const { data, error } = await supabase
      .from('plugins')
      .insert([{ plugin_id: pluginId, email: email }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Tạm thời chỉ trả lại kết quả insert (nếu bạn chưa tạo session Stripe)
    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
