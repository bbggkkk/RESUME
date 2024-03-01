import React from 'react';
import './layout.scss';
import variables from '../styles/variables.light.scss';

interface LayoutChildren {
    children: React.ReactNode
}

const headerStyle = {
    
}

export default function Layout({ children }: LayoutChildren){
    console.log(variables);
    return (
        <>
            <header style={headerStyle}>헤더</header>
            {children}
            <footer>푸터</footer>
        </>
    )
}