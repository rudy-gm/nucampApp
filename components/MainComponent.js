import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { View, Platform } from "react-native";
import { Constants } from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CampsiteInfo from "./CampsiteInfoComponent";

const DirectoryNavigator = createStackNavigator(
  {
      Directory: { screen: Directory },
      CampsiteInfo: { screen: CampsiteInfo }
  }, 
  {
      initialRouteName: 'Directory',
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {
  render() {
      return (
          <View
              style={{
                  flex: 1,
                  // paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
          }}>
              <AppNavigator />
          </View>
      );
  }
}

export default Main;