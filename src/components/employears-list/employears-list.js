import EmployearsListItem from "../employears-list-item/employears-list-item";
import './employears-list.css'

const EmployearsList = () => {
    return (
        <ul className="app-list list-group">
            <EmployearsListItem/>
            <EmployearsListItem/>
            <EmployearsListItem/>
        </ul>
    )
}
export default EmployearsList;