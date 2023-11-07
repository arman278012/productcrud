import { deleteDatas, getData, getUpdateData, postData } from "./actionType"

const productData = {
    product: []
}

const reducer = (state = productData, { type, payload }) => {
    switch (type) {
        case getData:
            return { ...state, product: payload }

        case deleteDatas:
            return { ...state, product: payload }

        case getUpdateData:
            return { ...state, product: payload }

        case postData:
            return { ...state, product: payload }

        default:
            return false
    }
}

export default reducer