import React, {useState} from 'react';
import './CardMaker.scss'
import {Card} from 'semantic-ui-react'


function CardMaker(props) {
console.log(props);



return (

 
 <Card className = 'card-maker'>
   <h2>
     {props.title}
   </h2>
   <img src = {props.url}/>

   <p>
{props.explanation}
     </p>
   </Card>  
);
}


export default CardMaker; 