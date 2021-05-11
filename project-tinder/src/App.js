import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MainPage} from "./MainPage";
import {AddUser} from "./AddUser";
import {withRouter} from "react-router";
import {Navigation} from "./Navigation";



export class App extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAddUser.bind(this)
        this.state = {
            users: [
                {
                    id: 1,
                    username: 'Maja Hedy',
                    description: 'homeless, jobless, talentless',
                    email:'',
                    tags: 'html, css'
                },
                {
                    id: 2,
                    username: 'Firmino Lú',
                    description: 'Promising starting chinese engineer',
                    email:'',
                    tags: 'Scala, Java, Akka streams, Kafka'
                },
                {
                    id: 3,
                    username: 'Ryana Gwilherm',
                    description: 'Harverd dropout looking for a job at startup',
                    email:'',
                    tags: 'Python, C#'
                },
                {
                    id: 4,
                    username: 'Olimpia Praxis',
                    description: 'Experienced front end developer looking for Senior developer/architect position',
                    email:'',
                    tags: 'PHP'
                }
            ],
        }
    }

    handleAddUser = (data_from_child)=>{
        this.setState(({ users }) => ({
                users: [
                    ...users,
                    {
                        id: users.length +1,
                        username:data_from_child.username,
                        description:data_from_child.description,
                        email:data_from_child.email,
                        tags:data_from_child.tags
                    }
                ],
            })
        )
    }

    editUser = (userEdit) => {
        console.log(userEdit);
        this.setState({
            users:
                this.state.users.map(user => {
                    if (user.id === userEdit.id)
                        return userEdit;
                    else return user;
                })
        });
    }

    render() {
        return (
            <Router>
                <div className={"content"}>
                    <Nav />
                    <Switch>
                        <Route path={"/"} exact component={() => <MainPage users = {this.state.users} useredit ={this.editUser}/>} />
                        <Route path={"/add-user"} component={() => <AddUser addUser = {this.handleAddUser} /> }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
 const Nav = withRouter(Navigation);

