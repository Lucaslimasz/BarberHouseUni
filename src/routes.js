import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Solicitation from './pages/Solicitation/index'
import SolicitationBarbeiro from './pages/SolicitationBarbeiro/index'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon} />
                <Route exact path="/solicitation" component={Solicitation} />
                <Route exact path="/solicitationbarber" component={SolicitationBarbeiro} />
                <Route path="*" component={Logon} />
            </Switch>
        </BrowserRouter>
    )
}