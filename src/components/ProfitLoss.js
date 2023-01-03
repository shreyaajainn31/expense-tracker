import React, {useState} from "react";
import Balance from "./BalanceForm";
import MainPageForm from "./MainPageForm";

export default function ProfitLoss(){
    return (
        <div className = "profit">
           
            <h2> Lets Check where you stand... </h2>
            let expense = returnExpense();
            let balance = returnBalance();

            if(expense &gt balance){
                <p> Slow down on expenses!!!</p>
            }
            else{
                <p> You can spend more! </p>
            }

        </div>
    );
}
