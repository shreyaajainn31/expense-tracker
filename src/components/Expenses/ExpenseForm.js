import React, {useState} from "react";

import Balance from "../Balance/BalanceForm";

export default function ExpenseForm(props){

    const [category, setCategory] = useState('')
    const [expense, setExpense] = useState('')
    const [sum, setSum] = useState(0)
    
    function returnExpense(){
        return expense;
    }
    
    const handleCategoryChange = e => {
        setCategory(e.target.value);

    }
    const handleExpenseChange = e => {
        setExpense(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setCategory('');
        setExpense('');
    };

    const addExpense = balance => {
        let inputSum = parseInt(expense)
        if(isNaN(inputSum)){
            setSum(sum);
            return
        }

        setSum(sum + parseInt(expense));
    }

    return (

        <div className="mainpage">
            <div className = "mainpage-form">
            <h2>
            Money spent so far:
           </h2>
            {sum}$
            <h2> Add Expense Here: </h2>
            
            <form className="expense-form" onSubmit={handleSubmit}>
                <input 
                type = "text" 
                name = "category"
                placeholder="Enter category"
                className = "category-input"
                onChange={handleCategoryChange}
                value = {category}
                />
               
                <br></br>

                <input 
                type = "text" 
                name = "money-spent"
                id = "num"
                placeholder="Enter money spent"
                className = "money-spent-input"
                onChange={handleExpenseChange}
                value = {expense}

                />

                <br></br>

                <button className="money-spent-button" onClick={addExpense}
            
                > Enter </button>
            </form>
            </div>
        </div>
    )
}