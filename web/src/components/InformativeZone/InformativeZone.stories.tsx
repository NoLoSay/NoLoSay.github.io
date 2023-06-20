// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InformativeZone> = (args) => {
//   return <InformativeZone {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InformativeZone from './InformativeZone'

export const generated = () => {
  return <InformativeZone />
}

export default {
  title: 'Components/InformativeZone',
  component: InformativeZone,
} as ComponentMeta<typeof InformativeZone>
