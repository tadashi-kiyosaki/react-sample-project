import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
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

export class PrivacySetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // route: 'Login',
      reader: '',
    };
  }
  static navigationOptions = {
    title: 'Advanced Setting',
  };

  state = {
    sendPush: true,
    shouldRefresh: false,
    twitterEnabled: true,
    googleEnabled: false,
    facebookEnabled: true,
    theme: false,
    emailfind: false,
    phonefind: false,
    certified: false,
    familyfilter: false,
    blockaccounts: false,
  };

  onPushNotificationsSettingChanged = (value) => {
    this.setState({ sendPush: value });
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


  onSwitchTheme = (value) => {
    this.setState({ theme: value });
  }
  onSwitchEmailfind = (value) => {
    this.setState({ emailfind: value });
  }
  onSwitchPhonefind = (value) => {
    this.setState({ phonefind: value });
  }
  onSwitchBlockaccounts = (value) => {
    this.setState({ blockaccounts: value });
  }
  onSwitchCertifiedPro = (value) => {
    this.setState({ certified: value });
  }

  onSwitchFamilyFilter = (value) => {
    this.setState({ familyfilter: value });
  }

  moveToMyMoney = () => {
    this.props.navigation.navigate("MyMoney");
  };
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
              <Text style={styles.titlePicture}>Photo tagging</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToMyMoney()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Text style={styles.titlePicture}>Personalization & Data</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToMyMoney()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={[styles.privacyText1,styles.textNormal]}>Control how Journile personalizes content and collects and shares certain data.</Text>
        <Text style={[styles.privacyText2, styles.textNormal]}>Discoverability</Text>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Text style={styles.titlePicture}>Change Theme</Text>
            </View>
            <View>
              <View style={styles.mainSwitch}>
                <Switch
                  onValueChange={this.onSwitchTheme}
                  value={this.state.theme} />
              </View>
              {/* <RkSwitch
                rkType='success'
                value={this.state.theme}
                onValueChange={this.onSwitchTheme} /> */}
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Text style={styles.titlePicture}>Let others find me by email address</Text>
            </View>
            <View>
              <View style={styles.mainSwitch}>
                <Switch
                  onValueChange={this.onSwitchEmailfind}
                  value={this.state.emailfind} />
              </View>
              {/* <RkSwitch
                rkType='success'
                value={this.state.emailfind}
                onValueChange={this.onSwitchEmailfind} /> */}
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Text style={styles.titlePicture}>Let others find me by phone number</Text>
            </View>
            <View>
              <View style={styles.mainSwitch}>
                <Switch
                  onValueChange={this.onSwitchPhonefind}
                  value={this.state.phonefind} />
              </View>
              {/* <RkSwitch
                rkType='success'
                value={this.state.phonefind}
                onValueChange={this.onSwitchPhonefind} /> */}
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Text style={styles.titlePicture}>Contacts</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.moveToMyMoney()}>
                <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={[styles.privacyText1, styles.textNormal]}>This helps you connect with people.<Text style={{ color:"#4d4d4f"}}>Learn more</Text></Text>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Text style={styles.titlePicture}>Display Content from CertifiedPro Users only</Text>
            </View>
            <View>
              <View style={styles.mainSwitch}>
                <Switch
                  onValueChange={this.onSwitchCertifiedPro}
                  value={this.state.certified} />
              </View>
              {/* <RkSwitch
                rkType='success'
                value={this.state.certified}
                onValueChange={this.onSwitchCertifiedPro} /> */}
            </View>
          </View>
        </View>
        <Text style={[styles.privacyText2, styles.textNormal]}>Safety</Text>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Text style={styles.titlePicture}>Family Safe Filter (Pin Required)</Text>
            </View>
            <View>
              <View style={styles.mainSwitch}>
                <Switch
                  onValueChange={this.onSwitchFamilyFilter}
                  value={this.state.familyfilter} />
              </View>
              {/* <RkSwitch
                rkType='success'
                value={this.state.familyfilter}
                onValueChange={this.onSwitchFamilyFilter} /> */}
            </View>
          </View>
        </View>
        <View style={styles.blockCon}>
          <View style={styles.containerPic}>
            <View style={styles.settingCon}>
              <Text style={styles.titlePicture}>Blocked Accounts</Text>
            </View>
            <View>
              <View style={styles.mainSwitch}>
                <Switch
                  onValueChange={this.onSwitchBlockaccounts}
                  value={this.state.blockaccounts} />
              </View>
              {/* <RkSwitch
                rkType='success'
                value={this.state.blockaccounts}
                onValueChange={this.onSwitchBlockaccounts} /> */}
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
    width: 22,
    height: 25,
    marginTop: 5
  },
  privacyPic: {
    width: 17,
    height: 25,
    marginTop: 5
  },
  settingCon: {
    flexDirection: "row",
    width: "80%"
  },
  privacyText1: {
    fontSize: 18,
    marginTop: 15,
    color: "white"
  },

  privacyText2: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
    color: "white",
    fontWeight: "bold"
  },
  textNormal: {
    color: theme.colors.text.base
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
  },
  end: {
    padding: 20
  }
}));
