/**
 * Live fundraising stays disabled until legal status, banking, PayPal
 * eligibility, and Malaysian requirements are confirmed.
 * A feature flag does not replace that approval.
 */
export function donationsLiveEnabled(): boolean {
  return process.env.DONATIONS_LIVE_ENABLED === "true";
}
