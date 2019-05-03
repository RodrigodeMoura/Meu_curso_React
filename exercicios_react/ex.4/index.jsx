import React from 'react'
import ReactDom from 'react-dom'
import {Primeiro,Segundo} from './component'

ReactDom.render(
    <div>
        <Primeiro value='que legal' />
        <Segundo value ='mais legal ainda' />
    </div>
, document.getElementById('app'))