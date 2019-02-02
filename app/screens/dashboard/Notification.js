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


export class Notification extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Notification",
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
          <View style={styles.container}>
            <View >
              <Text style={styles.textTop}>All</Text>
            </View>
            <View>
              <Text style={styles.textTopRight}>Mentions</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.content1}>
              {/* <View style={styles.line}> */}
                <View style={styles.notiPadding}>
                  <View style={styles.logo}>
                    <Image style={styles.logoPic} source={require('../../assets/image1/images/noti_user.png')} />
                    <Text style={styles.notifirst}>test</Text>
                    <Text style={styles.notisecond}>Reply you Memos. Oct 15</Text>
                  </View>
                  <View style={styles.notification}>
                    <Text style={styles.notiText}>Journile @journile</Text>
                  </View>
                </View>
              {/* </View> */}
            </View>
            <View style={styles.content1}>
              {/* <View style={styles.line}> */}
                <View style={styles.notiPadding}>
                  <View style={styles.logo}>
                    <Image style={styles.logoPic} source={require('../../assets/image1/images/noti_user.png')} />
                    <Text style={styles.notifirst}>test</Text>
                    <Text style={styles.notisecond}>Reply you Memos. Oct 15</Text>
                  </View>
                  <View style={styles.notification}>
                    <Text style={styles.notiText}>Journile @journile</Text>
                  </View>
                </View>
              {/* </View> */}
            </View>
            <View style={styles.content1}>
              {/* <View style={styles.line}> */}
                <View style={styles.notiPadding}>
                  <View style={styles.logo}>
                    <Image style={styles.logoPic} source={require('../../assets/image1/images/noti_user.png')} />
                    <Text style={styles.notifirst}>test</Text>
                    <Text style={styles.notisecond}>Reply you Memos. Oct 15</Text>
                  </View>
                  <View style={styles.notification}>
                    <Text style={styles.notiText}>Journile @journile</Text>
                    <Text style={styles.notiTextInfo}>China Launches First Quantum Communication Satellite</Text>
                  </View>
                </View>
              {/* </View> */}
            </View>
            <View style={styles.content1}>
              {/* <View style={styles.line}> */}
                <View style={styles.notiPadding}>
                  <View style={styles.logo}>
                    <Image style={styles.logoPic} source={require('../../assets/image1/images/noti_user.png')} />
                    <Text style={styles.notifirst}>test</Text>
                    <Text style={styles.notisecond}>Reply you Memos. Oct 15</Text>
                  </View>
                  <View style={styles.notification}>
                    <Text style={styles.notiText}>Journile @journile</Text>
                    <Text style={styles.notiTextInfo}>China Launches First Quantum Communication Satellite</Text>
                  </View>
                </View>
              {/* </View> */}
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
              <View styles={styles.padding}>
                <TouchableOpacity onPress={() => this.moveToNotification()}>
                  <Image style={styles.headerPic} onPress={this.moveToNotification} source={require('../../assets/image1/images/a_notification.png')} />
                </TouchableOpacity>
              </View>
              {/* <View style={styles.homeline} /> */}
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
  colmd3: {
    flex: 1,
  },
  colmd9: {
    flex: 3
  },
 
  alignCenter: {
    alignItems: "center",
  },
  headerPic: {
    width: 27,
    height: 28,
  },
  logoPic: {
    width: 39,
    height: 40,
    borderRadius: 18
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

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // height: 60,
    marginTop: 20,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft:60,
    paddingRight: 60,
    backgroundColor: theme.colors.screen.bold,
    borderRadius: 5
  },
  textTop: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: "white",
    marginTop: 5,
    // textDecorationLine: 'underline',
  },
  textTopRight: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: theme.colors.text.base,
    textAlign: "right",
    marginTop: 5
  },
  content:{
    width: "100%",
    
  },

  content1: {
    width: "100%",
    backgroundColor: theme.colors.screen.bold,
    borderRadius: 5,
    marginTop: 15,
    padding: 20,
  },
  logo: {
    flexDirection: 'row',
    width: "100%",
  },
  notiPadding: {
    padding: 7,
    width: "100%",
    paddingBottom: 15
  },
  notifirst: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: theme.colors.text.base,
    marginTop: 5,
    fontWeight: "bold",
    marginLeft: 20
  },
  notisecond: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: theme.colors.text.base,
    marginTop: 5,
    marginLeft: 5
  },
  notification: {
    borderRadius: 10,
    backgroundColor: "#323d41",
    width: "100%",
    marginTop: 5
  },
  notiText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: "white",
    marginTop: 5,
    fontWeight: "bold",
    marginLeft: 20
  },
  notiTextInfo: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: "white",
    marginTop: 5,
    marginLeft: 20
  },
  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#54798b",
    marginTop: 5,
    marginBottom: 15
  },
}));
