import { SimpleWeatherDetails, WeatherDetails, WeatherMain } from "../model/weather-details.view.model";

export const simpleWeatherDetails: SimpleWeatherDetails = {
    timestamp: 1652005824,
    temp_min: 8.4,
    temp_max: 22.8,
    temp: 17.4,
    weather: [
        {
            id: 804,
            main: "Clouds" as WeatherMain,
            description: "overcast clouds",
            icon: "04d"
        }
    ],
};

export const forecasts: SimpleWeatherDetails[] = [
    {
        timestamp: 1652005824,
        temp_min: 2.4,
        temp_max: 33.8,
        temp: 2.4,
        weather: [
            {
                id: 1,
                main: WeatherMain.RAIN,
                description: '',
                icon: ''
            }
        ],
    },
    {
        timestamp: 1652006824,
        temp_min: 5.5,
        temp_max: 12.5,
        temp: 10.5,
        weather: [
            {
                id: 2,
                main: WeatherMain.SNOW,
                description: '',
                icon: ''
            }
        ],
    },
    {
        timestamp: 1652001824,
        temp_min: 5.5,
        temp_max: 12.5,
        temp: 10.5,
        weather: [
            {
                id: 2,
                main: WeatherMain.SNOW,
                description: '',
                icon: ''
            }
        ],
    },
]

export const weatherDetails: WeatherDetails = {
    coord: {
        lon: 19.2233,
        lat: 49.8821
    },
    weather: [
        {
            id: 804,
            main: "Clouds" as WeatherMain,
            description: "overcast clouds",
            icon: "04d"
        }
    ],
    base: "stations",
    main: {
        temp: 17.34,
        feels_like: 16.8,
        temp_min: 13.59,
        temp_max: 21.02,
        pressure: 1022,
        humidity: 64,
        sea_level: 1022,
        grnd_level: 990
    },
    visibility: 10000,
    wind: {
        speed: 2.51,
        deg: 71,
        gust: 3.19
    },
    clouds: {
        all: 86
    },
    dt: 1652005824,
    sys: {
        type: 2,
        id: 2038557,
        country: "PL",
        sunrise: 1651979301,
        sunset: 1652033452
    },
    timezone: 7200,
    id: 3096328,
    name: "K??ty",
    cod: 200
};


export const availableCities: string[] = [
    'Kaczory',
    'Kalety',
    'Kalisz',
    'Kalisz Pomorski',
    'Kalwaria Zebrzydowska',
    'Ka??uszyn',
    'Kamieniec Z??bkowicki',
    'Kamienna G??ra',
    'Kamie?? Kraje??ski',
    'Kamie?? Pomorski',
    'Kamie??sk',
    'Kamionka',
    'Ka??czuga',
    'Karczew',
    'Kargowa',
    'Karlino',
    'Karpacz',
    'Kartuzy',
    'Katowice',
    'Kazimierz Dolny',
    'Kazimierza Wielka',
    'K??ty Wroc??awskie',
    'Kcynia',
    'K??dzierzyn-Ko??le',
    'K??pice',
    'K??pno',
    'K??trzyn',
    'K??ty',
    'Kielce',
    'Kietrz',
    'Kisielice',
    'Kleczew',
    'Kleszczele',
    'Klimont??w',
    'Kluczbork',
    'K??ecko',
    'K??obuck',
    'K??odawa',
    'K??odzko',
    'Knur??w',
    'Knyszyn',
    'Kobylin',
    'Koby??ka',
    'Kock',
    'Kolbuszowa',
    'Kolno',
    'Kolonowskie',
    'Koluszki',
    'Ko??aczyce',
    'Ko??o',
    'Ko??obrzeg',
    'Koniecpol',
    'Konin',
    'Konstancin-Jeziorna',
    'Konstantyn??w ????dzki',
    'Ko??skie',
    'Koprzywnica',
    'Korfant??w',
    'Koronowo',
    'Korsze',
    'Kos??w Lacki',
    'Kostrzyn',
    'Kostrzyn nad Odr??',
    'Koszalin',
    'Koszyce',
    'Ko??cian',
    'Ko??cierzyna',
    'Kowal',
    'Kowalewo Pomorskie',
    'Kowary',
    'Kozieg??owy',
    'Kozienice',
    'Ko??min Wielkopolski',
    'Ko??minek',
    'Ko??uch??w',
    'K??rnik',
    'Krajenka',
    'Krak??w',
    'Krapkowice',
    'Krasnobr??d',
    'Krasnystaw',
    'Kra??nik',
    'Krobia',
    'Krosno',
    'Krosno Odrza??skie',
    'Kro??niewice',
    'Krotoszyn',
    'Kruszwica',
    'Krynica Morska',
    'Krynica-Zdr??j',
    'Krynki',
    'Krzanowice',
    'Krzepice',
    'Krzeszowice',
    'Krzywi??',
    'Krzy?? Wielkopolski',
    'Ksi???? Wielkopolski',
    'Kudowa-Zdr??j',
    'Kun??w',
    'Kutno',
    'Ku??nia Raciborska',
    'Kwidzyn',
];

export const selectedCity: string = availableCities[10];