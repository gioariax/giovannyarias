import styled from 'styled-components';

const HomeStyled = styled.div`

  padding: 24px;
  display: flex;
  flex-direction: column;

  .logo {
    width: 300px;
  }

  .language {
    display: flex;
    justify-content: flex-end;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: white;
    gap: 24px;
  }
`;

export default HomeStyled;