/**
 * Browser Supabase helper. Unused until the authentication milestone.
 * This file must never read the service-role key.
 */
export type SupabaseBrowserConfig = {
  url: string;
  anonKey: string;
};

export function getSupabaseBrowserConfig(): SupabaseBrowserConfig {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  };
}
