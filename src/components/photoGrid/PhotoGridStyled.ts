import styled from 'styled-components';

export const PhotoGridStyled = styled.div`

  display: flex;
  justify-content: center;
  width: 100%;

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 6px;
  }

  .gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
