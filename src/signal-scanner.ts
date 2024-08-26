import {Deal, Signal} from "./types";

const sberpSberHistoryAvgDelta = 2;
const tgknHistoryAvgValue = 2_000_000;

const valueScaleCoefficient = 1.4;
const deltaScaleCoefficient = 5;

export const scanning = (deals: Array<Deal>): Array<Signal>  => {
    return [];
}