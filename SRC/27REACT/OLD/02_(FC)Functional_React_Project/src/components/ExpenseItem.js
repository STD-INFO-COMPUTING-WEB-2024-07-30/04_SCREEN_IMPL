import React, { Component } from 'react'
import './ExpenseItem.css'
import {MdEdit,MdDelete} from 'react-icons/md';

const ExpenseItem =( {expense,handleDelete,handleEdit} )=> {

    return (
        <li className='item'>
         <div className='info'></div>
            <span className='expense'>{expense.charge}</span>
            <span className='amount'> {expense.amount}</span>
         <div>
            <button className='edit-btn'
              onClick={()=>handleEdit(expense.id)}
            >
              <MdEdit />
              </button>
            <button className='clear-btn' onClick={()=>{
              console.log(`${expense.id}`)
              handleDelete(expense.id)
            }}><MdDelete /></button>
         </div>

        </li>
    )
  
}

export default ExpenseItem