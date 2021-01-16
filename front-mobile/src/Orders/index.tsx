import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, Text, Alert, View, SafeAreaView, RefreshControl } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {

    const isFocused = useIsFocused();

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout: number) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchData();
        wait(1000).then(() => {setRefreshing(false)});
    }, []);

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then((response) => {
                setOrders(response.data);
            })
            .catch(() => {
                Alert.alert("Houve um erro ao buscar os pedidos!");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused])

    const navigation = useNavigation();

    const handleOnPressOrder = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }

    return (
        <>
            <Header />
            <SafeAreaView>
                <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                >
                    {isLoading ? (
                        <View style={styles.containerCenter}>
                            <Text style={styles.textTitle}>Buscando pedidos...</Text>
                            <Text style={styles.textSubtitle}>Aguarde enquanto processamos a requisição</Text>
                        </View>
                    ) : orders.length == 0 ? (
                        <View style={styles.containerCenter}>
                            <Text style={styles.textTitle}>
                                Nenhum pedido no momento!
                        </Text>
                        </View>
                    ) : (<>
                        <Text style={styles.textTitle}>Lista de pedidos:</Text>
                        <Text style={styles.textSubtitle}>Selecione um pedido para efetuar a entrega</Text>
                        {orders.map(order => (
                            <TouchableWithoutFeedback
                                key={order.id}
                                onPress={() => handleOnPressOrder(order)}>
                                <OrderCard order={order} />
                            </TouchableWithoutFeedback>
                        ))}
                    </>
                            )}
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: '5%',
        paddingRight: '5%',
        marginBottom: '5%'
    },
    containerCenter: {
        marginTop: '20%',
        alignItems: 'center'
    },
    textTitle: {
        marginTop: '5%',
        fontWeight: 'bold',
        fontSize: 30,
        letterSpacing: -0.24,
        color: 'black',
        fontFamily: 'OpenSans_700Bold'
    },
    textSubtitle: {
        color: 'grey'
    }
});

export default Orders;