import React, {useState} from "react";


export default function ExpenseForm(props){

    const [category, setCategory] = useState('')
    const [expense, setExpense] = useState('')
    const [sum, setSum] = useState(0)
    const [message, setMessage] = useState('')
    const [balance, setBalance] = useState('')
    const [updateBalance, setUpdateBalance] = useState(0)
    const [updateExpense, setUpdateExpense] = useState('')
    var finalExpense = 0;
    var goodMessage = "You are good to go!! ";
    const handleBalanceChange = e => {
        setBalance(e.target.value)
    }
    const changeBalance = e => {
        e.preventDefault();
        setUpdateBalance(balance)
    }
    const handleBalanceSubmit = e => {
        e.preventDefault();
        setBalance('');
        setUpdateBalance('')

        if(updateExpense > updateBalance){
            setMessage("Slow down a little...")
        }
        if(updateExpense <= updateBalance){
            setMessage("You are good to go!! ")
        }
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
        var finalSum = sum + parseInt(expense);
        finalExpense = finalSum
        var finalBalance = parseInt(updateBalance);
        setSum(finalSum);
        setUpdateExpense(finalSum);
        console.log("balance is: ", balance);
        console.log("expense is: ", finalSum);
        if(finalSum > finalBalance){
            console.log("Yes.. expense is greater")
            setMessage("Slow down a little...")
        }
        if(finalSum <= finalBalance) {
            setMessage("You are good to go!! ")
        }
    }

    return (

        <div className="mainpage">
            <div className="mainpage-form">
            <h2> Your Balance </h2>
            <p> {updateBalance} $</p>
            <form className = "balance-change" onSubmit={handleBalanceSubmit}>
            <input type = "change"
            placeholder= "Change Balance?"
            onChange = {handleBalanceChange}
            value = {balance}
             />
            <button onClick= {changeBalance}> Enter </button>
            </form>
            </div>

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

            <div  className = "mainpage-form">
            <h2> Summary of Expenses </h2>
            
            <p> Balance: {balance}$</p>
            
            <p> Expense: {updateExpense}$ </p>

            <p className = {message === goodMessage ? 'limit-not-exceed' : 'limit-exceed'}> {message} </p> 

            </div>
        </div>
    )
}
