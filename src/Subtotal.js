import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();

    const subtotal = basket.reduce((sum, item, index) => {
        sum = sum + item.price;
        return sum;
    }, 0);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={subtotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
