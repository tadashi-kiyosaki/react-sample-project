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


export class NewPing2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      reader: '',
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

  moveToNewPing3 = () => {
    this.props.navigation.navigate("NewPing3");
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
          <Text style={[styles.sendText, styles.textNormal]}>SEND NEW PING</Text>
          <View style={styles.searchBox}>
            <View style={styles.diamond}>
              <Text style={styles.diamondText}>DiamondBack <RkText style={styles.iconButtonText} rkType='awesome'>{FontAwesome.timesCircle}</RkText></Text>
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder='Enter a reader'
              autoCapitalize='nonea'
              autoCorrect={false}
              value={this.state.reader}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ reader: text })} />
          </View>
          
          <Text style={[styles.sendText, styles.textNormal]}>LATEST PING</Text>
          <View style={styles.latestCon}>
            <View style={styles.pingCon}>
              <Image style={styles.pingPic} source={require('../../assets/image1/images/modals/ping1.png')} />
              <Text style={styles.diamondText}>DiamondBack</Text>
            </View>
            <View style={styles.backCon}>
              <Text style={styles.backtext}>@dback</Text>
            </View>
          </View>
          <View style={styles.latestCon}>
            <View style={styles.pingCon}>
              <Image style={styles.pingPic} source={require('../../assets/image1/images/modals/ping2.png')} />
              <Text style={styles.diamondText}>Quacky Lane</Text>
            </View>
            <View style={styles.backCon}>
              <Text style={styles.backtext}>@quackylane2</Text>
            </View>
          </View>
          <View style={styles.latestCon}>
            <View style={styles.pingCon}>
              <Image style={styles.pingPic} source={require('../../assets/image1/images/modals/ping3.png')} />
              <Text style={styles.diamondText}>TimeZeepaz</Text>
            </View>
            <View style={styles.backCon}>
              <Text style={styles.backtext}>@timezpaz10</Text>
            </View>
          </View>
          <View style={styles.latestCon}>
            <View style={styles.pingCon}>
              <Image style={styles.pingPic} source={require('../../assets/image1/images/modals/select.jpg')} />
              <Text style={styles.diamondText}>Stuffed Pleasures</Text>
            </View>
            <View style={styles.backCon}>
              <Text style={styles.backtext}>@stuffedple...</Text>
            </View>
          </View>
          <View style={styles.authContainter}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.moveToNewPing3}>
              <Text style={styles.submitButtonText}> Next </Text>
            </TouchableOpacity>
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
  pingCon: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    // height: 50,
    width: "100%",
    // padding: 5,
  },
  diamondText: {
    fontSize: 18,
    color: "white"
  },
  backtext: {
    fontSize: 17,
    color: "white",
    textAlign: "right",
  },
  backCon: {
    width: "100%"
  },
  iconButtonText: {
    color: "white",
  },
  diamond: {
    backgroundColor: 'rgb(47, 185, 179)',
    // padding: 10,
    // margin: 15,
    // height: 45,
    flext: 1,
    width: 200,
    height: "100%",
    alignItems: "center",
    justifyContent: 'center',
  },
  pingText: {
    color: "white",
    fontSize: 16
  },
  pingPic: {
    height:25,
    width: 25,
    marginRight: 15
  },
  latestCon: {
    backgroundColor: 'rgb(59, 164, 165)',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    height: 80,
    flext: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 10
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

  searchInput: {
    height: "100%",
    flex: 1,
    fontSize: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "#099FD4",
    paddingLeft: 10,
    color: theme.colors.text.base
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 50,
    width: "100%",
    // padding: 5,
    borderColor: "#ced4da",
    borderWidth: 3,
    borderRadius: 3,
    // marginBottom: 20
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
    marginTop: 20,
    marginBottom: 20
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

}));
