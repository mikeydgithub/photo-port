/* eslint-disable no-restricted-globals */
import React from 'react';

const catergories = [
    {name: "commercial", description:"Photos of grocery stores, food trucks, and other commercial projects"},
    {name: "portraits", description: "Portraits of people in my life"},
    {name: "food", description: "Delicious delicacies"},
    {name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature"}
];

function categorySelected(index) {
    return console.log(catergories[index].name)  
}

function Nav(){
    return(
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {catergories.map((category, index) => (
                        <li
                        className="mx-1"
                        key={category.name}
                        >
                            <span onClick={() => categorySelected(index)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Nav;