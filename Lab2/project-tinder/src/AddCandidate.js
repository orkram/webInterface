import React, {Component} from "react";
import './AddCandidate.css';
import {Button} from "@material-ui/core";

export class  AddCandidate extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'', description:'', email:'', tags:''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
    };

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state);
        this.props.functionCallFromParent(this.state);

    };

    render() {
        return (
            <form className={"add-user-form"} onSubmit={this.handleSubmit}>
                <div className={"title"}>Add user</div>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Search by tags" name="username"
                           id='username' onChange={this.handleChange} required/>
                    <label htmlFor="Username" className="form__label">Username</label>
                </div>
                <div className="form__group field">
                    <input type="text" className="form__field" placeholder="Description" name="description"
                           id='description' onChange={this.handleChange} />
                    <label htmlFor="Descriptions" className="form__label">Description</label>
                </div>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Email" name="email" id='email' required onChange={this.handleChange}/>
                    <label htmlFor="Email" className="form__label">Email</label>
                </div>
                <div className="form__group field">
                    <input type="text" className="form__field" placeholder="Tags" name="tags" id='tags' onChange={this.handleChange}/>
                    <label htmlFor="Tags" className="form__label">Technology tags</label>
                </div>
                <Button  className={"button add-user-button"} variant="contained" type={"submit"}> Add
                    user </Button>
            </form>
        )
    }
}

