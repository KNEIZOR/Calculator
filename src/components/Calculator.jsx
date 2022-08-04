import React, { useState } from "react";
import "../styles/calculator.css";
import MyInput from "./UI/MyInput/MyInput";
import Numbers from "./Numbers";

function Calculator() {
    let [number, setNumber] = useState("");
    let [number2, setNumber2] = useState("");
    let [result, setResult] = useState("0");
    let [oper, setOper] = useState("");

    const condition =
        result.includes("+") ||
        result.includes("-") ||
        result.includes("*") ||
        result.includes("/");

    const update = (value) => {

        if (result === "0") {
            result = "";
        }

        if (
            !result.includes("+") &&
            !result.includes("-") &&
            !result.includes("*") &&
            !result.includes("/")
        ) {
            setNumber((number += `${value}`));
        } else {
            setNumber2((number2 += `${value}`));
        }
        setResult((result += `${value}`));
    };

    function sum() {
        if (condition) {
            resultNum();
        }
        setResult((result += " + "));
    }

    function min() {
        if (condition) {
            resultNum();
        }
        setResult((result += " - "));
    }

    function mul() {
        if (condition) {
            resultNum();
        }
        setResult((result += " * "));
    }

    function del() {
        if (condition) {
            resultNum();
        }
        setResult((result += " / "));
    }

    function resultNum() {
        if (result.includes("+")) {
            setResult((result = `${+number + +number2}`));
        }

        if (result.includes("-")) {
            setResult((result = `${+number - +number2}`));
        }

        if (result.includes("*")) {
            setResult((result = `${+number * +number2}`));
        }

        if (result.includes("/")) {
            setResult((result = `${+number / +number2}`));
        }

        setNumber((number = result));
        setNumber2((number2 = 0));
    }

    const change = (operator) => {
        if (operator === "+") {
            sum();
            setOper((oper = "+"));
        }

        if (operator === "-") {
            min();
            setOper((oper = "-"));
        }

        if (operator === "*") {
            mul();
            setOper((oper = "*"));
        }

        if (operator === "/") {
            del();
            setOper((oper = "/"));
        }

        if (operator === "=") {
            resultNum();
        }

        if (operator === "clear") {
            setResult((result = "0"));
            setNumber((number = ""));
            setNumber2((number2 = ""));
            setOper((oper = ""));
        }
    };

    return (
        <div className="calculator">
            <MyInput value={result} placeholder="0" disabled />
            <Numbers
                update={update}
                change={change}
                numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                operators={["+", "-", "*", "/"]}
            />
        </div>
    );
}

export default Calculator;
