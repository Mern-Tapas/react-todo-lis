import React, { useState } from 'react';
import Items from './Items';

function Todoapp() {

    const [input, setInput] = useState('');
    const [Todoitems, setItems] = useState([]);
    const [edititemContener, updateContainer] = useState();
    const [editmode, updatemode] = useState(false);

    // update input item
    const updateinput = (e) => {
        setInput(e.target.value)
    }

    // update object items
    const updateItems = (e) => {
        e.preventDefault();
        //If values ​​are nothing, nothing will run.
        if (!input) {

        }
        //if submit the editing value in input
        else if (input && editmode) {
            const afteredit = Todoitems.map((element) => {
                if (element.id === edititemContener) {
                    console.log(element.id)
                    return { ...element, name: input }
                }
                return element
            })
            setItems(afteredit)

            updatemode(false)
            setInput('')
        }
        //if submitin the new value in input
        else {
            const value = { name: input, id: new Date().getTime().toString() }
            setItems([value, ...Todoitems])
            setInput('')
        }
    }

    // remove object item
    const removeItem = (id) => {
        const newTodoItems = Todoitems.filter((ele) => { return id !== ele.id })
        setItems(newTodoItems)

    }

    // edit object item
    const editItems = (id) => {
        const editthis = Todoitems.find((elem) => { return id === elem.id })
        updateContainer(id);
        setInput(editthis.name)
        updatemode(true);
        console.log(id)


    }

    return (
        <>
            <div className='todo-app'>
                <form onSubmit={updateItems} >
                    <input onChange={updateinput} type="text" value={input} />
                    <button type='submit'>submit</button>
                </form>
                <div className='items-list mt-3'>
                    {Todoitems.map((items) => { return <Items edit={editItems} remove={removeItem} key={items.id} id={items.id} itemsname={items.name} /> })}
                </div>
            </div>
        </>
    );
}

export default Todoapp;
