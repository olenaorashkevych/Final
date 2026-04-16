import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;

        fetch("http://localhost:5000/auth/isAuth", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setIsAuth(data.isAuth);
                setUser({ email: data.email });
                if (!data.isAuth) {
                    localStorage.removeItem("token");
                }
            })
            .catch(() => {
                setIsAuth(false);
                localStorage.removeItem("token");
            });
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);