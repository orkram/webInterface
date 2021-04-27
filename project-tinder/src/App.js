import './App.css';
import React, {Component} from "react";
import {FilterBar} from "./FilterBar";
import ResultBar from "./ResultBar";
import {AddCandidate} from "./AddCandidate";
import {ProjectList} from "./ProjectList";

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Maja Hedy',
                    description: 'homeless, jobless, talentless',
                    email:'',
                    tags: 'html, css'
                },
                {
                    username: 'Firmino Lú',
                    description: 'Promising starting chinese engineer',
                    email:'',
                    tags: 'Scala, Java, Akka streams, Kafka'
                },
                {
                    username: 'Ryana Gwilherm',
                    description: 'Harverd dropout looking for a job at startup',
                    email:'',
                    tags: 'Python, C#'
                },
                {
                    username: 'Olimpia Praxis',
                    description: 'Experienced front end developer looking for Senior developer/architect position',
                    email:'',
                    tags: 'PHP'
                }
            ],
            filterDescription:'',
            filterTags: ''
        }
    }

    handleAddUser = (data_from_child)=>{
        this.setState(({ users }) => ({
            users: [
                ...users,
                {
                    username:data_from_child.username,
                    description:data_from_child.description,
                    email:data_from_child.email,
                    tags:data_from_child.tags
                }
            ],
        })
        )
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

    render() {
        return (
            <div className={"content"}>
                <div className="main-content">
                    <FilterBar SetFilters={this.handleFilters.bind(this)} />
                    <ResultBar result = {this.getListContent().length}/>
                    <ProjectList users = {this.getListContent()}/>
                </div>
                <AddCandidate functionCallFromParent={this.handleAddUser.bind(this)}/>
            </div>
        )
    }
}
