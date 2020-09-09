import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    const renderCheckoutItem = () => {
        if (basket.length !== 0) {
            return basket?.map((item, index) => {
                return <div key={index} className="checkout__item">
                    <img className="checkout__item-image" src={item.image} />
                    <div className="checkout__item-info">
                        <p><strong>{item.title}</strong></p>
                        <p className="product__price">
                            <strong>$</strong>
                            <strong>{item.price}</strong>
                        </p>
                        <div className="product__rating">
                            {Array(item.rating).fill().map((_, i) => <p key={i}>⭐</p>)}
                        </div>
                        <button onClick={() => { removeFromBasket(item.id) }}>Remove from Basket</button>
                    </div>
                </div>
            })
        }
        else return <p className="checkout__item">You have no items in your basket.</p>
    }

    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    <div className="checkout__listItem">
                                {renderCheckoutItem()}
                    </div>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
