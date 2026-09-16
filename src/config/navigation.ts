export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: unknown;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  {
    key: "codes",
    isContentType: true,
    path: "/codes",
  },
  {
    key: "guide",
    isContentType: true,
    path: "/guide",
  },
  {
    key: "mechanics",
    isContentType: true,
    path: "/mechanics",
  },
  {
    key: "items",
    isContentType: true,
    path: "/items",
  },
  {
    key: "progression",
    isContentType: true,
    path: "/progression",
  },
  {
    key: "characters",
    isContentType: true,
    path: "/characters",
  },
  {
    key: "community",
    isContentType: true,
    path: "/community",
  },
  {
    key: "controls",
    isContentType: true,
    path: "/controls",
  },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
