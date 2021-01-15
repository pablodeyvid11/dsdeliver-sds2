import './styles.css';
import StepsHeader from './StepsHeader'
import ProductList from './ProductList';
import OrderLocation from './OrderLocation';
import { useEffect, useState } from 'react';
import { Product, OrderLocationData } from './types';
import OrderSummary from './OrderSummary';
import { fetchProducts } from '../api';
import {checkIsSelected} from './helpers'

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
            totalPrice={totalPrice}/>
        </div>
    );
}

export default Orders;