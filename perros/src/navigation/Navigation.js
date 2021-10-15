import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cats from "../screens/Cats";
import Dogs from "../screens/Dogs";
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
export default function Navigation(){
    return(
        <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Cats') {
                      iconName = focused
                        ? 'cat'
                        : 'cat';
                    } else if (route.name === 'Dogs') {
                      iconName = focused ? 'dog' : 'dog';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: '#3284ce',
                  tabBarInactiveTintColor: 'gray',
                })}
      >
            <Tab.Screen name="Cats" component={Cats} options={{title:'Cats'}}/>
            <Tab.Screen name="Dogs" component={Dogs} options={{title:'Dogs'}} />
        </Tab.Navigator>
    );
}