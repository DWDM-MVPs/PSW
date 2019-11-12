import React from 'react';
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>{this.props.project_name} -Copyright © 2019 by {this.props.my_name}.</p>
            </div>
        );
    }
}
export default Footer;