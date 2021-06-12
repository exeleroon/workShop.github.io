// import React, { Component, useEffect, useState } from 'react'
// import Modal from '../Components/modal/Modal'


// const useApiGoods = () => {

//     useEffect(() => {
//       fetch('/goods.json')
//         .then(res => {
//           return res.json();
//         })
//         .then((data) => {
//             data.goods
//          })
//     }, []) 
//     return data.goods
// }
// return fetch("/goods.json")
// .then((response) => response.json()
// })
// .then((data) => {
//   setGoods(data);
// });

const getGoods = () => {
  return fetch("/goods.json")
  .then(response => response.json())
}
export default getGoods;
