// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof HeaderCard> = (args) => {
//   return <HeaderCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import HeaderCard from './HeaderCard'

export const generated = () => {
  return <HeaderCard />
}

export default {
  title: 'Components/HeaderCard',
  component: HeaderCard,
} as ComponentMeta<typeof HeaderCard>
