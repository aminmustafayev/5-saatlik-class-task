import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
const BASE_URL = 'http://localhost:5050/api/product'

const dataContext = createContext(null)

const DataContextProvider = ({children}) =>{
    const[shopData, setShopData]=useState([])
    const[orginal, setOrginal]= useState([])
    const[filtering, setFiltering]=useState([])

    const getAllData =async()=>{
        await axios.get(BASE_URL).then((res)=>{
            setShopData(res.data.data)
            setOrginal(res.data.data)
            setFiltering(res.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const deleteData = async(id)=>{
        await axios.delete(BASE_URL + `/${id}`).then(()=>{
           const deleting = shopData.filter((x)=>x._id !== id )
           setShopData(deleting)
           setOrginal(deleting)
            setFiltering(deleting)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const postData = async(newData)=>{
        await axios.post(BASE_URL, newData).then(()=>{
            setShopData([...shopData, newData])
        })
    }
    useEffect(()=>{
        getAllData()
    },[])
//wishlist
const[wishlist, setWishlist]=useState(localStorage.getItem("wishlist")? JSON.parse(localStorage.getItem("wishlist")):[])
const addToWishlist = (product) =>{
    const target = wishlist.find((x)=>x._id == product._id)
    if (target) {
        alert("data movcuddur!")
    }else{
        setWishlist([...wishlist,product])
        localStorage.setItem("wishlist", JSON.stringify([...wishlist]))
    }
}
const deleteToWishlist = (product)=>{
    const target = wishlist.find((x)=>x._id == product._id)
    wishlist.splice(wishlist.indexOf(target),1)
    setWishlist([...wishlist])
    localStorage.setItem('wishlist',JSON.stringify([...wishlist]))
}

//Basket
const[basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
const addToBasket = (product)=>{
    const target = basket.find((x)=>x.product._id == product._id)
    if (target) {
        target.count += 1
        target.totalPrice=target.count*target.product.price
        setBasket([...basket])
        localStorage.setItem("basket",JSON.stringify([...basket]))
    }else{
        const NewItem ={
            _id:product._id,
            count:1,
            product:product,
            totalPrice:product.price
        }
        setBasket([...basket,NewItem])
        localStorage.setItem("basket",JSON.stringify([...basket,NewItem]))
    }
}
const deleteToBasket = (product)=>{
    const target = basket.find((x)=>x.product._id == product._id)
    basket.splice(basket.indexOf(target),1)
    setBasket([...basket])
    localStorage.setItem("basket",JSON.stringify([...basket]))
}
const increaseBasket = (product)=>{
const target = basket.find((x)=>x.product._id == product._id)
target.count +=1
target.totalPrice=target.count*target.product.price
setBasket([...basket])
localStorage.setItem("basket",JSON.stringify([...basket]))
}
const decreaseBasket = (product)=>{
    const target = basket.find((x)=>x.product._id == product._id)
    if (target.count>0) {
        target.count -=1
        target.totalPrice=target.count*target.product.price
        setBasket([...basket])
        localStorage.setItem("basket",JSON.stringify([...basket]))
    }
}

const values = {
    shopData,setShopData,deleteData,postData,wishlist,addToWishlist,deleteToWishlist,setOrginal,setFiltering,basket,addToBasket,deleteToBasket,increaseBasket,decreaseBasket
}
return <dataContext.Provider value={values}>{children}</dataContext.Provider>
}
const useDataContext =()=> useContext(dataContext)

export{DataContextProvider,useDataContext}
