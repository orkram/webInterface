import React, {Component} from "react";
import "./ProjectList.css";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper} from "@material-ui/core";
import uuid from 'react-uuid'
import {Accessible} from "@material-ui/icons";

export class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    generate(element) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
                size: 1
            }),
        );
    }

    render() {
        return (
            <div className={"candidate-list"}>
                <div className={"list"}>
                    <Paper style={{maxHeight: 650, overflow: 'auto'}}>
                    <List dense={false} >
                        {this.props.users.map(({username,description,_,tags}) => (
                            <ListItem key={uuid()}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Accessible/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={username}
                                    secondary={
                                        <span>
                                            <span>{description}</span>
                                            <span>{tags}</span>
                                        </span>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                    </Paper>
                </div>
            </div>
        )
    }
}

