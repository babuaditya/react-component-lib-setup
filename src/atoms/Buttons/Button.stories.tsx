// src/components/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {Buttons} from './Buttons';

// Meta configuration for Storybook
const meta: Meta = {
  title: 'Atoms/Button',  
  component: Buttons,
  argTypes: {
    onClick: { action: 'clicked' },  
  },
};

export default meta;

// Template for the Button component
const Template: StoryFn = (args) => <Buttons label={''} onClick={() => {}} {...args} />;

export const Default: StoryFn = Template.bind({});
Default.args = {
  label: 'Default',  
  onClick: () => {},  
};

export const CustomStyle: StoryFn = Template.bind({});
CustomStyle.args = {
  label: 'Custom Style Button',
  onClick: () => {'Alert clicked'},
  className: 'mt-4', 
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

