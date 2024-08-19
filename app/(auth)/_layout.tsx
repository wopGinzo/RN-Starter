import type {
    MaterialTopTabNavigationEventMap,
    MaterialTopTabNavigationOptions,
  } from '@react-navigation/material-top-tabs';
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  import {
    useTheme,
    type ParamListBase,
    type TabNavigationState,
  } from '@react-navigation/native';
  import { withLayoutContext } from 'expo-router';
  
  const { Navigator } = createMaterialTopTabNavigator();
  
  const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
  >(Navigator);
  
  export default function AuthLayout() {
    const { colors } = useTheme();
    return (
      <MaterialTopTabs
      style={{display:'flex',flex:1}}
        initialRouteName='login'
        screenOptions={{
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            fontSize: 14,
            textTransform: 'capitalize',
            fontWeight: 'bold',
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.text,
          },
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: 'auto', minWidth: 100, marginTop:30,flex:1 ,display:'flex'},
        }}
      >
        <MaterialTopTabs.Screen
          name='login'
          options={{
            title: 'login',
          }}
        />
        <MaterialTopTabs.Screen
          name='signup'
          options={{
            title: 'signup',
          }}
        />
      </MaterialTopTabs>
    );
  }