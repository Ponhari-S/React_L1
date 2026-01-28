import React from 'react';
import ReactDOM from 'react-dom/client';

const root=ReactDOM.createRoot(document.getElementById('app'));
const head=React.createElement('h1',{id:'header'},'This is the header');
const tail=React.createElement('h2',{id:'footer'},'This is the footer');
const container=React.createElement('div',{id:'container'},[head,tail]);
root.render(container);