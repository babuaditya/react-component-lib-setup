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
const Template: StoryFn = (args) => <Button label={''} onClick={() => {}} {...args} />;

export const Default: StoryFn = Template.bind({});
Default.args = {
  label: 'Click Me',  
  onClick: () => {},  // Default click handler
};

export const CustomStyle: StoryFn = Template.bind({});
CustomStyle.args = {
  label: 'Custom Style Button',
  onClick: () => {},
  className: 'bg-secondary-500 hover:bg-primary-700',  // Custom background color
};

export const LinkButton: StoryFn = Template.bind({});
LinkButton.args = {
  label: 'Go to Google',
  as: 'link',  
  href: 'https://google.com', 
  className: 'bg-blue-500 hover:bg-blue-700',  
};

export const ButtonWithClickAction: StoryFn = Template.bind({});
ButtonWithClickAction.args = {
  label: 'Button with Action',
  onClick: () => alert('Button clicked!'), 
  className: 'bg-green-500 hover:bg-green-700', 
};

