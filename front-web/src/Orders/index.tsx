import './styles.css';
import StepsHeader from './StepsHeader'
import ProductList from './ProductList';
import OrderLocation from './OrderLocation';
import { useEffect, useState } from 'react';
import { Product, OrderLocationData } from './types';
import OrderSummary from './OrderSummary';
import { fetchProducts, saveOrder } from '../api';
import { checkIsSelected } from './helpers'

import { toast } from 'react-toastify';

function Orders() {

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    console.log(products);

    useEffect(() => {
        fetchProducts()
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        let isPossible = true;
        if (payload.products.length == 0) {
            toast.warning('Selecione ao menos um produto para realizar pedido');
            isPossible = false;
        }
        if (payload.address == null) {
            toast.warning('Selecione um endereço válido para realizar pedido');
            isPossible = false;
        }
        if (isPossible) {
            saveOrder(payload).then((response) => {
                toast.error(`Pedido enviado com sucesso! Nº${response.data.id}`);
                setSelectedProducts([]);
            })
                .catch(() => {
                    toast.warning('Erro ao enviar pedido: problemas no servidor');
                })
        }
    }

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductList
                products={products}
                onSelectProduct={handleSelectProduct}
                Selectedproducts={selectedProducts}
            />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSummary
                amount={selectedProducts.length}
                totalPrice={totalPrice}
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default Orders;