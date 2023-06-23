import * as React from "react";
import Input from "./UI/Input";
import { useState } from "react";

const AddUserForm = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const addUserHandler = () => {
        const newUser = {
            name: name,
            email: email,
            city: city,
            company: company
        }
        console.log(newUser);
    }

    return <form>
        <Input label="Name" value={name} placeholder="Enter name" type="text" onChange={(event: string) => setName(event)} />
        <Input label="Email" value={email} placeholder="Enter email" type="email" onChange={(event: string) => setEmail(event)} />
        <Input label="City" value={city} placeholder="Enter city" type="text" onChange={(event: string) => setCity(event)} />
        <Input label="Company" value={company} placeholder="Enter company" type="text" onChange={(event: string) => setCompany(event)} />
        <button onClick={addUserHandler}>Add User</button>
    </form>

}
export default AddUserForm;