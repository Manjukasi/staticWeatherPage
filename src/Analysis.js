import CardComponent from './CardComponent'
import DataComponent from './DataComponent'
import React from 'react'

export const weatherReport = [
  {
    id: 1,
    weather: 'Humidity',
    icon: 'water_drop',
    cardClass: 'humidity',
    value: '82% Bad',
    width: '60',
    count: '3',
    weatherState: [
      {
        label: ['good'],
        values: 100
      },
      {
        label: ['normal'],
        values: 100
      },
      {
        label: ['bad'],
        values: 30
      }]
  },
  {
    id: 2,
    weather: 'Wind',
    icon: 'air',
    cardClass: 'wind',
    value: '8 km/h',
    width: '40',
    count: '5',
    weatherState: [
      {
        label: ['0'],
        values: 100
      },
      {
        label: ['5'],
        values: 100
      },
      {
        label: ['10'],
        values: 0
      },
      {
        label: ['20'],
        values: 0
      },
      {
        label: ['30'],
        values: 0
      },
      {
        label: ['40'],
        values: 0
      }
    ]
  },
  {
    id: 3,
    weather: 'Precipitation',
    icon: 'thunderstorm',
    cardClass: 'precipitation',
    value: '1.4 cm',
    width: '23',
    count: '10',
    weatherState: [
      {
        label: ['0'],
        values: 100
      },
      {
        label: ['10'],
        values: 90
      },
      {
        label: ['20'],
        values: 0
      },
      {
        label: ['30'],
        values: 0
      },
      {
        label: ['40'],
        values: 0
      },
      {
        label: ['50'],
        values: 0
      },
      {
        label: ['60'],
        values: 0
      },
      {
        label: ['70'],
        values: 0
      },
      {
        label: ['80'],
        values: 0
      },
      {
        label: ['90'],
        values: 0
      }
    ]

  },
  {
    id: 4,
    weather: 'UV dialog',
    icon: 'light_mode',
    cardClass: 'uv',
    value: '4 medium',
    width: '50',
    count: '5',
    weatherState: [
      {
        label: ['0-2'],
        values: 100
      },
      {
        label: ['3-5'],
        values: 50
      },
      {
        label: ['6-7'],
        values: 0
      },
      {
        label: ['8-10'],
        values: 0
      },
      {
        label: ['11+'],
        values: 0
      }
    ]
  },
  {
    id: 5,
    weather: 'Feels like',
    icon: 'device_thermostat',
    cardClass: 'feel',
    value: '30°',
    width: '250',
    count: '1',
    weatherState: [
      {
        label: ['0°', '25°', '50°'],
        values: 75
      }
    ]
  },
  {
    id: 6,
    weather: 'Chance of rain',
    icon: 'thunderstorm',
    cardClass: 'rain',
    value: '42%',
    width: '250',
    count: '1',
    weatherState: [
      {
        label: ['0%', '25%', '50%', '75%', '100%'],
        values: 75
      }
    ]
  }
]

const Analysis = () => {
  return (
        <div>
          <h3 className='details'>More detail`s of todays weather</h3>
          <div className='analysis outline'>
            {weatherReport.map((weatherObj, index) => {
              const { id, weather, icon, cardClass, value, width, count, weatherState } = weatherObj
              return (
                 <CardComponent key={id} id={id} data={<DataComponent width={width} count={count} weatherState={weatherState}/>} weatherState={weatherState} weather={weather} icon={icon} cardClass={cardClass} value ={value}/>
              )
            })
        }
          </div>
        </div>
  )
}
export default Analysis
