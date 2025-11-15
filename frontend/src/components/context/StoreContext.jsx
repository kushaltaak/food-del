import axios from "axios";
import { createContext, useState, useEffect } from "react";
// import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000"
  const [token ,setToken] = useState ("")
  const [food_list ,setFoodList] = useState([]) 
  // 🛒 Add item to cart
  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
      
    }
  };

  // ❌ Remove item from cart safely
  const removeFromCart =  async (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] && prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      } 
      
    });
    if (token) {
          await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})  

        
      }
  };

  // 💰 Calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find(
          (product) => String(product._id) === String(itemId)
        );
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

const fetchFoodList = async ()=>{
  const response = await axios.get(url+"/api/food/list")
  setFoodList(response.data.data)
}

const loadCartData = async (token)=>{
   const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
   setCartItems(response.data.cartData);
}

  // Optional: persist cart in localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect (()=>{
    async function loadData(params) {
      await fetchFoodList()
      if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
      await loadCartData(localStorage.getItem("token"))
      
    } 
      
    } loadData();
  },[])


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
