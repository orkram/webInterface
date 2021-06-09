import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MainPage} from "./MainPage";
import {AddUser} from "./AddUser";
import {withRouter} from "react-router";
import {Navigation} from "./Navigation";
import 'firebase/firestore';
import firebase from './config'

export class App extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAddUser.bind(this)
        this.state = {
            users: []
        }

        this.fetchData();
    }

    handleAddUser = (data_from_child)=>{
        const db = firebase.firestore();
        console.log(this.state.users.length.toString());
        db.collection('users').doc((this.state.users.length + 1).toString() ).set({
            user: {
                id: this.state.users.length + 1,
                username: data_from_child.username,
                description: data_from_child.description,
                email: data_from_child.email,
                tags: data_from_child.tags
            }
        });
        this.fetchData();
    }


    editUser = (user) => {
        console.log(user);
        const db = firebase.firestore();
        db.collection('users').doc(user.id.toString()).set({
            user
        });
        this.fetchData();
    }

    fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection('users').get();
        console.log(data.docs.map(user => user.data()));
        this.setState(() => ({
            users: data.docs.map(user => user.data().user)
        })
        );
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

