// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3';

import UListItem from '@/components/bases/u-list/u-list-item.vue';

const meta: Meta<typeof UListItem> = {
  component: UListItem,
};

export default meta;
type Story = StoryObj<typeof UListItem>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { UListItem },
    setup() {
      return { args };
    },
    template: '<UListItem :title="args.title" :description="args.description"/>',
  }),
  args: {
    title: 'Miguel',
    description: 'This is description',
  },
};