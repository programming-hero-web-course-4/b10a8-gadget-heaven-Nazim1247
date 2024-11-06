import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import NoData from "./NoData";


const ProductsCard = () => {
    const { category } = useParams();
    const data = useLoaderData();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(product => product.category === category);
            setProducts(filterByCategory);
        }else{
            setProducts(data);
        }
    }, [category, data])
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {products.length>0?products.map(product => <Card key={product.id} product={product}></Card>):<NoData></NoData>}
            {/* {products.map(product => <Card key={product.id} product={product}></Card>)} */}
        </div>
        </div>
    );
};

export default ProductsCard;