import {Component} from "react";
import "./App.css";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import {useState} from "react";

import Alert from './components/Alert';
// hooks



const App =()=>{

  const [charge, setCharge] = useState("");
  const [amount , setAmount] = useState(0);
  const [expenses,setExpenses] = useState([
    {id : 1, charge : "렌트비", amount : 1600},
    {id : 2, charge : "교통비", amount : 400},
    {id : 3, charge : "식비", amount : 1200},
  ])


  //05_Alert
  const [alert,setAlert] = useState({show : false})



  //04---------------------------------
  const handleCharge = (e)=>{
    console.log(e.target.value);
    setCharge(e.target.value);
  }
  //04----------------------
  const handleAmount = (e)=>{
    console.log(typeof e.target.valueAsNumber);
    setAmount(e.target.valueAsNumber);
  }


  //04----------------------
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(charge !=="" && amount > 0){
      
      if(edit){
        const newExpenses = expenses.map(item=>{
          return item.id===id ? {...item,charge,amount} : item;
        })
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type : "success",text : "아이템이 수정되었습니다."}) //05_Alert


      }else{
        const newExpense = {id : crypto.randomUUID(),charge:charge,amount:amount};
        const newExpenses = [...expenses,newExpense];
        setExpenses(newExpenses); //리 랜더링
        handleAlert({type : "success",text : "아이템이 생성되었습니다."})   //05_Alert
      }
      setCharge("");
      setAmount(0);
      

    }
    else{
      console.log('error',e);
      //Alert
      handleAlert({type : "danger",text : "charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다."})

    }

  }


  const clearItems = ()=>{
    setExpenses([]);

  }

  // constructor(props){
  //   super(props);
  //   this.state={
  //     expenses:[
  //       {id : 1, charge : "렌트비", amount : 1600},
  //       {id : 2, charge : "교통비", amount : 400},
  //       {id : 3, charge : "식비", amount : 1200},
  //     ]
  //   }
  // }
//   inititalExpenses = [
//     {id : 1, charge : "렌트비", amount : 1600},
//     {id : 2, charge : "교통비", amount : 400},
//     {id : 3, charge : "식비", amount : 1200},
// ]

  const handleDelete = (id)=>{
    const newExpenses = expenses.filter(expense=>expense.id!==id)
    console.log(newExpenses);
    setExpenses(newExpenses);
    //05_Alert
    handleAlert({type : "danger",text : "아이템이 삭제되었습니다."})
  }


  const handleAlert = ({type,text})=>{
    setAlert({show : true , type , text});
    setTimeout(()=>{

      setAlert({show:false});
    },7000)
  }
  


  //09_지출항목 수정하기----------------
  const [id,setId] = useState('');  // 수정중인 ID
  const [edit,setEdit] = useState(false); //수정여부 true/false
  
  //09_
  const handleEdit = id =>{
    const expense = expenses.find(item=>item.id===id);
    const {charge,amount} = expense;  
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  }



    return (
      <main className="main-container">
        {/* ALERT */}
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null }
        <h1>예산 계산기</h1>


        <div style={{width:'100%',backgroundColor:'white',padding:'1rem'}}>
           {/*Expense Form  */}
           <ExpenseForm  
            handleCharge={handleCharge} 
            charge={charge} 
            amount={amount}
            handleAmount={handleAmount}        
            handleSubmit={handleSubmit}
            edit={edit}
           />
        </div>


        <div style={{width:'100%',backgroundColor:'white',padding:'1rem'}}>
          {/*Expense List  */}
          {/* <ExpenseList inititalExpenses={this.inititalExpenses} handleDelete={this.handleDelete} /> */}
          <ExpenseList 
            expenses={expenses} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit}
            clearItems={clearItems}
            />

        </div>

        <div style={{display:'flex',justifyContent:'end',marginTop:'1rem'}}>
          <p style={{fontSize:'2rem'}}>
            총지출 : 
            <span>
              {expenses.reduce((acc,curr)=>{
                return (acc +=curr.amount);
              },0)}
              원</span>
          </p>
        </div>

      </main>

    )
}
import ExpenseListy from "./components/ExpenseList";

export default App;
