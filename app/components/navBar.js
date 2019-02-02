import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Modal, Text, TextInput,
  WebView,
  ScrollView
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { RkText, RkButton, RkStyleSheet } from 'react-native-ui-kitten';
import { FontAwesome } from '../assets/icons';
import { UIConstants } from '../config/appConstants';
import NavigationType from '../config/navigation/propTypes';

export class NavBar extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
    headerProps: PropTypes.shape().isRequired,
  };

  state = {
    modalVisible: false,
    modalPollVisible: false,
    modalMapVisible: false,
    modalShareVisible: false,
    query: "",
    choice1: "",
    choice2: "",
    choice3: "",
    ownword: "",
    citationUrl: "",
    citationUrl1: "",
    tagTitle: "",
    tagTitle1: ""
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setPollModalVisible = (visible) => {
    this.setState({ modalPollVisible: visible });
  }

  setMapModalVisible = (visible) => {
    this.setState({ modalMapVisible: visible });
  }
  setShareModalVisible = (visible) => {
    this.setState({ modalShareVisible: visible });
  }
  onNavigationLeftMenuButtonPressed = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };

  onNavigationLeftBackButtonPressed = () => {
    this.props.navigation.goBack();
  };

  renderTitleItem = (title, options) => {
    const isCustom = options !== undefined;
    return isCustom ? this.renderCustomTitleItem(options) : this.renderNavigationTitleItem(title);
  };

  renderLeftItem = (options) => {
    const isCustom = options !== undefined;
    return isCustom ? this.renderCustomLeftItem(options) : this.renderNavigationLeftItem();
  };

  renderRightItem = (options) => {
    const isCustom = options !== undefined;
    return isCustom ? this.renderCustomRightItem(options) : this.renderNavigationRightItem();
  };

  renderNavigationTitleItem = (title) => (
    <View style={styles.title}>
      {/* <RkText>{title}</RkText> */}
      {title === "Journile" ? <Image style={styles.logoPic2} source={require('../assets/image1/images/a-logo.png')} /> : <RkText>{title}</RkText>}
      {/* <Image style={styles.logoPic} source={require('../assets/image1/images/noti_user.png')} /> */}
    </View>
  );

  renderNavigationLeftBackItem = () => (
    <RkButton
      rkType='clear'
      style={styles.menu}
      onPress={this.onNavigationLeftBackButtonPressed}>
      <RkText rkType='awesome hero'>{FontAwesome.chevronLeft}</RkText>
    </RkButton>
  );

  renderNavigationLeftMenuItem = () => (
    <RkButton
      rkType='clear'
      style={styles.menu}
      onPress={this.onNavigationLeftMenuButtonPressed}>
      {/* <RkText rkType='awesome'>{FontAwesome.bars}</RkText> */}
      <Image style={styles.logoPic} source={require('../assets/image1/images/noti_user.png')} />
    </RkButton>
  );

  renderNavigationLeftItemContent = (sceneIndex) => {
    const isFirstScene = sceneIndex === 0;
    return isFirstScene ? this.renderNavigationLeftMenuItem() : this.renderNavigationLeftBackItem();
  };

  renderNavigationLeftItem = () => {
    const sceneIndex = _.findIndex(this.props.headerProps.scenes, { isActive: true });
    return (
      <View style={styles.left}>
        {this.renderNavigationLeftItemContent(0)}
      </View>
    );
  };
  closeMemo = () => {
    this.setModalVisible(false);
  }
  openMemo = () => {
    this.props.navigation.navigate("NewMemo");
    // this.setModalVisible(true)
  }
  closePoll = () => {
    this.setPollModalVisible(false)
  }
  openPoll = () => {
    this.setPollModalVisible(true)
    this.setModalVisible(false)
    this.setMapModalVisible(false)
    this.setShareModalVisible(false)
  }
  closeMap = () => {
    this.setMapModalVisible(false)
  }
  openMap = () => {
    this.setModalVisible(false)
    this.setPollModalVisible(false)
    this.setShareModalVisible(false)
    this.setMapModalVisible(true)
  }
  closeShare = () => {
    this.setShareModalVisible(false)
  }
  openShare = () => {
    this.setModalVisible(false)
    this.setMapModalVisible(false)
    this.setPollModalVisible(false)
    this.setShareModalVisible(true)
  }
  // renderNavigationRightItem = () => undefined;
  renderNavigationRightItem = () => (
    <View style={styles.right}>
      <View style={styles.rightNav}>
        <TouchableOpacity onPress={this.openMemo}>
          <Image style={styles.logoPic1} source={require('../assets/image1/images/note-memo.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );

  renderCustomTitleItem = (options) => (
    <View
      style={styles.title}>
      {options}
    </View>
  );

  renderCustomLeftItem = (options) => (
    <View style={styles.left}>{options}</View>
  );

  renderCustomRightItem = (options) => (
    <View style={styles.right}>{options}</View>
  );

  render() {
    const { options } = this.props.headerProps.scene.descriptor;
    return (
      <View>
        <View style={styles.layout}>
          <View style={styles.container}>
            {this.renderTitleItem(options.title, options.headerTitle)}
            {this.renderLeftItem(options.headerLeft)}
            {this.renderRightItem(options.headerRight)}
          </View>
        </View>
        <Modal  
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          // style={{marginTop: 50, height: 200}}
          onRequestClose={() => {
            // this.closeMemo
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.ModalInsideView}>
              <View style={styles.container3}>
                <Text style={[styles.textuser3, styles.textNormal]}>Issue New Memo</Text>
                <TouchableOpacity onPress={this.closeMemo}>
                  <RkText style={styles.iconButtonText} rkType='awesome'>{FontAwesome.timesCircle}</RkText>
                </TouchableOpacity>
              </View>
              <View style={styles.line}></View>
              <View style={styles.container3}>
                <Image style={styles.logoPicSmall} source={require('../assets/image1/images/noti_user.png')} />
                <View style={styles.flex4}>
                  <Text style={[styles.textuser1, styles.textNormal]}>Margaret Mead  <Image style={styles.userPic} source={require('../assets/image1/images/s_cer.png')} /></Text>
                  <Text style={[styles.textuserSmall1, styles.textNormal]}>test1test@gmail.com</Text>
                </View>
              </View>
              <View style={styles.queryHeight}>
                <TextInput
                  style={[styles.searchInput,]}
                  placeholder="What's on your mind"
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={this.state.query}
                  autoFocus={true}
                  underlineColorAndroid='transparent'
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => this.setState({ query: text })} />
              </View>
              <View style={styles.smileCon}>
                <View></View>
                <Image style={styles.smileIcon} source={require('../assets/image1/images/smile_icon.png')} />
              </View>
              <View style={styles.modalCon}>
                <View style={styles.modalCon1}>
                  <Image style={styles.modalPic} source={require('../assets/image1/images/video_icon.png')} />
                  <Image style={styles.modalPic} source={require('../assets/image1/images/gif_icon.png')} />
                  <TouchableOpacity onPress={this.openPoll}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/poll_icon.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.openMap}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/map_icon.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.openShare}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/share_icon.png')} />
                  </TouchableOpacity>
                </View>
                <View style={styles.modalCon2}>
                  <Text style={[styles.textuser, styles.textNormal]}>230 </Text>
                  <View style={styles.modalbut}>
                    <Text style={[styles.textuser, styles.textNormal]}>Issue</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalPollVisible}
          style={{ marginTop: 50, height: 200 }}
          onRequestClose={() => {
            // this.closePoll
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.PollInsideView}>
              <View style={styles.container3}>
                <Text style={[styles.textuser3, styles.textNormal]}>Poll Title</Text>
                <TouchableOpacity onPress={this.closePoll}>
                  <RkText style={styles.iconButtonText} rkType='awesome'>{FontAwesome.timesCircle}</RkText>
                </TouchableOpacity>
              </View>
              <View style={styles.line}></View>
              <View style={styles.choiceCon}>
                <View style={styles.container3}>
                  <Image source={require('../assets/image1/images/square.png')} />
                  <View style={styles.flex4}>
                    <View style={styles.searchBox}>
                      <TextInput
                        style={styles.choiceInput}
                        placeholder='Choice 1'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={this.state.choice1}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({ choice1: text })} />
                    </View>
                  </View>
                  <View style={styles.flex2}>
                    <Text style={[styles.choiceText]}>Remove Poll</Text>
                  </View>
                </View> 
                <View style={styles.container3}>
                  <Image source={require('../assets/image1/images/square.png')} />
                  <View style={styles.flex4}>
                    <View style={styles.searchBox}>
                      <TextInput
                        style={styles.choiceInput}
                        placeholder='Choice 2'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={this.state.choice2}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({ choice2: text })} />
                    </View>
                  </View>
                  <View style={styles.flex2}>
                    <Text style={[styles.choiceText]}>Remove Poll</Text>
                  </View>
                </View> 
                <View style={styles.container3}>
                  <Image source={require('../assets/image1/images/square.png')} />
                  <View style={styles.flex4}>
                    <View style={styles.searchBox}>
                      <TextInput
                        style={styles.choiceInput}
                        placeholder='Choice 3'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={this.state.choice3}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({ choice3: text })} />
                    </View>
                  </View>
                  <View style={styles.flex2}>
                    <Text style={[styles.choiceText]}>Remove Poll</Text>
                  </View>
                </View> 
                <View style={styles.addChoiceCon}>
                  <Image source={require('../assets/image1/images/plus.png')} />
                  {/* <View style={styles.flex2}> */}
                    <Text style={[styles.choiceText]}>Add a choice</Text>
                  {/* </View> */}
                </View> 
              </View>
              <View style={styles.choiceCon}>
                <Text style={[styles.choiceText2]}>Poll lenght: 2 days</Text>
              </View>
              <View style={styles.modalCon}>
                <View style={styles.modalCon1}>
                  <Image style={styles.modalPic} source={require('../assets/image1/images/video_icon.png')} />
                  <Image style={styles.modalPic} source={require('../assets/image1/images/gif_icon.png')} />
                  <TouchableOpacity onPress={this.openPoll}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/poll_icon.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.openMap}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/map_icon.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.openShare}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/share_icon.png')} />
                  </TouchableOpacity>
                </View>
                <View style={styles.modalCon2}>
                  <Text style={[styles.textuser, styles.textNormal]}>230 </Text>
                  <View style={styles.modalbut}>
                    <Text style={[styles.textuser, styles.textNormal]}>Issue</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalMapVisible}
          style={{ marginTop: 50, height: 200 }}
          onRequestClose={() => {
            // this.closeMap
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.MapInsideView}>
              <View style={styles.container3}>
                <Text style={[styles.textuser3, styles.textNormal]}>Memo Title</Text>
                <TouchableOpacity onPress={this.closeMap}>
                  <RkText style={styles.iconButtonText} rkType='awesome'>{FontAwesome.timesCircle}</RkText>
                </TouchableOpacity>
              </View>
              <View style={styles.line}></View>
              <View style={styles.queryHeight}>
                <TextInput
                  style={[styles.searchInput,]}
                  placeholder="In your own word's ..."
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={this.state.ownword}
                  underlineColorAndroid='transparent'
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => this.setState({ ownword: text })} />
              </View>
              <View style={styles.smileCon}>
                <View></View>
                <Image style={styles.smileIcon} source={require('../assets/image1/images/smile_icon.png')} />
              </View>
              <View style={styles.modalCon}>
                <View style={styles.modalCon1}>
                  <Image style={styles.modalPic} source={require('../assets/image1/images/video_icon.png')} />
                  <Image style={styles.modalPic} source={require('../assets/image1/images/gif_icon.png')} />
                  <TouchableOpacity onPress={this.openPoll}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/poll_icon.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.openMap}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/map_icon.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.openShare}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/share_icon.png')} />
                  </TouchableOpacity>
                </View>
                <View style={styles.modalCon2}>
                  <Text style={[styles.textuser, styles.textNormal]}>230 </Text>
                  <View style={styles.modalbut}>
                    <Text style={[styles.textuser, styles.textNormal]}>Issue</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalShareVisible}
          style={{ marginTop: 50, height: 200 }}
          onRequestClose={() => {
            // this.closeShare  
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.ShareInsideView}>
              <View style={styles.container3}>
                <Text style={[styles.textuser3, styles.textNormal]}>Share</Text>
                <TouchableOpacity onPress={this.closeShare}>
                  <RkText style={styles.iconButtonText} rkType='awesome'>{FontAwesome.timesCircle}</RkText>
                </TouchableOpacity>
              </View>
              <View style={styles.line}></View>
              <View style={{width: "100%", padding: 10}}>
                <View style={styles.shareBox}>
                  <TextInput
                    style={[styles.searchInput,]}
                    placeholder="Enter Citation URL"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.citationUrl}
                    underlineColorAndroid='transparent'
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({ citationUrl: text })} />
                </View>
              </View>
              <View style={{ width: "100%", padding: 10 }}>
                <View style={styles.shareBox}>
                  <TextInput
                    style={[styles.searchInput,]}
                    placeholder="Enter γTag Title"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.tagTitle}
                    underlineColorAndroid='transparent'
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({ tagTitle: text })} />
                </View>
              </View>
              <View style={styles.smileCon1}>
                <View></View>
                <Image style={styles.smileIcon} source={require('../assets/image1/images/smile_icon.png')} />
              </View>
              <View style={{padding:10}}></View>
              <View style={{ width: "100%", padding: 10 }}>
                <View style={styles.shareBox}>
                  <TextInput
                    style={[styles.searchInput,]}
                    placeholder="Enter Citation URL"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.citationUrl1}
                    underlineColorAndroid='transparent'
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({ citationUrl1: text })} />
                </View>
              </View>
              <View style={{ width: "100%", padding: 10 }}>
                <View style={styles.shareBox}>
                  <TextInput
                    style={[styles.searchInput,]}
                    placeholder="Enter γTag Title"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.tagTitle1}
                    underlineColorAndroid='transparent'
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({ tagTitle1: text })} />
                </View>
              </View>

              <View style={styles.smileCon1}>
                <View></View>
                <Image style={styles.smileIcon} source={require('../assets/image1/images/smile_icon.png')} />
              </View>
              <View style={styles.modalCon}>
                <View style={styles.modalCon1}>
                  <Image style={styles.modalPic} source={require('../assets/image1/images/video_icon.png')} />
                  <Image style={styles.modalPic} source={require('../assets/image1/images/gif_icon.png')} />
                  <TouchableOpacity onPress={this.openPoll}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/poll_icon.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.openMap}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/map_icon.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.openShare}>
                    <Image style={styles.modalPic} source={require('../assets/image1/images/share_icon.png')} />
                  </TouchableOpacity>
                </View>
                <View style={styles.modalCon2}>
                  <Text style={[styles.textuser, styles.textNormal]}>230 </Text>
                  <View style={styles.modalbut}>
                    <Text style={[styles.textuser, styles.textNormal]}>Issue</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* <Image style={styles.logoPic1} source={require('../assets/image1/images/note-memo.png')} /> */}
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
  layout: {
    backgroundColor: theme.colors.screen.base,
    paddingTop: UIConstants.StatusbarHeight,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.border.base,
  },
  container: {
    flexDirection: 'row',
    height: UIConstants.AppbarHeight,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  left: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    marginRight: 10
  },
  title: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: 50,
  },
  rightNav: {
    width: 50,
    // marginLeft: 340,
    // marginTop: 10,
    // alignItems: "flx-end"
  },
  logoPic: {
    height: 34,
    width: 34,
    borderRadius: 17,
    marginLeft: 16
  },
  logoPic1: {
    height: 30,
    width: 30,
    marginLeft: 16
  },
  logoPic2: {
    height: 40,
    width: 60,
    // marginLeft: 16
  },
  ModalInsideView: {

    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#3b5461",
    height: 340,
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3b5461',
    padding: 10

  },

  PollInsideView: {

    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#3b5461",
    height: 420,
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3b5461',
    padding: 10

  },

  MapInsideView: {

    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#3b5461",
    height: 300,
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3b5461',
    padding: 10

  },

  ShareInsideView: {

    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#3b5461",
    height: 400,
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3b5461',
    padding: 10

  },

  TextStyle: {
    fontSize: 20,
    marginBottom: 20,
    color: "#fff",
    padding: 20,
    textAlign: 'center'
  },
  textuser3: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: "bold",
    // marginTop: 10
  },
  textNormal: {
    color: theme.colors.text.base
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.text.base,
    // marginTop: 5,
    width: "100%",
    marginTop: 10,
    marginBottom: 15
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: "100%",
  },
  flex4: {
    flex: 4
  },
  flex2: {
    flex: 2
  },
  userPic: {
    width: 40,
    height: 40
  },
  logoPicSmall: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  textuser1: {
    fontFamily: 'Roboto',
    fontSize: 20,
    width: "100%",
    marginLeft: 20
  },
  textuserSmall1: {
    fontFamily: 'Roboto',
    fontSize: 18,
    marginLeft: 20
  },
  queryHeight: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    height: 150,
    width: "100%",
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 10
  },
  searchInput: {
    height: "100%",
    flex: 5,
    fontSize: 20,
    backgroundColor: '#243843',
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top'
  },
  choiceInput: {
    height: "100%",
    flex: 5,
    fontSize: 15,
    backgroundColor: '#243843',
    padding: 5,
    borderRadius: 5,
    textAlignVertical: 'top'
  },
  smileIcon: {
    // marginTop: -40,
  },
  smileCon: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -40,
    paddingRight: 20
  },
  smileCon1: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -40,
    paddingRight: 20
  },
  modalCon: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
     marginTop: 25,
    // padding: 10
  },
  modalCon1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // height: 30
  },
  modalCon2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // height: 30
  },
  modalPic: {
    marginLeft: 10,
    height: 30,
    width: 30
  },
  modalbut: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.text.base,
    height: 30
    // marginTop: 5,
  },
  textmodal: {
    fontFamily: 'Roboto',
    fontSize: 18,
    // padding: 5,
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: theme.colors.text.base,
  },
  textuser: {
    fontFamily: 'Roboto',
    fontSize: 20,
    // marginTop: 20,
    // marginRight: 5
  },
  iconButtonText: {
    color: "white",
    fontSize: 30
  },
   searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 30,
    width: "80%",
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    borderRadius: 3,
    // marginTop: 15,
    marginLeft: 15,
    marginBottom: 20
  },
  shareBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 50,
    width: "100%",
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    borderRadius: 3,
    // marginTop: 15,
    // marginLeft: 15,
    // marginBottom: 5
  },
  choiceCon: {
    width: "100%",
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  choiceText: {
    fontSize: 17,
    color: "#54798b"
  },
  choiceText1: {
    fontSize: 17,
    color: "white"
  },
  choiceText2: {
    fontSize: 20,
    color: "#54798b"
  },
  addChoiceCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "40%",
    backgroundColor: '#243843',
    height: 35,
    padding: 5,
    marginLeft: 70,

    borderRadius:  5
  },
  webViewCon: {
    height: 40,
    width: "100%"
  }
}));
