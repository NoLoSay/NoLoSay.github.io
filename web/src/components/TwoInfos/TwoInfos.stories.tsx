// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TwoInfos> = (args) => {
//   return <TwoInfos {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TwoInfos from './TwoInfos'

export const generated = () => {
  return <TwoInfos />
}

export default {
  title: 'Components/TwoInfos',
  component: TwoInfos,
} as ComponentMeta<typeof TwoInfos>
