import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContextProvider } from './AuthContext';
import { fetchData } from '../Redux/action';
import Card from './Card';

const Cards = () => {

    const { productData, setProductData, setDatas } = useContext(AuthContextProvider)

    const dispatch = useDispatch();

    const data = useSelector((prev) => prev.reducer.product)

    console.log(data)

    {/* */ }
    setProductData(data)
    console.log(productData)

    setDatas(data)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div >
            <Card ></Card>
        </div>
    )
}

export default Cards