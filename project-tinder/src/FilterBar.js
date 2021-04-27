import React, {Component} from "react";
import "./SearchBar.css";
import "./InputFIeld.scss"
import {Button} from "@material-ui/core";


export class FilterBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            filterTags: '',
            filterDescription:''
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
        this.props.SetFilters(this.state);
    };

    render() {
        return (
            <div className={"searchbar"}>
                <form className={"search-from"} onSubmit={this.handleSubmit}>
                    <div className="form__group field">
                        <input type="input" className="form__field" onChange={this.handleChange} placeholder="Search by tags" name="filterTags" id='tags'
                               />
                        <label htmlFor="Search by tags" className="form__label">Search by tags</label>
                    </div>
                    <div className="form__group field">
                        <input type="input" onChange={this.handleChange} className="form__field" placeholder="Search by description" name="filterDescription" id='description'
                               />
                        <label htmlFor="Search by description" className="form__label">Search by description</label>
                    </div>
                    <Button  className={"button add-user-button"} variant="contained" type={"submit"}> Search </Button>
                </form>
            </div>
        )
    }
}
