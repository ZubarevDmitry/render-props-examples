import React, {Component} from 'react';

class UsersTable extends Component {
    render() {
        let {users} = this.props;
        let usersTable = users.map(user => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
            </tr>
        ))
        return (
            <div className="UsersTable">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersTable}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UsersTable;