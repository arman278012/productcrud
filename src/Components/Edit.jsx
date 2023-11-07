import React, { useContext, useEffect, useState } from 'react'
import { AuthContextProvider } from './AuthContext'

const Edit = ({ productData }) => {

    

    const [productPrice, setProductPrice] = useState("")
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        setProductName(productData.productName)
        setProductDescription(productData.productDescription)
        setProductPrice(productData.productPrice)
    }, [])




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setProductName(e.target.value)} value={productName} />
                <input type="text" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <input type="text" onChange={(e) => setProductDescription(e.target.value)} value={productDescription} />
            </form>
        </div>
    )
}

export default Edit