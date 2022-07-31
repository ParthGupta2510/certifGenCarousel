import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import CertiTemplate from './data/CertiTemplate.json'
import ExcelPreview from './components/ExcelPreview';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleTemplate = (selectedTemplate, e) => {
        setSelectedTemplate(selectedTemplate.target.id);
    };

    // console.log(selectedTemplate, "was clicked!")

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                {CertiTemplate.Templates.map(template => (
                    <Carousel.Item key={template.key}>
                        <img
                            className="d-block w-100"
                            id={template.id}
                            src={template.src}
                            alt={template.alt}
                        />
                        <Carousel.Caption>
                            <h3>{template.alt}</h3>
                            <button className='btn btn-primary' id={template.id} onClick={handleTemplate}>Select</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <p className='text-center d-block btn btn-success m-auto'>Certificate {parseInt(selectedTemplate) + 1} selected!</p>
            <ExcelPreview id={selectedTemplate} />
        </>
    );
}

export default ControlledCarousel;