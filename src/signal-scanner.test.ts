import {describe, expect, test} from '@jest/globals';
import {scanning} from "./signal-scanner";

describe('signal-scanner module', () => {
    test("anomaly volume test", () => {
        const deals = [
            {
                "ticker": "AFKS",
                "value": 1000,
                "price": 10
            },
        ]

        expect(scanning(deals)).toStrictEqual([])
    })
})