import { useState } from "react";
import { data, tax } from "../Config";

const Body = () => {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [options, setOptions] = useState("S");
    const [HSN, setHSN] = useState("");
    const [price, setPrice] = useState(0);
    const [gst, setGST] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [amount, setAmount] = useState(0);

    console.log(useState())

    function getAmount(quantity, price, discount, gstValue) {
        let amt = 0;
        let qty = parseInt(quantity);
        let prc = parseFloat(price);
        let disc = parseFloat(discount);
        let gst = parseFloat(gstValue);
        amt = qty * prc;
        amt = amt - (amt * disc / 100);
        amt = amt + (amt * gst) + (amt * gst);
        return amt;
    }

    function getTax(price, itemQuantity) {
        const totalPrice = price * itemQuantity;
        const gst = tax.find((t) => totalPrice >= t.amount);
        return gst ? gst.taxs : 0;
    }

    function setData(item_Name, itemQuantity, options) {
        const newData = data.find((d) =>
            d.name.toLowerCase() === item_Name.toLowerCase()
        );

        if (newData) {
            setHSN(newData.HSN_Code);
            const finalData = newData.size.find((f) => f.size === options);

            if (finalData) {
                setPrice(finalData.price);
                const gstValue = getTax(finalData.price, itemQuantity);
                setGST(gstValue);
            } else {
                setPrice(0);
                setGST(0);
            }
        } else {
            setHSN("");
            setPrice(0);
            setGST(0);
        }
    }

    return (
        <div className="container">
            <div className="body_container">
                <label htmlFor="item">Item Name</label>
                <input
                    type="text"
                    id="item"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                /><br />

                <label htmlFor="option">Size</label>
                <select
                    id="option"
                    value={options}
                    onChange={(e) => setOptions(e.target.value)}
                >
                    <option value="S" key={1}>S</option>
                    <option value="M" key={2}>M</option>
                    <option value="L" key={3}>L</option>
                </select><br />

                <label htmlFor="hsn">HSN</label>
                <input type="text" id="hsn" value={HSN} readOnly /><br />

                <label htmlFor="quantity">QTY</label>
                <input
                    type="text"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            if (itemName && quantity > 0) {
                                setData(itemName, quantity, options);
                            }
                        }
                    }}
                /><br />

                <label htmlFor="price">Price/Item</label>
                <input type="text" id="price" value={price} readOnly /><br />

                <label htmlFor="discount">Discount</label>
                <input
                    type="text"
                    id="discount"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                /><br />

                <label htmlFor="sgst">SGST</label>
                <input type="text" id="sgst" value={gst} readOnly /><br />

                <label htmlFor="cgst">CGST</label>
                <input type="text" id="cgst" value={gst} readOnly /><br />

                <label htmlFor="amount">Amount</label>
                <input type="text" id="amount" value={amount} readOnly /><br />

                <button
                    onClick={() => {
                        if (itemName && quantity > 0) {
                            const amt = getAmount(quantity, price, discount, gst);
                            setAmount(amt);
                        }
                    }}
                >Total</button>
            </div>
        </div>
    );
}

export default Body;
