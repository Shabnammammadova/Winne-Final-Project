import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSwitch = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            {isLogin ? <Login onSwitch={handleSwitch} /> : <Register onSwitch={handleSwitch} />}
        </div>
    );
};

export default Auth;