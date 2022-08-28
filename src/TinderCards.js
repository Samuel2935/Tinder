import React, { useEffect } from 'react'
import { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios';


function TinderCards() {
    const[people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/card');
            setPeople(req.data);
            console.log(people);
        }
        fetchData();
    }, [people])

    const Swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
        // SetLastDirection(direction)
    };

    const outOfFrame = () => {
        console.log(people.name + "left the screen")
    }

  return (
    <div className='tinderCards'>
        <div className='tinderCard_container'>
        {people.map((person)=> (
            //   <h2>{person.name}</h2>
            <TinderCard
className='swipe'
key={person.name}
preventSwipe={['up','down']}
onSwipe={(dir) => Swiped(dir, person.name)}
onCardLeftScreen={() => outOfFrame(person.name)}
>
  <div 
  className='card'
  style={{backgroundImage:`url(${person.imgUrl})`}}
  >
      <h3>{person.name}</h3>
  </div>
</TinderCard>
        )
           
        )}
  
        </div>
    
    </div>
  )
}

export default TinderCards


// <TinderCard
// className='swipe'
// key={person.name}
// preventSwipe={['up','down']}
// onSwipe={(dir) => Swiped(dir, person.name)}
// onCardLeftScreen={() => outOfFrame(person.name)}
// >
//   <div 
//   className='card'
//   style={{backgroundImage:`url(${person.url})`}}
//   >
//       <h3>{person.name}</h3>
//   </div>
// </TinderCard>