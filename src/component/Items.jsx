import React from 'react';


function Items({ itemsname, id, remove, edit}) {
    return (
        <div className='d-flex items'>
            <h6 className='my-auto'>{itemsname}</h6>
            <button onClick={()=>{ remove(id)}} className='ms-auto text-danger'><i className="far fa-trash-alt"></i></button>
            <button onClick={()=>{edit(id)}} className='ms-1 text-light'><i className="far fa-edit"></i></button>
        </div>
    );
}

export default Items;
