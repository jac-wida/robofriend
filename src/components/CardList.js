import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const rrobots =robots;
    return(
        <div>
            {
                rrobots.map(robot =>(
                    <Card key={robot.id} 
                    id={robot.id} 
                    name={robot.name} 
                    email={robot.email}
                    />)
                )
            }
        </div>
    )
}

export default CardList;