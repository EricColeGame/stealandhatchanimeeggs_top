export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Steal and Hatch Anime Eggs Wiki",
  shortName: "Steal and Hatch Anime Eggs",
  logoText: "SHA",
  tagline: "Codes, Pets, Eggs, Strategies & Guides",
  description: "Steal and Hatch Anime Eggs Wiki provides Roblox codes, pet guides, egg locations, updates, strategies, and beginner tips to help players hatch rare anime pets faster.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://stealandhatchanimeeggs.top",
  gameUrl: "https://www.roblox.com/games/104764835849887/Steal-and-Hatch-Anime-Eggs",
  heroVideoId: "1GKbef-KDIs", // Popular gameplay video: I Started Over And Stole Rarest Divine Egg
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
