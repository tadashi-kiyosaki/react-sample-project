import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';


export class GridV2 extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Advanced Setting",
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

  render() {
    const items = this.state.dimensions === undefined ? <View /> : this.renderItems();
    return (
      <ScrollView
        style={styles.root}
        onLayout={this.onContainerLayout}
        contentContainerStyle={styles.rootContainer}>

        <View style={styles.headercontainer}>
          <View >
            <View styles={styles.padding}>
              <Image style={styles.headerPic} source={require('../../assets/image1/images/a_home.png')} />  
            </View>
            <View style={styles.homeline} />
          </View>
          <View>
            <Image style={styles.headerPic} source={require('../../assets/image1/images/notification.png')} />
          </View>
          <View>
            <Image style={styles.headerPic} source={require('../../assets/image1/images/setting.png')} />
          </View>
          <View>
            <Image style={styles.headerPic} source={require('../../assets/image1/images/profile-icon.png')} />
          </View>
          <View>
            <Image style={styles.headerPic} source={require('../../assets/image1/images/search-icon.png')} />
          </View>
        </View>
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
        <View style={styles.line}/>
        <View style={styles.containerPic}>
          <View >
            <Text style={styles.titlePicture}>LIVE</Text>
          </View>
          <View>
            <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
          </View>
        </View>
        <Image style={styles.picture} source={require('../../assets/image1/images/list_v_img_1.png')} />
        <View style={styles.containerPic}>
          <View >
            <Text style={styles.titlePicture}>World</Text>
          </View>
          <View>
            <Image style={styles.anglePic} source={require('../../assets/image1/images/angle-right.png')} />
          </View>
        </View>
        <Image style={styles.picture} source={require('../../assets/image1/images/list_v_img_2.png')} />
        <View style={styles.containerPic}>
          <View >
            <Text style={styles.titlePicture}>LIVE</Text>
          </View>
          <View>
            <Image style={styles.anglePic}source={require('../../assets/image1/images/angle-right.png')} />
          </View>
        </View>
        <Image style={styles.picture} source={require('../../assets/image1/images/list_v_img_1.png')} />
        <View style={styles.containerPic}>
          <View >
            <Text style={styles.titlePicture}>World</Text>
          </View>
          <View>
            <Image style={styles.anglePic}source={require('../../assets/image1/images/angle-right.png')} />
          </View>
        </View>
        <Image style={styles.picture} source={require('../../assets/image1/images/list_v_img_2.png')} />
        <View style={styles.containerPic}>
          <View>
            <Text style={[styles.titlePicture, styles.continue]}>Continue</Text>
          </View>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
    padding: 10
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
    height: 50,
    width: "100%",
    padding: 5,
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
    padding: 5,
    marginTop: 10
  },
  titlePicture: {
    color: "#547B92",
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
  headerPic:{
    width: 29,
    height: 30  
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
  }
}));
