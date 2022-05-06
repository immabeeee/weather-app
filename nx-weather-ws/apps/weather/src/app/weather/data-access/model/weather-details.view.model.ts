export interface WeatherDetailsView {
    details: WeatherDetails | null;
    isLoading: boolean;
    error: string | null;
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

export interface Cord {
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
    pressure: number;
    humidity: number;
}

export interface Wind {
    speed: number;
    deg: number;
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
    cord: Cord;
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