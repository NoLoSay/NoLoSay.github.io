// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MiddleCard> = (args) => {
//   return <MiddleCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MiddleCard from './MiddleCard'

export const generated = () => {
  return <MiddleCard />
}

export default {
  title: 'Components/MiddleCard',
  component: MiddleCard,
} as ComponentMeta<typeof MiddleCard>
