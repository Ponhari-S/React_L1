import React from 'react';
import ReactDOM from 'react-dom/client';

const head=(
    <h1 id='header' key='h1'>This is the header</h1>
);
const HeaderComponent=()=>{
    return (
        <div>
            {head}
            <h2>H2 1</h2>
            <h2>H2 2</h2>
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById('app'));
root.render(<HeaderComponent />);