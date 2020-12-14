export const users = [
  {
    balance: '$3,946.45',
    picture: 'http://placehold.it/32x32',
    age: 23,
    name: 'Bird Ramsey',
    gender: 'male',
    company: 'NIMON',
    email: 'birdramsey@nimon.com',
  },
  {
    balance: '$2,499.49',
    picture: 'http://placehold.it/32x32',
    age: 31,
    name: 'Lillian Burgess',
    gender: 'female',
    company: 'LUXURIA',
    email: 'lillianburgess@luxuria.com',
  },
  {
    balance: '$2,820.18',
    picture: 'http://placehold.it/32x32',
    age: 34,
    name: 'Kristie Cole',
    gender: 'female',
    company: 'QUADEEBO',
    email: 'kristiecole@quadeebo.com',
  },
  {
    balance: '$3,277.32',
    picture: 'http://placehold.it/32x32',
    age: 30,
    name: 'Leonor Cross',
    gender: 'female',
    company: 'GRONK',
    email: 'leonorcross@gronk.com',
  },
  {
    balance: '$1,972.47',
    picture: 'http://placehold.it/32x32',
    age: 28,
    name: 'Marsh Mccall',
    gender: 'male',
    company: 'ULTRIMAX',
    email: 'marshmccall@ultrimax.com',
  },
];

export const gorestToken =
  '6cabfd3fc1aa17546fbfac4e0796907906638b74fe780efebf1eb803baa1e31c';

export function log(type, msg, ...args) {
  switch (type) {
    case 'info':
      console.log(
        `%c${msg}`,
        'color: #00529B; background-color: #BDE5F8;',
        ...args
      );
      break;
    case 'success':
      console.log(
        `%c${msg}`,
        'color: #4F8A10; background-color: #DFF2BF;',
        ...args
      );
      break;
    case 'warning':
      console.log(
        `%c${msg}`,
        'color: #9F6000; background-color: #FEEFB3;',
        ...args
      );
      break;
    case 'error':
      console.log(
        `%c${msg}`,
        'color: #D8000C; background-color: #FFD2D2;',
        ...args
      );
      break;
    default:
      console.log(
        `%c${msg}`,
        'background: LightGoldenRodYellow; color: darkslategray;',
        ...args
      );
      break;
  }
}

export const themes = {
  light: {
    global: {
      colors: {
        brand: '#8bcaca',
        'accent-1': '#fea889',
        'accent-2': '#d4f4ec',
        'accent-3': '#ffd8c5',
      },
    },
  },
  dark: {
    global: {
      colors: {
        brand: '#121212',
        'accent-1': '#3700b3',
        'accent-2': '#03dac5',
        'accent-3': '#cf6679',
      },
    },
  },
  awsmcolor: {
    global: {
      colors: {
        brand: '#25424c',
        'accent-1': '#fb770d',
        'accent-2': '#ffa45b',
        'accent-3': '#ffebdb',
      },
    },
  },
  monokai: {
    global: {
      colors: {
        brand: '#272822',
        'accent-1': '#f92672',
        'accent-2': '#66d9ef',
        'accent-3': '#fd971f',
      },
    },
  },
  firefly: {
    global: {
      colors: {
        brand: '#272822',
        'accent-1': '#f92672',
        'accent-2': '#66d9ef',
        'accent-3': '#fd971f',
      },
    },
  },
  'warn-and-bold': {
    global: {
      colors: {
        brand: '#000000',
        'accent-1': '#062f4f',
        'accent-2': '#882601',
        'accent-3': '#813772',
      },
    },
  },
  elegant: {
    global: {
      colors: {
        brand: '#0b3c5d',
        'accent-1': '#328cc1',
        'accent-2': '#d9b310',
        'accent-3': '#1d2731',
      },
    },
  },
  vibrant: {
    global: {
      colors: {
        brand: '#000000',
        'accent-1': '#ec576b',
        'accent-2': '#4ec5c1',
        'accent-3': '#e5e338',
      },
    },
  },
  natural: {
    global: {
      colors: {
        brand: '#8d8741',
        'accent-1': '#659dbd',
        'accent-2': '#daad86',
        'accent-3': '#fbeec1',
      },
    },
  },
  'cool-and-fresh': {
    global: {
      colors: {
        brand: '#05386b',
        'accent-1': '#379683',
        'accent-2': '#5cdb95',
        'accent-3': '#edf5e1',
      },
    },
  },
  audacious: {
    global: {
      colors: {
        brand: '#fc4445',
        'accent-1': '#3feee6',
        'accent-2': '#55bcc9',
        'accent-3': '#cafafe',
      },
    },
  },
  contemporary: {
    global: {
      colors: {
        brand: '#1a1a1d',
        'accent-1': '#950740',
        'accent-2': '#c3073f',
        'accent-3': '#6f2232',
      },
    },
  },
};
