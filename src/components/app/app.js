import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployearsList from "../employears-list/employears-list";
import EmployearsAddForm from "../employears-add-form/employears-add-form";
import './app.css'

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployearsList/>
            <EmployearsAddForm/>
        </div>
    );
}

export default App;