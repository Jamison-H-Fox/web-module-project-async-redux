import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 45%;
    margin: 2.5%;
    padding-bottom: 3.75%;
    background-color: #ffe165;
    border-radius: 30px;
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 0;

    & .type-color {
        width: 92.5%;
        padding-bottom: 75%;
        background-color: #9a63ab;
        border-radius: 10px;
        position: relative;
        margin-top: 3.75%;
        left: 3.75%;
        z-index: 1;

        & .poke-name {
            margin-left: 3.75%;
            text-align: left;
        }

        & .poke-img {
            background-image: url('https://th.bing.com/th/id/R.00ce6dd865d447ad6e627fc16df69571?rik=Zw60qtAU2vAnkw&riu=http%3a%2f%2fwww.brandsynario.com%2fwp-content%2fuploads%2fMew-1024x768.jpg&ehk=NNqHqwyP4unN3ZLlu3H7nOIsWiXz6t5B%2fYyKGuE2GQM%3d&risl=&pid=ImgRaw&r=0');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 90%;
            padding-bottom: 64%;
            position: relative;
            margin-top: 0%;
            left: 5%;
            z-index: 2;
        }
    }
`

function PokeCard(props) {

    return (
        <StyledDiv className="pokecard">
            <div className="type-color">
                <h2 className="poke-name">Mew</h2>
                <div className="poke-img"></div>
            </div>
        </StyledDiv>
    )
}

export default PokeCard;