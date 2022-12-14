import { Component } from 'react';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployearsList from "../employears-list/employears-list";
import EmployearsAddForm from "../employears-add-form/employears-add-form";
import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    render() {
        return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployearsList
                data={this.state.data}
                onDelete={this.deleteItem}/>
            <EmployearsAddForm onAdd={this.addItem}/>
        </div>
    );
}
}
export default App;