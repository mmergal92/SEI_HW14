import { useState } from "react"

function Groceries(){
    const list = [{item: "",
     brand: "", 
     units: "", 
     quantity: 0, 
     isPurchased: false
    },
    {item: "",
    brand: "", 
    units: "", 
    quantity: 0, 
    isPurchased: false
   },
   {item: "",
   brand: "", 
   units: "", 
   quantity: 0, 
   isPurchased: false
  }]

//STATES
const [groceryList, setGroceryList] = useState(list)
const [item, setItem] = useState("");
const [brand, setBrand] = useState("");
const [units, setUnits] = useState("");
const [quantity, setQuantity] = useState(0);
const [isPurchased, setIsPurchased] = useState(true);
const [change, setChange] = useState(true)
//HANDLES
const handleChangeItem=(event)=>{
    setItem(event.target.value)
}
const handleChangeBrand=(event)=>{
    setBrand(event.target.value)
}
const handleChangeUnits=(event)=>{
    setUnits(event.target.value)
}
const handleChangeQuantity=(event)=>{
    setQuantity(event.target.value)
}
const handleChangeIsPurchased=(event)=>{
    console.log(event.target.checked)
    setIsPurchased(event.target.value)
}
const handleDelete=(index)=>{
    const tempArray = groceryList;
    tempArray.pop(index);
    setGroceryList(tempArray);
    setChange(!change);
}

const handleSubmit=(event)=>{
    event.preventDefault()
    const newItem ={
        item: item,
        brand: brand,
        units: units,
        quantity: quantity,
        isPurchased: isPurchased
    }
    const tempArray =groceryList;
    tempArray.push(newItem);
    setGroceryList(tempArray);
    setChange(!change);
    console.log(event.value);
    console.log("submitted form")
}

    return (
        <>
    <ul>
        {groceryList.map((value, index) => {
            return (
                <>
            <li key={index}>{value.item}, Brand: {value.brand}, Units: {value.units}, Quantity: {value.quantity}</li>
            <li>
            <button onClick={() => handleDelete(index)}>DELETE</button>
            </li>
            </>
            )
        })}
    </ul>
    <form onSubmit = {handleSubmit} >
    <label>
      Item:
      <input type="text" name="item" value={item} onChange = {handleChangeItem} />
    </label><br/>
    <label>
      Brand:
      <input type="text" name="brand" value={brand} onChange = {handleChangeBrand} />
    </label><br/>
    <label>
      Units:
      <input type="text" name="units" value={units} onChange = {handleChangeUnits} />
    </label><br/>
    <label>
      Quantity:
      <input type="number" name="quantity" value={quantity} onChange = {handleChangeQuantity} />
    </label><br/>
    <label>
      Did you purchase it?:
      <input type="checkbox" name="isPurchased" value={isPurchased} onChange = {handleChangeIsPurchased} />
    </label><br/>
    <input type="submit" value="Submit" />
  </form>
  </>
    );
}

export default Groceries;