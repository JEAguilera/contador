import  React from 'react';
import  productList from '../../mods/productList.js';

const ItemListContainer = ({greeting})=> {

    const myPromise = new Promise((resolve, reject) => {
       setTimeout(() =>  resolve('Esto salio bien'), 5000);
       setTimeout(() =>  resolve(productList), 1000);
    });
    
    myPromise.then((result)=> console.log(result) //,()=>{}
    );
    return(
        <>
        <div>
            <h2> {greeting}</h2>

        </div>
        </>
    );
    



};

export default ItemListContainer;