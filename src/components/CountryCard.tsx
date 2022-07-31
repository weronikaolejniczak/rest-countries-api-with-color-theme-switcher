import styled from 'styled-components';

import { ICountry } from 'interface/ICountry';
import { Row } from './Row';

const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.elements};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow};
  cursor: pointer;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
`;

const Image = styled.img`
  height: 18rem;
  object-fit: cover;
  width: 100%;
`;

const Description = styled.div`
  padding: 3rem;
`;

type CountryCardPropsType = {
  country: ICountry;
};

export const CountryCard = ({ country }: CountryCardPropsType) => {
  const {
    capital,
    flags: { png },
    name: { common },
    population,
    region,
  } = country;

  return (
    <Wrapper>
      <Image src={png} />
      <Description>
        <h2>{common}</h2>
        <Row label="Population" value={String(population)} />
        <Row label="Region" value={region} />
        <Row label="Capital" value={capital?.join(', ') ?? '-'} />
      </Description>
    </Wrapper>
  );
};
