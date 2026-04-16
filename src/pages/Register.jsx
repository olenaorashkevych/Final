import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        // 🔐 базова валідація
        if (!email || !password) {
            return setError("Fill all fields");
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters");
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            setLoading(true);

            const res = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Registration failed");
            }

            // ✅ успіх
            alert("Registration successful");

            // 👉 редірект на login
            navigate("/login");

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth">
            <h2>Register</h2>

            <form onSubmit={handleRegister} className="auth__form">
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

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {error && <p className="auth__error">{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Register"}
                </button>
            </form>
        </div>
    );
}