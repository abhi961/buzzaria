
import React , {useEffect , useState} from 'react'

const Getdata = () => {

    useEffect(() => {
       getproduct();
    }, [])
    
    const getproduct = async( ) => {
        const response = await fetch('https://trijatta.tech/Buzzaria_api/Products/product')
        const data = await response.json()
        console.log(data);
    }
}

export default Getdata