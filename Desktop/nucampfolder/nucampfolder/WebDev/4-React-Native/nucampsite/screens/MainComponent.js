import Constants from 'expo-constants'
import DirectoryScreen from './DirectoryScreen';
import { Image,Text,Platform,View ,StyleSheet} from "react-native";
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import { createStackNavigator} from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import logo from '../assets/images/logo.png';
import ContactScreen from './ContactScreen';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPartners } from '../features/partners/partnersSlice';
import { fetchCampsites } from '../features/campsites/campsitesSlice';
import { fetchPromotions } from '../features/promotions/promotionsSlice';
import { fetchComments } from '../features/comments/commentsSlice';

const Drawer=createDrawerNavigator();
const Stack=createStackNavigator();
const screenOptions={
  headerTintColor:'#fff',
  headerStyle:{backgroundColor:'#5637DD'}
}
const HomeNavigator=()=>{
  
  return(
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
      name='Home'
      component={HomeScreen}
      options={({ navigation }) => ({
    title: 'Home',
    headerLeft:()=>(
      <Icon
    name='home'
    type='font-awesome'
    iconStyle={styles.stackIcon}
    onPress={() => navigation.toggleDrawer()}
/>
    )
})}/>
    </Stack.Navigator>
  )
}
const DirectoryNavigator=()=>{
  

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
        options={({ navigation }) => ({
          title: 'Campsite Directory',
    headerLeft:()=>(
      <Icon
    name='list'
    type='font-awesome'
    iconStyle={styles.stackIcon}
    onPress={() => navigation.toggleDrawer()}
/>),
        })}
        />
        
        <Stack.Screen
          name='CampsiteInfo'
          component={CampsiteInfoScreen}
          options={({route})=>({
            title:route.params.campsite.name
          })}
        />
      </Stack.Navigator>
  
}
const AboutNavigator = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='About' component={AboutScreen} 
        options={({ navigation }) => ({
    headerLeft:()=>(
      <Icon
    name='info-circle'
    type='font-awesome'
    iconStyle={styles.stackIcon}
    onPress={() => navigation.toggleDrawer()}
/>),
        })}
        />
    </Stack.Navigator>
);

const ContactNavigator = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='Contact' component={ContactScreen} 
        options={({ navigation }) => ({
          title:'contact us',
    headerLeft:()=>(
      <Icon
    name='address-card'
    type='font-awesome'
    iconStyle={styles.stackIcon}
    onPress={() => navigation.toggleDrawer()}
/>),
        })}
        />
        
    </Stack.Navigator>
);
const customDrawerContent=(props)=>(
  
  <DrawerContentScrollView{...props}>
    <View style={styles.drawerHeader}>
      <View style={{flex:1}}>
        <Image source={logo} style={styles.drawerImage}/>
      </View>
      <View style={{flex:2}}>
        <Text style={styles.drawerHeaderText}>Nucamp</Text>
      </View>
    </View>
    <DrawerItemList {...props} labelStyle={{fontWeight:'bold'}}/>
  </DrawerContentScrollView>
)

const Main=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(fetchCampsites());
      dispatch(fetchPromotions());
      dispatch(fetchPartners());
      dispatch(fetchComments());
    },[dispatch]);
    return(
  <View style={{flex:1, paddingTop:Platform.OS==='ios'?0:Constants.statusBarHeight}}>
    <Drawer.Navigator
    initialRouteName='HomeNav'
    drawerContent={customDrawerContent}
    screenOptions={{
     drawerStyle: { backgroundColor: '#CEC8ff' }, 
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
          }}/>
    <Drawer.Screen
    name="AboutNav"
    component={AboutNavigator}
    options={{
      title: 'About Us',
      headerShown: false
    }}
  />

  <Drawer.Screen
    name="ContactNav"
    component={ContactNavigator}
    options={{
      title: 'Contact Us',
      headerShown: false
    }}
  />

    </Drawer.Navigator>
    </View>
    );
};
const styles = StyleSheet.create({
    drawerHeader: {
    backgroundColor: '#5637DD',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
},
drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
},
drawerImage: {
    margin: 10,
    height: 60,
    width: 60
},
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});
export default Main;