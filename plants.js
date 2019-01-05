const plants = [
  {
    id: 'violaTricolor',
    name: 'Wildes Stiefmütterchen',
    latin: 'Viola Tricolor',
    'family-name': 'Veilchengewächse',
    'family-latin': 'Violaceae',
    images: [
      'viola-tricolor-franz-xaver-wikipedia.jpg',
      'Viola_tricolor_styvmorsviol.jpg'
    ],
    description:
      'Das Wilde Stiefmütterchen, im Volksmund auch Ackerveilchen, Muttergottesschuh, Mädchenaugen, Schöngesicht oder Liebesgesichtli genannt, ist eine einjährige bis mehrjährige krautige Pflanze, die Wuchshöhen von 10 bis 40 Zentimetern erreicht.',
    'months-edible': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    taste: 'Milder Grundgeschmack, salatartig und etwas aromatisch frisch.',
    'months-flowers': [4, 5, 6, 7, 8, 9],
    flowers:
      'Am aromareichsten unmittelbar nach dem Erblühen. Kandieren, Gelee, roh als Dekoration, in Teig für Süssgebäck oder Aromageber für Essig und Tee.',
    'months-leaves': [3, 4, 5, 6],
    leaves:
      'Die jungen Blätter und Triebe roh in Salaten oder gegart als eindickende Zutat für Gemüsegerichte, Füllungen und Kräutersaucen. Ausgepresst als Frischsaftgetränk resp. als Zusatz in Spirituosen, Essig und Teemischungen.',
    'months-fruits': [],
    fruits: '',
    'months-roots': [1, 2, 3, 9, 10, 11, 12],
    roots: 'Geröstet als eine Art Kaffee verwendbar.',
    medical:
      'Das getrocknete Kraut mit Blüten wird äusserlich und innerlich bei Hauterkrankungen, zur Blutreinigung und Stoffwechselanregung verwendet. Empfohlen bei fiebrigen Erkältungen, Keuchhusten und Halsentzündungen. Zur Teebereitung 2 Teelöffel des Krautes pro Tasse.',
    indicator:
      'Auf leicht sauren Sand- oder Lehmböden am Wegesrand oder auf Böschungen'
  },
  {
    id: 'corylusAvellanaL',
    name: 'Gewöhnliche Hasel',
    latin: 'Corylus Avellana L.',
    'family-name': 'Birkengewächse',
    'family-latin': 'Betulaceae',
    images: ['Corylus_avellana-MPF-wikipedia.jpg', 'Corylus_avellana0.jpg'],
    description:
      'Auch Haselstrauch oder Haselnussstrauch genannt, ein meist rund fünf Meter hoch werdender sommergrüner vierstämmiger Strauch. Die Haselnuss spielte in der Steinzeit als Nahrungsmittel eine wichtige Rolle. Sie ist sehr nährstoffreich und lässt sich gut lagern.',
    'months-edible': [2, 3, 4, 9],
    taste:
      'Der Grundgeschmack der Blätter und Blüten ist stumpf-erdig, der der Früchtte natürlich nussig.',
    'months-flowers': [2, 3, 4],
    flowers:
      'Die männlichen Blütenkätzchen, die zuweilen schon im Winter blühen, nutzt man mit ihrem proteinreichen leuchtend gelben Blütenstaub getrocknet und gemahlen zum Strecken von Getreidemehl oder auch zum Einkochen mit scharf würzigem Gemüse als Chutney.',
    'months-leaves': [3, 4],
    leaves:
      'Aus den ganz jungen, gerade aus den Knospen speissenden, zarten Blättern mit andern Wildpflanzen gemischt ein Spinatgemüse. Getrocknete Blätter nutzte man von April bis August zum Strecken von Rauchtabak.',
    'months-fruits': [9],
    fruits:
      'Im September bietet die Pflanze ihre Nüsse an. Am besten isst man sie geschält roh oder röstet sie und gibt sie in Salate und Gebäck. Man kann auch aus der Nuss ein hochwertiges Speiseöl pressen oder sie in Spirituosen einlegen.',
    'months-roots': [],
    roots: '',
    medical:
      'Die Blätter bei Leber und Gallenerkrankungen. Äusserlich in Form von Waschungen oder Umschlägen bei Venenerkrankungen, wie Krampfadern und Blutungen. Die im Frühjahr gesammelten Kätzchen haben als Tee zubereitet schweisstreibende Wirkung. Die Nüsse sind gut für Gehirn und Nerven und können bei Gleichgewichtsstörungen Linderung bringen. Ferner sollen sie gut für das Immunsystem sein. Das Öl eignet sich auch gut für die Hautpflege. Ein Brei aus geriebenen Nüssen, äusserlich angewendet, hilft bei entzündeten Augen und eiternden Wunden.',
    indicator:
      'Sie wächst in lichten Wäldern, an Waldrändern und Feldhecken. Sie ist eine Lichtpflanze, verträgt aber auch mäßigen Schatten. Bezüglich Feuchte, Bodenreaktion und Stickstoffbedarf ist sie nach der Klassifizierung nach Ellenberg indifferent. Ihr Optimum erreicht sie auf feuchten, gut durchlüfteten, warmen Böden, die einen hohen Humusgehalt und neutrale bis alkalische Reaktion haben. Auf nährstoffarmen Sanden sowie auf sauren, vernässten Standorten gedeiht sie nicht.',
    ellenberg: {
      L: 6,
      T: 5,
      K: 3,
      F: 'x',
      R: 'x',
      N: 5,
      S: 0,
      LF: 'N',
      LF_B: 'S'
    }
  },
  {
    id: 'bellisPerennisL',
    name: 'Gänseblümchen',
    latin: 'Bellis Perennis L.',
    'family-name': 'Korbblütengewächse',
    'family-latin': 'Asteraceae',
    images: [
      'Daisies-Focus-alexmenk-wikipedia.jpg',
      'Bellis_perennis_Sturm9.jpg'
    ],
    description:
      'Das Gänseblümchen, auch Ausdauerndes Gänseblümchen, Mehrjähriges Gänseblümchen, Maßliebchen, Tausendschön, Monatsröserl oder schweizerisch Margritli genannt, ist eine ausdauernde, krautige Pflanze, die Wuchshöhen von meist 4 bis 15 Zentimetern erreicht. Da es auf fast jeder Wiesenfläche wächst, zählt es zu den bekanntesten Pflanzenarten Mitteleuropas.',
    'months-edible': [3, 4, 5, 6, 8, 9],
    taste:
      'Die Knospen sowie die nur halb geöffneten Blüten schmecken angenehm nussartig, die geöffneten Blüten dagegen leicht bitter, wodurch sie sich vorrangig als Salatbeigabe eignen. Der Grundgeschmack der Pflanze erinnert etwas an Feldsalat. Wichtiger Bestandteil von Wildsalaten und Frühjahrssuppen. Man kann die jungen Blätter, Knospen und Blüten aber auch gut unter Gemüse- und Spinatgerichte sowie unter Kräuterquark und Kräuterkäse mischen. Aus der Pflanze kann man auch Tee herstellen und Frischsaft gewinnen.',
    'months-flowers': [3, 4, 5, 6],
    flowers:
      'Die noch nicht start behaarten Blütenknospen eignen sich als Salatzutat. Weiter entwickelte Blütenknospen schmecken im Salat oft zu intensiv; sie können gut als falsche Kapern eingelegt werden',
    'months-leaves': [3, 4, 5],
    leaves: 'Salate, Suppen, Gemüse- und Spinatgerichte. Quark.',
    'months-fruits': [8, 9],
    fruits:
      'Roh oder geröstet kann man die Samen in Salate geben. Im Winter ergeben sie als Keimsaat auf der Fensterbank eine frische Vitaminquelle.',
    'months-roots': [],
    roots: '',
    medical:
      'Bei Katarrh, Hauterkrankungen und Leberleiden, zur Anregung des Stoffwechsels, der Blutbildung und der ableitenden Harnwege. Äusserlich gegen Akne und zur Wundbehandlung.',
    indicator:
      'Bevorzugte Standorte sind Weiden, Parkrasen und Gärten auf nährstoffreichem Untergrund, bewachsene Bahndämme; ein regelmäßiger Schnitt ist erforderlich, da die Gräser und Wildblumen sonst die niedrig wachsenden Gänseblümchen überwuchern. Da Bellis perennis eine Speicherpflanze ist, überlebt sie den Winter im Schnee. Auf landwirtschaftlich genutzten Wiesen ist sie auch Zeiger für verdichtete Böden und übernutzte Wiesen und Weiden.',
    ellenberg: {
      L: 8,
      T: 'x',
      K: 2,
      F: 5,
      R: 'x',
      N: 6,
      S: 0,
      LF: 'H',
      LF_B: 'W'
    }
  }
];

/*
{
    id: '',
    name: '',
    latin: '',
    'family-name': '',
    'family-latin': '',
    images: [''],
    description: '', // from wikipedia
    'months-edible': [], // from table in book appendix
    taste: '',
    'months-flowers': [], // from table in book appendix
    flowers: '',
    'months-leaves': [], // from table in book appendix
    leaves: '',
    'months-fruits': [], // from table in book appendix
    fruits: '',
    'months-roots': [], // from table in book appendix
    roots: '',
    medical: '',
    indicator: '',
    ellenberg: {
      'L': 'x',
      'T': 'x',
      'K': 'x',
      'F': 'x',
      'R': 'x',
      'N': 'x',
      'S': 'x',
      'LF': 'x',
      'LF_B': 'x'
    }
  }
*/