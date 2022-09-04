import React from 'react';

import {H1} from './styles'

function Title(props){
    
    return <H1>{props.children}</H1>
// pode se usar somente o children dessa forma ({children})

}

export default  Title;