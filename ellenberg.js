const data = {
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
      indicator: '(4)',
      description:
        'Zwischen 3 (<b>Schattenpflanze</b>) und 5 (<b>Halbschattenpflanze</b>) stehend. Bezieht sich auf den Baumjungwuchs im Wald.'
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
  ],
  F: [
    {
      indicator: '1',
      description:
        '<b>Starktrockniszeiger</b>, an oftmals austrocknenden Stellen lebensfähig und auf trockene Böden beschränkt.'
    },
    {
      indicator: '2',
      description:
        'Zwischen 1 (<b>Starktrockniszeiger</b>) und 3 (<b>auf feuchten Böden fehlend</b>) stehend.'
    },
    {
      indicator: '3',
      description: '<b>Auf feuchten Böden fehlend</b>.'
    },
    {
      indicator: '4',
      description:
        'Zwischen 3 (<b>auf feuchten Böden fehlend</b>) und 5 (<b>Frischezeiger</b>) stehend.'
    },
    {
      indicator: '5',
      description:
        '<b>Frischezeiger</b>, Schwerpunkt auf mittelfeuchten Böden, auf nassen sowie auf öfter austrocknenden Böden fehlend.'
    },
    {
      indicator: '6',
      description:
        'Zwischen 5 (<b>Frischezeiger</b>) und 7 (<b>Feuchtezeiger</b>) stehend.'
    },
    {
      indicator: '7',
      description:
        '<b>Feuchtezeiger</b>, Schwerpunkt auf gut durchfeuchteten, aber nicht nassen Böden.'
    },
    {
      indicator: '8',
      description:
        'Zwischen 7 (<b>Feuchtezeiger</b>) und 9 (<b>Nässezeiger</b>) stehend.'
    },
    {
      indicator: '9',
      description:
        '<b>Nässezeiger</b>, Schwerpunkt auf oft durchnässten (luftarmen) Böden.'
    },
    {
      indicator: '10',
      description:
        '<b>Wasserpflanze</b>, die längere Zeiten auch ohne Wasserbedeckung des Bodens überlebt.'
    },
    {
      indicator: '11',
      description:
        '<b>Wasserpflanze</b>, die unter Wasser wurzelt, aber zumindest zeitweilig mit Blättern über dessen Oberfläche aufragt, oder Schwimmpflanze, die an der Wasseroberfläche flottiert.'
    },
    {
      indicator: '12',
      description:
        '<b>Unterwasserpflanze</b>, ständig oder fast dauernd untergetaucht.'
    },
    {
      indicator: '~',
      description:
        '<b>Zeiger für starken Wechsel</b>, (z. B. 3~: Wechseltrockenheit, 7~: Wechselfeuchte oder 9~: Wechselnässe zeigend).'
    },
    {
      indicator: '=',
      description:
        '<b>Überschwemmungszeiger</b>, auf mehr oder minder regelmäßig überschwemmten Böden.'
    },
    {
      indicator: 'x',
      description:
        'Indifferentes Verhalten, d.h. weite Amplitude oder ungleiches Verhalten in verschiedenen Gegenden.'
    }
  ],
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
  N: [
    {
      indicator: '1',
      description: '<b>Stickstoffärmste</b> Standorte anzeigend.'
    },
    {
      indicator: '2',
      description:
        'Zwischen 1 (<b>stickstoffärmste</b>) und 3 (<b>stickstoffarme</b>) stehend.'
    },
    {
      indicator: '3',
      description:
        'An <b>stickstoffarmen</b> Standorten häufiger als an mittelmäßigen und nur ausnahmsweise an reicheren.'
    },
    {
      indicator: '4',
      description:
        'Zwischen 3 (<b>stickstoffarme</b>) und 5 (<b>mässig stickstoffreiche</b>) stehend.'
    },
    {
      indicator: '5',
      description:
        '<b>Mässig stickstoffreiche</b> Standorte anzeigend, an armen und reichen seltener.'
    },
    {
      indicator: '6',
      description:
        'Zwischen 5 (<b>Mässig stickstoffreich</b>) und 7 (<b>stickstoffreich</b>) stehend.'
    },
    {
      indicator: '7',
      description:
        'An <b>stickstoffreichen</b> Standorten häufiger als an mittelmäßigen und nur ausnahmsweise an ärmeren.'
    },
    {
      indicator: '8',
      description: 'Ausgesprochener <b>Stickstoffzeiger</b>.'
    },
    {
      indicator: '9',
      description:
        'An <b>übermässig stickstoffreichen</b> Standorten konzentriert (Viehlägerpflanze, Verschmutzungszeiger).'
    },
    {
      indicator: 'x',
      description:
        'Indifferentes Verhalten, d.h. weite Amplitude oder ungleiches Verhalten in verschiedenen Gegenden.'
    }
  ],
  LF: [
    {
      indicator: 'A',
      description:
        '<b>Hydrophyt</b>, aquatisch lebende Pflanze, deren Überwinterungsknospen normalerweise unter Wasser liegen.'
    },
    {
      indicator: 'C',
      description:
        '<b>Krautiger Chamaephyt</b>, Knospen wie bei Z (<b>Holziger Chamaephyt</b> - Zwergstrauch) meist über der Erde und im Schneeschutz überwinternd.'
    },
    {
      indicator: 'G',
      description:
        '<b>Geophyt</b>, Überwinterungsknospen unter der Erdoberfläche, meist mit Speicherorganen.'
    },
    {
      indicator: 'H',
      description:
        '<b>Hemikryptophyt</b>, Überwinterungsknospen nahe der Erdoberfläche.'
    },
    {
      indicator: 'N',
      description:
        '<b>Nanophanerophyt</b>, Strauch oder Kleinbaum, meist 0.5 bis 5m hoch werdend.'
    },
    {
      indicator: 'P',
      description:
        '<b>Phanerophyt</b>, Baum, der mehr als 5 m hoch werden kann.'
    },
    {
      indicator: 'T',
      description:
        '<b>Therophyt</b>, kurzlebig und ungünstige Zeiten als Samen überdauernd.'
    },
    {
      indicator: 'Z',
      description:
        '<b>Holziger Chamaephyt</b>, Zwergstrauch, nur selten über 0.5 m hoch werdend.'
    },
    {
      indicator: 'li',
      description:
        '<b>Liane oder Spreizklimmer</b>, sich auf andere Pflanzen stützend, aber im Boden wurzelnd.'
    },
    {
      indicator: 'ep',
      description:
        '<b>Epiphyt</b>, auf den oberirdischen Organen lebender Pflanzen wachsend (aber in der Regel nicht parasitierend).'
    },
    {
      indicator: 'hp',
      description:
        '<b>Halbparasit</b>, auf lebenden Pflanzen schmarotzend, aber mit grünen Blättern.'
    },
    {
      indicator: 'vp',
      description:
        '<b>Vollparasit</b>, wie hp (<b>Halbparasit</b>), d.h. auf lebenden Pflanzen schmarotzend, aber ohne Blattgrün'
    }
  ],
  LF_B: [
    {
      indicator: 'I',
      description:
        '<b>Immergrün</b>, zu allen Jahreszeiten mit Blättern, die oft länger als 1 Jahr leben.'
    },
    {
      indicator: 'W',
      description:
        '<b>Überwinternd grün</b>, oft mit grünen Blättern überwinternd, die aber meist im Frühjahr ersetzt werden.'
    },
    {
      indicator: 'S',
      description:
        '<b>Sommergrün</b>, nur in der wärmeren Jahreszeit mit grünen Blättern.'
    },
    {
      indicator: 'V',
      description:
        '<b>Vorsommergrün</b>, vom Vorfrühling bis zum Frühsommer grün, dann aber meist einziehend.'
    }
  ]
};

// LF indicator change to arrays in plants and accordingly in script as several are possible (I.e. Gundermann)
function getEllenberg(figure, value) {
  const entry = data[figure].find(x => x.indicator == value);

  return entry.description;
}
