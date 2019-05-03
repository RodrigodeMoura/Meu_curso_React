import React from 'react'
import ReactDom from 'react-dom'
import Familia from './familia'
import Member from './member'

ReactDom.render(
    <Familia>
        <Member name='Rodrigo' lastname='Estevam' />
    </Familia>
    , document.getElementById('app'))