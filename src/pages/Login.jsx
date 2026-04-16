import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { useAuth } from "../context/AuthContext";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            return setError("Fill all fields");
        }

        try {
            setLoading(true);

            const res = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            console.log("LOGIN RESPONSE:", data);

            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }

            if (data.token) {
                login(data.token);
                navigate("/");
            }

        } catch (err) {
            setError(err.message);
            console.error("LOGIN ERROR:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth">
            <h2>Login</h2>

            <form onSubmit={handleLogin} className="auth__form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="auth__error">{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
    );
}