import {Deal, Signal} from "./types";

const sberpSberHistoryAvgDelta = 2;
const sberSberpScaleCoefficient = 1.4

const tgknHistoryAvgValue = 2_000_000;
const tgknScaleCoefficient = 5;

export const scanning = (deals: Array<Deal>): Array<Signal>  => {
    return [];
}