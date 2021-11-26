import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://ghastly-coffin-90373.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services];
}

export default useServices;