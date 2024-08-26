import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginContext from "./LoginContext";

const requireLogin = () => {
    const { user } = useContext(LoginContext);
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!user.username) navigate("/login")
    }, [])
}

export default requireLogin;