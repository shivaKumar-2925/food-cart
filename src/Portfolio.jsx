import React,{useState} from 'react'
import Menu from './Menu';

const Portfolio = () => {
const [myMenu, setMymenu] = useState(Menu)

let FilterItem=(catItem)=>{
 const UpdatedItems = Menu.filter((curElem)=>{
     return(curElem.category===catItem)
 })
 setMymenu(UpdatedItems)
}

console.log(myMenu);
  return (
    <div>
     <div className="main">

       <div className="head">
         <h2>Food-Item-List</h2>
       </div>
      <div className="btn">
       <button onClick={()=>{setMymenu(Menu)}}>All</button>
        <button onClick={()=>{FilterItem('breakfast')}}>Break-fast</button>
        <button onClick={()=>{FilterItem('lunch')}}>Lunch</button>
        <button onClick={()=>{FilterItem('evining')}}>Evining</button>
        <button onClick={()=>{FilterItem('dinner')}}>Dinner</button>
       
      </div>
      <div className="itemList">
        {
          myMenu.map((curErray)=>{
            let {id,
              imagev,
              category,
              title,
              description,
              price} = curErray;
             return(
              <div className="item" key={id}>
        <div className="image">
          <img src={imagev} alt={title} width='140px' height='180px' />
        </div>
        <div className="description" >
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="or-pri">
            <h4>Price:{price}</h4>
            <button>order</button>
            
          </div>
          <h5>*Thanks for visiting plece give us feed back</h5>
        </div>
      </div>)
          })
        }
   

      
      </div>
     </div>
    </div>
  )
}

export default Portfolio
