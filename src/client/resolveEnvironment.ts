export type ResolvedEnvironment = 'Simulation' | 'Live';

/**
 * Fail-closed environment resolution.
 * - 'simulation' (trimmed, case-insensitive) -> Simulation.
 * - 'live' -> Live only when a second key is also set: `allowLive === true`
 *   in config, or TRADESTATION_LIVE_APPROVED === 'true' in the environment.
 * - anything else (unset, empty, 'sim', 'paper', typos) throws. Never falls back to Live.
 */
export function resolveEnvironment(
    value: string | undefined,
    allowLive?: boolean,
): ResolvedEnvironment {
    const normalized = typeof value === 'string' ? value.trim().toLowerCase() : '';
    if (normalized === 'simulation') {
        return 'Simulation';
    }
    if (normalized === 'live') {
        if (allowLive === true || process.env.TRADESTATION_LIVE_APPROVED === 'true') {
            return 'Live';
        }
        throw new Error(
            "Environment 'Live' requires a second key: set allowLive: true or TRADESTATION_LIVE_APPROVED=true",
        );
    }
    throw new Error(
        `Unknown environment ${JSON.stringify(value)}: expected 'Simulation' or 'Live'`,
    );
}

export const SIMULATION_BASE_URL = 'https://sim-api.tradestation.com';
export const LIVE_BASE_URL = 'https://api.tradestation.com';
