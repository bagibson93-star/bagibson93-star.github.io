/** Prefix a /public path with the basePath (needed for GitHub Pages project sites). */
export const asset = (path: string) =>
  path && path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}` : path;

/** True when a link is a real URL (not a "#" or "" placeholder). */
export const isRealLink = (href?: string) => !!href && href !== "#";
