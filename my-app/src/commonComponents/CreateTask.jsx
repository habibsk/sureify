import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import "./CreateTaskStyles.css";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class CreateTask extends Component {

    state = {
        priority: "None",
        date: new Date(),
        task: {
            priority: "None",
            status: "open"
        }
    }

    componentDidMount = () => {
        this.props && this.props.location && this.props.location.state && this.props.location.state.title && this.setState({ task: this.props.location.state })
    }

    handleChange = (field, event) => {
        this.setState({
            task: { ...this.state.task, [field]: event.target.value }
        });
    };

    handleDateChange = date => {
        this.setState({ date });
    };

    saveTask = () => {
        let data = sessionStorage.getItem('data');
        data = JSON.parse(data);
        data.push(this.state.task);
        console.log(data);
        sessionStorage.setItem('data', JSON.stringify(data));
    }

    cancleTask = () => {
        this.setState({
            task: {
                priority: "None",
                status: "open",
                title: "",
                date: new Date(),
                description: ""
            }
        });
    }

    render() {
        const priorities = ["None", "Low", "Medium", "High"];
        const statuses = ["open", "close"];
        return (
            <div className="create-task-form">
                <span className="task-heading">Please create a Todo Task</span>
                <form className="create-form" noValidate autoComplete="off">
                    <TextField
                        className="fields"
                        label="Summary"
                        placeholder="Title"
                        variant="outlined"
                        value={this.state.task.title}
                        onChange={e => this.handleChange("title", e)}
                    /><br />
                    <TextField
                        className="fields"
                        label="Description"
                        placeholder="Your message.."
                        variant="outlined"
                        value={this.state.task.description}
                        onChange={e => this.handleChange("description", e)}
                    /><br />
                    <TextField
                        className="fields"
                        select
                        label="Priority"
                        value={this.state.task.priority}
                        onChange={e => this.handleChange("priority", e)}
                    >
                        {priorities.map(priority => (
                            <MenuItem key={priority} value={priority}>
                                {priority}
                            </MenuItem>
                        ))}
                    </TextField><br />
                    <TextField
                        id="date"
                        label="Select Date"
                        type="date"
                        defaultValue={new Date()}
                        className="fields"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={this.state.task.date}
                        onChange={e => this.handleChange("date", e)}
                    /><br />
                    <TextField
                        className="fields"
                        select
                        label="Status"
                        value={this.state.task.status}
                        onChange={e => this.handleChange("status", e)}
                    >
                        {statuses.map(status => (
                            <MenuItem key={status} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </TextField><br />
                    <Link to="/">
                        <Button variant="contained" className="fields" color="primary" onClick={this.saveTask}>
                            Save
                    </Button>
                    </Link>

                    <Button variant="contained" className="fields" onClick={this.cancleTask}>Cancle</Button>

                </form>
            </div>
        )
    }
}

export default CreateTask;