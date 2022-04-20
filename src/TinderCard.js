import { dividerClasses, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

import elon from './images/Elon Musk.jpg'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: elon
        },
        {
            name: 'Jeff Bezos',
            url: "https://en.wikipedia.org/wiki/Jeff_Bezos#/media/File:Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_(39074799225)_(cropped).jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: person.url }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards;