import React, { Component } from 'react';

class UsersList extends Component {
    render() {
        let {users}  = this.props;
        let usersList = users.map(user => (
            <li key={user.id}>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
            </li>
        ));
        return (
            <div className="UsersList">
                <ul>
                    {usersList}
                </ul>
            </div>
        );
    }
}

export default UsersList;