import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Dashboard from '../screens/dashboard';
import Complaint from '../screens/complaint';
import WinService from '../screens/winservice';
import WinList from '../screens/WinList';
import Windetail from '../screens/Windetail';

const Drawer = createDrawerNavigator();
const Comp = createNativeStackNavigator();
const Win = createNativeStackNavigator();
const Dash = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Dash.Navigator initialRouteName='dashboard' screenOptions={{ headerShown: false }}>
      <Dash.Screen name='Dashboard' component={Dashboard}
      options={{
        headerTitle: "Dashboard",
      }}
      />
      <Dash.Screen name='Complaint' component={Complaint}
        options={{
          headerTitle: "รายการการร้องเรียน",
        }}
      />
    </Dash.Navigator>
  )
}

const WinServiceStack = () => {
  return(
  <Win.Navigator initialRouteName='winservice' screenOptions={{ headerShown: true}}>
    <Win.Screen name='จุดบริการมอเตอร์ไซค์รับจ้าง' component={WinService} 
     options={{
      title: "จุดบริการมอเตอร์ไซค์รับจ้าง",
    }}
    />
    <Win.Screen name='WinList' component={WinList}
    />
    <Win.Screen name='WinDetail' component={Windetail}
    />
  </Win.Navigator>
)}

const ComplaintStack = () => {
  return(
  <Comp.Navigator initialRouteName='complaint' screenOptions={{ headerShown: true }}>
    <Comp.Screen name='รายการการร้องเรียน' component={Complaint} />
  </Comp.Navigator>
)}
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard"
      screenOptions={{
        headerShown:false
      }}
      >
        <Drawer.Screen name="Dashboard" component={DashboardStack}
          options={{
            drawerLabel: "Dashboard",
            drawerIcon: ({ color }) => {
              return <MaterialCommunityIcons name="view-dashboard-outline" size={24} color={color} />;
            },
          }}
        />
        <Drawer.Screen name="จุดบริการมอเตอร์ไซค์รับจ้าง" component={WinServiceStack}
          options={{
            drawerLabel: "จุดบริการมอเตอร์ไซค์รับจ้าง",
            drawerIcon: ({ color }) => {
              return <MaterialCommunityIcons name="map-marker-radius-outline" size={24} color={color} />;
              //<MaterialCommunityIcons name="map-marker-outline" size={24} color="black" />
            },
          }}
        />
        <Drawer.Screen name="รายการการร้องเรียน" component={ComplaintStack}
          options={{
            drawerLabel: "รายการการร้องเรียน",
            drawerIcon: ({ color }) => {
              return <FontAwesome5 name="envelope" size={24} color={color} />;
            },
          }}
        />
        
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

