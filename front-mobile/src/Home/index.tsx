import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function Home() {
    const navigation = useNavigation();

    const handleOnPressOrder = () => {
        navigation.navigate('Orders');
    }
    const handleOnPressSaibaMais = () => {
        navigation.navigate('SaibaMais');
    }

    return (
        <>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('../assets/deliveryman.png')} />
                    <Text style={styles.title}>
                        Acompanhe os pedidos e{'\n'}entregue no prazo
            </Text>
                    <Text style={styles.subTitle}>
                        Receba todos os pedidos do seu{'\n'}restaurante na palma da sua mão
            </Text>
                </View>
                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleOnPressOrder}>
                        <Text style={styles.buttonText}>
                            VER PEDIDOS
                    </Text>
                    </RectButton>
                </View>
                <View style={styles.footerSaibaMais}>
                    <RectButton style={styles.buttonSaibaMais} onPress={handleOnPressSaibaMais}>
                        <Text style={styles.buttonTextSaibaMais}>
                            Saiba mais
                    </Text>
                    </RectButton>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        marginLeft: '2%',
        marginRight: '2%',
        alignItems: 'center'
    },
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    },
    subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: '20%',
        alignItems: 'center'
    },
    footerSaibaMais: {
        marginTop: '5%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonSaibaMais: {
        backgroundColor: '#363636',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    }, 
    buttonTextSaibaMais: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF',
        letterSpacing: -0.24
    }
});

export default Home;