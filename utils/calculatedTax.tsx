import {type} from "os";
import React,{FC}from "react";

export const TAX_TABLE = [
    {min: 0, max: 18200, base: 0, rate: 0},
    {min: 18201, max: 37000, base: 0, rate: 0.19},
    {min: 37000, max: 90000, base: 3572, rate: 0.325},
    {min: 90001, max: 180000, base: 20797, rate: 0.37},
    {min: 180001, max: Number.POSITIVE_INFINITY, base: 54096, rate: 0.45},
]
const calculatedTax = (taxableIncome: number, TAX_TABLE: any) => {
// 1 建立一个税表

// 2.找到相应的纳税区间
    let taxRow
    for (let i = 0; i < TAX_TABLE.length; i++) {
        if (taxableIncome > TAX_TABLE[i].min && taxableIncome <= TAX_TABLE[i].max) {
            taxRow = TAX_TABLE[i]
        }
    }

    const {base, min, rate} = taxRow
    const taxPayable = base + (taxableIncome - min) * rate
    return taxPayable

}

export default calculatedTax