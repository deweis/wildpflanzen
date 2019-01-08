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
      'Das Wilde Stiefmütterchen, im Volksmund auch Ackerveilchen, Muttergottesschuh, Mädchenaugen, Schöngesicht oder Liebesgesichtli genannt, ist eine einjährige bis mehrjährige krautige Pflanze, die Wuchshöhen von 10 bis 40 Zentimetern erreicht. Die Blütezeit reicht von April bis September.',
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
    medicinal:
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
      'Die Hasel, auch Haselstrauch oder Haselnussstrauch genannt, ein meist rund fünf Meter hoch werdender sommergrüner vierstämmiger Strauch. Die Haselnuss spielte in der Steinzeit als Nahrungsmittel eine wichtige Rolle. Sie ist sehr nährstoffreich und lässt sich gut lagern. Die Blütezeit reicht von Januar bis März.',
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
    medicinal:
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
      'Das Gänseblümchen, auch Ausdauerndes Gänseblümchen, Mehrjähriges Gänseblümchen, Maßliebchen, Tausendschön, Monatsröserl oder schweizerisch Margritli genannt, ist eine ausdauernde, krautige Pflanze, die Wuchshöhen von meist 4 bis 15 Zentimetern erreicht. Da es auf fast jeder Wiesenfläche wächst, zählt es zu den bekanntesten Pflanzenarten Mitteleuropas. Die Blütezeit reicht von Januar bis November.',
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
    medicinal:
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
  },
  {
    id: 'taraxacumOfficinale',
    name: 'Löwenzahn',
    latin: 'Taraxacum officinale',
    'family-name': 'Korbblütengewächse',
    'family-latin': 'Asteraceae',
    images: [
      'TaraxacumOfficinale_DWE.jpg',
      'Taraxacum_officinale_-_Koehler-s_Medizinal-Pflanzen-135.jpg',
      'Loewenzahn_Taraxacum_officinale_joe_MiGo_wikipedia.jpg'
    ],
    description:
      'Der Löwenzahn, auch Wiesen-Kuhblume genannt, ist eine ausdauernde mehrjährige krautige Pflanze, die eine Wuchshöhe von 10 cm bis 30 cm erreicht und in allen Teilen einen weißen Milchsaft enthält. Seine bis zu 1 Meter (selten auch bis 2 Meter) lange, fleischige Pfahlwurzel ist außen dunkelbraun bis schwarz. Die 10 bis 30 cm langen Blätter sind eiförmig bis eilanzettlich, unregelmäßig stark gelappt und tief eingeschnitten und gezahnt. In Mitteleuropa ist die Hauptblütezeit von April bis Mai. In deutlich geringerer Anzahl erscheinen Blüten auch noch bis in den Herbst. Blüte nur bei Sonne geöffnet.',
    'months-edible': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // from table in book appendix
    taste:
      'Die Pflanze schmeckt chicoréeartig. Die Blüten schmecken süss und honigartig.',
    'months-flowers': [3, 4, 5, 6, 7, 8, 9], // from table in book appendix
    flowers:
      'Längsgeschnittene Blütenstängel von Apr bis Sept als Salatzutat und Gemüse, nachdem man sie zuvor wie die Blätter in Salz oder Wasser hat ziehen lassen. Blütenblätter von Mrz bis Sept zur Herstellung von Gelee, Sirup oder Wein, zu Gemüse oder als Tee. Aus Blütenknospen Chutney oder eingelegt in Essig als Kapern oder gebraten als Gemüse. Abgeschnittene gelbe Blütenspitzen als Deko auf Salaten und Desserts.',
    'months-leaves': [3, 4, 5, 6], // from table in book appendix
    leaves:
      'Die jungen, frischen Blätter als Salat. Fein geschnitten mit Salz oder in Wasser eine Stunden ziehen, um sie milder zu machen. Klein gehackt über Suppen und Eintöpfe streuen oder als Spinat, als Brotbelag, zu Kräuterkartoffeln, in Eierspeisen oder in Kräuterkäse.',
    'months-fruits': [], // from table in book appendix
    fruits: '',
    'months-roots': [1, 2, 3, 9, 10, 11, 12], // from table in book appendix
    roots:
      ' Geschnitten als Salat anrichten oder als Gemüse verwenden. Aus getrockneten Wurzeln durch Rösten Kaffee-Ersatz.',
    medicinal:
      'Alt und gern genutzte medizinische Pflanze. Mildes Mittel zur Steigerung der Gallensekretion. Ganze Pflanze inkl. Wurzel harntreibend und hilfreich bei Leberbeschwerden, Gicht und rheumatischen Erkrankungen. Ebenfalls Blutreinigend, für Verdauungsbeschwerden und als mildes Abführmittel. Äusserliche bei Ekzemen und anderen Hauterkrankungen. Der milchige Saft kann gegen Warzen eingesetzt werden, sollte aber nicht in die Augen geraten.',
    indicator:
      'Auf Wiesen, Äckern und Weiden in gemässigtem Klima weltweit verbreitet. Gilt als Zeiger für komprimierte, stickstoffreiche, lehmige und saure Böden',
    ellenberg: {
      L: '7',
      T: 'x',
      K: 'x',
      F: '5',
      R: 'x',
      N: '8',
      S: '1',
      LF: 'H',
      LF_B: 'W'
    }
  },
  {
    id: 'plantagoLanceolataL',
    name: 'Spitzwegerich',
    latin: 'Plantago Lanceolata L.',
    'family-name': 'Wegerichgewächse',
    'family-latin': 'Plantaginaceae',
    images: [
      'Spitzwegerich_(Plantago_lanceolata)-Hajotthu-wikipedia.jpg',
      'Plantago_lanceolata_(Curtis_et_al._1777,_Flora_Londinensis_v2,_plate_10,_BHL-127331).jpg'
    ],
    description:
      'Der Spitzwegerich, auch Spießkraut, Lungenblattl oder Schlangenzunge genannt, ist eine ausdauernde, krautige Pflanze, die Wuchshöhen von 5 bis 50 Zentimetern erreicht. Die reichverzweigte Wurzel kann bis zu 60 cm in die Tiefe reichen. Die Blütezeit reicht von Mai bis September.',
    'months-edible': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // from table in book appendix
    taste:
      'Der Grundgeschmack der Pflanze, insbesondere der Blütenknospen, ist champignonartig. Alle anderen mitteleuropäischen Wegericharten (Plantago) sind ähnlich zu verwenden.',
    'months-flowers': [5, 6, 7], // from table in book appendix
    flowers:
      'Die Blütenknospen können geknabbert werden, Salaten beigemischt, in der Pfanne gedünstet sowie in Öl oder in Essigwasser eingelegt werden. Sie sind eine wahre Delikatesse.',
    'months-leaves': [4, 5, 6], // from table in book appendix
    leaves:
      'Aromatische Blätter von April bis Juni. Man sollte die zarteren Blätter der Rosettenmitte ernten. Quer zur Faser in Streifen schneiden, wegen ihrer starken Längsfaser. Für Salate und Gemüse, bsp. als Spinat und in Omeletts oder Rührei. Auch als Brotbelag, essbare Dekoration oder zum Entsaften. Auch in Spirituosen.',
    'months-fruits': [8, 9, 10], // from table in book appendix
    fruits:
      'Mit den Samen können Gemüsegerichte verfeinert werden. Das in ihnen enthaltene Öl kann ausgepresst werden und als nussiges Öl für Salate und auf Toast verwendet werden.',
    'months-roots': [1, 2, 3, 4, 10, 11, 12], // from table in book appendix
    roots:
      'Die feinästige Wurzel muss sorgfältig gewaschen werden. Kann klein geschnitten und mit anderem gewürfeltem Gemüse wie Tomaten, Paprika oder Karotten weich gekocht, leicht gesalzen und evtl. mit Ei oder Mehl gebunden als Gemüsefüllung von Teigtaschen und herzhaften Strudeln benutzt werden.',
    medicinal:
      'Seit der Antike eine der meistverwendeten Heilpflanzen. Auf 2 Teelöffel getrocknetes Kraut pro Tasse gibt man kochendes Wasser und lässt den Tee 15 Minuten ziehen. Alle Mitglieder der Wegerichgewächse wirken gegen Bakterien und sind erfrischend und reinigend. Bei Verletzungen, Hautentzündungen, Verbrennungen, Schwellungen und Insektenstichen wendet man ihn äusserlich an. Der Extrakt wirkt bei Augenentzündungen. Innerlich für Beschwerden der oberen Atemwege und Entzündungen im Mund und Rachen und auch bei Magenschleimhautentzündung, Reizdarm und Harnwegentzündungen. Die frischen, in der Hand zerriebenen Blätter können bei kleinen Wunden zum Blutstillen und bei Insektenstichen zur Erstversorgung genutzt werden.',
    indicator:
      'In Wiesen- und Rasengesellschaften unterschiedlicher Ausprägung auf Lehmböden bis in etwa 1900m Höhe. Er kommt häufig in Fettwiesen, in Parkrasen (dort vor allem in seiner mageren Ausbildungsform), an Wegen und in Äckern vor.',
    ellenberg: {
      L: '6',
      T: 'x',
      K: '3',
      F: 'x',
      R: 'x',
      N: 'x',
      S: '0',
      LF: 'H',
      LF_B: 'W'
    }
  },
  {
    id: 'alliumUrsinumL',
    name: 'Bärlauch',
    latin: 'Allium Ursinum L.',
    'family-name': 'Lauchgewächse',
    'family-latin': 'Alliaceae',
    images: [
      'baerlauch_LisaCarter_wikipedia.jpg',
      'Allium_ursinum_Flora_Batava_Volume_v11.jpg',
      'Allium_ursinum_HC1_HolgerCasselmann_wiki.jpg'
    ],
    description:
      'Der Bärlauch, auch Bärenlauch, Knoblauchspinat, wilder Knoblauch, Waldknoblauch, Rinsenknoblauch, Hundsknoblauch, Hexenzwiebel, Zigeunerlauch, Ramsen oder Waldherre genannt, ist eine Pflanzenart aus der Gattung Allium und somit verwandt mit Schnittlauch, Zwiebel und Knoblauch. Er ist eine ausdauernde krautige Pflanze, die eine Wuchshöhe von etwa 20 bis 30 Zentimetern erreicht. Die in Europa und Teilen Asiens vor allem in Wäldern verbreitete und häufige, früh im Jahr austreibende Pflanzenart ist ein geschätztes Wildgemüse und wird vielfach gesammelt. Die Blütezeit reicht von April bis Mai.',
    'months-edible': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // from table in book appendix
    taste:
      'Der Grundgeschmack der Pflanze ist scharf, intensiv knoblauchartig und aromatisch. Vorsicht! Die Pflanze ähnelt den gefährlich giftigen Pflanzen Herbstzeitlose und Maiglöckchen, deren Blätter jedoch nicht gestielt sind. Verwechslung mit Aronstab möglich. Alle anderen mitteleuropäischen Laucharten sind ähnlich verwendbar.',
    'months-flowers': [4, 5, 6], // from table in book appendix
    flowers:
      'Die Blütenknospen lassen sich wie Antipasti in Öl, Essig oder Salzlake einlegen. Blüten als essbare Dekoration.',
    'months-leaves': [3, 4], // from table in book appendix
    leaves:
      'Die stark nach Knoblauch duftenden Blätter können zu Pesto verarbeitet werden, in Kräuterquark, als Brotbelag, in Kräuterbutter, Kräuterkäse, Saucen und Gemüsegerichten.',
    'months-fruits': [6], // from table in book appendix
    fruits:
      'Die noch grünen, runden Samen lassen sich wie grüner Pfeffer unter Weichkäse, Saucen oder Gemüsegerichte mischen. Die ausgereiften Samen trocknet man und mahlt sie zu einem pfeffrigen Trockengewürz.',
    'months-roots': [1, 2, 5, 6, 7, 8, 9, 10, 11, 12], // from table in book appendix
    roots:
      'Nachdem sich die Blätter der Pflanze zersetzt haben, kann man die etwa 20cm tief in der Erde steckende Zwiebel einlegen oder, ähnlich der Knoblauchzehe, als scharfes Speisegewürz verwenden.',
    medicinal:
      'Das ganze Kraut wird arzneilich verwendet. Hilft aufgrund seiner antibakteriellen Eigenschaften bei Magen- und Darmstörungen, senkt den Blutdruck, den zu hohen Cholesterinspiegel, wirkt Gefässverkalkung entgegen und ist daher ein hervorragendes Mittel zur Vorbeugung von Herzinfarkt und Schlaganfall. Zusätzlich blutreinigend, enzündungshemmend, harntreibend, schleimlösend, Stoffwechsel anregend und allgemein stärkend.',
    indicator:
      'In feuchten und schattigen Lagen in krautreichen Laub- Bergmisch- oder Auenwäldern bis auf etwa 1000m Höhe. Bodenfruchtbarkeits- und Feuchtigkeitszeiger',
    ellenberg: {
      L: '2',
      T: 'x',
      K: '2',
      F: '6',
      R: '7',
      N: '8',
      S: '0',
      LF: 'G',
      LF_B: 'V'
    }
  }
];

/* Data taken as mix from the book and wikipedia
{
    id: '',
    name: '',
    latin: '',
    'family-name': '',
    'family-latin': '',
    images: [''], 
    description: '', 
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
    medicinal: '',
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
