import React from 'react'
import { Link } from 'react-router-dom'


function Fatal404() {
    return (
        <div>
            <h1>This page is not found.!</h1>
            <Link to="/">Home Page</Link>
        </div>
    )
}

export default Fatal404