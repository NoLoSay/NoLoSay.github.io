// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ThreeInfos> = (args) => {
//   return <ThreeInfos {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ThreeInfos from './ThreeInfos'

export const generated = () => {
  return <ThreeInfos />
}

export default {
  title: 'Components/ThreeInfos',
  component: ThreeInfos,
} as ComponentMeta<typeof ThreeInfos>
