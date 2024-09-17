import axios from "axios"
import { createContext, useState, useEffect } from "react"

export const UserContext = createContext(null)

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUserProfile = () => {
            try {
                const { data } = axios.get('http://localhost:5001/profile', { withCredentials: true });
                setUser(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setUser(null);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}