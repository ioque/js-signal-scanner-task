export type Deal = {
    ticker: string;
    value: number;
    price: number;
    date: Date;
}

export type Signal = {
    ticker: string;
    openPrice: number;
    algorithm: "ANOMALY_VOLUME" | "DELTA ANALYSIS";
    date: Date;
}