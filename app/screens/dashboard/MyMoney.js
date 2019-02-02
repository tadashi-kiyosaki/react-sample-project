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


export class MyMoney extends React.Component {
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
    title: "My Wallet",
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
  onDepositPressed = () => {
    this.props.navigation.navigate("DepositFunds");
  }
  onWithdrawPressed = () => {
    this.props.navigation.navigate("WithdrawFunds");
  }
  onDonatePressed = () => {
    this.props.navigation.navigate("DonateFunds");
  }
  onDonationsSentPressed = () => {
    this.props.navigation.navigate("DonationsSent");
  }
  onDonationsReceivedPressed = () => {
    this.props.navigation.navigate("DonationsReceived");
  }
  onWithdrawsCompletedPressed = () => {
    this.props.navigation.navigate("WithdrawsCompleted");
  }
  onDepositsCompletedPressed = () => {
    this.props.navigation.navigate("DepositsCompleted");  
  }
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
          <Text style={[styles.sendText, styles.textNormal]}>YOUR BALLANCE</Text>
          <View style={styles.ballance}>
            <Text style={styles.money}>γ$2,965,333</Text>
          </View>
          <Text style={[styles.sendText, styles.textNormal]}>SELECT OPTIONS</Text>
          <View style={styles.optionCon}>
            <TouchableOpacity
              style={[styles.depositCol,styles.optionBut]}
              onPress={this.onDepositPressed}>
              <Text style={styles.optionButText}> Deposit </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.withdrawCol,styles.optionBut]}
              onPress={this.onWithdrawPressed}>
              <Text style={styles.optionButText}> Withdrawal </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.donateCol,styles.optionBut]}
              onPress={this.onDonatePressed}>
              <Text style={styles.optionButText}> Donate </Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.sendText, styles.textNormal]}>YOUR HISTORY</Text>
          <View style={styles.historyCon}>
            <TouchableOpacity
              style={[styles.mymoneyCol1, styles.historyBut]}
              onPress={this.onDonationsSentPressed}>
              <Text style={styles.optionButText}> DONATIONS SENT </Text>
              <Text style={styles.optionButText}> γ$571 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.mymoneyCol2, styles.historyBut]}
              onPress={this.onDonationsReceivedPressed}>
              <Text style={styles.optionButText}> DONATIONS RECEIVED </Text>
              <Text style={styles.optionButText}> γ$6.5k </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.mymoneyCol3, styles.historyBut]}
              onPress={this.onWithdrawsCompletedPressed}>
              <Text style={styles.optionButText}> WITHDRAWALS COMPLETED </Text>
              <Text style={styles.optionButText}> γ$12.9k </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.mymoneyCol4, styles.historyBut]}
              onPress={this.onDepositsCompletedPressed}>
              <Text style={styles.optionButText}> DEPOSITS COMPLETED </Text>
              <Text style={styles.optionButText}> γ$12.9k </Text>
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
  historyCon: {
    width: "100%",
    padding: 10
  },
  optionCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: "100%",
    padding: 5,
    marginTop: 10
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
    marginLeft: 10
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
  mymoneyCol1: {
    backgroundColor: "#007bff"
  },
  mymoneyCol2: {
    backgroundColor: 'rgb(245, 202, 0)'
  },
  mymoneyCol3: {
    backgroundColor: "rgb(226, 75, 70)"
  },
  mymoneyCol4: {
    backgroundColor: "rgb(74, 210, 161)"
  },

  
}));
