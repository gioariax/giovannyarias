import styled from 'styled-components';

const LensStyled = styled.div`

  display: flex;
  align-items: center;

  .lens {
    display: flex;
    gap: 8px;
    z-index: 1;
  }

  .line {
    width: 40px;
  }

  .line-align-left {
    display: flex;
    justify-content: flex-end;
  }

  .line-left {
    height: 10px;
    background-color: #fff;
    margin-right: -10px;
    margin-left: -10px;
    margin-top: 1px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .line-right {
    height: 10px;
    background-color: #fff;
    margin-right: -10px;
    margin-left: -10px;
    margin-top: 1px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export default LensStyled;