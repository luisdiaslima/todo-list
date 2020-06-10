import React from 'react';
import {FaPlus} from 'react-icons/fa'


import './Form.css';
export default function Form({handleChange, handleSubmit, novaTarefa}){
  return(
    <form onSubmit={handleSubmit} className="form">
          <input onChange={handleChange} type="text" value={novaTarefa}/>
          <button type="submit">
            <FaPlus></FaPlus>
          </button>
        </form>
  )
}

