import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

import LoginScreen from '../screens/auth/LoginScreen';
import AdminDashboard from '../screens/admin/AdminDashboard';
import ShopDashboard from '../screens/shop/ShopDashboard';
import CustomerHome from '../screens/customer/CustomerHome';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { userRole, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#131921' }}>
        <ActivityIndicator size="large" color="#ff9900" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userRole === null ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : userRole === 'admin' ? (
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        ) : userRole === 'shop_owner' ? (
          <Stack.Screen name="ShopDashboard" component={ShopDashboard} />
        ) : (
          <Stack.Screen name="CustomerHome" component={CustomerHome} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}