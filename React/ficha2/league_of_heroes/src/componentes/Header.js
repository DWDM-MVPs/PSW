import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <h1>{this.props.project_name}</h1>
                <h3>{this.props.project_name} by {this.props.my_name}</h3>
            </div>
            );
        }
}
export default Header;