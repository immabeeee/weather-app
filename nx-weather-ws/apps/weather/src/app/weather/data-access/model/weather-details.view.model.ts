export interface WeatherDetailsView {
    details: WeatherDetails | null;
    isLoading: boolean;
    error: string | null;
}

export interface SimpleWeatherDetailsView {
    details: SimpleWeatherDetails | null;
    isLoading: boolean;
    error: string | null;
}

export interface SimpleWeatherDetails {
    timestamp: number;
    temp_min: number | null;
    temp_max: number | null;
    temp: number | null;
    weather: Weather[];
}

export enum WeatherMain {
    THUNDERSTORM = 'Thunderstorm',
    DRIZZLE = 'Drizzle',
    RAIN = 'Rain',
    SNOW = 'Snow',
    MIST = 'Mist',
    SMOKE = 'Smoke',
    HAZE = 'Haze',
    DUST = 'Dust',
    FOG = 'Fog',
    SAND = 'Sand',
    ASH = 'Ash',
    SQUALL = 'Squall',
    TORNADO = 'Tornado',
    CLEAR = 'Clear',
    CLOUDS = 'Clouds',
}

export interface Coord {
    lon: number;
    lat: number;
}
export interface Weather {
    id: number;
    main: WeatherMain;
    description: string,
    icon: string;
}

export interface WMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    pressure: number;
    humidity: number;
    grnd_level: number;
}

export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

export interface Clouds {
    all: number;
}

export interface WeatherSys {
    type: number;
    id: number;
    country: string,
    sunrise: number;
    sunset: number;
}

export interface WeatherDetails {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: WMain;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: WeatherSys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}