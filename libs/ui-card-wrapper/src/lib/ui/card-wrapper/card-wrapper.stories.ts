import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CardWrapperComponent } from './card-wrapper.component';

export default {
    title: 'CardWrapperComponent',
    component: CardWrapperComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        })
    ],
} as Meta<CardWrapperComponent>;

const Template: Story<CardWrapperComponent> = (args: CardWrapperComponent) => ({
    component: CardWrapperComponent,
    props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}