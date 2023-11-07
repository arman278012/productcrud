import React, { useContext, useState } from 'react'
import { AuthContextProvider } from './AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, fetchData, updateData } from '../Redux/action'
import { deleteDatas, getData } from '../Redux/actionType'
import DataInput from './DataInput'
import Edit from './Edit'
// import { deleteData } from '../Redux/actionType'


const Card = () => {

    const { productData, datas, setProductData, showCreateForm, setShowCreateForm } = useContext(AuthContextProvider)

    const [productPrice, setProductPrice] = useState("")
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [hide, setHide] = useState(false)
    const [nameChange, setNameChange] = useState()
    const [priceChange, setPriceChange] = useState()
    const [nameCheck, setNameCheck] = useState(true)
    const [priceCheck, setPriceCheck] = useState(true)
    // const [showCreateForm, setShowCreateForm] = useState(false)


    // const data = useSelector((prev) => prev.reducer.product)
    // setProductData(data)


    const createHandler = () => {
        setShowCreateForm(true)
    }

    const dispatch = useDispatch();


    const deleteHandler = (id) => {
        
        dispatch(deleteData(id)).then(() => dispatch(fetchData()))
    }
   


    const updateHandler = (el) => {
        const payload = { ...el, productName: nameChange }
        dispatch(updateData(el.id, payload))
        console.log(payload)
    }
    console.log(nameChange)

    return (
        <div className=''>
            <div className='flex justify-center items-center mt-5'>
                <button onClick={createHandler} className='shadow-2xl h-[40px] w-[100px] bg-green-700 text-white rounded-lg font-bold flex justify-center 
                                items-center'>Create</button>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-10 mx-auto max-w-[80vw]'>
                {
                    showCreateForm ? (<DataInput></DataInput>) : (<></>)
                }
                {
                    productData?.map((el) => (
                        <div key={el.id} className='justify-center items-center
                    w-[250px] h-auto rounded-sm border-2 border-black p-5'>
                            <div className='flex flex-col'>
                                <img src={el?.productImageUrl} alt="" className='w-[200px]' />
                                <p className='font-bold'>ID: {el?.id}</p>
                                {/* {
                                nameCheck ? (<p onClick={() => setNameCheck(false)}>{el?.productName}</p>) : (
                                    <form onSubmit={() => setNameCheck(true)}>
                                        <input type='text'
                                            onChange={(e) => setNameChange(e.target.value)}
                                        />
                                    </form>
                                )
                            } */}

                                {/* {hide ? (<Edit productData={productData} setHide={setHide} />) : <p>{el?.productName}</p>} */}
                                <p className='font-bold'>Price: रु {el?.productPrice}</p>
                                <p className='font-bold'>{el?.productDescription}</p>

                                <div className='flex justify-center items-center gap-5 mt-5'>
                                    <button className='h-[40px] w-[100px] bg-red-700 text-white rounded-lg font-bold flex justify-center 
                                items-center' onClick={(e)=>deleteHandler(el.id)}>Delete</button>
                                    {/* <button onClick={() => setHide(prev => !prev)}>Edit</button> */}

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card