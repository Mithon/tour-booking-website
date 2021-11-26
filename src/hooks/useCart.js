import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = services => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (services.length) {
            const savedCart = getStoredCart()
            const storedCart = [];
            for (const key in savedCart) {
                const addedService = services.find(services => services.key === key);
                if (addedService) {
                    //set quentity
                    const quantity = savedCart[key];
                    addedService.quantity = quantity;
                    storedCart.push(addedService);
                }
            }
        }

    }, [services])
    return [cart]
}
export default useCart;