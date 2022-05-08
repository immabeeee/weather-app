import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiSkeletonLoaderModule } from '@nx-weather-ws/ui-skeleton-loader';
import { DailyForecastForSevenDaysCardComponent } from './daily-forecast-for-seven-days-card.component';
import * as testData from './../../data-access/test-data/test-data';
import { WeatherCardModule } from '../weather-card/weather-card.module';

export default {
    title: 'DailyForecastForSevenDaysCardComponent',
    component: DailyForecastForSevenDaysCardComponent,
    decorators: [
        moduleMetadata({
            imports: [UiSkeletonLoaderModule, WeatherCardModule],
        })
    ],
} as Meta<DailyForecastForSevenDaysCardComponent>;

const Template: Story<DailyForecastForSevenDaysCardComponent> = (args: DailyForecastForSevenDaysCardComponent) => ({
    component: DailyForecastForSevenDaysCardComponent,
    props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    forecasts: testData.forecasts,
    loading: false,
    error: null,
}
