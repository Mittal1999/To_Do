import React, { useState } from 'react';
import ToDoItems from './ToDoItems';

let count = 0;

function AddItems() {
    const [item, setItem] = useState('');
    const [arrItems, setArrItems] = useState([]);

    const add = () => {
        setArrItems(prevArr => [...prevArr, item])
        setItem('')
    }
    return (
        <>
            <h2>To Do Items:</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Item" aria-label="Recipient's username" aria-describedby="button-addon2" value={item} onChange={e => setItem(e.target.value)} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={add}>Add</button>
            </div>
            <ToDoItems setArrItems={setArrItems} arrayItems = {arrItems}/>
        </>
    )
}

export default AddItems;