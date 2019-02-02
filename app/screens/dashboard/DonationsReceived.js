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


export class DonationsReceived extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      reader: '',
      reference: ''
    };
  }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Donations Received",
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

  moveToMyMoney = () => {
    this.props.navigation.navigate("MyMoney");
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
          <Text style={[styles.sendText, styles.textNormal]}>YOUR BALANCE:</Text>
          <View style={styles.ballance}>
            <Text style={styles.money}>γ$2,965,333</Text>
          </View>
          <View style={styles.chartCon}>
            <View style={styles.chartTitleCon}>
              <Text style={styles.chartText}>Donations Sent</Text>
              <Text style={styles.chartText}>γ$571</Text>
            </View>
            <Image style={styles.chartPic} source={require('../../assets/image1/images/modals/table.jpg')} />
          </View>
          <View style={styles.tableCon}>
            <Text style={[styles.tableText]}>History</Text>
            <View style={styles.tableCon1}>
              <View style={styles.date}>
                <Text style={styles.tableDataText}>Date</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.tableDataText}>Status</Text>
              </View>
              <View style={styles.action}>
                <Text style={styles.tableDataText}>Action</Text>
              </View>
            </View>
            <View style={styles.tableCon1}>
              <View style={styles.date}>
                <Text style={styles.tableDataText}>28/7/2018</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.tableDataText}>γ$71 received from @sanderslawn</Text>
              </View>
              <View style={styles.action}>
                <RkText style={styles.trashText} rkType='awesome'>{FontAwesome.trash}</RkText>
              </View>
            </View>
            <View style={styles.tableCon1}>
              <View style={styles.date}>
                <Text style={styles.tableDataText}>28/7/2018</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.tableDataText}>γ$71 received from @sanderslawn</Text>
              </View>
              <View style={styles.action}>
                <RkText style={styles.trashText} rkType='awesome'>{FontAwesome.trash}</RkText>
                {/* <RkText style={styles.trashText} rkType='awesome'>{FontAwesome.trash}</RkText> */}
                {/* <Text style={styles.tableDataText}>Action</Text> */}
              </View>
            </View>
            <View style={styles.tableCon1}>
              <View style={styles.date}>
                <Text style={styles.tableDataText}>28/7/2018</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.tableDataText}>γ$71 received from @sanderslawn</Text>
              </View>
              <View style={styles.action}>
                <RkText style={styles.trashText} rkType='awesome'>{FontAwesome.trash}</RkText>
              </View>
            </View>
          </View>
          <View style={styles.linkCon}>
            <Text style={[styles.linkText,styles.textNormal]}>Return to</Text>
            <TouchableOpacity onPress={() => this.moveToMyMoney()}>
              <Text style={styles.linkWallet}>My Wallet</Text>
            </TouchableOpacity>
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
  authContainter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 100,
    width: "100%",
    padding: 5,
  },

  chartCon: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'rgb(245, 202, 0)',
    width: "100%",
    borderRadius: 5,
    marginBottom: 20
  },

  
  chartPic: {
    width: 350,
    height: 170
  },

  chartTitleCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 20
  },

  chartText: {
    color: "white",
    fontSize: 16
  },

  tableCon: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'rgb(228, 246, 248)',
    width: "100%",
    borderRadius: 5,
    marginBottom: 20,
  },

  tableCon1: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "#dee2e6",
    flexDirection: "row",
    width: "100%"
  },

  date: {
    borderWidth: 1,
    borderColor: "#dee2e6",
    flex: 3,
    height: 60,
    justifyContent: "center"
  },
  status: {
    borderWidth: 1,
    borderColor: "#dee2e6",
    flex: 5,
    height: 60,
    justifyContent: "center"
  },
  action: {
    borderWidth: 1,
    borderColor: "#dee2e6",
    flex: 2,
    height: 60,
    justifyContent: "center"
  },
  trashText: {
   fontSize: 25,
    color: 'black',
    textAlign: "center"
  },
  tableDataText: {
    fontSize: 20,
    textAlign: "center"
  },
  homeline: {
    width: "100%",
    borderBottomWidth: 3,
    borderBottomColor: "#099FD4",
    marginTop: 7,
    marginBottom: 15
  },
  tableText: {
    color: "black",
    // color: "rgb(120, 218, 206)",
    fontSize: 16
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 20
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

  diamondText: {
    fontSize: 18,
    color: "white"
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
  linkWallet: {
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
  end: {
    padding: 20
  }
}));
