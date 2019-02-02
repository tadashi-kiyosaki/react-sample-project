import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  Switch
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import {
  RkSwitch,
  FindFriends,
} from '../../components';
import { FontAwesome } from '../../assets/icons';
import { DarkKittenTheme } from '../../config/darkTheme';
import { KittenTheme } from '../../config/theme';

export class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // route: 'Login',
      reader: '',
      theme: false,
      sendPush: true,
      shouldRefresh: false,
      twitterEnabled: true,
      googleEnabled: false,
      facebookEnabled: true,
      // theme: false,
      notification: false, 
      falseSwitchIsOn: false
    };
  }
  static navigationOptions = {
    title: 'Settings'.toUpperCase(),
  };

  onPushNotificationsSettingChanged = (value) => {
    this.setState({ sendPush: value });
    this.props.navigation.navigate("MainHome");
  };

  onRefreshAutomaticallySettingChanged = (value) => {
    this.setState({ shouldRefresh: value });
  };

  onFindFriendsTwitterButtonPressed = () => {
    this.setState({ twitterEnabled: !this.state.twitterEnabled });
  };

  onFindFriendsGoogleButtonPressed = () => {
    this.setState({ googleEnabled: !this.state.googleEnabled });
  };

  onFindFriendsFacebookButtonPressed = () => {
    this.setState({ facebookEnabled: !this.state.facebookEnabled });
  };

  moveToCategory = () => {

  }

  onSwitchThemeChange = (value) => {
    this.setState({ theme: value });
    if (!this.state.theme)
    {
      StatusBar.setBarStyle('light-content', true);
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(DarkKittenTheme.colors.screen.base);
      }
      RkTheme.setTheme(DarkKittenTheme);
    }
    else{
      StatusBar.setBarStyle('dark-content', true);
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(KittenTheme.colors.screen.base);
      }
      RkTheme.setTheme(KittenTheme);
    }
  }


  onSwitchNotification = (vaule) => {
    // this.props.navigation.navigate("MainHome");
    this.setState({ notification: value });
  }
  moveToAdvancedSetting = () => {
    this.props.navigation.navigate("AdvancedSetting");
  }
  moveToPrivacySetting = () => {
    this.props.navigation.navigate("PrivacySetting");
  }
  moveToHome = () => {
    this.props.navigation.navigate("MainHome");
  };
  moveToNotification = () => {
    this.props.navigation.navigate("Notification");
  };
  moveToProfile = () => {
    this.props.navigation.navigate("Profile");
  };
  moveToChannels = () => {
    this.props.navigation.navigate("Channels");
  };
  moveToExplore = () => {
    this.props.navigation.navigate("Explore");
  };

  render = () => (
    <View>
      <ScrollView
        style={styles.root}
        onLayout={this.onContainerLayout}
        contentContainerStyle={styles.rootContainer}>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_1.png')} />
              <Text style={styles.titlePicture}>  Change Theme</Text>
            </View>
            <View>
              <View style={styles.mainSwitch}>
                <Switch
                  onValueChange={this.onSwitchThemeChange}
                  value={this.state.theme} />
              </View>
              {/* <RkSwitch
                rkType='success'
                value={this.state.theme}
                name="Theme"
                onValueChange={(value) => this.onSwitchThemeChange(value)}/> */}
            
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_1.png')} />
              <Text style={styles.titlePicture}>  Edit Profile</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToCategory()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_2.png')} />
              <Text style={styles.titlePicture}>  Notification</Text>
            </View>
            <View>
              <View style={styles.mainSwitch}>
                <Switch
                  onValueChange={this.onSwitchNotification}
                  value={this.state.notification} />
              </View>
              {/* <RkSwitch
                // rkType='success'
                value={this.state.notification}
                onValueChange={this.onSwitchNotification} /> */}
              {/* <TouchableOpacity onPress={() => this.moveToCategory()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_3.png')} />
              <Text style={styles.titlePicture}>  Edition</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToCategory()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_4.png')} />
              <Text style={styles.titlePicture}>  Authentication Type</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToCategory()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_5.png')} />
              <Text style={styles.titlePicture}>  Language</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToCategory()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_6.png')} />
              <Text style={styles.titlePicture}>  Support</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToCategory()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_7.png')} />
              <Text style={styles.titlePicture}>  Send Feedback</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToCategory()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_8.png')} />
              <Text style={styles.titlePicture}>  Terms Of Service</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToCategory()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.privacyPic} source={require('../../assets/image1/images/s_icon_9.png')} />
              <Text style={styles.titlePicture}>   Privacy Policy</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToPrivacySetting()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Image style={styles.iconPic} source={require('../../assets/image1/images/s_icon_10.png')} />
              <Text style={styles.titlePicture}>  Advanced Settings</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToAdvancedSetting()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.end}></View>
      </ScrollView>
      <View style={styles.headercontainer}>
        <View >
          <TouchableOpacity onPress={() => this.moveToHome()}>
            <Image style={styles.headerPic} source={require('../../assets/image1/images/home.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.moveToNotification()}>
            <Image style={styles.headerPic} onPress={this.moveToNotification} source={require('../../assets/image1/images/notification.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.moveToChannels()}>
            <Image style={styles.headerPic} onPress={this.moveToChannels} source={require('../../assets/image1/images/channels.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.moveToProfile()}>
            <Image style={styles.headerPic} onPress={this.moveToProfile} source={require('../../assets/image1/images/profile-icon.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <View styles={styles.padding}>
            <TouchableOpacity onPress={() => this.moveToExplore()}>
              <Image style={styles.headerPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/search-icon.png')} />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.homeline} /> */}
        </View>
      </View>
    </View>
  )
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
    padding: 10,
    height: "90%"
  },
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  empty: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
  },
  icon: {
    marginBottom: 16,
  },
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: "10%",
    width: "100%",
    padding: 15,
    borderTopWidth: 0.4,
    borderColor: theme.colors.text.base,
    backgroundColor: theme.colors.screen.base,
  },

  container: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    paddingVertical: 25,
  },
  section: {
    marginVertical: 25,
  },
  heading: {
    paddingBottom: 12.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center',
  },
  rowButton: {
    flex: 1,
    paddingVertical: 24,
  },
  switch: {
    marginVertical: 14,
    backgroundColor: "white"
  },

  notiSwitch: {
    borderColor: "white",
    borderWidth: 2
  },
  blockCon: {
    width: "100%",
    backgroundColor: theme.colors.screen.bold,
    borderRadius: 5,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10
  },
  containerPic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    padding: 10,
  },
  titlePicture: {
    color: theme.colors.text.base,
    // fontWeight: "bold",
    fontSize: 20,
    // height: 30
  },
  anglePic: {
    marginTop: 8
  },
  headerPic: {
    width: 27,
    height: 28,
  },
  iconPic: {
    width: 20,
    height: 23,
    marginTop: 5
  },
  privacyPic: {
    width: 15,
    height: 23,
    marginTop: 5
  },
  settingCon: {
    flexDirection: "row",
    width: "80%"
  },
  end: {
    padding: 20
  },
  mainSwitch: {
    // pading: 5,
  //  backgroundColor: "#131D26",
    backgroundColor: "white",
    // borderRadius: 15
    width: 52,
    height: 32,
    // height: 28,
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    // borderColor: theme.colors.border.secondary,
    borderColor: "rgb(0,168,243)",
    // onColor: theme.colors.primary,
    onColor: "rgb(0,168,243)",
    offColor: {
      // android: theme.colors.screen.base,
      android: "white",
      ios: theme.colors.border.base,
    },
  }
}));
