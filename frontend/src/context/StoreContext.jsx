import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const[cartItems,setCartItems] = useState({})
    const url = "http://localhost:4000"
    const [utoken,setUToken] = useState("")
    const [food_list,setFoodList] = useState([])
    const [tiffin_list,setTiffinList] = useState([])
    const [menu_list,setMenuList] = useState([])

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(utoken){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{utoken}})
        }
    }
    const removeFromCart = async(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(utoken){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{utoken}})
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount+=itemInfo.price*cartItems[item]
            }
        }
        return totalAmount
    }

    const fetchFoodList = async() => {
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    } 
    const loadCartData = async(utoken) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{utoken}})
        setCartItems(response.data.cartData)
    }
    useEffect(()=>{
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("utoken")){
                setUToken(localStorage.getItem("utoken"))
                await loadCartData(localStorage.getItem("utoken"))
            }
        }
        loadData()
    },[])

    const fetchTiffinList = async() => {
        const response = await axios.get(url+"/api/tiffin/list-tiffin")
        setTiffinList(response.data.data)
        console.log(response.data.data)
    } 
    useEffect(()=>{
        async function loadData() {
            await fetchTiffinList();
        }
        loadData()
    },[])

    const fetchMenuList = async() => {
        const response = await axios.get(url+"/api/tiffin/list-tiffin")
        setMenuList(response.data.data)
        console.log(response.data.data)
    } 
    useEffect(()=>{
        async function loadData() {
            await fetchMenuList();
        }
        loadData()
    },[])

    useEffect(() => {
      console.log(cartItems)
    }, [cartItems])
    
    const contextValue = {
        food_list,
        tiffin_list,menu_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,url,
        utoken,setUToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
} 

export default StoreContextProvider;