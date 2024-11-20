// src/components/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {Buttons,ButtonProps} from './Buttons';

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
const Template: StoryFn = (args:ButtonProps) => <Buttons {...args} />;

export const Default: StoryFn = Template.bind({});
Default.args = {
  label: 'Default',  
  onClick: () => {},  
};

export const CustomStyle: StoryFn = Template.bind({});
CustomStyle.args = {
  label: 'Custom Style Button',
  onClick: () => {'Alert clicked'},
};

export const LinkButton: StoryFn = Template.bind({});
LinkButton.args = {
  label: 'Go to Google',
  as: 'link',  
  href: 'https://google.com', 
};

export const ButtonWithClickAction: StoryFn = Template.bind({});
ButtonWithClickAction.args = {
  label: 'Button with Action',
  onClick: () => alert('Button clicked!'), 
};

