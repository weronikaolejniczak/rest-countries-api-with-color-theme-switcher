import styled from 'styled-components';
import { useQuery } from 'react-query';

import { ICountry } from 'interface/ICountry';
import { getAllCountries } from 'services/getAllCountries';
import { CountryCard } from './CountryCard';

const List = styled.div`
  display: grid;
  gap: 6rem;
  width: 100%;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.xlDesktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Countries = () => {
  const { error, isError, isLoading, data } = useQuery<ICountry[]>(
    ['countries'],
    getAllCountries
  );

  if (isError) return <span>Something went wrong... {error.message}</span>;
  if (isLoading) return <span aria-label="loading">Loading...</span>;
  return (
    <List>
      {data.map((country: ICountry) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </List>
  );
};
