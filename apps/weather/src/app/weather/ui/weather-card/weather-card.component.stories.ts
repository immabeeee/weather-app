import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { WeatherCardComponent } from './weather-card.component';
import * as testData from './../../data-access/test-data/test-data';
import { UiSkeletonLoaderModule } from '@nx-weather-ws/ui-skeleton-loader';

export default {
  title: 'WeatherCardComponent',
  component: WeatherCardComponent,
  decorators: [
    moduleMetadata({
      imports: [UiSkeletonLoaderModule],
    })
  ],
} as Meta<WeatherCardComponent>;

const Template: Story<WeatherCardComponent> = (args: WeatherCardComponent) => ({
  component: WeatherCardComponent,
  props: args,
});


export const WithWeatherDetails = Template.bind({});
WithWeatherDetails.args = {
  details: testData.simpleWeatherDetails,
  loading: false,
  error: null,
}

export const WithLoadingTemplate = Template.bind({});
WithLoadingTemplate.args = {
  details: null,
  loading: true,
  error: null,
}

export const WithErrorTemplate = Template.bind({});
WithErrorTemplate.args = {
  details: null,
  loading: false,
  error: 'An error occurred while retrieving the requested data 😥',
}