import api from "./AxiosConfig"

export const getMembers = async ()=>{
    try{
        const result = await api.get('/members')
        return result.data
    }catch(error){
        throw error
    }
}
export const updateMembers = async (id, data) => {
    console.log(id)
    console.log(data)
    try{
        const result = await api.put(`/members/${id}`, data)
        return result.data
    }catch(error){
        throw error
    }
}