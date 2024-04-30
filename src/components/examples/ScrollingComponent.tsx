// import React, { useState, useEffect } from 'react';


// const ScrollingComponent = ({ sections }) => {
//     const [currentSection, setCurrentSection] = useState(0);
//     const [scrollY, setScrollY] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     useEffect(() => {
//         const handleSectionChange = () => {
//             const sectionIndex = Math.floor(scrollY / window.innerHeight);
//             setCurrentSection(sectionIndex);
//         };
//         handleSectionChange();
//     }, [scrollY]);

//     const handleScrollToSection = (index) => {
//         window.scrollTo({
//             top: index * window.innerHeight,
//             behavior: 'smooth',
//         });
//     };

//     return (
//         <div className="scrolling-container">
//             {sections.map((section, index) => (
//                 <div
//                     key={index}
//                     className={`section ${currentSection === index ? 'active' : ''}`}
//                     onClick={() => handleScrollToSection(index)}
//                 >
//                     {section}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ScrollingComponent;

// ---------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import './ScrollingComponent.css'; // You can style your component in this file

const ScrollingComponent = ({ sections }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleSectionChange = () => {
            const sectionIndex = Math.floor(scrollY / window.innerHeight);
            setCurrentSection(sectionIndex);
        };
        handleSectionChange();
    }, [scrollY]);

    const handleScrollToSection = (index) => {
        window.scrollTo({
            top: index * window.innerHeight,
            behavior: 'smooth',
        });
    };

    // Define background images for each section
    const backgroundImages = [
        'https://thehermitagemuseum.org/wp-content/uploads/2017/04/Photography-Camera-HD-Wallpaper1.jpg',
        'https://wallpapers.com/images/hd/blurred-lights-dslr-camera-photography-z1z5nn4asvlk8cok.jpg',
        'https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Section+3',
        'https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Section+4',
    ];

    return (
        <div className="scrolling-container">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`section ${currentSection === index ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${backgroundImages[index]})` }}
                    onClick={() => handleScrollToSection(index)}
                >
                    <div className="content">{section}</div>
                </div>
            ))}
        </div>
    );
};

export default ScrollingComponent;
