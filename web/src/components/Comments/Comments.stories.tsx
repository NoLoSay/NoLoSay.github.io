// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Comments> = (args) => {
//   return <Comments {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Comments from './Comments'

export const generated = () => {
  return <Comments />
}

export default {
  title: 'Components/Comments',
  component: Comments,
} as ComponentMeta<typeof Comments>
