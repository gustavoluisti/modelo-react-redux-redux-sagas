import  React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Exemplo from '../pages/Exemplo/Exemplo';

export class Root extends React.Component{
    render(){
        return (
            <main>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route  path="/exemplo" component={Exemplo} />
                    </Switch>
                </div>
            </main>
        )
    }
}