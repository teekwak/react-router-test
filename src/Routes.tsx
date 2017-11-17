import * as React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

/*
    In theory, this works great on localhost
    HOWEVER, I have a feeling that routing will fail on live
*/

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        Our React Router 4 App
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/users'>Users</Link></li>
                        </ul>
                    </header>
                    <main>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/users" component={UsersPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>
const NotFoundPage = () => <div>404 Page</div>

export default Routes;
