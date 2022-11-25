import React from 'react'
import { Ring } from '@uiball/loaders'
import "./Loader.css"

function Loader(){
    return (
        <div className='loader'>
            <Ring size={90} lineWeight={3} speed={2} color="black" />
        </div>
    )
}

export default Loader;