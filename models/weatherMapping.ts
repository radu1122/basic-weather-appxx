export const weatherMapping = new Map([
  [["Clear", "Sunny"], "CLEAR_DAY"],
  [["Partly cloudy"], "PARTLY_CLOUDY_DAY"],
  [["Cloudy", "Overcast"], "CLOUDY"],
  [
    [
      "Patchy rain possible",
      "Thundery outbreaks possible",
      "Patchy freezing drizzle possible",
      "Patchy light drizzle",
      "Light drizzle",
      "Freezing drizzle",
      "Heavy freezing drizzle",
      "Patchy light rain",
      "Light rain",
      "Moderate rain at times",
      "Moderate rain",
      "Heavy rain at times",
      "Heavy rain",
      "Light freezing rain",
      "Moderate or heavy freezing rain",
      "Light rain shower",
      "Moderate or heavy rain shower",
      "Torrential rain shower",
      "Patchy light rain with thunder",
      "Moderate or heavy rain with thunder",
    ],
    "RAIN",
  ],
  [
    [
      "Patchy sleet possible",
      "Light sleet",
      "Moderate or heavy sleet",
      "Light sleet showers",
      "Moderate or heavy sleet showers",
    ],
    "SLEET",
  ],
  [
    [
      "Blowing snow",
      "Blizzard",
      "Patchy light snow",
      "Light snow",
      "Patchy moderate snow",
      "Moderate snow",
      "Patchy heavy snow",
      "Heavy snow",
      "Ice pellets",
      "Light snow showers",
      "Moderate or heavy snow showers",
      "Patchy light snow with thunder",
      "Moderate or heavy snow with thunder",
    ],
    "SNOW",
  ],
  [["Mist", "Fog", "Freezing fog"], "FOG"],
]);