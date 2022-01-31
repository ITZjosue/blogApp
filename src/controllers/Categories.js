import axios from 'axios'
export const getCategories = async (setCategories)=>{
    const { data } = await axios.get('https://blogapp-bakend.herokuapp.com/api/categories')
    setCategories(data)
}
