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


export class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      search: '',
    };
  }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Search",
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
        <View style={styles.searchBox}>
          <RkButton
            style={styles.iconButton}
            rkType='clear'
            onPress={this.handlePress}>
            <RkText style={styles.iconButtonText} rkType='awesome'>{FontAwesome.search}</RkText>
          </RkButton>
          <TextInput
            style={styles.searchInput}
            placeholder='Search here'
            autoCapitalize='none'
            autoCorrect={false}
            value={this.state.search}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ search: text })} />
        </View>
        <View style={styles.containerPic}>
          <View >
            <Text style={styles.titlePicture}>Worldwide Trends</Text>
          </View>
        </View>
        <Image style={styles.picture} source={require('../../assets/image1/images/demo.png')} />
        <View style={styles.searchContainer}>
          <View style={styles.result}>
            <Text style={styles.exploreText1}>γCoolSummerBreeze</Text>
            <Text style={styles.exploreText2}>Sponsored By Smirnoff</Text>
            <Text style={styles.exploreText2}>1,114 Memos</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.exploreText1}>γCoolSummerBreeze</Text>
            <Text style={styles.exploreText2}>Sponsored By Smirnoff</Text>
            <Text style={styles.exploreText2}>1,114 Memos</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.exploreText1}>γCoolSummerBreeze</Text>
            <Text style={styles.exploreText2}>Sponsored By Smirnoff</Text>
            <Text style={styles.exploreText2}>1,114 Memos</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.exploreText1}>γCoolSummerBreeze</Text>
            <Text style={styles.exploreText2}>Sponsored By Smirnoff</Text>
            <Text style={styles.exploreText2}>1,114 Memos</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.exploreText1}>γCoolSummerBreeze</Text>
            <Text style={styles.exploreText2}>Sponsored By Smirnoff</Text>
            <Text style={styles.exploreText2}>1,114 Memos</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.exploreText1}>γCoolSummerBreeze</Text>
            <Text style={styles.exploreText2}>Sponsored By Smirnoff</Text>
            <Text style={styles.exploreText2}>1,114 Memos</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.exploreText1}>γCoolSummerBreeze</Text>
            <Text style={styles.exploreText2}>Sponsored By Smirnoff</Text>
            <Text style={styles.exploreText2}>1,114 Memos</Text>
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
                <Image style={styles.headerPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/a_search-icon.png')} />
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

  container: {
    flexDirection: 'column',
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
    padding: 5,
    marginTop: 20,
    height: 60
  },
 
  alignCenter: {
    alignItems: "center",
  },
  anglePic: {
    marginTop:8
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

  iconButtonText: {
    // fontWeight: "bold",
    borderRadius: 0,
    color: theme.colors.text.base,
  },
  searchInput: {
    height: 50,
    flex: 5,
    fontSize: 20,
    // borderColor: "black",
    backgroundColor: theme.colors.screen.bold,
    paddingLeft: 10,
    color: theme.colors.text.base
    // borderWidth: 1
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 50,
    width: "100%",
    padding: 5,
    // borderColor: "black",
    // borderWidth: 1,
    // borderRadius: 3
  },
  iconwidth: {
    flex: 1,
    height: "100%",
    fontSize: 20,
    marginBottom: 10,
    padding: 20,
  },
  iconButton: {
    backgroundColor: theme.colors.screen.bold,
    height: 50,
    width: "15%",
    alignItems: "center",
    // borderColor: "black",
    // border: 1,
  },
  containerPic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
    padding: 5,
    marginTop: 10
  },
  titlePicture: {
    color: theme.colors.text.base,
    fontWeight: "bold",
    fontSize: 20,
    height: 25
  },
  anglePic: {
    marginTop: 8
  },
  picture:{
    height: 250,
    width: "100%",
    padding: 10,
    borderRadius: 5
  },
  exploreText1:{
    fontFamily: 'Roboto',
    fontSize: 18,
    color: theme.colors.text.base,
    fontWeight: "bold"
  },
  exploreText2: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: theme.colors.text.base,
  },
  searchContainer: {
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    width: "100%",
    marginTop: 20
  },
  result: {
    padding: 20,
    width: "100%",
    borderRadius: 5,
    backgroundColor: theme.colors.screen.bold,
    marginBottom: 20
  },
  headerPic: {
    width: 27,
    height: 28,
  },
}));
