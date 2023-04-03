import { createContext, useState } from "react";
import useProtectedRoute from "../../hook/useProtectedRoute";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // useProtectedRoute(user);
    return (
        <authContext.Provider
            value={{
                user,
                signIn: () => setUser({}),
                signOut: () => setUser(null),
            }}
        >
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
