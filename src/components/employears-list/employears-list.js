import EmployearsListItem from "../employears-list-item/employears-list-item";
import './employears-list.css'

const EmployearsList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployearsListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployearsList;