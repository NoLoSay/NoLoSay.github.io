// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof FooterCard> = (args) => {
//   return <FooterCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import FooterCard from './FooterCard'

export const generated = () => {
  return <FooterCard />
}

export default {
  title: 'Components/FooterCard',
  component: FooterCard,
} as ComponentMeta<typeof FooterCard>
