import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css'
export default class NewTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo({ ...this.state, id: uuid(), completed: false })
        this.setState({ task: "" })
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit} >
                <label htmlFor="task">New Todo</label>

                <input
                    name="task"
                    type="text"
                    placeholder="New Todo"
                    id="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>



            </form>
        )
    }
}
