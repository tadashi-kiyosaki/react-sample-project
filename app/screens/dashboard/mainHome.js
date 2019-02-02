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


export class MainHome extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Journile",
    // headerLeft: "<Image style={styles.logoPic} source={require('../../assets/image1/images/noti_user.png')} />"
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
  moveToCategory = () => {
    this.props.navigation.navigate("Category");
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
          
          <View style={styles.blockCon}>
            <View style={styles.container}>
              <View >
                <Text style={styles.textTop}>Today</Text>
                <Text style={styles.textTop}>Sunday June 11, 2017</Text>
              </View>
              <View>
                <Text style={styles.textTopRight}>Location</Text>
                <Text style={styles.textTopRight}>NEW YORK, NY</Text>
              </View>
            </View>
            <View style={styles.line}/>
            <View style={styles.row}>
              <View style={[styles.box,styles.colmd3]}>
                <Text style={styles.weatherWidget}>Sunny</Text>
                <Text style={styles.temperature}>57°</Text>
              </View>
              <View style={[styles.box,styles.colmd9]}>
                <View style={styles.container}>
                  <View style={[styles.borderRight1, styles.alignCenter]}>
                    <Text style={styles.weekday}>Mon</Text>
                    <Image source={require('../../assets/image1/images/black_c.png')} />
                    <Text style={styles.weekday}>60°</Text>
                  </View>
                  <View style={[styles.borderRight1, styles.alignCenter]}>
                    <Text style={styles.weekday}>Tue</Text>
                    <Image source={require('../../assets/image1/images/black_c.png')} />
                    <Text style={styles.weekday}>60°</Text>
                  </View>
                  <View style={[styles.borderRight1, styles.alignCenter]}>
                    <Text style={styles.weekday}>Wed</Text>
                    <Image source={require('../../assets/image1/images/black_c.png')} />
                    <Text style={styles.weekday}>60°</Text>
                  </View>
                  <View style={[styles.borderRight1, styles.alignCenter]}>
                    <Text style={styles.weekday}>Thu</Text>
                    <Image source={require('../../assets/image1/images/black_c.png')} />
                    <Text style={styles.weekday}>60°</Text>
                  </View>
                  <View style={[styles.borderRight1, styles.alignCenter]}>
                    <Text style={styles.weekday}>Fri</Text>
                    <Image source={require('../../assets/image1/images/black_c.png')} />
                    <Text style={styles.weekday}>60°</Text>
                  </View>
                  <View style={[styles.borderRight1, styles.alignCenter]}>
                    <Text style={styles.weekday}>Sat</Text>
                    <Image source={require('../../assets/image1/images/black_c.png')} />
                    <Text style={[styles.weekday,styles.alignCenter]}>60°</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.categoryBlock} onPress={() => this.moveToCategory()}>
            {/* <View style={styles.categoryBlock}> */}
              <View style={styles.containerPic}>
                <View >
                  <Text style={styles.titlePicture}>Video</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.moveToCategory()}>
                    <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
                  </TouchableOpacity>
                </View>
              </View>
              <Image style={styles.picture} source={require('../../assets/image1/images/posts/post-1.jpg')} />
            {/* </View> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBlock} onPress={() => this.moveToCategory()}>
            {/* <View style={styles.categoryBlock}> */}
              <View style={styles.containerPic}>
                <View >
                  <Text style={styles.titlePicture}>Technology</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.moveToCategory()}>
                    <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
                  </TouchableOpacity>
                </View>
              </View>
              <Image style={styles.picture} source={require('../../assets/image1/images/posts/post-2.jpg')} />
            {/* </View> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBlock} onPress={() => this.moveToCategory()}>
            {/* <View style={styles.categoryBlock}> */}
              <View style={styles.containerPic}>
                <View >
                  <Text style={styles.titlePicture}>Featured</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.moveToCategory()}>
                    <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
                  </TouchableOpacity>
                </View>
              </View>
              <Image style={styles.picture} source={require('../../assets/image1/images/posts/post-3.jpg')} />
            {/* </View> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBlock} onPress={() => this.moveToCategory()}>
            {/* <View style={styles.categoryBlock}> */}
              <View style={styles.containerPic}>
                <View >
                  <Text style={styles.titlePicture}>Live</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.moveToCategory()}>
                    <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
                  </TouchableOpacity>
                </View>
              </View>
              <Image style={styles.picture} source={require('../../assets/image1/images/posts/post-4.jpg')} />
            {/* </View> */}
          </TouchableOpacity>
          <View style={styles.containerPic}>
            <View>
              <Text style={[styles.titlePicture, styles.continue]}>Continue</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.headercontainer}>
          <View >
            <View styles={styles.padding}>
              <TouchableOpacity onPress={() => this.moveToHome()}>
                <Image style={styles.headerPic} source={require('../../assets/image1/images/a_home.png')} />
              </TouchableOpacity>  
            </View>
            {/* <View style={styles.homeline} /> */}
          </View>
          <View>
            <TouchableOpacity onPress={() => this.moveToNotification()}>
            <Image style={styles.headerPic} onPress={this.moveToNotification}source={require('../../assets/image1/images/notification.png')} />
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
    textColor: theme.colors.text.base,
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
  blockCon: {
    width: "100%",
    backgroundColor: "#88a1ae",
    borderRadius: 5,
    padding: 10
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
  textTop: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginTop: 5
  },
   textTopRight: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 5
  },
  
  weatherWidget: {
    fontFamily: 'Roboto',
    color: '#f1c52e',
    fontSize: 24,
    fontWeight: "bold",
  },
  temperature: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 90,
    width: "100%",
    padding: 5,
  },
  box: {
    flex: 1,
    height: 500,
    // backgroundColor: '#333',
  },
  colmd3: {
    flex: 1,
  },
  colmd9: {
    flex: 3
  },
  weekday: {
    fontFamily: 'Roboto',
    fontSize: 15,
    lineHeight: 22,
    color: "black"
  },
  stretch: {
    width: 50,
    height: 50
  },
  borderRight1: {
    borderRightWidth: 1,
    borderRightColor: "black",
    paddingRight: 7
  },
  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#54798b",
    marginTop: 5,
    marginBottom: 10
  },

  containerPic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    padding: 10,
  },

  categoryBlock: {
    width: "100%",
    backgroundColor: theme.colors.screen.bold,
    borderRadius: 5,
    marginTop: 15,
  },
  titlePicture: {
    color: theme.colors.text.base,
    fontWeight: "bold",
    fontSize: 20,
    height: 25
  },
  continue: {
    marginBottom: 10
  },
  alignCenter: {
    alignItems: "center",
  },
  anglePic: {
    marginTop:8
  },
  headerPic: {
    width: 27,
    height: 28,
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
  picture: {
    width: "100%",
    height: 250
  },
  logoPic: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
}));
