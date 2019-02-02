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
import { FontAwesome } from '../../assets/icons';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';


export class Readers extends React.Component {
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
              <Text style={[styles.profileText1, styles.textNormal]}>Occupational therapists help injured, ill, or disabled patients through the therapeutic practice o...</Text>
            </View>
            <View style={styles.colmd3}>
              <View style={styles.profileIconCon}>
                <TouchableOpacity onPress={this.movetoEditProfile}>
                  <Image style={styles.logoPic} source={require('../../assets/image1/images/noti_user.png')} />
                  <Text style={styles.editText1}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.container1}>
            <View style={styles.alignCenter}>
              <TouchableOpacity style={styles.alignCenter} onPress={() => this.moveToProfile()}>
                <Text style={[styles.optionMemo, styles.textNormal]}>Memos</Text>
                <Text style={[styles.optionMemo, styles.textNormal, styles.textBold]}>84</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.alignCenter]}>
              <TouchableOpacity style={styles.alignCenter} onPress={() => this.movetoReading()}>
                <Text style={[styles.optionMemo, styles.textNormal]}>Reading</Text>
                <Text style={[styles.optionMemo, styles.textNormal, styles.textBold]}>265</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.alignCenter, , styles.line]}>
              <TouchableOpacity style={styles.alignCenter} onPress={() => this.moveToReaders()}>
                <Text style={[styles.optionMemo, styles.textActive]}>Readers</Text>
                <Text style={[styles.optionMemo, styles.textActive, styles.textBold]}>125</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => this.moveToProfile()}>
              <Text style={[styles.optionMemo, styles.textNormal]}>Memos</Text>
            </TouchableOpacity>
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
          
          <View style={styles.blockCon}>
            <Image style={styles.picture1} source={require('../../assets/image1/images/reader_img.png')}></Image>
            <View style={styles.readingCon}>
              <View style={styles.readerPic}>
                <Image style={styles.picture2} source={require('../../assets/image1/images/reader_p_img.png')}></Image>
              </View>
              <View style={styles.readerContent}>
                <View style={styles.readingSmall}>
                  <Text style={[styles.textuser3, styles.textNormal]}>VR SMART</Text>
                  <View style={styles.mark}>
                    <View style={styles.markCon}>
                      <Text style={[styles.textuser2, styles.textNormal]}>READING</Text>
                    </View>
                    <RkText style={[styles.markText, styles.textNormal]} rkType='awesome'>{FontAwesome.ellipsis}</RkText>
                  </View>
                </View>
                <Text style={[styles.profileText1, styles.textNormal]}>@vrsmart         Reading</Text>
                <Text style={[styles.profileText1, styles.textNormal]}>Buy VR Headset, VR Googles, VR Glasses for your Smartphone.</Text>
              </View>
            </View>
          </View>

          <View style={styles.blockCon}>
            <Image style={styles.picture1} source={require('../../assets/image1/images/reader_img-1.png')}></Image>
            <View style={styles.readingCon}>
              <View style={styles.readerPic}>
                <Image style={styles.picture2} source={require('../../assets/image1/images/reader_p_img.png')}></Image>
              </View>
              <View style={styles.readerContent}>
                <View style={styles.readingSmall}>
                  <Text style={[styles.textuser3, styles.textNormal]}>VR SMART</Text>
                  <View style={styles.mark}>
                    <View style={styles.markCon}>
                      <Text style={[styles.textuser2, styles.textNormal]}>READING</Text>
                    </View>
                    <RkText style={[styles.markText, styles.textNormal]} rkType='awesome'>{FontAwesome.ellipsis}</RkText>
                  </View>
                </View>
                <Text style={[styles.profileText1, styles.textNormal]}>@vrsmart         Reading</Text>
                <Text style={[styles.profileText1, styles.textNormal]}>Buy VR Headset, VR Googles, VR Glasses for your Smartphone.</Text>
              </View>
            </View>
          </View>

          <View style={styles.end}>
          </View>
      </ScrollView>
      <View style={styles.headercontainer}>
        <View>
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

  mark: {
    flexDirection: 'row',
  },
  markText: {
    marginTop: 5,
    marginLeft: 20
  },
  markCon: {
    backgroundColor: "#243843",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  readingCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    padding: 10,
  },
  blockCon: {
    width: "100%",
    backgroundColor: theme.colors.screen.bold,
    borderRadius: 5,
    marginTop: 20
  },
  readingSmall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    padding: 5,
  },

  readerPic: {
    marginTop: -30
  },
  readerContent: {
    flex: 4
  },

  textuser3: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: "bold"
  },

  textuser2: {
    fontSize: 16,
    fontFamily: 'Roboto',
    textAlign: 'center'
  },

  textNormal: {
    color: theme.colors.text.base,
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
    borderRadius: 5
  },
  picture1: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    // marginTop: 40
  },

  picture2: {
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 40
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
    textShadowOffset: { width: 1, height: 1 },
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
  profileText1: {
    fontFamily: 'Roboto',
    fontSize: 18,
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
    flex: 3
  },
  colmd3: {
    flex: 1
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
    color: "white",
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
    fontSize: 17,
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
  end: {
    padding: 20
  }
}));
