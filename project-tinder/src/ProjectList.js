import React, {Component, useState} from "react";
import "./ProjectList.css";
import {
    Avatar,
    Button,
    Dialog,
    DialogTitle, Input,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper
} from "@material-ui/core";
import uuid from 'react-uuid'
import {Accessible} from "@material-ui/icons";
import PropTypes from "prop-types";


export const ProjectList = ({users, parentCallback}) => {

    const editUser = (id) => {
        setOpen(true);
        console.log(id);
        setId(id);
    }

    const [id, setId] = useState('')

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    function SimpleDialog(props) {
        const { onClose, selectedValue, open } = props;

        const handleClose = () => {
            onClose(selectedValue);
        };

        const handleSubmitClick = (value) => {
            onClose(value);
            parentCallback({id,username,description,tags});
        };

        const handleCancelClick = () => {
            onClose();
        };

        const [username, setName] = useState('');
        const [description, setDescription] = useState('')
        const [tags, setTags] = useState('')

        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Edit user's data:</DialogTitle>
                <div className={'form'}>
                <Input placeholder={'Name'} type="text" name="username" onChange={event => setName(event.target.value)}> </Input>
                <Input placeholder={'Description'} type="text" name="description"  onChange={event => setDescription(event.target.value)}> </Input>
                <Input placeholder={'Tags'} type="text" name="tags" onChange={event => setTags(event.target.value)}> </Input>
                    <div>
                    <Button type={"submit"} variant={"outlined"} className={'submit-button'} onClick={() => handleSubmitClick({})}> Submit </Button>
                    <Button variant={"outlined"} className={'submit-button'} onClick={() => handleCancelClick()}> Cancel </Button>
                    </div>
                </div>
            </Dialog>
        );
    }

    SimpleDialog.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
    };

    return (
        <div className={"candidate-list"}>
            <div className={"list"}>
                <Paper style={{maxHeight: 650, overflow: 'auto'}}>
                <List dense={false} >
                    {users.map(({id, username,description,_,tags}) => (
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
                                        <span>{'Tags: ' + tags}</span></span>
                                }
                            />
                            <Button className={'edit-button'} onClick={() => editUser(id)} > Edit </Button>
                            <SimpleDialog  open={open} onClose={handleClose} />
                        </ListItem>
                    ))}
                </List>
                </Paper>
            </div>
        </div>
    )
}

