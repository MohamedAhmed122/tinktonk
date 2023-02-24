import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {CameraNavigator} from '../camera-navigation';
import {DrawerParamList, DrawerParams} from './type';
import {ProfileNavigator} from '../profile-navigation';
import {SettingNavigator} from '../setting-navigation';

const Drawer = createDrawerNavigator<DrawerParamList>();
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerParams.CameraDrawer}
      screenOptions={{
        drawerPosition: 'right',
      }}
      //   drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name={DrawerParams.CameraDrawer}
        component={CameraNavigator}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          return {
            swipeEnabled: !routeName || routeName === DrawerParams.CameraDrawer,
          };
        }}
      />
      <Drawer.Screen
        name={DrawerParams.ProfileDrawer}
        component={ProfileNavigator}
      />
      <Drawer.Screen
        name={DrawerParams.SettingDrawer}
        component={SettingNavigator}
      />
    </Drawer.Navigator>
  );
};
