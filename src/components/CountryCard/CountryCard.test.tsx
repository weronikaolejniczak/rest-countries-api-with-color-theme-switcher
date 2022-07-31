import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import { Theme } from 'components/Theme';
import * as stories from './CountryCard.stories';

const { Default } = composeStories(stories);

/* 
  GIVEN I am a user
  WHEN I see a country card
  THEN I should see its name
  AND its population
  AND its region
  AND its capital
  AND its flag
*/

describe('CountryCard', () => {
  beforeAll(() => {
    render(
      <Theme>
        <Default />
      </Theme>
    );
  });

  it('should display country name', () => {
    const countryName = screen.getByText('Greenland');

    expect(countryName).toBeDefined();
  });

  it('should display country population', () => {
    const countryPopulation = screen.getByText(String(56367));

    expect(countryPopulation).toBeDefined();
  });

  it('should display country region', () => {
    const countryRegion = screen.getByText('Americas');

    expect(countryRegion).toBeDefined();
  });

  it('should display country capital', () => {
    const countryCapital = screen.getByText('Nuuk');

    expect(countryCapital).toBeDefined();
  });

  it('should display country flag', () => {
    const countryFlag = screen.getByTestId('country-card-flag');

    expect(countryFlag).toBeDefined();
  });
});
