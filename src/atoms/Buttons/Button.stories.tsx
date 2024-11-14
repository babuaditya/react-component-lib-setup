// src/components/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Buttons';

// Meta configuration for Storybook
const meta: Meta = {
  title: 'Components/Button',  // Storybook category and component name
  component: Button,
  argTypes: {
    // Optionally, add controls for customization in Storybook
    onClick: { action: 'clicked' },  // Log button click events in Storybook
  },
};

export default meta;

// Template for the Button component
const Template: StoryFn = (args) => <Button label={''} onClick={function (): void {
  throw new Error('Function not implemented.');
} } {...args} />;

// Default story for the Button
export const Default: StoryFn = Template.bind({});
Default.args = {
  label: 'Click Me',  // Default label text
  onClick: () => {},  // Default no-op click handler
};

// Custom Style variant
export const CustomStyle: StoryFn = Template.bind({});
CustomStyle.args = {
  label: 'Custom Style Button',
  onClick: () => {},
  className: 'bg-secondary-500 hover:bg-primary-700',  // Custom background color
};
