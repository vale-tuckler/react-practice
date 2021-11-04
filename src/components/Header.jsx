import React from 'react';

const Header = ({titulo}) => {
    console.log('Props: ' + titulo);

    return(
        <h1>{titulo}</h1>
    );
};
export default Header;