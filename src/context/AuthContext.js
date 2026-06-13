import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  const loadStorageData = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('@user_session');
      const storedRole = await AsyncStorage.getItem('@user_role');
      if (storedUser && storedRole) {
        setUser(JSON.parse(storedUser));
        setUserRole(storedRole);
      }
    } catch (e) {
      console.log('Error loading storage', e);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email) => {
    setIsLoading(true);
    let role = 'customer';
    let userData = { email, name: 'Anbu Customer' };

    if (email === 'admin@gmail.com') {
      role = 'admin';
      userData = { email, name: 'App Super Owner' };
    } else if (email === 'shop@gmail.com') {
      role = 'shop_owner';
      userData = { email, name: 'Saravana Stores' };
    }

    setUser(userData);
    setUserRole(role);
    await AsyncStorage.setItem('@user_session', JSON.stringify(userData));
    await AsyncStorage.setItem('@user_role', role);
    setIsLoading(false);
  };

  const logout = async () => {
    setUser(null);
    setUserRole(null);
    await AsyncStorage.removeItem('@user_session');
    await AsyncStorage.removeItem('@user_role');
  };

  return (
    <AuthContext.Provider value={{ user, userRole, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};