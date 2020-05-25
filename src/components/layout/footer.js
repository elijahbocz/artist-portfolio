import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1rem;
  text-align: center;

  a {
    line-height: 0; 
    font-size: 0;
    color: transparent;
  }

  svg {
    width: 1.25rem;
  }

  svg:hover {
    fill: #333;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <a href="https://instagram.com/bclawrenceart">
        <svg
          fill="#999"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 26"
          width="52px"
          height="52px"
        >
          <path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z" />
        </svg>Instagram Link
      </a>
    </StyledFooter>
  );
}

export default Footer;
