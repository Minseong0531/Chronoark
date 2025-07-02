export function fixPath(path) {
    if (!path) return "";
    if (path.startsWith('http')) return path;
    return `${process.env.PUBLIC_URL}/${path.replace(/^\/+/, '')}`;
  }