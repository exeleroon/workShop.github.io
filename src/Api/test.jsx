import React, { Component, useEffect, useState } from 'react'
import Modal from '../Components/modal/Modal'


const CartG = (props) => {
    const [ goodsItems, setGoodsItems ] = useState([]);

    useEffect(() => {
      fetch('/goods.json')
        .then(res => {
          return res.json();
        })
        .then((data) => {
            setGoodsItems(data.goods)
         })
    }, []) 
    return goodsItems
}
 

export default CartG