import * as React from "react";
import { User } from "../models/User.model";
import { useState } from "react";
import styles from "./UserTable.module.css";
type UserTableProps = {
    userDetails: User[]
}
const UserTable = ({ userDetails }: UserTableProps) => {
    const [sortBy, setSortBy] = useState<string>("name");
    const sortTableBy = ():User[] => {
        switch(sortBy) {
            case "name":
                return userDetails.sort((a: User, b: User) => {
                    return a.name.localeCompare(b.name)
                })
            case "email":
                return userDetails.sort((a: User, b: User) => {
                    return a.email.localeCompare(b.email)
                })
            case "city":
                return userDetails.sort((a: User, b: User) => {
                    return a.address?.city.localeCompare(b.address?.city)
                })
            case "company":
                return userDetails.sort((a: User, b: User) => {
                    return a.company?.name.localeCompare(b.company?.name)
                })
        }
    }
    const sortData = (key:string) => {
        return 
    }
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th onClick={()=>setSortBy("name")}>Name</th>
                    <th onClick={()=>setSortBy("email")}>Email</th>
                    <th onClick={()=>setSortBy("city")}>City</th>
                    <th onClick={()=>setSortBy("company")}>Company</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortTableBy().map((user) => {
                        return <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address?.city}</td>
                            <td>{user.company?.name}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
export default UserTable;