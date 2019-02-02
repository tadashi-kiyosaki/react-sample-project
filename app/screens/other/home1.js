import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
import {
    RkText,
    RkButton,
    RkStyleSheet,
} from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';


export class HomeV1 extends React.Component {
    static propTypes = {
        navigation: NavigationType.isRequired,
    };
    static navigationOptions = {
        // title: 'Grid Menu'.toUpperCase(),
        title:  "Journile",
        header: null
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

    onLoginButtonPressed = () => {
        this.props.navigation.navigate("Login1");
        // this.props.navigation.goBack();
    };

    onSignupButtonPressed = () => {
        this.props.navigation.navigate("SignUp");
        // this.props.navigation.goBack();
    };
    render() {
        const items = this.state.dimensions === undefined ? <View /> : this.renderItems();
        return (
            <ScrollView
                style={styles.root}
                onLayout={this.onContainerLayout}
                contentContainerStyle={styles.rootContainer}>

                <View style={[styles.titleContain, styles.titleline]}>
                    <Text style={styles.title}>Journile</Text>
                </View>
                <View style={styles.headercontainer}>
                    <View >
                        <View styles={styles.padding}>
                            <Image style={styles.headerPic} source={require('../../assets/image1/images/a_home.png')} />
                        </View>
                        {/* <View style={styles.homeline} /> */}
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
                <View style={styles.blockCon}>
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
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <View style={[styles.box, styles.colmd3]}>
                            <Text style={styles.weatherWidget}>Sunny</Text>
                            <Text style={styles.temperature}>57°</Text>
                        </View>
                        <View style={[styles.box, styles.colmd9]}>
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
                                    <Text style={[styles.weekday, styles.alignCenter]}>60°</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.line} />
            
                <View style={styles.authContainter}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.onLoginButtonPressed}>
                        <Text style={styles.submitButtonText}> Log In </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signupButton}
                        onPress={this.onSignupButtonPressed}>
                        <Text style={styles.signupButtonText}> Sign Up </Text>
                    </TouchableOpacity>
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
        color: "black",
        fontWeight: "bold",
        marginTop: 5
    },
    textTopRight: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: "black",
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
        color: 'black',
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
        color: "black"
    },
    stretch: {
        width: 50,
        height: 50
    },
    borderRight1: {
        borderRightWidth: 1,
        borderRightColor: "black",
        paddingRight: 7
    },
    line: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#54798b",
        marginTop: 5,
        marginBottom: 10
    },
    titleline: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        marginTop: 15,
        marginBottom: 15,
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
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        height: 25
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
    },
    titleContain: {
        width: "100%",
        height: 70,
        alignItems: "center",
        padding: 20
    },
    continue: {
        marginBottom: 10
    },
    alignCenter: {
        alignItems: "center",
    },
    anglePic: {
        marginTop: 8
    },
    headerPic: {
        width: 27,
        height: 28
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
    loginBtn: {
        flex: 1,
        backgroundColor: "#099FD4",
        borderWidth: 1,
        borderColor: "#099FD4",
        fontSize: 17,
        marginLeft: 10,
        marginTop: 6,
        paddingLeft: 6,
        paddingRight: 38,
        borderRadius: 100,
        color: "#fff",
        width: 500,
        height:500
    },
    authContainter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: "100%",
        padding: 5,
    },
    signupBtn: {
        flex: 1,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#099FD4",
        fontSize: 17,
        marginLeft: 10,
        marginTop: 6,
        paddingLeft: 6,
        paddingRight: 38,
        borderRadius: 45,
        color: "#fff",
        width: 500
    },
    submitButton: {
        backgroundColor: '#243843',
        padding: 10,
        margin: 15,
        height: 50,
        width: 200,
        borderRadius: 100,
        alignItems: "center"
    },
    submitButtonText: {
        fontSize: 17,
        color: 'white'
    },

    blockCon: {
    width: "100%",
    backgroundColor: "#88a1ae",
    borderRadius: 5,
    padding: 10
    },

    signupButton: {
        backgroundColor: '#fff',
        borderColor: '#243843',
        borderWidth: 1,
        padding: 10,
        margin: 15,
        height: 50,
        width: 200,
        borderRadius: 100,
        alignItems: "center"
    },
    signupButtonText: {
        fontSize: 17,
        color: '#243843'
    }

}));
