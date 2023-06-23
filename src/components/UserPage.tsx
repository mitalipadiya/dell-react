import * as React from "react";
import { User } from "../models/User.model";
import { useHttp } from "../utitlities/use-http";
import UserTable from "./UserTable";

const UserPage = () =>{
    const {data, error, isLoading} = useHttp<User[]>("", "GET", null);
    return (
        <div>
            {data?.length ? <UserTable userDetails={data}/> : null}
        </div>
    )

}
export default UserPage;