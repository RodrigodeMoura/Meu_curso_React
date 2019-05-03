import React from 'react'
import ReactDom from 'react-dom'
import ClassComponent from './classComponent'

ReactDom.render(
   <ClassComponent label="contador" initialValue={10}/>
    , document.getElementById('app'))