import React, {Component} from 'react';
import './personDetails.css';
export default class PersonDetails extends Component {

render() {
    return (
        <div className="person-details rounded">
            <h4>John Snow</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>male</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>1783</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>1820</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Books</span>
                    <span>First</span>
                </li>
            </ul>
        </div>
    );
}
}