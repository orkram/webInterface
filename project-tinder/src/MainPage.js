import React, {Component} from "react";
import {FilterBar} from "./FilterBar";
import ResultBar from "./ResultBar";
import {ProjectList} from "./ProjectList";

export class  MainPage extends Component {

    constructor(props) {
        super(props);
        this.filter =  this.handleFilters.bind(this);
        this.state = {
            filterDescription:'',
            filterTags: '',
            users: this.props.users
        }
    }

    handleFilters = (data_from_child)=>{
        this.setState({
                filterTags: data_from_child.filterTags,
                filterDescription: data_from_child.filterDescription
            }
        )
    }

    getListContent = () =>{
        let content = this.state.users;
        if(this.state.filterTags !== ''){

            content = content.filter(user => user.tags.toLowerCase().includes(this.state.filterTags.toLowerCase()));
            console.log(content);
        }
        if(this.state.filterDescription !== ''){
            content = content.filter(user => user.description.toLowerCase().includes(this.state.filterDescription.toLowerCase()));
        }
        return content;
    }

    handleCallback = (childData) =>{
       this.props.useredit(childData);
    }


    render() {
        return (

            <div className="main-content">
                <FilterBar SetFilters={this.filter} />
                <ResultBar result = {this.getListContent().length}/>
                <ProjectList users = {this.getListContent()}  parentCallback = {this.handleCallback}/>
            </div>

        );
    }
}
