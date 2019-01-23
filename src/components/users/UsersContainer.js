import React, {Component} from 'react';
import UsersData from "./UsersData";
import UsersList from "./UsersList";
import UsersTable from "./UsersTable";

class UsersContainer extends Component {
    render() {
        return (
            <div>
                <h3>Users List for Catalog page</h3>
                    <UsersData render={users => <UsersList users={users}/>} />
                <h3>Users Table for Dashboard</h3>
                    <UsersData render={users => <UsersTable users={users}/>}/>
            </div>
        );
    }
}

export default UsersContainer;