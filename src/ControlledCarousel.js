import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import CertiTemplate from './data/CertiTemplate.json'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            { CertiTemplate.Templates.map(template => (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={template.src}
                    alt={template.alt}
                />
                <Carousel.Caption>
                    <h3>{template.alt}</h3>
                    <button className='btn btn-primary' onClick={console.log("was clicked")}>Select</button>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ControlledCarousel;