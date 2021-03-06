import React, { Component } from "react";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Constants from "expo-constants";
import CampsiteInfo from "./CampsiteInfoComponent";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Icon } from "react-native-elements";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";
import {
  fetchCampsites,
  fetchComments,
  fetchPartners,
  fetchPromotions,
} from "../redux/ActionCreators";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Reservation from "./ReservationComponent";
import Favorites from "./FavoritesComponent";
import Login from "./LoginComponent";
import NetInfo from "@react-native-community/netinfo";

const mapDispatchToProps = {
  fetchCampsites,
  fetchComments,
  fetchPartners,
  fetchPromotions,
};

const DirectoryNavigator = createStackNavigator(
  {
    Directory: {
      screen: Directory,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          ></Icon>
        ),
      }),
    },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        ></Icon>
      ),
    }),
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="address-card"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        ></Icon>
      ),
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="info-circle"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        ></Icon>
      ),
    }),
  }
);

const ReservationNavigator = createStackNavigator(
  {
    Reservation: { screen: Reservation },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="tree"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        ></Icon>
      ),
    }),
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: { screen: Favorites },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="heart"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        ></Icon>
      ),
    }),
  }
);

const LoginNavigator = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="sign-in"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        ></Icon>
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/logo.png")}
            style={styles.drawerImage}
          ></Image>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>NuCamp</Text>
        </View>
      </View>

      <DrawerItems {...props}></DrawerItems>
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="sign-in"
            type="font-awesome"
            size={24}
            color={tintColor}
          ></Icon>
        ),
      },
    },

    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="home"
            type="font-awesome"
            size={24}
            color={tintColor}
          ></Icon>
        ),
      },
    },
    Directory: {
      screen: DirectoryNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="list"
            type="font-awesome"
            size={24}
            color={tintColor}
          ></Icon>
        ),
      },
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        drawerLabel: "Reserve Campsite",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="tree"
            type="font-awesome"
            size={24}
            color={tintColor}
          ></Icon>
        ),
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        drawerLabel: "My Favories",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="heart"
            type="font-awesome"
            size={24}
            color={tintColor}
          ></Icon>
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={tintColor}
          ></Icon>
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="addres-card"
            type="font-awesome"
            size={24}
            color={tintColor}
          ></Icon>
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "#CEC8FF",
    contentComponent: CustomDrawerContentComponent,
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  componentDidMount() {
    this.props.fetchCampsites();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchPartners();

    showNetInfo = async()=>{

     const connectionInfo = await NetInfo.fetch()

      Platform.OS === "ios"
      ? Alert.alert("Initial Network Connectivity Type:", connectionInfo.type)
      : ToastAndroid.show(
          "Initial Network Connectivity Type:" + connectionInfo.type,
          ToastAndroid.LONG
        );

    }

    this.unsubscribeNetinfo = NetInfo.addEventListener((connectionInfo) => {
      this.handleConnectivityChange(connectionInfo);
    });
  }

  componentWillUnmount() {
    this.unsubscribeNetinfo();
  }

  handleConnectivityChange = (connectionInfo) => {
    let connectionMsg = "You are now connected to an active network";

    switch (connectionInfo.type) {
      case "none":
        connectionMsg = "No Network connection is active";
        break;

      case "unknown":
        connectionMsg = "The network connection is now unknown";
        break;

      case "cellular":
        connectionMsg = "You are now connected to a cellular network";
        break;

      case "wifi":
        connectionMsg = "You are now connected to a WiFi network";
        break;
    }

    (Platform.OS ==='ios')
    ? Alert.alert('Connection change', connectionMsg)
    : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);

    
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#5637DD",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default connect(null, mapDispatchToProps)(Main);
