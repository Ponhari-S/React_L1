import React from 'react';
import ReactDOM from 'react-dom/client';

const header=(
    <h1 id='header' key='h1'>This is the header</h1>
);
const root=ReactDOM.createRoot(document.getElementById('app'));
root.render(header);