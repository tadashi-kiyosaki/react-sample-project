import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Option,
  optionList,
  Select,
  Picker,
} from 'react-native';
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';


export class Channels extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Channels",
    countries: "",
    continents: ""
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

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  _canada(province) {

    this.setState({
      ...this.state,
      canada: province
    });
  }


  onItemPressed = (item) => {
    this.props.navigation.navigate(item.id);
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
        <View style={styles.pickerContainer}>
          <View style={styles.pickerborder}>
            <Picker
              selectedValue={this.state.continents}
              style={styles.pickerStyle}
              mode="dropdown"
              itemStyle={styles.pickerItemStyle}
              onValueChange={(itemValue, itemIndex) => this.setState({ continents: itemValue })}>
              <Picker.Item style={styles.pickerItemStyle} label="Continents" value="java" />
              <Picker.Item style={styles.pickerItemStyle} label="North America" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="Europe" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="Asia" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="Africa" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="South America" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="Ocieana" value="js" />
            </Picker>
          </View>
          <View style={styles.pickerborder1}>
            <Picker
              selectedValue={this.state.countries}
              style={styles.pickerStyle}
              mode="dropdown"
              itemStyle={styles.pickerItemStyle}
              onValueChange={(itemValue, itemIndex) => this.setState({ countries: itemValue })}>
              <Picker.Item style={styles.pickerItemStyle} label="Countries" value="java" />
              <Picker.Item style={styles.pickerItemStyle} label="United States" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="Spain" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="United Kingdom" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="France" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="China" value="js" />
              <Picker.Item style={styles.pickerItemStyle} label="Brazil" value="js" />
            </Picker>
          </View> 
        </View>
        <View style={styles.countContainer}>
          <View style={styles.countborder}>
            <View style={styles.counterSplit}>
              <Text style={styles.countLeft}>0 of 13</Text>
            </View>
            <View style={styles.counterSplit}>
              <Text style={styles.countRight}>13 Available</Text>
            </View>
          </View>
        </View>
        <View style={styles.channnelContainer}>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-1.png')} />            
          </View>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-2.png')} />
          </View>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-3.png')} />            
          </View>
        </View>
        <View style={styles.channnelContainer}>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-4.png')} />
          </View>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-5.png')} />
          </View>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-6.png')} />
          </View>
        </View>
        <View style={styles.channnelContainer}>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-7.png')} />
          </View>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-8.png')} />
          </View>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-9.png')} />
          </View>
        </View>
        <View style={styles.channnelContainer}>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-10.png')} />
          </View>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-11.png')} />
          </View>
          <View>
            <Image style={styles.channelPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/chanel/img-12.png')} />
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
            <View styles={styles.padding}>
              <TouchableOpacity onPress={() => this.moveToChannels()}>
                <Image style={styles.headerPic} onPress={this.moveToChannels} source={require('../../assets/image1/images/a_channels.png')} />
              </TouchableOpacity>
            </View>
            {/* <View style={styles.homeline} /> */}
          </View>
          <View>
            <TouchableOpacity onPress={() => this.moveToProfile()}>
              <Image style={styles.headerPic} onPress={this.moveToProfile} source={require('../../assets/image1/images/profile-icon.png')} />
            </TouchableOpacity>
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

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 60,
    width: "100%",
    padding: 5,
  },
  headerPic: {
    width: 27,
    height: 28,
  },
  pickerStyle: {
    height: 45,
    width: 160,
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
    padding: 10,
  },

  countContainer: {
    width: "100%",
    padding: 10,
  },
  countborder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    height: 45,
    marginBottom: 30,
    backgroundColor: theme.colors.screen.bold
  },
  counterSplit: {
    width: "50%"
  },
  countLeft:{
    fontSize: 17,
    borderRightWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    width:"100%",
    color: theme.colors.text.base,
  },
  countRight: {
    fontSize: 17,
    textAlign: "center",
    color: theme.colors.text.base,
    width: "100%"
  },
  channnelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    width: "100%",
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 30
  },
  channelPic: {
    height: 75,
    width: 73
  },
  homeline: {
    width: "100%",
    borderBottomWidth: 3,
    borderBottomColor: "#099FD4",
    marginTop: 7,
    marginBottom: 15
  },
}));
