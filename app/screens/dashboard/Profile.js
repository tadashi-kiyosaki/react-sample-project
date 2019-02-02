import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';


export class Profile extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Profile",
  };

  state = {
    dimensions: undefined,
  };

  onContainerLayout = (event) => {
    if (this.state.height) {
      return;
    }
    const dimensions = event.nativeEvent.layout;
    this.setState({ dimensions });
  };

  renderItems = () => MainRoutes.map(this.renderItem);

  renderItem = (item) => (
    <RkButton
      rkType='tile'
      style={{ height: this.state.dimensions.width / 3, width: this.state.dimensions.width / 3 }}
      key={item.id}
      onPress={() => this.onItemPressed(item)}>
      <RkText style={styles.icon} rkType='primary moon xxlarge'>
        {item.icon}
      </RkText>
      <RkText rkType='small'>{item.title}</RkText>
    </RkButton>
  );

  onItemPressed = (item) => {
    this.props.navigation.navigate(item.id);
  };

  movetoEditProfile = () => {
    this.props.navigation.navigate('EditProfile');
  }
  movetoMemo = () => {
    this.props.navigation.navigate("Profile");
  };

  movetoReissues = () => {
    this.props.navigation.navigate("Reissues");
  };

  moveToEngagements = () => {
    this.props.navigation.navigate("Engagements");
  };
  
  movetoReading = () => {
    this.props.navigation.navigate("Reading");
  };

  moveToReaders = () => {
    this.props.navigation.navigate("Readers");
  };

  moveToMedia = () => {
    this.props.navigation.navigate("Media");
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
  render() {
    const items = this.state.dimensions === undefined ? <View /> : this.renderItems();
    return (
      <View>
      <ScrollView
        style={styles.root}
        onLayout={this.onContainerLayout}
        contentContainerStyle={styles.rootContainer}>
        <Image style={styles.picture} source={require('../../assets/image1/images/back_profile.png')}>
        </Image>
        <Text style={styles.textuser}>Margaret Mead  <Image style={styles.userPic} source={require('../../assets/image1/images/s_cer.png')} /></Text>
        <Text style={styles.textUserSmall}>test1test@gmail.com</Text>
        <View style={styles.profileContainer1}>
          <View style={styles.colmd9}>
            <Text style={styles.profileText1}>Occupational therapists help injured, ill, or disabled patients through the therapeutic practice o...</Text>
          </View>
          <View style={styles.colmd3}>
            <View style={styles.profileIconCon}>
              <TouchableOpacity onPress = {this.movetoEditProfile}>
                <Image style={styles.logoPic} source={require('../../assets/image1/images/noti_user.png')} />
                <Text style={styles.editText1}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={[styles.alignCenter, styles.line]}>
            <Text style={[styles.optionMemo, styles.textActive]}>Memos</Text>
            <Text style={[styles.optionMemo, styles.textActive, styles.textBold]}>84</Text>
          </View>
          <View style={styles.alignCenter}>
            <TouchableOpacity style={styles.alignCenter} onPress={() => this.movetoReading()}>
              <Text style={[styles.optionMemo, styles.textNormal]}>Reading</Text>
              <Text style={[styles.optionMemo, styles.textNormal, styles.textBold]}>265</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alignCenter}>
            <TouchableOpacity style={styles.alignCenter} onPress={() => this.moveToReaders()}>
              <Text style={[styles.optionMemo,styles.textNormal]}>Readers</Text>
              <Text style={[styles.optionMemo, styles.textNormal,styles.textBold]}>125</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={[styles.optionMemo, styles.textActive, styles.line]}>Memos</Text>
          <TouchableOpacity onPress={() => this.movetoReissues()}>
            <Text style={[styles.optionMemo, styles.textNormal]}>Reissues</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.moveToEngagements()}>
            <Text style={[styles.optionMemo, styles.textNormal]}>Engagements</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.moveToMedia()}>
            <Text style={[styles.optionMemo, styles.textNormal]}>Media</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loadCon}>
          <Text style={styles.loadButtonText}> Load Latest Memos </Text>
        </View>
        <View style={styles.proCon}>
          <View style={styles.titleCon}>
            <Image style={styles.respondIcon}source={require('../../assets/image1/images/icon_respond.png')} />  
            <Text style={[styles.engage, styles.textNormal]}>Engaging @pgatour</Text>
          </View>
          <View style={styles.container3}>
            <Image style={styles.logoPicSmall} source={require('../../assets/image1/images/noti_user.png')} />
            <View style={styles.flex4}>
              <Text style={[styles.textuser1,styles.textNormal]}>Margaret Mead  <Image style={styles.userPic} source={require('../../assets/image1/images/s_cer.png')} /></Text>
              <Text style={[styles.textuserSmall1, styles.textNormal]}>test1test@gmail.com</Text>
              <Text style={styles.textuser2}>13 hours ago  <Image source={require('../../assets/image1/images/arrow_down.png')} /></Text>
            </View>
            <View style={styles.flex2}>
              <View style={styles.container4}>
                <Image source={require('../../assets/image1/images/right.png')} />
                <Text style={[styles.optionMemo, styles.textActive]}>0</Text>
                <Image source={require('../../assets/image1/images/close.png')} />
                <Text style={[styles.optionMemo, styles.textNormal]}>0</Text>
              </View>
            </View>
          </View>
          <Image style={styles.postPic} source={require('../../assets/image1/images/posts/empty-1.jpg')} />  
          <Text style={[styles.textuser3, styles.textNormal]}>Inside Joel Sartore's 'Photo Ark' for animals</Text>
          <Text style={styles.profileText1}>Watch Joel Sartore on the next edition of 60 Minutes  and see what it takes to create the Photo Ark. The episode airs this Sunday, October 14...<Text style={[styles.optionMemo,styles.textActive]}>more</Text></Text>
          <View style={styles.line1}>
            <Text style={[styles.textNormal, styles.textuser4]}>γFriday</Text>
          </View>
          <View style={styles.container5}>
            <Text style={[styles.textNormal, styles.textuser4]}>γTechGuru</Text>
            <Text style={[styles.textNormal, styles.textuser4]}>γEngadget</Text>
            <Text style={[styles.textNormal, styles.textuser4]}>γMyGadgets</Text>
          </View>
          <View style={styles.container6}>
            <View style={styles.container7}>
              <Image  source={require('../../assets/image1/images/icon_2.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>$3.5k</Text>
            </View>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_reissue.png')} /> 
              <Text style={[styles.optionMemo, styles.textNormal]}>50</Text>
            </View>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_respond.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>  12</Text>
            </View>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_messages.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>  100</Text>
            </View>
          </View>
        </View>

        <View style={styles.proCon}>
          <View style={styles.titleCon}>
            <Image style={styles.respondIcon} source={require('../../assets/image1/images/icon_respond.png')} />
            <Text style={[styles.engage, styles.textNormal]}>Engaging @pgatour</Text>
          </View>
          <View style={styles.container3}>
            <Image style={styles.logoPicSmall} source={require('../../assets/image1/images/noti_user.png')} />
            <View style={styles.flex4}>
              <Text style={[styles.textuser1, styles.textNormal]}>Margaret Mead  <Image style={styles.userPic} source={require('../../assets/image1/images/s_cer.png')} /></Text>
              <Text style={[styles.textuserSmall1, styles.textNormal]}>test1test@gmail.com</Text>
              <Text style={styles.textuser2}>13 hours ago  <Image source={require('../../assets/image1/images/arrow_down.png')} /></Text>
            </View>
            <View style={styles.flex2}>
              <View style={styles.container4}>
                <Image source={require('../../assets/image1/images/right.png')} />
                <Text style={[styles.optionMemo, styles.textActive]}>0</Text>
                <Image source={require('../../assets/image1/images/close.png')} />
                <Text style={[styles.optionMemo, styles.textNormal]}>0</Text>
              </View>
            </View>
          </View>
          <Image style={styles.postPic} source={require('../../assets/image1/images/posts/empty-2.jpg')} />
          <Text style={[styles.textuser3, styles.textNormal]}>Inside Joel Sartore's 'Photo Ark' for animals</Text>
          <Text style={styles.profileText1}>Watch Joel Sartore on the next edition of 60 Minutes  and see what it takes to create the Photo Ark. The episode airs this Sunday, October 14...<Text style={[styles.optionMemo, styles.textActive]}>more</Text></Text>
          <View style={styles.line1}>
            <Text style={[styles.textNormal, styles.textuser4]}>γFriday</Text>
          </View>
          <View style={styles.container5}>
            <Text style={[styles.textNormal, styles.textuser4]}>γTechGuru</Text>
            <Text style={[styles.textNormal, styles.textuser4]}>γEngadget</Text>
            <Text style={[styles.textNormal, styles.textuser4]}>γMyGadgets</Text>
          </View>
          <View style={styles.container6}>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_2.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>$3.5k</Text>
            </View>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_reissue.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>50</Text>
            </View>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_respond.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>  12</Text>
            </View>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_messages.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>  100</Text>
            </View>
          </View>
        </View>  

        <View style={styles.proCon}>
          <View style={styles.titleCon}>
            <Image style={styles.respondIcon} source={require('../../assets/image1/images/icon_respond.png')} />
            <Text style={[styles.engage, styles.textNormal]}>Engaging @pgatour</Text>
          </View>
          <View style={styles.container3}>
            <Image style={styles.logoPicSmall} source={require('../../assets/image1/images/noti_user.png')} />
            <View style={styles.flex4}>
              <Text style={[styles.textuser1, styles.textNormal]}>Margaret Mead  <Image style={styles.userPic} source={require('../../assets/image1/images/s_cer.png')} /></Text>
              <Text style={[styles.textuserSmall1, styles.textNormal]}>test1test@gmail.com</Text>
              <Text style={styles.textuser2}>13 hours ago  <Image source={require('../../assets/image1/images/arrow_down.png')} /></Text>
            </View>
            <View style={styles.flex2}>
              <View style={styles.container4}>
                <Image source={require('../../assets/image1/images/right.png')} />
                <Text style={[styles.optionMemo, styles.textActive]}>0</Text>
                <Image source={require('../../assets/image1/images/close.png')} />
                <Text style={[styles.optionMemo, styles.textNormal]}>0</Text>
              </View>
            </View>
          </View>
          <Image style={styles.postPic} source={require('../../assets/image1/images/posts/empty-3.jpg')} />
          <Text style={[styles.textuser3, styles.textNormal]}>Inside Joel Sartore's 'Photo Ark' for animals</Text>
          <Text style={styles.profileText1}>Watch Joel Sartore on the next edition of 60 Minutes  and see what it takes to create the Photo Ark. The episode airs this Sunday, October 14...<Text style={[styles.optionMemo, styles.textActive]}>more</Text></Text>
          <View style={styles.line1}>
            <Text style={[styles.textNormal, styles.textuser4]}>γFriday</Text>
          </View>
          <View style={styles.container5}>
            <Text style={[styles.textNormal, styles.textuser4]}>γTechGuru</Text>
            <Text style={[styles.textNormal, styles.textuser4]}>γEngadget</Text>
            <Text style={[styles.textNormal, styles.textuser4]}>γMyGadgets</Text>
          </View>
          <View style={styles.container6}>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_2.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>$3.5k</Text>
            </View>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_reissue.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>50</Text>
            </View>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_respond.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>  12</Text>
            </View>
            <View style={styles.container7}>
              <Image source={require('../../assets/image1/images/icon_messages.png')} />
              <Text style={[styles.optionMemo, styles.textNormal]}>  100</Text>
            </View>
          </View>
        </View>
        <View style={styles.loadCon}>
          <Text style={styles.loadButtonText}> Load Latest Memos </Text>
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
            <View styles={styles.padding}>
              <TouchableOpacity onPress={() => this.moveToProfile()}>
                <Image style={styles.headerPic} onPress={this.moveToProfile} source={require('../../assets/image1/images/a_profile-icon.png')} />
              </TouchableOpacity>
            </View>
            {/* <View style={styles.homeline} /> */}
          </View>
          <View>
            <TouchableOpacity onPress={() => this.moveToExplore()}>
              <Image style={styles.headerPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/search-icon.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
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
  titleCon: {
    width: "100%",
    flexDirection: 'row',
  },
  proCon: {
    width: "100%",
    backgroundColor: theme.colors.screen.bold,
    padding: 10,
    marginTop: 10,
    borderRadius: 5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 60,
    width: "100%",
    padding: 5,
  },
  textTop: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: theme.colors.text.base,
    fontWeight: "bold",
    marginTop: 5
  },
   textTopRight: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: theme.colors.text.base,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 5
  },
  
 

  containerPic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    padding: 5,
    marginTop: 10
  },

  headerPic: {
    width: 27,
    height: 28,
  },
  picture: {
    width: "100%",
    height: 200,
    borderRadius:5
  },
  homeline: {
    width: "100%",
    borderBottomWidth: 3,
    borderBottomColor: "#099FD4",
    marginTop: 7,
    marginBottom: 15
  },
  
  textuser: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: "black",
    marginTop: -75,
    width: "100%",
    marginLeft: 20
  },
  textUserSmall: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textShadowOffset: { width: 1, height: 1 },
    textShadowColor: "black",
    marginTop: -40,
    marginLeft: 20
  },
  userPic: {
    width: 40,
    height: 40
  },
  profileText1:{
    fontFamily: 'Roboto',
    fontSize: 18,
    color: theme.colors.text.base,
    marginTop: 5
  },
  profileContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    padding: 5,
    marginTop: 10
  },
  colmd9: {
    flex:3
  },
  colmd3: {
    flex:1
  },
  logoPic: {
    height: 90,
    width: 90
  },
  profileIconCon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    padding: 5,
    marginTop: -40
  },
  editText1: {
    fontFamily: 'Roboto',
    fontSize: 17,
    color: theme.colors.text.base,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 60,
    width: "70%",
  },
  optionMemo: {
    fontSize: 18,
    
  },
  textActive: {
    color: "white",
  },
  textNormal: {
    color: theme.colors.text.base,
  },
  textBold: {
    fontWeight: "bold"
  },
  alignCenter: {
    alignItems: "center"
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
  },
  loadButton: {
    backgroundColor: '#fff',
    borderColor: "#099FD4",
    borderWidth: 1,
    padding: 10,
    height: 50,
    width: 200,
    borderRadius: 100,
    alignItems: "center"
  },
  loadButtonText: {
    fontSize: 20,
    color: 'white'
  },
  loadCon: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    // marginTop: 5,
    marginBottom: 15
  },
  line1: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#54798b",
    marginTop: 5,
    marginBottom: 10
  },
  engage: {
    fontSize: 17,
    fontFamily: 'montserrat',
    marginTop: 10,
    marginLeft: 6,
    marginBottom: 10
  },
  respondIcon: {
    marginTop: 15
  },

  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
  },
  flex4: {
    flex: 4
  },
  flex2:{
    flex: 2
  },
  logoPicSmall: {
    width:70,
    height: 70,
    borderRadius: 35
  },

  textuser1: {
    fontFamily: 'Roboto',
    fontSize: 20,
    width: "100%",
    marginLeft: 20
  },
  textuserSmall1: {
    fontFamily: 'Roboto',
    fontSize: 18,
    marginLeft: 20
  },
  textuser2: {
    fontSize: 16,
    color: "grey",
    marginLeft: 20
  },
  container4: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: "100%",
    marginLeft: 30
  },
  textuser3: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: "bold"
  },
  postPic: {
    width: "100%",
    height: 250,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20
  },
  textuser4: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 20,
    width: "100%",
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  picMon: {
    heigh: 15,
    width: 15
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  container7: {
    flexDirection: 'row',
    
  },
  end: {
    padding:20
  }
}));
