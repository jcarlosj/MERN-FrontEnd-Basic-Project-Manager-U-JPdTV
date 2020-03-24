import React from 'react';

const Project = ({ data }) => {
    return(
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >{ data .name }</button>
        </li>
    );
}

export default Project;