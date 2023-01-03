import React, {useState} from "react";

export default function MainPageForm(props){

    const [category, setCategory] = useState('')
    const [expense, setExpense] = useState('')
    const [sum, setSum] = useState(0)
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
        let inputSum = parseInt(expense);
        
        if(isNaN(inputSum)){
            setSum(sum);
            return
        }
    
        setSum(sum + parseInt(expense));
    }

    return (

        <div className = "mainpage-form">
            <br></br>
            <p>
            Money spent so far:
           </p>
            {sum}$
            <p> Add Expense Here: </p>
            
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
    );
}
