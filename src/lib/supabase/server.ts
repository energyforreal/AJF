/**
 * Server Supabase helper. Unused until the authentication milestone.
 * The service-role key stays in server-side code and must not be imported
 * into client components.
 */
export type SupabaseServerConfig = {
  url: string;
  anonKey: string;
  serviceRoleKey: string;
};

export function getSupabaseServerConfig(): SupabaseServerConfig {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  };
}
