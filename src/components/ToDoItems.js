import React, { useEffect, useState } from "react";
import DoneItems from "./DoneItems";

function ToDoItems(props) {

    const {setArrItems, arrayItems} = props;

    const [doneTasks, setDoneTasks] = useState([]);

    useEffect(() =>{
        console.log(doneTasks)
    },[doneTasks])

    const check = (event) => {
        console.log(event)
        console.log("1:"+arrayItems);
        if(event.target.checked) {
            setDoneTasks(prevList => [...prevList,event.target.value]);
            setArrItems(prevItems => prevItems.filter((value,key) => key !== parseInt(event.target.id)));
            console.log("2:"+arrayItems);
        }
    }

    return (
        <>
            <h3>List of Tasks:</h3>
            {/* <ul className="list-group">
                {
                    props.arrayItems.map((item,index) => (
                        <li className="list-group-item" key={index}>{item}</li>
                    ))
                }


            </ul> */}
            {
                arrayItems.map((item,index) => (
                    <div className="form-check" key={index}>
                    <input className="form-check-input" type="checkbox" value={item} id={index} onChange={check} />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        {item}
                    </label>
                    </div>
                ))
            }

            <DoneItems doneTasks = {doneTasks}/>
           
        </>
    )
}

export default ToDoItems;