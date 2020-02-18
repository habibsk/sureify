import React from 'react';
import CreateTask from './commonComponents/CreateTask';
import Header from "./commonComponents/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    createTask: false
  }

  render() {
    const data = [
      { title: "First Task", description: "First Description", priority: "None", date: new Date("01-02-2020"), status: "open" },
      { title: "Second Task", description: "Second Description", priority: "Low", date: new Date("01-03-2020"), status: "open" },
      { title: "Third Task", description: "Third Description", priority: "Medium", date: new Date("01-20-2020"), status: "closed" }
    ]
    sessionStorage.setItem('data', JSON.stringify(data));
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/createTask" component={CreateTask} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  };
}

export default App;
