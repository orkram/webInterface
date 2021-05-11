import React, {Component} from "react";
import {Button} from "@material-ui/core";
import "./Navigation.scss"
export class Navigation extends Component{

    constructor(props) {
        super(props);
        this.redirectToAddUser = this.toAddUser.bind(this);
        this.redirectToMainView = this.toMainView.bind(this);
    }

    toAddUser() {
         this.props.history.push('/add-user');
    }

    toMainView() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className={'header'}>
                <div className={'spacer'}> </div>
                <Button className={'nav-button'} onClick={this.redirectToMainView}> Main menu </Button>
                <div className={'spacer'}> </div>
                <Button onClick={this.redirectToAddUser}> Create user </Button>

            </div>

        );
    }
}


