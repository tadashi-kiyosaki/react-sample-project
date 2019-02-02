import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Keyboard,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  Alert,
  Modal
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';
import { GradientButton } from '../../components/gradientButton';
import { scaleModerate, scaleVertical } from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';
import { Ionicons } from '@expo/vector-icons';
// import Toast from 'react-native-whc-toast'
import Toast, { DURATION } from 'react-native-easy-toast'
import Common from '../Common';
// import $ from 'jquery';

export class LoginV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      email: '',
      password: '',
      modalShareVisible: false,
      validateText: '',
      data: []
    };
  }
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    header: null,
  };

  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../assets/images/backgroundLoginV1.png') : require('../../assets/images/backgroundLoginV1DarkTheme.png')
  );

  renderImage = () => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(375, 1),
    };
    return (
      <Image
        style={[styles.image, imageSize]}
        source={this.getThemeImageSource(RkTheme.current)}
      />

    );
  };

  userLogin = (e) => {
    this.props.navigation.navigate('MainHome');
    // if(this.state.email == "")
    // {
    //   this.setState({ validateText: "Please provide email" })
    //   this.setState({ modalShareVisible: true });
    //   // StatusBar.setHidden(false);
    //   // this.refs.toast.showTop('Please provide email');
    //   return;
    // }

    // if(this.state.password == "")
    // {
    //   this.setState({ validateText: "Please provide password" })
    //   this.setState({ modalShareVisible: true });
    //   return; 
    // }

    // let body = {
    //   email: this.state.email,
    //   password: this.state.password,
    //   clientType: 2
    // }
    // fetch(Common.BACKEND + '/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   console.log(responseJson.refreshToken);
    //   this.setState({
    //     data: responseJson
    //   })
    //   if(responseJson.user != false){
    //     Common.setUser(responseJson.user);
    //     Common.setToken(responseJson);
    //     this.props.navigation.navigate('MainHome');
    //   }
    //   else{
    //     this.setState({ validateText: "Invalid Login" })
    //     this.setState({ modalShareVisible: true });
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    //   this.setState({ validateText: error.body.message })
    //   this.setState({ modalShareVisible: true });
    // });
  }

  closeAlert = () => {
    this.setState({ modalShareVisible: false });
  }
  onLoginButtonPressed = () => {
    this.props.navigation.goBack();
  };

  onSignUpButtonPressed = () => {
    this.props.navigation.navigate('SignUp');
  };

  onRegisterPressed = () => {
    this.props.navigation.navigate('Register');
  };

  onForgetPressed = () => {
    this.props.navigation.navigate('password');
  }
  
  handlePress= () => {
  };
  
  moveToHome = () => {
    this.props.navigation.navigate("Home1");
  };

  render = () => (
    <ScrollView style={styles.root}
      onLayout={this.onContainerLayout}
      contentContainerStyle={styles.rootContainer}>
      {/* <Toast ref="toast" /> */}
      <View style={styles.logo}>
        <TouchableOpacity onPress={() => this.moveToHome()}>
          <Image style={styles.headerPic} source={require('../../assets/image1/images/login-logo.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.authContainter}>
        <View style={styles.email}>
          <TextInput
            style={styles.authInput}
            placeholder='Email'
            autoCapitalize='none'
            autoCorrect={false}
            // autoFocus={true}
            keyboardType='email-address'
            value={this.state.email}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ email: text })} />
          <RkButton
            style={styles.iconButton}
            rkType='clear'
            onPress={this.handlePress}>
            <RkText style={styles.iconButtonText} rkType='awesome'>{FontAwesome.userO}</RkText>
          </RkButton>
        </View>
        <View style={styles.email}>
          <TextInput
            style={styles.authInput}
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            // autoFocus={true}
            value={this.state.password}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ password: text })} />
          <RkButton
            style={styles.iconButton}
            rkType='clear'
            onPress={this.handlePress}>
            <RkText style={styles.iconButtonText} rkType='awesome'>{FontAwesome.lock}</RkText>
          </RkButton>
        </View>
        <View style={styles.forgotContainer}>
          <Text style={styles.forgotColor} onPress={this.onForgetPressed}>Forgot password?</Text>            
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={(e) => this.userLogin(e)}>
          <Text style={styles.submitButtonText}> Login </Text>
        </TouchableOpacity>

        <View style={styles.orContainter}>
          <View style={styles.line} />
          <View style={styles.orText}>
            <Text style={styles.orTextColor}>OR</Text>
          </View>
          <View style={styles.line} />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.onRegisterPressed}>
          <Text style={styles.submitButtonText}> Register </Text>
        </TouchableOpacity>
        <Toast ref="toast" />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalShareVisible}
        onRequestClose={() => this.closeAlert}>
        <View style={{ flex: 1, marginTop: 30, alignItems: 'center' }}>
          <TouchableOpacity onPress={this.closeAlert}>
          <View style={styles.ModalInsideView}>
            <View style={styles.container3}>
              <Text style={styles.textNormal}>{this.state.validateText}</Text>
                <RkText style={styles.iconButtonText} rkType='awesome'>  {FontAwesome.timesCircle}</RkText>
            </View>
          </View>
         </TouchableOpacity>
        </View>
      </Modal>
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
  ModalInsideView: {

    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#1b9cec",
    // height: 100,
    // width: '95%',
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
    alignItems: "center"

  },
  container3: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // width: "100%",
  },
  button: {
     borderColor: theme.colors.border.solid,
     borderWidth: 0,
    backgroundColor: '#099FD4'
  },
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 50,
    width: "100%",
    padding: 5,
  },
  headerPic:{
    height:150,
    width: 240
  },
  logo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: "100%",
    padding: 5,
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
    color: 'white',
  },
  authInput:{
    height: 60,
    flex: 5,
    fontSize: 20,
    borderColor: "#099FD4",
    backgroundColor: '#3b5461',
    paddingLeft: 10,
    textAlign: "center",
    borderRadius: 5,
    color: theme.colors.text.base
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 60,
    width: "100%",
    // padding: 5,
    marginBottom: 10
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
    height: 30,
    width: "100%",
    padding: 5,
  },
  line: {
    width: "25%",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginTop: 15,
    marginBottom: 15,
    alignItems: "center"
  },
  orText:{
    flex: 2,
    alignItems: "center",
  },

  orTextColor:{
    color: "white",
    fontSize: 17,
    fontWeight: "700"
  },
  
  forgotContainer:{
    alignItems: 'flex-end',
    marginTop: 15
  },
  forgotColor: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "right",
  },

  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    resizeMode: 'cover',
    marginBottom: scaleVertical(10),
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: 'center',
    flex: -1,
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
  },
  button: {
    marginHorizontal: 14,
  },
  save: {
    marginVertical: 9,
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textNormal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
}));
