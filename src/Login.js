import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from "./Loader";
import firebase from 'firebase';


const LoginButton = MKButton.coloredButton().withText("Login").build();


const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200
    },
    loginButtonArea: {
        marginTop: 20,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    errorMessage: {
        marginTop: 15,
        fontSize: 15,
        color: 'red',
        alignSelf: 'center'
    }
});


type Props = {};
export default class Login extends Component<Props> {

    state = {
        email: '',
        password: '',
        error:'',
        loading: false
    };

    onButtonPress(){
        const { email, password } = this.state;
        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onAuthSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onAuthSuccess.bind(this))
                    .catch(this.onAuthFailed.bind(this))
                });
        console.log('Clicked Button')
    }


    onAuthFailed() {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }




    onAuthSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });

    }

    renderLoader(){
        if(this.state.loading){
            return <Loader size="large"/>;
        }else{
            return <LoginButton onPress={this.onButtonPress.bind(this)}/>
        }
    }

    render() {
        const { form, fieldStyles, loginButtonArea, errorMessage, container } = styles;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Login or Sign Up
                </Text>
                <MKTextField
                    text={this.state.email}
                    onTextChange={email => this.setState({email})}
                    textInputStyle={fieldStyles}
                    placeholder={'Email....'}
                    tintColor={MKColor.Teal}

                />

                <MKTextField
                    text={this.state.email}
                    onTextChange={password => this.setState({password})}
                    textInputStyle={fieldStyles}
                    placeholder={'Password....'}
                    tintColor={MKColor.Teal}
                    password={true}

                />

                <Text style={errorMessage}>
                    {this.state.error}
                </Text>

                <View style={loginButtonArea}>
                    {this.renderLoader()}
                </View>
            </View>
        );
    }
}

