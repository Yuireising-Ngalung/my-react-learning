import { Component, Fragment } from "react";

class StoreClass extends Component{
    constructor(){
        super()

        this.state = {
            storeName: 'MyStore',
            location: 'India',
            product: [
                {
                    id:1,
                    product:'Apple',
                    price:150
                },

                {
                    id:2,
                    product:'Orange',
                    price:200
                }
            ],

            //product:'',

            couponCode:['Fruit100', 'Fruit300', 'Fruit500']

            //couponCode:''

        }
    }


    render(){
        return <div>
            <h1>Store: {(this.state.storeName != '') ? this.state.storeName : 'Store name not available'}</h1>
            <em>Location: {(this.state.location != '') ? this.state.location : 'Location not Available'}</em>

            <h2>Coupon Code</h2>
            <ul>
                {   (this.state.couponCode && this.state.couponCode != '')?

                        this.state.couponCode.map((value,index)=>{
                            return <Fragment key={index}>
                                <li>{value}</li>
                            </Fragment>
                        })
                    :
                    <h2>Sorry!! Coupon Code is not Available</h2>
                }
            </ul>

            <h2>Products</h2>
            <div>
                {
                    (this.state.product && this.state.product != '')?
                    this.state.product.map((value,index)=>{
                        const {product,price} = value;
                        return <Fragment key={index}>
                            <p>Product Name: {product}</p>
                            <p>Product Price: {price}</p>
                            <hr />
                        </Fragment>
                    })
                    :
                    <p>Products not available</p>
                }
            </div>
        </div>
    }




}

export default StoreClass;