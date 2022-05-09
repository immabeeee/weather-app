import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiSkeletonLoaderModule } from '@nx-weather-ws/ui-skeleton-loader';
import { ForecastCardComponent } from './forecast-card.component';
import * as testData from '../../data-access/test-data/test-data';
import { WeatherCardModule } from '../weather-card/weather-card.module';

export default {
    title: 'ForecastCardComponent',
    component: ForecastCardComponent,
    decorators: [
        moduleMetadata({
            imports: [UiSkeletonLoaderModule, WeatherCardModule],
        })
    ],
} as Meta<ForecastCardComponent>;

const Template: Story<ForecastCardComponent> = (args: ForecastCardComponent) => ({
    component: ForecastCardComponent,
    props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    forecasts: testData.forecasts,
    loading: false,
    error: null,
}
