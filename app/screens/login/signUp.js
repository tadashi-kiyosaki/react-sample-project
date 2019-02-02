import React from 'react';
import {
  View,
  Image,
  Keyboard,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Text
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';
import { GradientButton } from '../../components/';
import { scaleVertical } from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';
import { FontAwesome } from '../../assets/icons';

export class SignUp extends React.Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    navigation: NavigationType.isRequired,
  };

  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../assets/images/logo.png') : require('../../assets/images/logoDark.png')
  );

  renderImage = () => (
    <Image style={styles.image} source={this.getThemeImageSource(RkTheme.current)} />
  );

  onSignUpButtonPressed = () => {
    this.props.navigation.goBack();
  };

  onSignInButtonPressed = () => {
    this.props.navigation.navigate('Login1');
  };

  onRegisterPressed = () => {
    this.props.navigation.navigate('Register');
  };
  
  moveToHome = () => {
    this.props.navigation.navigate("Home1");
  };
  
  render = () => (
    <ScrollView style={styles.root}
      onLayout={this.onContainerLayout}
      contentContainerStyle={styles.rootContainer}>
      <View style={styles.logo}>
        <TouchableOpacity onPress={() => this.moveToHome()}>
          <Image style={styles.headerPic} source={require('../../assets/image1/images/login-logo.png')} />
        </TouchableOpacity>
      </View>
      <View style={[styles.authContainter, styles.marginTop]}>   
        <View style={styles.orContainter}>
          {/* <RkButton rkType='social'> */}
          <RkText style={styles.iconButtonText} rkType='awesome hero'>{FontAwesome.facebook}</RkText>
          {/* </RkButton> */}
          <Text style={styles.solidTextColor}>Sign in with Facebook</Text>
        </View>
        <View>
          <Text style={styles.orTextColor}>or</Text>
        </View>
        <View style={styles.orContainter}>
          {/* <RkButton rkType='social'> */}
          <RkText style={styles.iconButtonText} rkType='awesome hero'>{FontAwesome.twitter}</RkText>
          {/* </RkButton> */}
          <Text style={styles.solidTextColor}>Sign in with Twitter    </Text>
        </View>
        <View>
          <Text style={styles.orTextColor}>or</Text>
        </View>
        <View style={styles.orContainter}>
          {/* <RkButton rkType='social'> */}
          <RkText style={styles.iconButtonText} rkType='awesome hero'>{FontAwesome.linkedin}</RkText>
          {/* </RkButton> */}
          <Text style={styles.solidTextColor}>Sign in with LinkEdin</Text>
        </View>
        <View>
          <Text style={styles.orTextColor}>or</Text>
        </View>
        <View style={styles.orContainter}>
          {/* <RkButton rkType='social'> */}
          <RkText style={styles.iconButtonText} rkType='awesome hero'>{FontAwesome.google}</RkText>
          {/* </RkButton> */}
          <Text style={styles.solidTextColor}>Sign in with Google   </Text>
        </View>
        <View>
          <Text style={styles.comment}>We will never post any news, or share your contacts in our app</Text>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.onRegisterPressed}>
          <Text style={styles.submitButtonText}> REGISTER </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
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
  logo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: "100%",
    padding: 5,
  },
  headerPic:{
    height:150,
    width: 240
  },
  submitButton: {
    backgroundColor: '#243843',
    padding: 20,
    margin: 15,
    height: 60,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 15
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: 'center',
    color: 'white'
  },
  iconButton: {
    backgroundColor: '#243843',
    height: 60,
    width: "10%",
    alignItems: "center"
  },
  iconButtonText: {
    // fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginBottom: 5
  },
  iconwidth: {
    flex: 1,
    height: "100%",
    fontSize: 20,
    marginBottom: 20,
    padding: 20,
  },
  authContainter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: "100%",
    padding: 5,
  },
  orContainter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: "100%",
    padding: 5,
  },
  orText: {
    flex: 2,
    alignItems: "center",
    color: "#54798b",
    fontSize: 20,
    marginLeft: 20
  },

  orTextColor: {
    color: "white",
    fontSize: 19,
    fontWeight: "700",
    marginLeft: 30,
    marginBottom: 15,
  },

  solidTextColor: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    marginLeft: 30,
    marginBottom: 15,
  },
  marginTop: {
    marginTop: 20
  },
  comment: {
    fontFamily: 'Roboto',
    color: theme.colors.text.base,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center"
  },
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(77),
    resizeMode: 'contain',
  },
  content: {
    justifyContent: 'space-between',
  },
  save: {
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  footer: {
    justifyContent: 'flex-end',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));
