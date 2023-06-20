// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Persona> = (args) => {
//   return <Persona {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Persona from './Persona'

export const generated = () => {
  return <Persona />
}

export default {
  title: 'Components/Persona',
  component: Persona,
} as ComponentMeta<typeof Persona>
