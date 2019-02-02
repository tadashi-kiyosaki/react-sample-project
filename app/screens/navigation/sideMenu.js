import React from 'react';
import {
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  RkStyleSheet,
  RkText,
  RkTheme,
} from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';
import { FontAwesome } from '../../assets/icons';
import NavigationType from '../../config/navigation/propTypes';
import { Categories } from '../dashboard';

export class SideMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };

  onMenuItemPressed = (item) => {
    this.props.navigation.navigate(item.id);
  };

  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../assets/images/smallLogo.png') : require('../../assets/images/smallLogoDark.png')
  );

  renderIcon = () => (
    <Image style={styles.icon} source={this.getThemeImageSource(RkTheme.current)} />
  );

  renderMenu = () => MainRoutes.map(this.renderMenuItem);

  renderMenuItem = (item) => (
    <TouchableHighlight
      style={styles.container}
      key={item.id}
      underlayColor={RkTheme.current.colors.button.underlay}
      activeOpacity={1}
      onPress={() => this.onMenuItemPressed(item)}>
      <View style={styles.content}>
        <View style={styles.content}>
          <RkText
            style={styles.icon}
            rkType='moon primary xlarge'>{item.icon}
          </RkText>
          <RkText>{item.title}</RkText>
        </View>
        <RkText rkType='awesome secondaryColor small'>{FontAwesome.chevronRight}</RkText>
      </View>
    </TouchableHighlight>
  );
  
  moveToProfile = () => {
    this.props.navigation.navigate("Profile");
  };

  moveToCategories = () => {
    this.props.navigation.navigate("Categories");
  };

  moveToSetting = () => {
    this.props.navigation.navigate("Settings");
  };

  moveToContactus = () => {
    this.props.navigation.navigate("Contactus");
  };

  moveToMyMoney = () => {
    this.props.navigation.navigate("MyMoney");
  };

  moveToMyAds = () => {
    this.props.navigation.navigate("MyAds");
  };

  moveToNewPing = () => {
    this.props.navigation.navigate("NewPing1");
  };;
  logout = () => {
    this.props.navigation.navigate("Home1");
  };
  render = () => (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        
        <Image source={require('../../assets/image1/images/mnoile_nav_bg.png')} />

        <View style={styles.sideBarPic}>
          <Image style={styles.picture} source={require('../../assets/image1/images/noti_user.png')} />
        </View>
        <View style={styles.alignCenter}>
          <Text style={styles.textuser}>MARGARET MEAD<Image style={styles.userPic} source={require('../../assets/image1/images/s_cer.png')} /></Text>
          <Text style={styles.textUserSmall}>test1test@gmail.com</Text>
          <View style={styles.container1}>
            <View style={styles.alignCenter}>
                <Text style={styles.optionMemo}>Memos</Text>
                <Text style={[styles.optionMemo, styles.textBold]}>84</Text> 
              </View>
            <View style={styles.alignCenter}>
                <Text style={styles.optionMemo}>Reading</Text>
                <Text style={[styles.optionMemo, styles.textBold]}>265</Text>
              </View>
            <View style={styles.alignCenter}>
                <Text style={styles.optionMemo}>Readers</Text>
                <Text style={[styles.optionMemo, styles.textBold]}>125</Text>
              </View>
          </View>
        </View>
        <View style={styles.sideBarCon}>
          <View style={styles.blockCon}>
            <TouchableOpacity onPress={() => this.moveToProfile()}>
              <View style={styles.container3}>
                <Image source={require('../../assets/image1/images/user_p_m.png')} />
                <View style={styles.textCon}>
                  <Text style={styles.textside}>Profile</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.blockCon}>
            <TouchableOpacity onPress={() => this.moveToCategories()}>
              <View style={styles.container3}>
                <Image source={require('../../assets/image1/images/menu_icon-1.png')} />
                <View style={styles.textCon}>
                  <Text style={styles.textside}>Categories</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.blockCon}>
            <TouchableOpacity onPress={() => this.moveToNewPing()}>
              <View style={styles.container3}>
                <Image source={require('../../assets/image1/images/icon_messages.png')} />
                <View style={styles.textCon}>
                  <Text style={styles.textside}>New Ping</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.blockCon}>
            <TouchableOpacity onPress={() => this.moveToMyMoney()}>
              <View style={styles.container3}>
                <Image source={require('../../assets/image1/images/icon_2.png')} />
                <Image source={require('../../assets/image1/images/dollar_icon.png')} />
                <View style={styles.textCon}>
                  <Text style={styles.textside}>My Money</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.blockCon}>
            <TouchableOpacity onPress={() => this.moveToMyAds()}>
              <View style={styles.container3}>
                <Image source={require('../../assets/image1/images/menu_icon-3.png')} />
                <View style={styles.textCon}>
                  <Text style={styles.textside}>My Ads</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.blockCon}>
            <TouchableOpacity onPress={() => this.moveToSetting()}>
              <View style={styles.container3}>
                <Image source={require('../../assets/image1/images/menu_icon-2.png')} />
                <View style={styles.textCon}>
                  <Text style={styles.textside}>Settings</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.blockCon}>
            <TouchableOpacity onPress={() => this.moveToContactus()}>
              <View style={styles.container3}>
                <Image source={require('../../assets/image1/images/menu_icon-4.png')} />
                <View style={styles.textCon}>
                  <Text style={styles.textside}>Help</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.blockCon}>
            <TouchableOpacity onPress={() => this.logout()}>
              <View style={styles.container3}>
                <Image source={require('../../assets/image1/images/menu_icon-5.png')} />
                <View style={styles.textCon}>
                  <Text style={styles.textside}>Logout</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.end}></View>
        {/* <View style={[styles.container, styles.content]}>
          {this.renderIcon()}
          <RkText rkType='logo'>UI Kitten</RkText>
        </View>
        {this.renderMenu()} */}

        
      </ScrollView>
    </View>
  )
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    height: 80,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    marginBottom: 10,
    // backgroundColor: "#7b97a5",
    backgroundColor: theme.colors.screen.bold,
    padding: 10,
    borderRadius: 5
  },
  blockCon: {
    width: "100%",
    paddingRight: 10,
    // padding
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: theme.colors.screen.base,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  picture:{
    width: 100,
    height: 100,
    borderRadius: 50
  },
  icon: {
    marginRight: 13,
  },
  imgCon: {
    flex: 1
  },
  textCon: {
    flex: 4,
    marginLeft: 15
  },
  sideContainer: {
    flexDirection: "row",
     justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%"
  },
  sideBarPic: {
    alignItems: "center",
    marginTop: -50
  },
  alignCenter:{
    alignItems: "center",
  },
  textuser: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: theme.colors.text.base,
    fontWeight: "bold",
    marginTop: 5
  },
  textUserSmall: {
    fontFamily: 'Roboto',
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    marginTop: 5
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 60,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20
  },
  optionMemo: {
    fontSize: 16,
    color: theme.colors.text.base,
    padding: 5,
  },
  textBold: {
    fontWeight: "bold"
  },
  userPic: {
    width: 40,
    height: 40
  },
  sideBarCon: {
    width: "100%",
    paddingLeft:10,
    marginTop: 30
  },
  marginRight: {
    marginRight: 20
  },
  textside: {
    fontFamily: 'Roboto',
    fontSize: 19,
    color: theme.colors.text.base,
    fontWeight: "bold",
    marginTop: -2
  },
  userSidePic: {
    width: 80,
    height: 80,
    marginTop: 10
  },
  close: {
    alignItems: 'flex-end',
    marginTop: -150
  },
  closebtn: {
    backgroundColor: "black",
    width:30,
    height:30,
  },
  closeText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  },
  end: {
    padding: 15
  }
}));
