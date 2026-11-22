export interface ClientConfig {
    clientId?: string;
    clientSecret?: string;
    refresh_token?: string;
    maxConcurrentStreams?: number;
    environment?: 'Simulation' | 'Live';
    /** Second key required for 'Live' (or set TRADESTATION_LIVE_APPROVED=true). */
    allowLive?: boolean;
}

export interface AuthResponse {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
}

export interface ApiError {
    error: string;
    error_description?: string;
    status?: number;
} 