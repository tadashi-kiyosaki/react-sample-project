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


export class Contactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      name: '',
      email: '',
      phone: '',
      subject: '',
      query: '',
    };
  }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Contact Us",
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
          <Text style={[styles.sendText, styles.textNormal]}>Name</Text>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder='Name'
              autoCapitalize='nonea'
              autoCorrect={false}
              value={this.state.name}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ name: text })} />
          </View>
          <Text style={[styles.sendText, styles.textNormal]}>Email</Text>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder='Email'
              autoCapitalize='nonea'
              autoCorrect={false}
              value={this.state.email}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ email: text })} />
          </View>
          <Text style={[styles.sendText, styles.textNormal]}>Phone</Text>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder='Phone'
              autoCapitalize='nonea'
              autoCorrect={false}
              value={this.state.phone}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ phone: text })} />
          </View>
          <Text style={[styles.sendText, styles.textNormal]}>Subject</Text>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder='Subject'
              autoCapitalize='nonea'
              autoCorrect={false}
              value={this.state.subject}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ subject: text })} />
          </View>
          <Text style={[styles.sendText, styles.textNormal]}>Query</Text>
          <View style={styles.queryHeight}>
            <TextInput
              style={[styles.searchInput,]}
            placeholder='Subject'
            autoCapitalize='nonea'
              autoCorrect={false}
              value={this.state.query}
              underlineColorAndroid='transparent'
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => this.setState({ query: text })} />
          </View>
          {/* <View style={styles.authContainter}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.moveToNewPing2}>
              <Text style={styles.submitButtonText}> Next </Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.authContainter}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.onLoginButtonPressed}>
              <Text style={styles.submitButtonText}> SUBMIT </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={this.onCancelButtonPressed}>
              <Text style={styles.cancelButtonText}> CANCEL </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
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

  queryHeight: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    height: 200,
    width: "100%",
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 10
  },  
  searchInput: {
    height: "100%",
    flex: 5,
    fontSize: 20,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top'
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
    marginTop: 5,
    marginBottom: 10
  },
  headerPic: {
    width: 27,
    height: 28,
  },

  textNormal: {
    color: theme.colors.text.base,
  },
  sendText: {
    fontSize: 18,
    marginTop: 10
  },
  // submitButton: {
  //   backgroundColor: 'rgb(47, 185, 179)',
  //   padding: 10,
  //   // margin: 15,
  //   height: 45,
  //   width: 150,
  //   borderRadius: 5,
  //   alignItems: "center",
  //   justifyContent: 'center',
  // },
  // submitButtonText: {
  //   fontSize: 18,
  //   color: 'white',
  //   fontWeight: "bold"
  // },
  submitButton: {
    backgroundColor: '#4DAC2A',
    padding: 10,
    margin: 15,
    height: 50,
    width: 140,
    borderRadius: 100,
    alignItems: "center"
  },
  submitButtonText: {
    fontSize: 18,
    color: 'white'
  },


  cancelButton: {
    backgroundColor: '#fff',
    // borderColor: '#243843',
    // borderWidth: 1,
    padding: 10,
    margin: 15,
    height: 50,
    width: 140,
    borderRadius: 100,
    alignItems: "center"
  },
  cancelButtonText: {
    fontSize: 18,
    color: '#4DAC2A'
  }
}));
