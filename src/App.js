import React from "react";
import "./App.css";
import CardList from "./components/cardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        return this.setState({ employees: data });
      });
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search Employees"
          onChange={e => {
            this.setState({searchField: e.target.value}, () => console.log(this.state));
            
          }}
        />
        <CardList employeesProp={this.state.employees} />
      </div>
    );
  }
}

export default App;
