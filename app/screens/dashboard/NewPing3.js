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


export class NewPing3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      reader: '',
      message: ''
    };
  }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "New Ping",
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
          <View style={styles.chatCon}>
            <View style={styles.pingCon}>
              <Image style={styles.pingPic} source={require('../../assets/image1/images/modals/ping2.png')} />
              <View style={styles.chatCon1}>
                <Text style={styles.chatText}>What's this about?</Text>
              </View>
            </View>
            <View style={styles.backCon}>
              <View style={styles.backCon1}>
                <View></View>
                <View style={styles.chatCon2}>
                  <Text style={styles.chatText}>You tell me.</Text>
                </View>
              </View>
              <Image style={styles.pingPic} source={require('../../assets/image1/images/modals/ping1.png')} />
            </View>
            <View style={styles.pingCon}>
              <Image style={styles.pingPic} source={require('../../assets/image1/images/modals/ping2.png')} />
              <View style={styles.chatCon1}>
                <Text style={styles.chatText}>Huh?</Text>
              </View>
            </View>
            <View style={styles.backCon}>
              <View style={styles.backCon1}>
                <View></View>
                <View style={styles.chatCon2}>
                  <Text style={styles.chatText}>I wasn't aware it was an offense</Text>
                </View>
              </View>
              <Image style={styles.pingPic} source={require('../../assets/image1/images/modals/ping1.png')} />
            </View>
          </View>
          {/* <View style={styles.createCon}>
            <View style={styles.chatCon3}>
              <Text style={styles.chatText1}>What's on your mind?</Text>
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.onRegisterPressed}>
              <Text style={styles.submitButtonText}> + </Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
        <View style={styles.root1}>
          <View style={styles.createCon}>
            <View style={styles.chatCon3}>
              {/* <Text style={styles.chatText1}>What's on your mind?</Text> */}
              {/* <View style={styles.searchBox}> */}
                <TextInput
                  style={styles.choiceInput}
                  placeholder="What's on your mind"
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={this.state.message}
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ message: text })} />
              {/* </View> */}
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.onRegisterPressed}>
              <Text style={styles.submitButtonText}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    height: "75%"
  },
  root1: {
    backgroundColor: theme.colors.screen.base,
    padding: 10,
    height: "15%",
    justifyContent: "center",
    alignItems: "center"
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

 
  headerPic: {
    width: 27,
    height: 28,
  },

  textNormal: {
    color: "#54798b",
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

  pingText: {
    color: "white",
    fontSize: 16
  },
  pingPic: {
    height: 40,
    width: 50,
    marginRight: 15
  },
  
  pingCon: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    // height: 50,
    width: "100%",
    marginTop: 30,
    // padding: 5,
  },
  createCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // height: 50,
    width: "100%",
    // marginBottom: 15
    // marginTop: 30,
    // padding: 5,
  },
  backCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: "100%",
    marginTop: 20,
  },
  chatCon: {
    width: "100%"
  },
  chatCon1: {
    backgroundColor: 'rgb(114, 103, 113)',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },

  chatCon2: {
    backgroundColor: 'rgb(86, 140, 122)',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  },
  chatCon3: {
    // backgroundColor: '#3a757d',
    // padding: 20,
    height: 50,
    // borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%"
  },
  chatText: {
    fontSize: 16,
    color: "white"
  },
  chatText1: {
    fontSize: 18,
    color: "white"
  },
  backCon1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 4
  },
  submitButton: {
    backgroundColor: '#2fb9b3',
    padding: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15
  },
  submitButtonText: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: 'center',
    color: 'white',
    fontWeight: "bold"
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: "100%",
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    borderRadius: 5,
    // marginTop: 15,
    // marginBottom: 20,
    // marginLeft: 10
  },
  choiceInput: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    backgroundColor: theme.colors.screen.bold,
    padding: 10,
    borderRadius: 5,
    color: theme.colors.text.base
  },
}));
