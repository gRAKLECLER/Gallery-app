import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase/authentification';
import { onAuthStateChanged, User } from 'firebase/auth';

const initialUser : any = null;

const AuthContext = createContext({
  user: initialUser,
  loading: true
})

export function AuthContextProvider({children}: any) {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

  }, [user]);

  return (
    <AuthContext.Provider value={{user, loading}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;