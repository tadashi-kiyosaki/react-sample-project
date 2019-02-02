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

export default class Common extends React.Component {
  static BACKEND = 'http://18.224.51.217:3000';//'http://104.248.71.129:3000';

  static setUser(user) {
    localStorage.setItem('_user', JSON.stringify(user));
  }

  static setToken(data) {
    localStorage.setItem('_token', data.token);
    localStorage.setItem('_refreshToken', data.refreshToken);
    localStorage.setItem('_socketToken', data.socketToken);
  }
};