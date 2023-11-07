import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { POST_DATA, fetchData } from '../Redux/action';
import { AuthContextProvider } from './AuthContext';
import { AiFillCloseCircle } from 'react-icons/ai'

const DataInput = () => {

    const { setShowCreateForm } = useContext(AuthContextProvider)


    const dispatch = useDispatch();
    const [input_1, setInput_1] = useState("")
    const [input_2, setInput_2] = useState("")
    const [input_3, setInput_3] = useState("")
    const [input_4, setInput_4] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            productName: input_1,
            productPrice: input_2,
            productDescription: input_3,
            image: input_4,
        }

        dispatch(POST_DATA(payload)).then(() => dispatch(fetchData()))
        setShowCreateForm(false)
    }


    const handleClose = () => {
        // console.log("first")
        setShowCreateForm(false)
    }

   


    return (
        <div className='flex bg-white flex-col border-2 border-gray-400 p-5 absolute top-[150px] left-[500px]'>
            <p className='text-center font-bold text-xl'>Fill to Create🙌</p>
            <AiFillCloseCircle
                onClick={handleClose}
                className='absolute top-4 right-3 cursor-pointer' />
            <form onSubmit={handleSubmit}>
                <div className='mt-5'>
                    <input
                        className='p-4 h-[40px] w-[350px] border-2 border-black shadow-xl rounded-xl'
                        type="text"
                        placeholder='enter the name'
                        name='productName'
                        onChange={(e) => setInput_1(e.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <input type="number"
                        className='p-4 h-[40px] w-[350px] border-2 border-black shadow-xl rounded-xl'
                        placeholder='price'
                        name='productPrice'
                        onChange={(e) => setInput_2(e.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <input type="text"
                        className='p-4 h-[40px] w-[350px] border-2 border-black shadow-xl rounded-xl'
                        placeholder='description'
                        name='productDescription'
                        onChange={(e) => setInput_3(e.target.value)}
                    />
                </div>
                <div>
                    <input type="file"
                        placeholder='image'
                        onChange={(e) => setInput_4(e.target.value)}
                    />
                </div>


                <div className='mt-5'>
                    <button className='h-[40px] w-[100px] bg-green-700 text-white rounded-lg font-bold flex justify-center 
                                items-center'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default DataInput