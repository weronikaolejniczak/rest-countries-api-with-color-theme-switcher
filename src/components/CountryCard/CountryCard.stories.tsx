import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { COUNTRY_ONE } from 'mocks/countries';
import { CountryCard } from '.';

export default {
  title: 'CountryCard',
  component: CountryCard,
} as ComponentMeta<typeof CountryCard>;

const Template: ComponentStory<typeof CountryCard> = (args) => (
  <CountryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  country: COUNTRY_ONE,
};
