import React, {Component} from "react";
import "./ProjectList.css";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper} from "@material-ui/core";
import uuid from 'react-uuid'
import {Accessible} from "@material-ui/icons";


export function ProjectList(props) {
    return (
        <div className={"candidate-list"}>
            <div className={"list"}>
                <Paper style={{maxHeight: 650, overflow: 'auto'}}>
                <List dense={false} >
                    {props.users.map(({username,description,_,tags}) => (
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
                                        <br/>
                                        <span>{'Tags: ' + tags}</span>
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

