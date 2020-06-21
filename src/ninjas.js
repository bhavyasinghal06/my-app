import React, { Component } from 'react';

const Ninjas = ({ninjas})=>{
    const ninjaList = ninjas.map(ninja =>{ 
        return(
            <div className="ninja" key={ninja.name}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age} </div>
            </div>
        )
    })
        
    return(
     <div className="ninja-list">
             {ninjaList}
    </div>
 )
}
export default Ninjas