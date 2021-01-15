import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[]
    Selectedproducts: Product[]
    onSelectProduct: (product: Product) => void
}


function ProductList({ products, onSelectProduct, Selectedproducts}: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">

                {
                    products.map(
                        product => (
                            <ProductCard 
                            onSelectProduct={onSelectProduct}
                            product={product} 
                            isSelected={checkIsSelected(Selectedproducts, product)}
                            key={product.id}/>
                        )
                    )
                }

            </div>
        </div>
    );
}

export default ProductList;