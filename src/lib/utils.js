export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export function slugify(text) {
  if (!text) return '';
  const charMap = {
    'İ': 'i', 'I': 'i', 'ı': 'i',
    'ş': 's', 'Ş': 's',
    'ğ': 'g', 'Ğ': 'g',
    'ü': 'u', 'Ü': 'u',
    'ö': 'o', 'Ö': 'o',
    'ç': 'c', 'Ç': 'c',
    'ä': 'a', 'Ä': 'a',
    'ß': 'ss'
  };

  let str = text;
  for (const [key, value] of Object.entries(charMap)) {
    str = str.replace(new RegExp(key, 'g'), value);
  }

  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
