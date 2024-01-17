import { useState, useContext, createContext, useEffect } from 'react';

import { register as registerApi, login as loginApi } from '../api/auth.api';

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be within an AuthProvider');
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const register = async (payload) => {
    setIsLoading(true);
    //sign up user
    try {
      const res = await registerApi(payload);
      setUser(res);
      setIsAuth(true);
      console.log(res);
      window.localStorage.setItem('auth', JSON.stringify(res));
    } catch (error) {
      setUser(null);
      setIsAuth(false);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (payload) => {
    setIsLoading(true);
    // login user
    try {
      const res = await loginApi(payload);
      setUser(res);
      setIsAuth(true);
      window.localStorage.setItem('auth', JSON.stringify(res));
    } catch (error) {
      console.log('loginAuthContextError');
      setUser(null);
      setIsAuth(false);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
    window.localStorage.clear();
  };

  useEffect(() => {
    const auth = window.localStorage.getItem('auth');

    if (auth) {
      setUser(JSON.parse(auth));
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuth, register, login, logout }}>{children}</AuthContext.Provider>
  );
};
