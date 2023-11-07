import React, { createContext, useState } from 'react'
export const AuthContextProvider = createContext();

const AuthContext = ({ children }) => {

    const [productData, setProductData] = useState([])
    const [datas, setDatas] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    


    return (
        <AuthContextProvider.Provider value={{showCreateForm, setShowCreateForm, productData, setProductData, datas, setDatas }}>
            {children}
        </AuthContextProvider.Provider>
    )
}
export default AuthContext