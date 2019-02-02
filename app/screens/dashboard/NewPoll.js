import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';


export class NewPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      reader: '',
      pollTitle: ''
    };
  }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "New Poll",
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

  openPoll = () => {
    this.props.navigation.navigate("NewPoll");
  }
  openMap = () => {
    this.props.navigation.navigate("NewMap");
  }
  openShare = () => {
    this.props.navigation.navigate("NewShare");
  }

  moveToNewPing2 = () => {
    this.props.navigation.navigate("NewPing2");
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
          <View style={styles.pollBox}>
            <TextInput
              style={styles.searchInput1}
              placeholder='Poll Title'
              autoCapitalize='nonea'
              autoCorrect={false}
              value={this.state.pollTitle}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ pollTitle: text })} />
          </View>
          <View style={styles.choiceCon}>
            <View style={styles.container3}>
              <Image source={require('../../assets/image1/images/square.png')} />
              <View style={styles.flex4}>
                <View style={styles.searchBox}>
                  <TextInput
                    style={styles.choiceInput}
                    placeholder='Choice 1'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.choice1}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ choice1: text })} />
                </View>
              </View>
              <View style={styles.flex2}>
                <Text style={[styles.choiceText]}>Remove Poll</Text>
              </View>
            </View>
            <View style={styles.container3}>
              <Image source={require('../../assets/image1/images/square.png')} />
              <View style={styles.flex4}>
                <View style={styles.searchBox}>
                  <TextInput
                    style={styles.choiceInput}
                    placeholder='Choice 2'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.choice2}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ choice2: text })} />
                </View>
              </View>
              <View style={styles.flex2}>
                <Text style={[styles.choiceText]}>Remove Poll</Text>
              </View>
            </View>
            <View style={styles.container3}>
              <Image source={require('../../assets/image1/images/square.png')} />
              <View style={styles.flex4}>
                <View style={styles.searchBox}>
                  <TextInput
                    style={styles.choiceInput}
                    placeholder='Choice 3'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.choice3}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ choice3: text })} />
                </View>
              </View>
              <View style={styles.flex2}>
                <Text style={[styles.choiceText]}>Remove Poll</Text>
              </View>
            </View>
            <View style={styles.addChoiceCon}>
              <Image source={require('../../assets/image1/images/plus.png')} />
              {/* <View style={styles.flex2}> */}
              <Text style={[styles.choiceText]}>Add a choice</Text>
              {/* </View> */}
            </View>
          </View>
          <View style={styles.choiceCon}>
            <Text style={[styles.choiceText2]}>Poll lenght: 2 days</Text>
          </View>
          <View style={styles.modalCon}>
            <View style={styles.modalCon1}>
              <Image style={styles.modalPic} source={require('../../assets/image1/images/video_icon.png')} />
              <Image style={styles.modalPic} source={require('../../assets/image1/images/gif_icon.png')} />
              <TouchableOpacity onPress={this.openPoll}>
                <Image style={styles.modalPic} source={require('../../assets/image1/images/poll_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.openMap}>
                <Image style={styles.modalPic} source={require('../../assets/image1/images/map_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.openShare}>
                <Image style={styles.modalPic} source={require('../../assets/image1/images/share_icon.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalCon2}>
              <Text style={[styles.textuser, styles.textNormal]}>230 </Text>
              <View style={styles.modalbut}>
                <Text style={[styles.textuser, styles.textNormal]}>Issue</Text>
              </View>
            </View>
          </View>
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
  authContainter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 100,
    width: "100%",
    padding: 5,
  },

  homeline: {
    width: "100%",
    borderBottomWidth: 3,
    borderBottomColor: "#099FD4",
    marginTop: 7,
    marginBottom: 15
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 20
  },

  searchInput1: {
    height: "100%",
    // flex: 5,
    width: "100%",
    fontSize: 20,
    // paddingLeft: 10,
    // borderRadius: 5
    color: theme.colors.text.base
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 30,
    width: "80%",
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    borderRadius: 3,
    // marginTop: 15,
    marginBottom: 20,
    marginLeft: 10
  },

  pollBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 50,
    width: "100%",

    backgroundColor: '#243843',
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 5,
    // marginLeft: 10,
    padding: 10
  },
  headerPic: {
    width: 27,
    height: 28,
  },

  textNormal: {
    color: theme.colors.text.base,
  },
  sendText: {
    fontSize: 16,
    marginTop: 20
  },
  submitButton: {
    backgroundColor: 'rgb(47, 185, 179)',
    padding: 10,
    // margin: 15,
    height: 45,
    width: 150,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: "bold"
  },

  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
  },
  logoPicSmall: {
    width: 50,
    height: 50,
    borderRadius: 25
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
  queryHeight: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    height: 150,
    width: "100%",
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    borderRadius: 3,
    marginTop: 15,
    marginBottom: 10
  },
  searchInput: {
    height: "100%",
    flex: 5,
    fontSize: 20,
    backgroundColor: '#243843',
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
    color: theme.colors.text.base
  },
  flex4: {
    flex: 4
  },
  flex2: {
    flex: 2
  },
  smileIcon: {
     marginTop: -40,
     marginLeft: 10
  },
  blockCon: {
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#243843",
    padding: 10,
    width: "100%"
  },
  smileCon: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -100,
    paddingRight: 20
  },
  smileCon1: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -40,
    paddingRight: 20
  },
  modalCon: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 25,
    backgroundColor: "#243843",
    borderRadius: 5,
    padding: 10
    // padding: 10
  },
  modalCon1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // height: 30
  },
  modalCon2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // height: 30
  },
  modalPic: {
    marginLeft: 10,
    height: 30,
    width: 30
  },
  modalbut: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.text.base,
    height: 30
    // marginTop: 5,
  },
  textmodal: {
    fontFamily: 'Roboto',
    fontSize: 18,
    // padding: 5,
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: theme.colors.text.base,
  },
  textuser: {
    fontFamily: 'Roboto',
    fontSize: 20,
    // marginTop: 20,
    // marginRight: 5
  },
  choiceCon: {
    width: "100%",
    backgroundColor: "#243843",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  choiceText: {
    fontSize: 17,
    color: theme.colors.text.base
  },
  choiceText1: {
    fontSize: 17,
    color: "white"
  },
  choiceText2: {
    fontSize: 20,
    color: "white"
  },
  addChoiceCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "40%",
    backgroundColor: '#243843',
    height: 35,
    padding: 5,
    marginLeft: 70,

    borderRadius: 5
  },
  choiceInput: {
    height: "100%",
    flex: 5,
    fontSize: 15,
    backgroundColor: '#1f2833',
    padding: 5,
    borderRadius: 5,
    textAlignVertical: 'top'
  },
}));
