import Constants from 'expo-constants'
import DirectoryScreen from './DirectoryScreen';
import { Platform,View } from "react-native";
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
const Drawer=createDrawerNavigator();
const screenOptions={
  headerTintColor:'#fff',
  headerStyle:{backgroundColor:'#5637DD'}
}
const HomeNavigator=()=>{
  const Stack= createStackNavigator();
  return(
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
      name='Home'
      component={HomeScreen}
      options={{title:"Home"}}/>
    </Stack.Navigator>
  )
}
const DirectoryNavigator=()=>{
  const Stack=createStackNavigator();
  return (
      <Stack.Navigator 
      initialRouteName='Directory'
      screenOptions={{
        headerStyle:{
          backgroundColor:'#5637DD'
        },
        headerTintColor:'#fff'
      }}>
        <Stack.Screen
        name='Directory'
        component={DirectoryScreen}
        options={{title:'campsote Directory'}}
        />

        <Stack.Screen
          name='CampsiteInfo'
          component={CampsiteInfoScreen}
          options={({route})=>({
            title:route.params.campsite.name
          })}
        />
      </Stack.Navigator>
  )
}
const Main=()=>{
    return(
  <View style={{flex:1, paddingTop:Platform.OS==='ios'?0:Constants.statusBarHeight}}>
    <Drawer.Navigator
    initialRouteName='HomeNav'
    screenOptions={{
      dreamerStyle:{backgroundColor:'#CEC8ff'},
        headerShown:true
      

    }}>
      <Drawer.Screen
      name='HomeNav'
    component={HomeNavigator}
    options={{
            title: "Home",
            headerShown: false,
          }}
      
      />
      <Drawer.Screen
    name='DirectoryNav'
    component={DirectoryNavigator}
    options={{
            title: "Campsite Directory",
            headerShown: false,
          }}
/>
    </Drawer.Navigator>
    </View>
    );
};
export default Main;