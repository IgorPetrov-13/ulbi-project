// import React from 'react';
// import { StoryFn } from '@storybook/react';

// export const StyleDecorator = (Story: StoryFn) => (
//   <div style={{ padding: '20px' }}>
//     <Story />
//   </div>
// );

import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (story: () => StoryFn) => story();
