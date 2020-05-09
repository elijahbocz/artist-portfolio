import styled from "styled-components";

export const MasonryGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);

  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img:nth-child(5n) {
    grid-column-end: span 2;
  }
`;