/** Prefixes a public asset path with the deployment basePath (for GitHub Pages /anurag-jewellers/). */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  return `${basePath}${path.startsWith('/') ? path : '/' + path}`;
}
