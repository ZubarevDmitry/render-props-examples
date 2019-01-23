import {Component} from 'react';

class UsersData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentWillMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
            this.setState({users});
        })
    }

    render() {
        return this.props.render([...this.state.users])
    }
}

export default UsersData;