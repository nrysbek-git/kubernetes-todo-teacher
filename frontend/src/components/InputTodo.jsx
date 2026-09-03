import React, {Component} from "react"

class InputTodo extends Component {
    state = {
        title: "",
    };

    onChange = e => {
        // console.log("hello");

        this.setState({
            // title: e.target.value
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.title.trim()) return;
        this.props.addTodoProps(this.state.title, this.state.description);
        this.setState({
            title: "",
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Добавить задачу..." value={this.state.title} name="title"
                       onChange={this.onChange}/>
                <button type="submit">Добавить</button>
            </form>
        )
    }
}

export default InputTodo
