import { createContext, useContext } from "react";

const AuthContext = createContext();

const API_URL = "https://696353f42d146d9f58d32f7b.mockapi.io/users";

export function AuthProvider({ children }) {

  // 🔐 SIGNUP
  const signup = async (form) => {
    try {
      // 1️⃣ Check if user exists
      const checkRes = await fetch(
        `${API_URL}?email=${form.email}`
      );
      const users = await checkRes.json();

      // 2️⃣ If user already exists
      if (users.length > 0) {
        return { error: "User already exists. Please login." };
      }

      // 3️⃣ Create new user
      const createRes = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: "user",
        }),
      });

      const newUser = await createRes.json();
      localStorage.setItem("user", JSON.stringify(newUser));

      return { success: true };

    } catch (err) {
      return { error: "Something went wrong" };
    }
  };

  // 🔑 LOGIN
  const login = async (email, password) => {
    try {
      const res = await fetch(
        `${API_URL}?email=${email}&password=${password}`
      );
      const users = await res.json();

      if (users.length === 0) {
        return { error: "Invalid email or password" };
      }

      localStorage.setItem("user", JSON.stringify(users[0]));
      return { success: true };

    } catch {
      return { error: "Login failed" };
    }
  };

  return (
    <AuthContext.Provider value={{ signup, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
