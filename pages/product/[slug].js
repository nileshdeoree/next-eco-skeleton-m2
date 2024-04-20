import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ProductPage = ({addToCart}) => {

    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState();

    useEffect(()=>{

        const fetchProductData = async()=>{
            try {
                let response = await fetch(`/api/product/${slug}`)
                let productData = await response.json()
                setProduct(productData)
                
            } catch (error) {
                console.log("inside catch")
            }
        }

        if(slug){
            fetchProductData();
        }
    },[slug])

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <button onClick={()=>addToCart(product.slug, 1, product.price, product.title, 'l', 't')}>Add to Cart</button>
                </div>
            ) : (
                <div>
                    Loading...
                </div>
            )
            }
        </div>
    )
}

export default ProductPage