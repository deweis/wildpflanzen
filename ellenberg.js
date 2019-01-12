const data = {
  L: [
    {
      indicator: '1',
      description:
        '<b>Tiefschattenpflanze</b>, noch bei weniger als 1 %, selten bei mehr als 30% r.B. vorkommend.'
    },
    {
      indicator: '2',
      description:
        'zwischen 1 (Tiefschattenpflanze) und 3 (Schattenpflanze) stehend'
    },
    {
      indicator: '3',
      description:
        '<b>Schattenpflanze</b>, meist bei weniger als 5% r.B., doch auch an helleren Stellen'
    },
    {
      indicator: '4',
      description:
        'zwischen 3 (Schattenpflanze) und 5 (Halbschattenpflanze) stehend'
    },
    {
      indicator: '5',
      description:
        '<b>Halbschattenpflanze</b>, nur ausnahmsweise im vollen Licht, meist aber bei mehr als 10% r.B.'
    },
    {
      indicator: '6',
      description:
        'zwischen 5 (Halbschattenpflanze) und 7 (Halblichtpflanze) stehend; selten bei weniger als 20% r.B.'
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
    }
  ]
};

function getEllenberg(figure, value) {
  return data[figure][value - 1].description;
}
