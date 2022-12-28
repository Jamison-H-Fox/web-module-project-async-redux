import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 45%;
    margin: 2.5%;
`

function SearchForm(props) {

    return(
        <StyledDiv className="search-form">
            <h3>search some stuff here mate</h3>
        </StyledDiv>
    )
}

export default SearchForm