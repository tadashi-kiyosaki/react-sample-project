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
  RkStyleSheet,
  RkText,
  RkTextInput,
  RkTheme,
  RkButton,
} from 'react-native-ui-kitten';

import { FontAwesome } from '../../assets/icons';
import { GradientButton } from '../../components/';
import { scaleVertical } from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';

export class PasswordRecovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    header: null,
  };

  onSendButtonPressed = () => {
    this.props.navigation.goBack();
  };

  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../assets/images/logo.png') : require('../../assets/images/logoDark.png')
  );

  renderImage = () => (
    <Image style={styles.image} source={this.getThemeImageSource(RkTheme.current)} />
  );

  handlePress = () => {
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
      <View style={styles.authContainter}>
        <View style={styles.email}>
          <TextInput
            style={styles.authInput}
            placeholder='Email'
            autoCapitalize='none'
            autoCorrect={false}
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
        <TouchableOpacity
          style={styles.submitButton}
          onPress={(e) => this.onSendButtonPressed(e)}>
          <Text style={styles.submitButtonText}> SEND EMAIL </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
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
}));
