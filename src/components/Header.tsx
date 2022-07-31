import styled from 'styled-components';

const Wrapper = styled.header`
  -webkit-box-shadow: ${({ theme: { shadow } }) => shadow};
  -moz-box-shadow: ${({ theme: { shadow } }) => shadow};
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.elements};
  box-shadow: ${({ theme: { shadow } }) => shadow};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 6rem;
  width: 100%;
`;

export const Header = () => (
  <Wrapper>
    <h1>Where in the world?</h1>
  </Wrapper>
);
