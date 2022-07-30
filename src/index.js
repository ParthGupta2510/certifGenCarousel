import React from 'react';
import ReactDOM from 'react-dom/client';
import ControlledCarousel from './ControlledCarousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div className='w-50 m-auto'>
            <ControlledCarousel />
        </div>
    </>
);