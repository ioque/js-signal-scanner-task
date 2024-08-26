import {describe, expect, test} from '@jest/globals';
import {scanning} from "./signal-scanner";

describe('signal-scanner module', () => {
    test("scanning test", () => {
        const expectedSignals = [
            {
                ticker: "TGKN",
                openPrice: "16",
                algorithm: "ANOMALY_VOLUME",
                date: new Date(2024, 8, 26, 10, 14, 40, 0)
            },
            {
                ticker: "SBERP",
                openPrice: "239",
                algorithm: "DELTA ANALYSIS",
                date: new Date(2024, 8, 26, 10, 13, 0, 0)
            }
        ]

        expect(scanning(deals)).toEqual(expectedSignals)
    })
})

const deals = [
    {
        "ticker": "SBER",
        "value": 240_000_000,
        "price": 242,
        "date": new Date(2024, 8, 26, 10, 10, 0, 0)
    },
    {
        "ticker": "TGKN",
        "value": 130_000,
        "price": 13,
        "date": new Date(2024, 8, 26, 10, 10, 15, 0)
    },
    {
        "ticker": "SBERP",
        "value": 240_000,
        "price": 240,
        "date": new Date(2024, 8, 26, 10, 11, 4, 0)
    },
    {
        "ticker": "SBERP",
        "value": 239_000,
        "price": 239,
        "date": new Date(2024, 8, 26, 10, 11, 50, 0)
    },
    {
        "ticker": "SBER",
        "value": 241_000_000,
        "price": 241,
        "date": new Date(2024, 8, 26, 10, 12, 0, 0)
    },
    {
        "ticker": "SBER",
        "value": 244_000_000,
        "price": 244,
        "date": new Date(2024, 8, 26, 10, 13, 0, 0)
    },
    {
        "ticker": "TGKN",
        "value": 260_000,
        "price": 13.5,
        "date": new Date(2024, 8, 26, 10, 13, 10, 0)
    },
    {
        "ticker": "TGKN",
        "value": 1_390_000,
        "price": 14,
        "date": new Date(2024, 8, 26, 10, 13, 20, 0)
    },
    {
        "ticker": "TGKN",
        "value": 1_590_000,
        "price": 15,
        "date": new Date(2024, 8, 26, 10, 14, 10, 0)
    },
    {
        "ticker": "TGKN",
        "value": 5_390_000,
        "price": 16,
        "date": new Date(2024, 8, 26, 10, 14, 40, 0)
    },
];