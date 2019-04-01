import React from 'react';


const Rank = ({ name, entries, faceCount }) => {
    return (
       <div>
           <div className = 'white f2'>
        {`${name}, the total number of faces you have anonymized is... `}
           </div>
           <div className = 'white f1'>
        {entries}
           </div>
           <div className = 'white f2'>
        {'The current number is'}
           </div>
           <div className = 'white f1'>
        {faceCount}
           </div>
       </div>
        );
}

export default Rank;