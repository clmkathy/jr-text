import {type} from "os";
import React,{FC}from "react";
import calculatedTax from "@/utils/calculatedTax";
import { TAX_TABLE } from "@/utils/calculatedTax"


const Tax: FC=()=>{
    const myTaxPayable = calculatedTax(200000, TAX_TABLE)
    return (
        <>
            <h1>My tax of this year is $ {myTaxPayable}.</h1>
        </>
    )
}
export default Tax