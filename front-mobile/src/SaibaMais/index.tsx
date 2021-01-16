import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../Header';

function SaibaMais() {

    const handleOnPressDevSuperior = () => {
        Linking.openURL('https://devsuperior.com.br');
    }
    const handleOnPressGitHub = () => {
        Linking.openURL('https://github.com/pablodeyvid11');
    }
    const handleOnPressLinkedIn = () => {
        Linking.openURL('https://www.linkedin.com/in/pablo-deyvid-de-paiva-7a59261a1/');
    }
    const handleOnPressInstagram = () => {
        Linking.openURL('https://www.instagram.com/pablo_deyvid/');
    }

    return (
        <>
            <Header></Header>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>
                        Software desenvolvido na{'\n'}
                2ª semana <Text onPress={handleOnPressDevSuperior} style={{ color: '#0000CD' }}>DevSuperior</Text>
                    </Text>

                    <Text style={styles.textApresentacao}>
                        Meu nome é Pablo Deyvid!
                    {'\n'}
                    Conheça meu trabalho
                    {'\n'}
                    acessando minhas redes sociais!
                </Text>
                    <TouchableWithoutFeedback onPress={handleOnPressGitHub}>
                        <View style={styles.containerText}>
                            <Image source={require('../assets/GitHub.png')} />
                            <Text style={styles.textRede}>GitHub</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleOnPressLinkedIn}>
                        <View style={styles.containerText}>
                            <Image source={require('../assets/Linkedin.png')} />
                            <Text style={styles.textRede}>LinkedIn</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleOnPressInstagram}>
                        <View style={styles.containerText}>
                            <Image source={require('../assets/Instagram.png')} />
                            <Text style={styles.textRede}>Instagram</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '20%',
        alignItems: 'center'
    },
    textTitle: {
        marginTop: '5%',
        fontWeight: 'bold',
        fontSize: 30,
        letterSpacing: -0.24,
        color: 'black',
        fontFamily: 'OpenSans_700Bold',
        textAlign: 'center'
    },
    textApresentacao: {
        marginTop: '15%',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: -0.24,
        color: 'black',
        fontFamily: 'OpenSans_700Bold',
        textAlign: 'center',
        marginBottom: 50
    }, containerText: {
        marginTop: 10,
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textRede: {
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 45,
        letterSpacing: -0.24,
        color: 'black',
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold'
    }
});

export default SaibaMais;