import React from 'react';

const Header = (props) => (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );


Header.defaultProps = {
    title: 'What To Do?'
}

export default Header;