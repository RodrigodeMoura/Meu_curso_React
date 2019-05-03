import React from 'react'
import ReactDom from 'react-dom'
import Familia from './familia'
import Member from './member'

ReactDom.render(
    <Familia lastname='Estevam'>
        <Member name='Rodrigo'  />
    </Familia>
    , document.getElementById('app'))