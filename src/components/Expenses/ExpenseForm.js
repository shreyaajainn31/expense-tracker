import React, {useState} from "react";

export let expenditureArray = []
export default function ExpenseForm(props){

    const [category, setCategory] = useState('')
    const [expense, setExpense] = useState('')
    const [sum, setSum] = useState(0)
    const [message, setMessage] = useState('')
    const [balance, setBalance] = useState('')
    const [updateBalance, setUpdateBalance] = useState(0)
    const [updateExpense, setUpdateExpense] = useState('')
    const expenditureObject = useState({
        oCategory:'',
        oExpense:''
    })
    const [state,setState] = useState(expenditureArray);
    

    var goodMessage = "You are good to go!! ";
   
    const handleBalanceChange = e => {
        setBalance(e.target.value)
    }
   
    const changeBalance = e => {
        e.preventDefault();
        setUpdateBalance(balance)
        if(expense > balance){
            setMessage("Slow down a little...")
        }
        if(expense <= balance){
            setMessage("You are good to go!! ")
        }
    }
   
    const handleBalanceSubmit = e => {
        e.preventDefault();
        setBalance('');
        setUpdateBalance('')

      
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

    function Print(){
      return(

        expenditureArray.map((item) =>
        <table className="table">

            <tr>
            <td>
                {item.oCategory}
            </td>
            <td>
                {item.oExpense}$
            </td>
            </tr>
            
        </table>

    )
      )
    }

    const addExpense = balance => {
        let inputSum = parseInt(expense)
        if(isNaN(inputSum)){
            setSum(sum);
            return
        }
        var finalSum = sum + parseInt(expense);
        var finalBalance = parseInt(updateBalance);
        setSum(finalSum);
        setUpdateExpense(finalSum);
        if(finalSum > finalBalance){
            setMessage("Slow down a little...")
        }
        if(finalSum <= finalBalance) {
            setMessage("You are good to go!! ")
        }
        const expenditureObject = {};
        expenditureObject.oCategory = category;
        expenditureObject.oExpense = expense;
        expenditureArray.push(expenditureObject);
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
            
            <p> Balance: {updateBalance}$</p>
            
            <p className = {message === goodMessage ? 'limit-not-exceed' : 'limit-exceed'}> Expense: {updateExpense}$ </p>

            <p className = {message === goodMessage ? 'limit-not-exceed' : 'limit-exceed'}> {message} </p> 

            </div>

            <div>
            <h2> These are your expenses </h2>
            <table class = "table">
                <tr>
                    <th>Category</th>
                    <th>Expense</th>
                </tr>
            </table>
            <Print />
            </div>

        </div>
    )
}
