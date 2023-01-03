import React from "react";

export default function MainPageForm(){
    return (
        <div className = "mainpage-form">
            <br></br>
            <p> Add Expense Here: </p>
            
            <form className="expense-form">
                <input 
                type = "text" 
                name = "category"
                placeholder="Enter category"
                className = "category-input"

                />
                <button className="category-button"> Enter Category</button>

                <input 
                type = "text" 
                name = "money-spent"
                placeholder="Enter money spent"
                className = "money-spent-input"

                />
                <button className="money-spent-button"> Enter Money Spent</button>
            </form>

        </div>
    );
}
