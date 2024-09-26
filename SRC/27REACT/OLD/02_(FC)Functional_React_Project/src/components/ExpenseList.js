import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import {MdDelete} from 'react-icons/md';

const ExpenseList =({handleDelete,expenses,handleEdit,clearItems})=> {
  
  
   
    return (      
        <>  
          <ul className='list'>
              {/* Expense Item  */}
              {expenses.map(expense=>{
                return (
                  <ExpenseItem 
                  expense={expense}  
                  key={expense.id}  
                  handleDelete={handleDelete} 
                  handleEdit={handleEdit}
                  />
                )

              })}
             
          </ul>
          { expenses.length > 0 && 
                ( 
                    <button class='btn'
                    onClick={clearItems}
                  >
                        목록 지우기
                        <MdDelete />
                  </button>  
                )
          }
     

        </>
    )
   
}

export default ExpenseList