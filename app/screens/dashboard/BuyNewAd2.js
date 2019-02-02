import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';


export class BuyNewAd2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      memo_link: '',
      unique_id: '',
      duration: ''
    };
  }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Buy New Ad",
    maritalStatus: "",
    category: ""
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

  moveToMyAds = () => {
    this.props.navigation.navigate("MyAds");
  };
  moveToBuyNewAd1 = () => {
    this.props.navigation.navigate("BuyNewAd1");
  };
  moveToBuyNewAd3 = () => {
    this.props.navigation.navigate("BuyNewAd3");
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
          <Text style={[styles.pageNumber, styles.textNormal]}>2 OF 3</Text>
          
          <View style={styles.pickerContainer}>
            <View style={styles.splitCon}>
              <View style={styles.pickerborder}>
                <Picker
                  selectedValue={this.state.category}
                  style={styles.pickerStyle}
                  mode="dropdown"
                  itemStyle={styles.pickerItemStyle}
                  // placeholder="Continents"
                  // iosHeader="Continents"
                  onValueChange={(itemValue, itemIndex) => this.setState({ category: itemValue })}>
                  <Picker.Item style={styles.pickerItemStyle} label="SELECT CATEGORY" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="POLITICS" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="SPORTS" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="BUSINESS" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="TRAVEL" value="js" />
                </Picker>
              </View>
            </View>
            <View style={styles.splitSpace}></View>
            <View style={styles.splitCon}>
              <View style={styles.pickerborder1}>
                <Picker
                  selectedValue={this.state.maritalStatus}
                  style={styles.pickerStyle}
                  mode="dropdown"
                  itemStyle={styles.pickerItemStyle}
                  onValueChange={(itemValue, itemIndex) => this.setState({ maritalStatus: itemValue })}>
                  <Picker.Item style={styles.pickerItemStyle} label="MARITAL STATUS" value="java" />
                  <Picker.Item style={styles.pickerItemhide} label="MARRIED" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="DIVORCED" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="SINGLE" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="CO-HABITATIONAL" value="js" />
                </Picker>
              </View>
            </View>
          </View>
          
          <View style={styles.authContainter}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.moveToBuyNewAd1}>
              <Text style={styles.submitButtonText}> Back </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.moveToBuyNewAd3}>
              <Text style={styles.submitButtonText}> Next </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkCon}>
            <Text style={[styles.linkText, styles.textNormal]}>Return to</Text>
            <TouchableOpacity onPress={() => this.moveToMyAds()}>
              <Text style={styles.linkAds}> My Ads</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    width: "100%",
    padding: 5,
    marginBottom: 20
  },

  pageNumber: {
    fontSize: 22,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10
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
    height: 50,
    flex: 5,
    fontSize: 20,
    backgroundColor: '#3b5461',
    paddingLeft: 10,
    borderRadius: 5,
    color: theme.colors.text.base
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 50,
    width: "100%",
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    borderRadius: 3,
    marginTop: 15,
    marginBottom: 20
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
    backgroundColor: 'rgb(80, 203, 109)',
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
  pickerStyle: {
    height: 45,
    width: 200,
    backgroundColor: "white"
  },
  pickerborder: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3
  },
  pickerborder1: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
    textAlign: "right",
  },

  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 60,
    width: "100%",
    marginTop: 15
    // padding: 10,
  },

  linkAds: {
    color: "rgb(120, 218, 206)",
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold"
  },

  linkText: {
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold"
  },
  linkCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: "100%",
    padding: 5,
    marginTop: 10
  },
  splitCon: {
    width: "45%"
  },
  splitSpace: {
    width: "10%"
  },
}));
