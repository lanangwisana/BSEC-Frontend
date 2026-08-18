/**
 * Helper untuk mengubah URL media relatif (seperti /storage/hero_images/xxx.jpg)
 * menjadi URL absolut yang mengarah ke Backend domain (Railway / Localhost).
 */
export const resolveMediaUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('/storage/')) {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api';
    const origin = apiBase.replace(/\/api\/?$/, '');
    return `${origin}${url}`;
  }
  return url;
};
