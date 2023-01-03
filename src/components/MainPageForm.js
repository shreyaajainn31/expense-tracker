import React, {useState} from "react";

export default function MainPageForm(props){

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        setInput('');
    };

    return (

        <div className = "mainpage-form">
            <br></br>
        
            <p> Add Expense Here: </p>
            
            <form className="expense-form" onSubmit={handleSubmit}>
                <input 
                type = "text" 
                name = "category"
                placeholder="Enter category"
                className = "category-input"
                onChange={handleChange}

                />
                <button className="category-button"> Enter Category</button>

                <input 
                type = "text" 
                name = "money-spent"
                placeholder="Enter money spent"
                className = "money-spent-input"
                onChange={handleChange}

                />
                <button className="money-spent-button"> Enter Money Spent</button>
            </form>

        </div>
    );
}
