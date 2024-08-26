import React from "react"
import { redirect } from "react-router-dom";

const LogoutRoute = ({ logout }) => {
    logout()
    
    return redirect("/");
}

export default LogoutRoute;