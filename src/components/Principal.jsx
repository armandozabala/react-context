import React, { useContext } from 'react'


import { ThemeContext } from '../context/ThemeProvider';
import { HolaContext } from '../context/HolaProvider';

const Principal = () => {

    const { theme } = useContext(ThemeContext);
    const { hola } = useContext(HolaContext);

    return (
        <div style={{
            color:  theme.color
        }}>
            <h2>Contenido - { hola }</h2>
        </div>
    )
}

export default Principal
