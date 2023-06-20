// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CommentsCard> = (args) => {
//   return <CommentsCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CommentsCard from './CommentsCard'

export const generated = () => {
  return <CommentsCard />
}

export default {
  title: 'Components/CommentsCard',
  component: CommentsCard,
} as ComponentMeta<typeof CommentsCard>
