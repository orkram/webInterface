import React, {Component} from "react";
import {AddCandidate} from "./AddCandidate";

export class AddUser extends Component{
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAddUser.bind(this)

    }

    handleAddUser = (data_from_child)=>{
        this.setState({data: 'User successfully created'});
        this.props.addUser(data_from_child);
        alert('A new user was successfully created');
    }

    render() {
        return (
            <div>
            <AddCandidate functionCallFromParent={this.handleAdd}/>
            </div>
        );
    }
}
