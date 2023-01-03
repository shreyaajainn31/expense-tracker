import { render } from "@testing-library/react";
import React, {useState} from "react";


export default function Balance(){
    const [balance, setBalance] = useState('')
    const [updateBalance, setUpdateBalance] = useState(0)

    function returnBalance(){
        return parseInt(updateBalance);
    };


    const handleBalanceChange = e => {
        setBalance(e.target.value)
    }
    const changeBalance = e => {
        e.preventDefault();
        setUpdateBalance(balance)
    }
    const handleSubmit = e => {
        e.preventDefault();
        setBalance('');
        setUpdateBalance('')
    }

    return (
        <div className = "mainpage-form">
            <h2> Your Balance </h2>
            <p> {updateBalance} $</p>
            <form className = "balance-change" onSubmit={handleSubmit}>
            <input type = "change"
            placeholder= "Change Balance?"
            onChange = {handleBalanceChange}
            value = {balance}
             />
            <button onClick= {changeBalance}> Enter </button>
            </form>
        </div>
    );
}
