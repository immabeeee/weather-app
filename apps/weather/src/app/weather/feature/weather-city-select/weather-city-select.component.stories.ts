import { UiButtonModule } from '@nx-weather-ws/ui-button';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { WeatherCitySelectComponent } from './weather-city-select.component';
import * as testData from './../../data-access/test-data/test-data';

export default {
  title: 'WeatherCitySelectComponent',
  component: WeatherCitySelectComponent,
  decorators: [
    moduleMetadata({
      imports: [UiButtonModule],
    })
  ],
} as Meta<WeatherCitySelectComponent>;

const Template: Story<WeatherCitySelectComponent> = (args: WeatherCitySelectComponent) => ({
  component: WeatherCitySelectComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  availableCities: testData.availableCities,
  selectedCity: testData.selectedCity,
}

export const WithEmptyListOfCities = Template.bind({});
WithEmptyListOfCities.args = {
  availableCities: [],
  selectedCity: null,
}

export const WithoutSelectedCity = Template.bind({});
WithoutSelectedCity.args = {
  availableCities: testData.availableCities,
  selectedCity: null,
}