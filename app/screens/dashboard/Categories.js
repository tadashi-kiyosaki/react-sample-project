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


export class Categories extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Categories",
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


  categoryBlock: {
    width: "100%",
    backgroundColor: theme.colors.screen.bold,
    borderRadius: 5,
    marginTop: 15,
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
    color: "#54798b",
    fontWeight: "bold",
    marginTop: 5
  },
   textTopRight: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: "#54798b",
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
    color: '#54798b',
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
    color: "#54798b"
  },
  stretch: {
    width: 50,
    height: 50
  },
  borderRight1: {
    borderRightWidth: 1,
    borderRightColor: "#54798b",
    paddingRight: 7
  },
  line: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#54798b",
    marginTop: 15,
    marginBottom: 15
  },

  containerPic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    padding: 10,
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
  }
}));
