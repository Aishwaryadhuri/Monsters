import React from 'react';
import { Card } from '../card/Card';
import '../card/CardStyle.css';
import '../Card_List/CardListStyle.css';
// import './card-list.style.css';

export const CardList = props => 
{

   return <div className='card-list'>

        {props.monsters.map(monster => 

         <Card key={monster.id} monster={monster}> </Card>

        )}

    </div>

};

// import React from "react";
// import { Card } from "../card/card.component";
 
// import './card-list.styles.css';
 
// export const CardList = props => {
//     return<div className="card-list">
//         { props.monsters.map(monster =>(
//           <Card key={monster.id} monster={ monster }> </Card>))}
//         </div>;
// };