const data = {
  R: [
    {
      indicator: '1',
      description:
        '<b>Starksäurezeiger</b>, niemals auf schwach sauren bis alkalischen Böden vorkommend.'
    },
    {
      indicator: '2',
      description:
        'Zwischen 1 (<b>Starksäurezeiger</b>) und 3 (<b>Säurezeiger</b>) stehend.'
    },
    {
      indicator: '3',
      description:
        '<b>Säurezeiger</b>, Schwerpunkt auf sauren Böden, ausnahmsweise bis in den neutralen Bereich.'
    },
    {
      indicator: '4',
      description:
        'Zwischen 3 (<b>Säurezeiger</b>) und 5 (<b>Mässigsäurezeiger</b>) stehend.'
    },
    {
      indicator: '5',
      description:
        '<b>Mässigsäurezeiger</b>, auf stark sauren wie auf neutralen bis alkalischen Böden selten.'
    },
    {
      indicator: '6',
      description:
        'Zwischen 5 (<b>Mässigsäurezeiger</b>) und 7 (<b>Schwachsäure– bis Schwachbasenzeiger</b>) stehend.'
    },
    {
      indicator: '7',
      description:
        '<b>Schwachsäure- bis Schwachbasenzeiger</b>, niemals auf stark sauren Böden'
    },
    {
      indicator: '8',
      description:
        'Zwischen 7 (<b>Schwachsäure- bis Schwachbasenzeiger</b>) und 9 (<b>Basen- und Kalkzeiger</b>) stehend.'
    },
    {
      indicator: '9',
      description: '<b>Basen- und Kalkzeiger</b>, stets auf kalkreichen Böden'
    },
    {
      indicator: 'x',
      description:
        'Indifferentes Verhalten, d.h. weite Amplitude oder ungleiches Verhalten in verschiedenen Gegenden.'
    }
  ],
  L: [
    {
      indicator: '1',
      description:
        '<b>Tiefschattenpflanze</b>, noch bei weniger als 1%, selten bei mehr als 30% r.B. vorkommend.'
    },
    {
      indicator: '2',
      description:
        'Zwischen 1 (<b>Tiefschattenpflanze</b>) und 3 (<b>Schattenpflanze</b>) stehend.'
    },
    {
      indicator: '3',
      description:
        '<b>Schattenpflanze</b>, meist bei weniger als 5% r.B., doch auch an helleren Stellen.'
    },
    {
      indicator: '4',
      description:
        'Zwischen 3 (<b>Schattenpflanze</b>) und 5 (<b>Halbschattenpflanze</b>) stehend.'
    },
    {
      indicator: '5',
      description:
        '<b>Halbschattenpflanze</b>, nur ausnahmsweise im vollen Licht, meist aber bei mehr als 10% r.B.'
    },
    {
      indicator: '6',
      description:
        'Zwischen 5 (<b>Halbschattenpflanze</b>) und 7 (<b>Halblichtpflanze</b>) stehend; selten bei weniger als 20% r.B.'
    },
    {
      indicator: '7',
      description:
        '<b>Halblichtpflanze</b>, meist bei vollem Licht, aber auch im Schatten bis etwa 30% r.B.'
    },
    {
      indicator: '8',
      description:
        '<b>Lichtpflanze</b>, nur ausnahmsweise bei weniger als 40% r.B.'
    },
    {
      indicator: '9',
      description:
        '<b>Volllichtpflanze</b>, nur an voll bestrahlten Plätzen, nicht bei weniger als 50% r.B.'
    },
    {
      indicator: 'x',
      description:
        'Indifferentes Verhalten, d.h. weite Amplitude oder ungleiches Verhalten in verschiedenen Gegenden.'
    }
  ]
};

function getEllenberg(figure, value) {
  const entry = data[figure].find(x => x.indicator == value);

  return entry.description;
}
