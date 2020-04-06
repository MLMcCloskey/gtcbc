import React from "react";

function Header(props) {
    return (
        <div className="header">
            <h1> 🔥   {props.title}   🔥 </h1>
        </div>
    );
}

// Header.propTypes = {
//     title: React.PropTypes.string,
// };

export default Header;