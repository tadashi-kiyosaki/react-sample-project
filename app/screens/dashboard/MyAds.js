import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
} from 'react-native';
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';


export class MyAds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      reader: '',
      countries: '',
      continents: ''
    };
  }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "My Ads",
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
  
  onBuyNewAdPressed = () => {
    this.props.navigation.navigate("BuyNewAd1");
  }
  
  onStopAdsPressed = () => {
    this.props.navigation.navigate("StopAds");
  }

  onViewAdsPressed = () => {
    this.props.navigation.navigate("ViewAds");
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
  render() {
    const items = this.state.dimensions === undefined ? <View /> : this.renderItems();
    return (
      <View>
        <ScrollView
          style={styles.root}
          onLayout={this.onContainerLayout}
          contentContainerStyle={styles.rootContainer}>
          <Image style={styles.chartPic} source={require('../../assets/image1/images/modals/table_1.jpeg')} />
          <View style={styles.optionCon}>
            <TouchableOpacity
              style={[styles.depositCol,styles.optionBut]}
              onPress={this.onBuyNewAdPressed}>
              <Text style={styles.optionButText}> Buy new Ad </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.withdrawCol,styles.optionBut]}
              onPress={this.onStopAdsPressed}>
              <Text style={styles.optionButText}> Stop Ads </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.donateCol,styles.optionBut]}
              onPress={this.onViewAdsPressed}>
              <Text style={styles.optionButText}> View Ads </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.historyCon}>
            {/* <TouchableOpacity
              style={[styles.myadsCol1, styles.historyBut]}
              onPress={this.onDonationsSentPressed}> */}
            <View style={[styles.myadsCol1, styles.historyBut]}>
              <Text style={styles.optionButText}> TOTAL AD BUY </Text>
              <Text style={styles.optionButText}> γ$6.5k </Text>
            </View>
            {/* </TouchableOpacity> */}
            <View style={[styles.myadsCol2, styles.historyBut]}>
              <Text style={styles.optionButText}> CONVERSION RATE </Text>
              <Text style={styles.optionButText}> 45% </Text>
            </View>
            <View style={[styles.myadsCol3, styles.historyBut]}>
              <Text style={styles.optionButText}> TOTAL ACTIVE ADS </Text>
              <Text style={styles.optionButText}> γ$6.5k </Text>
            </View>
          </View>
          <View style={styles.myadsCon}>
            <View style={styles.splitCon}>
              <Text style={styles.myadsText1}> TOTAL IMPRESSIONS </Text>
              <Text style={styles.myadsText2}> 2,965,333 </Text>
            </View>
            <View style={styles.splitSpace}></View>
            <View style={styles.splitCon}>
              <Text style={styles.myadsText1}> NEW READERS </Text>
              <Text style={styles.myadsText2}> 6,500 </Text>
            </View>
          </View>
          <View style={styles.myadsCon}>
            <View style={styles.splitCon}>
              <Text style={styles.myadsText1}> MEDIA ENGAGEMENTS </Text>
              <Text style={styles.myadsText2}> 400,321 </Text>
            </View>
            <View style={styles.splitSpace}></View>
            <View style={styles.splitCon}>
              <Text style={styles.myadsText1}> NEW AGREES </Text>
              <Text style={styles.myadsText2}> 400,321 </Text>
            </View>
          </View>
          <View style={styles.pickerContainer}>
            <View style={styles.splitCon}>
              <View style={styles.pickerborder}>
                <Picker
                  selectedValue={this.state.continents}
                  style={styles.pickerStyle}
                  mode="dropdown"
                  itemStyle={styles.pickerItemStyle}
                  placeholder="Continents"
                  iosHeader="Continents"
                  onValueChange={(itemValue, itemIndex) => this.setState({ continents: itemValue })}>
                  <Picker.Item style={styles.pickerItemStyle} label="ENTRY PERIOD" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="1 WEEK" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="1 MONTH" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="3 MONTHS" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="6 MONTHS" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="7 MONTHS" value="js" />
                </Picker>
              </View>
            </View>
            <View style={styles.splitSpace}></View>
            <View style={styles.splitCon}>
              <View style={styles.pickerborder1}>
                <Picker
                  selectedValue={this.state.countries}
                  style={styles.pickerStyle}
                  mode="dropdown"
                  itemStyle={styles.pickerItemStyle}
                  onValueChange={(itemValue, itemIndex) => this.setState({ countries: itemValue })}>
                  <Picker.Item style={styles.pickerItemStyle} label="SEARCH AD ID" value="java" />
                  <Picker.Item style={styles.pickerItemhide} label="1234567890" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="1234567890" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="1234567890" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="1234567890" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="1234567890" value="js" />
                  <Picker.Item style={styles.pickerItemStyle} label="1234567890" value="js" />
                </Picker>
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
  historyCon: {
    width: "100%",
    // padding: 10
  },
  optionCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: "100%",
    padding: 5,
    marginTop: 20
  },
  myadsCon: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20
  },
  myadsText1: {
    fontSize: 16,
    color: theme.colors.text.base,
    fontWeight: "bold"
  },
  myadsText2: {
    fontSize: 16,
    color: theme.colors.text.base,
  },
  splitCon: {
    width: "45%"
  },
  splitSpace: {
    width: "10%"
  },
  ballance: {
    backgroundColor: "#e8e8e8",
    height: 40,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 15
  },
  money: {
    textAlign: "center",
    fontSize: 18,
    color: "#505050"
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
  pickerItemhide: {
    height: 0
  },
  chartPic: {
    width: "100%",
    height: 200,
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0,0,0,.12)",
    borderRadius: 5,
    marginTop: 10
  },

  textNormal: {
    color: theme.colors.text.base,
  },
  sendText: {
    fontSize: 16,
    marginTop: 20
  },
  optionBut: {
    padding: 10,
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    width: 110
  },
  optionButText: {
    fontSize: 16,
    color: 'white',
    // fontWeight: "bold"
  },
  depositCol: {
    backgroundColor: 'rgb(80, 203, 109)'
  },
  withdrawCol: {
    backgroundColor: 'rgb(223, 73, 55)'
  },
  donateCol: {
    backgroundColor: 'rgb(72, 152, 221)'
  },
  historyBut: {
    // margin: 15,
    padding: 15,
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: 'space-between',
    // marginLeft: 10,
    width: "100%",
    marginTop: 15
  },
  myadsCol1: {
    backgroundColor: "rgb(217, 138, 189)"
  },
  myadsCol2: {
    backgroundColor: 'rgb(226, 154, 72)'
  },
  myadsCol3: {
    backgroundColor: "rgb(57, 156, 250)"
  },
  pickerStyle: {
    height: 45,
    width: "100%",
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
  end: {
    padding: 20
  }
}));
