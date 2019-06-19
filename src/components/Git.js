import React from 'react'   
import Rainbow from '../HOC/Rainbow'

// Git component
const Git = () => {
    return (
        <a target='_blank' rel='noopener noreferrer' style={{color: 'inherit'}} href="https://github.com/scronaldo/">GitHub</a>

    )
}


// instead of export default Git
// we import HOC and export it adding this comp as argument
export default Rainbow(Git)