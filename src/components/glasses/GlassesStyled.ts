import styled from 'styled-components';

export const GlassesStyled = styled.div`

  .menu {
    display: flex;
    align-items: center;
  }
  .glasses {
    display: flex;
    gap: 16px;
    z-index: 10;
  }
  .lens {
    align-items: center;
  }
`;

export const ProfileIconStyled = styled.div`

  z-index: 1;

  .circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.2;
  }

  .circle:hover {
    cursor: pointer;
  }
  
  .profile-icon {
    height: 20px;
  }
`;