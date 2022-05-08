import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiButtonComponent } from './ui-button.component';

export default {
  title: 'UiButtonComponent',
  component: UiButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<UiButtonComponent>;

const Template: Story<UiButtonComponent> = (args: UiButtonComponent) => ({
  component: UiButtonComponent,
  props: args,
});


export const withIconAndLabel = Template.bind({});
withIconAndLabel.args = {
  iconName: 'gg-pin',
  label: 'test',
  name: 'test'
}

export const withIconOnly = Template.bind({});
withIconOnly.args = {
  iconName: 'gg-pin',
  name: 'test'
}

export const withLabelOnly = Template.bind({});
withLabelOnly.args = {
  label: 'test',
  name: 'test'
}