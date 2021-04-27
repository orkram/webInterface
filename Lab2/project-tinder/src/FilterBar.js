import React, {Component} from "react";
import "./SearchBar.css";
import "./InputFIeld.scss"


export class FilterBar extends Component{

    render() {
        return (
            <div className={"searchbar"}>
                <form className={"search-from"}>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Search by tags" name="tags" id='tags'
                               required/>
                        <label htmlFor="Search by tags" className="form__label">Search by tags</label>
                    </div>
                </form>
            </div>
        )
    }
}
