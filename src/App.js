import React from "react";
import "./App.css";
import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      searchField: ""
    };
  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

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
    const { employees, searchField } = this.state;
    const employeeFilter = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Sample React project</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeHolder="Search Employees"
        />

        <CardList employeesProp={employeeFilter} />
      </div>
    );
  }
}

export default App;
