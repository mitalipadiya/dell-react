import * as React from "react";
import styles from "./Input.module.css";

type InputProps = {
    type: string;
    value: string;
    placeholder: string;
    onChange: any;
    label: string;
}

const Input = ({ type, value, placeholder, onChange, label }: InputProps) => {
    return <div className={styles.input_div}>
        <label>{label}</label>
        <input type={type} value={value} placeholder={placeholder} onChange={event => onChange(event.target.value)} />
    </div>

}
export default Input;