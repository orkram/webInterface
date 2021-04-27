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
            ]
        }
    }

    handleAddUser = (data_from_child)=>{

        console.log(data_from_child.description);

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

    render() {
        return (
            <div className={"content"}>
                <div className="main-content">
                    <FilterBar/>
                    <ResultBar/>
                    <ProjectList users = {this.state.users}/>
                </div>
                <AddCandidate functionCallFromParent={this.handleAddUser.bind(this)}/>
            </div>
        )
    }
}
