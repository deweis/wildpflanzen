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
      'Das Wilde Stiefmütterchen, im Volksmund auch Ackerveilchen, Muttergottesschuh, Mädchenaugen, Schöngesicht oder Liebesgesichtli genannt, ist eine einjährige bis mehrjährige krautige Pflanze, die Wuchshöhen von 10 bis 40 Zentimetern erreicht. Die Blütezeit reicht von April bis September. Diese gesunde Blume mit viel Vitamin C, Magnesium, Eisen und anderen wertvollen Inhaltsstoffen ist unglaublich vielseitig und eignet sich sowohl für herzhafte als auch süße Rezepte.',
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
      'Das Gänseblümchen, auch Ausdauerndes Gänseblümchen, Mehrjähriges Gänseblümchen, Maßliebchen, Tausendschön, Monatsröserl oder schweizerisch Margritli genannt, ist eine ausdauernde, krautige Pflanze, die Wuchshöhen von meist 4 bis 15 Zentimetern erreicht. Da es auf fast jeder Wiesenfläche wächst, zählt es zu den bekanntesten Pflanzenarten Mitteleuropas. Die Blütezeit reicht von Januar bis November.<br>Es streckt seinen zarten Kopf in Richtung Sonne, sobald die Schneedecke lichter wird und ist reich an Vitamin C, Magnesium, Eisen und anderen Vitalstoffen und eignet sich hervorragend als Deko auf vielen Speisen.',
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
    id: 'leucanthemumVulgareAgg',
    name: 'Wiesen-Margerite',
    latin: 'Leucanthemum Vulgare agg.',
    'family-name': 'Korbblütengewächse',
    'family-latin': 'Asteraceae',
    images: [
      'Leucanthemum_vulgare_Bluete-Mariofan13-wikipedia.jpg',
      'ChrysanthemumLeucanthemum.jpg'
    ],
    description:
      'Die Wiesen-Margerite ist eine mehrjährige, ausdauernde, tiefwurzelnde und krautige Pflanze, die Wuchshöhen von 30 bis 60 Zentimetern erreicht. Ihr kantiger Stängel ist aufrecht und meist unverzweigt. Die spatelförmigen Laubblätter sind wechselständig angeordnet. Die unteren Blätter sind meist grob gezähnt, die oberen weniger stark. Die körbchenförmigen Blüten der Margerite haben einen Durchmesser von vier bis sechs Zentimeter und verbreiten besonders beim Verwelken einen unangenehmen Geruch. Die Blütezeit reicht von Mai bis Oktober.',
    'months-edible': [1, 2, 3, 4, 5, 6, 9, 10, 11, 12], // from table in book appendix
    taste:
      'Der Grundgeschmack der Blüten und Triebe ähnelt dem Aroma von Zucchinischalen. Die Wurzeln schmecken nach Winterrüben.',
    'months-flowers': [4, 5, 6], // from table in book appendix
    flowers:
      'Aus ganz jungen Blütentrieben lässt sich von April bis Mai gebratenes Gemüse bereiten. Von Mai bis Juni kann man die Blütenknospen und das gelbe Blüteninnere in Essigwasser oder Würzöl als Antipasti einlegen. Die weissen Strahlenblüten zupft man aus und bestreut damit Desserts, würzige Aufstriche, Salate oder Gemüsesuppen.',
    'months-leaves': [3, 4], // from table in book appendix
    leaves:
      'Die Wiesen-Margerite überwintert in einer kompakten Blattrosette. Diese kann man im Frühjahr ernten und roh essen oder zu einem Gemüse-pürée zubereiten. Im März und April nutzt man die frischen, neuen Blätter gern für Salate und Frühjahrskräutermischungen.',
    'months-fruits': [], // from table in book appendix
    fruits: '',
    'months-roots': [1, 2, 3, 9, 10, 11, 12], // from table in book appendix
    roots: 'Eignen sich als Koch- und Backgemüse.',
    medicinal:
      'In der Volksmedizin wenig gebräuchlich. Man kann einen Tee aus den Blütenköpfen bereiten, der entkrampfend wirkt und bei Menstruationsbeschwerden und Darmkoliken einsetzbar ist. Er wirkt ferner adstringierend und hustenlindernd. Durch die adstringierende Wirkung wird die Gewebeoberfläche von Schleimhäuten (hier der Lunge) und Wudnen gefestigt und deren Sekretion verhindert.',
    indicator:
      'Auf warmen und basenreichen Magerrasen auf Lehm- und Ton-böden. Überwiegend auf stickstoffarmen, sonnigen bis halbschattigen, frischen bis halbtrockenen Wiesen, Weiden und Ruderalstandorten.',
    ellenberg: {
      L: '7',
      T: 'x',
      K: '3',
      F: '4',
      R: 'x',
      N: '3',
      S: '0',
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
      'TaraxacumOfficinale_DWE_20171013.jpg',
      'Taraxacum_officinale_-_Koehler-s_Medizinal-Pflanzen-135.jpg',
      'TaraxacumOfficinale_DWE_20180911.jpg',
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
      'Auf Wiesen, Äckern und Weiden in gemässigtem Klima weltweit verbreitet. Gilt als Zeiger für komprimierte, stickstoffreiche und lehmige Böden',
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
  },
  {
    id: 'cornusMasL',
    name: 'Kornelkirsche',
    latin: 'Cornus Mas L.',
    'family-name': 'Hartriegelgewächse',
    'family-latin': 'Cornaceae',
    images: [
      'Gele_kornoelje_TeunSpaans-wikipedia.jpg',
      'Illustration_Cornus_mas0.jpg',
      'Cornus_mas_A_Wouter Hagens-wikipedia.jpg'
    ],
    description:
      'Die Kornelkirsche, auch Herlitze, Dürlitze, Hirlnuss, in Österreich auch Dirndl, Dirndling, Dirndlstrauch oder Gelber Hartriegel, in der Deutschschweiz Tierlibaum genannt, ist ein in Südeuropa und Teilen von Mitteleuropa weit verbreiteter Großstrauch oder Baum. Die Wuchshöhe beträgt im Alter von 25 Jahren gut 4 m, mit 50 Jahren erreicht sie knapp 8 m. Die Blütezeit reicht von Februar bis März. Durch die frühe Blütezeit ist die Kornelkirsche eine besonders wichtige Bienennährpflanze, durch die Früchte ein Vogelschutz- und -nährgehölz. Der Strauch eignet sich auch für regelmäßige, geschnittene Hecken. Es gibt eine Reihe Zuchtformen, so mit gelben oder gerandeten Blättern, mit weißen, gelben, violettroten oder kugeligen Früchten und mit Zwerg- oder Pyramidenwuchs.',
    'months-edible': [2, 3, 4, 7, 8, 9, 10], // from table in book appendix
    taste:
      'Der Geschmack der Früchte ist sauer, johannisbeerartig bis süss. Die Blüten und Blätter geben Getränken in der beschriebenen Verarbeitung einen fruchtigen Geschmack.',
    'months-flowers': [2, 3], // from table in book appendix
    flowers: 'Als Aroma für Spirituosen oder als Tee.',
    'months-leaves': [3, 4], // from table in book appendix
    leaves: 'Mit anderen Kräutern gemischt als Tee.',
    'months-fruits': [7, 8, 9, 10], // from table in book appendix
    fruits:
      'Die Früchte kann man wie Kirschen direkt vom Baum naschen. Sollten sich einfach lösen lassen oder von alleim vom Strauch fallen. Diese sind ausgereift und reichlich Süss. Sie sind dunkelrot. Unreife Früchte sind sehr sauer. Können zu Fruchtsäften, Kompott, Gelees oder Marmeladen verarbeitet werden. Den Saft für Wein, Schnaps oder Liköre und andere Spirituosen. Zuweilen schneidet man die Kerne heraus, halbiert sie und mit Zucker bestreut bis zu vier Tagen im Kühlschrank haltbar. Zur Bevorratung resp. Teezubereitung werden die entkernten Früchte auch getrocknet. Von Juli bis August eignen sich die reifen und unreifen Früchte zum Einlegen in Essig und Öl und erinnern so an eingelegte Oliven.<br>Aus den gerösteten Samen der Früchte kann auch ein röstbitterer Kaffee gemahlt werden.',
    'months-roots': [], // from table in book appendix
    roots: '',
    medicinal:
      'Frucht und Rinde wirken fiebersenkend und adstringierend. Früher erfolgt die Anwendung bei chronischen Darmerkrankungen und Durchfall. In gleicher Weise kann auch ein Tee aus den übrigen Pflanzenteilen (Blätter und Rinde) angewendet werden. Aus diesen kann auch eine wundheilende Salbe, die auch bei Krampfadern hilft, hergestellt werden.',
    indicator:
      'In lichten Eichenwäldern und sonnigem Gebüsch. Der wärmeliebende Strauch wächst wild vor allem auf sonnigen, buschbestandenen Hängen, in lichten Wäldern, an Waldrändern und in Hecken, in Auwäldern außerhalb des Überschwemmungsbereiches, häufig auf kalkhaltigen Böden. Er ist dabei nicht wählerisch und verträgt auch lichten Schatten.',
    ellenberg: {
      L: '6',
      T: '7',
      K: '4',
      F: '4',
      R: '8',
      N: '4',
      S: '0',
      LF: 'N, P',
      LF_B: 'S'
    }
  },
  {
    id: 'potentillaReptansL',
    name: 'Kriechendes Fingerkraut',
    latin: 'Potentilla reptans L.',
    'family-name': 'Rosengewächse',
    'family-latin': 'Rosaceae',
    images: [
      'Potentilla_reptans_HansHillewaert-wikipedia.jpg',
      'PotentillaReptans.jpg'
    ],
    description:
      'Das Kriechende Fingerkraut, auch Kriechender Gänserich und Kriechender Gänsefuß genannt, ist eine ausdauernde krautige Pflanze. Sämtliche Stängel sind kriechend und an den Knoten bewurzelt. Die Ausläufer erreichen eine Länge von 30 bis 100 Zentimeter. Die Art besitzt eine dünne Pfahlwurzel, die bis zu 45 cm lang wird. Die lang gestielten Laubblätter sind fünfzählig gefingert, woher der Trivialname Fünffingerkraut (in Antike und Mittelalter griechisch pentafilon) rührt, und am Rand gezähnt. Die fünfzähligen Blüten enthalten fünf goldgelbe Kronblätter. Diese stehen einzeln auf einem langen, die Laubblätter meist überragenden Stiel. Die Blüte erreicht einen Durchmesser von 17 bis 20 Millimeter. Die Blütezeit reicht von Juni bis August.',
    'months-edible': [4, 5, 6, 7, 8], // from table in book appendix
    taste:
      'Die kaum duftende Pflanze schmeckt mild, salatartig, ist jedoch weniger knackig, eher fester.',
    'months-flowers': [6, 7, 8], // from table in book appendix
    flowers:
      'Wie alle Fingerkrautarten hat auch das Kriechende Fingerkraut die charakteristischen gelben Blüten. Als essbare Dekoration auf Brote oder in Salate.',
    'months-leaves': [4, 5, 6], // from table in book appendix
    leaves:
      'Die ganz jungen Triebe, wenn sie noch kaum störende Blattfasern entwickelt haben, für Salate und fein gewiegt für Salatsaucen. Man kann sie auch gesalzen in Öl einlegen oder gehackt in Kräutermischungen und Kräuterkäse mischen. Gegart kann man aus ihnen Kräuterpüree oder Gemüsefüllungen bereiten.',
    'months-fruits': [], // from table in book appendix
    fruits: '',
    'months-roots': [], // from table in book appendix
    roots: '',
    medicinal:
      'Die Fingerkräuter sind seit alters bekannte Heilpflanzen. Das Kraut wirkt adstringierend und hat eine schmerzstillende und durchfallhemmende Wirkung. Wissenschaftlich anerkannt ist die innerliche Anwendung zur unterstützenden Behandlung von unspezifischen Durchfallerkrankungen, Bauch- und Unterleibsbeschwerden, auch bei schmerzhafter Menstruation, insbesondere wenn sie mit Krämpfen einhergehen. Ausserdem zum Gurgeln bei Blutungen und Entzündungen der Mundschleimhaut und des Zahnfleisches. Für einen Tee übergisst man 2 Teelöffel getrocknetes Kraut mit 250ml kochendem Wasser und lässt den Aufguss 10 Minuten ziehen. Volksmedizinisch werden die Wurzeln zum Beispiel bei Zahnfleischentzündung gekaut.',
    indicator:
      "An feuchten und nährstoffreichen Standorten auf Lehm- und Tonböden bis in etwa 1'000m Höhe. Die stickstoffliebende Pflanze gedeiht bevorzugt auf feuchten Wiesen, feuchten Ruderalfluren, ruderalen Schuttfluren (etwa Bahnschotter), Straßenböschungen, Ufern und Äckern. Im Wallis steigt sie bis auf 1'750m auf.",
    ellenberg: {
      L: '6',
      T: '6',
      K: '3',
      F: '6',
      R: '7',
      N: '5',
      S: '0',
      LF: 'H',
      LF_B: 'W'
    }
  },
  {
    id: 'oxalisAcetosellaL',
    name: 'Waldsauerklee',
    latin: 'Oxalis Acetosella L.',
    'family-name': 'Sauerkleegewächse',
    'family-latin': 'Oxalidaceae',
    images: [
      'Common_wood_sorrel_(aka)-wikipedia.jpg',
      'Cleaned-Illustration_Oxalis_acetosella.jpg'
    ],
    description:
      'Der Waldsauerklee ist eine ausdauernde krautige Pflanze, die Wuchshöhen von 5 bis 15 cm erreicht. Sie bildet als Überdauerungsorgan ein unterirdisches, kurzes Rhizom und eine reich verzweigte, fleischige Pfahlwurzel. Das lang gestielte Laubblatt ist dreiteilig, kleeartig gefiedert. Die Blätter sind etwas fleischig, grasgrün und schmecken säuerlich. Die drei Teilblätter sind verkehrt herzförmig. Die Blütezeit reicht von April bis Juni. Es handelt sich um die schattenverträglichste heimische Pflanzenart, die bei einem Minimum von 1/160 des Tageslichtes noch wachsen kann. Bei starker Sonnenbestrahlung verändert die Pflanze die Stellung ihrer Blätter, indem sie die Fiederblätter nach unten zusammenklappt. Hierdurch schützt sich der Waldsauerklee vor Wasserverlust infolge von Transpiration, da sich die Spaltöffnungen der Blattunterseiten aneinanderlegen. Es handelt sich beim Waldsauerklee um eine Reliktart; die meisten der etwa 800 Oxalis-Arten sind tropisch oder subtropisch verbreitet. ',
    'months-edible': [3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    taste:
      'Der Grundgeschmack der Pflanze ist zitronenartig sauer-erfrischend. Hinweis: Die Pflanze ist oxalsäurehaltig, jedoch kaum mehr als Spinat, Mangold oder Rhabarber. Oxalsäure kann über einen langen Zeitraum regelmässig eingenommen (mehrere Monate) zu einer Schädigung der Nieren führen. Oxalsäure ist wasserlöslich und kann durch Abkochen und Abgiessen des Kochwassers entfernt werden. Alle anderen mitteleuropäischen Sauerkleearten (Oxalis) sind in gleicher Weise verwendbar.',
    'months-flowers': [4, 5], // from table in book appendix
    flowers: 'Die weissen Blüten zum Zieren und Erfrischen von Suppen.',
    'months-leaves': [3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    leaves:
      'Die Blätter des Sauerklees lassen sich die ganze Vegetationsperiode über gut ernten. Sie werden kaum zäh. Am weichsten sind sie jedoch vor der Blüte von März bis April. Man nutzt sie als Zutat in Saucen, Salaten, Suppen und Gemüsesäften. Gern legt man sie auch in Zucker ein, um diesem eine erfrischende Note zu geben, oder trocknet sie als Gewürz. Aufgrund ihrer schönen Form eignen sie sich auch als essbare Dekoration.',
    'months-fruits': [5], // from table in book appendix
    fruits:
      'Im Mai sammelt man die noch weichen Früchte, bevor sie im Juni zu hart werden, und nutzt sie als Gewürz zum Beispiel beim Einlegen von Oliven oder Kapern.',
    'months-roots': [3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    roots:
      'Beim Zupfen der Blätter kommen meistens die Wurzeln und Stiele mit. Man trenn sie von den Blättern, hackt sie fein und gibt sie in Gemüsegerichte.',
    medicinal:
      'Wurde früher von der Volksmedizin bei Skorbut und Hauterkrankungen eingesetzt. Homöopathisch bei Stoffwechselschwäche, Verdauungsstörungen, Erkrankungen von Leber und Galle und einer Neigung zur Steinbildung.',
    indicator:
      'In Mischwäldern auf leicht sauren Lehmböden bis in eine Höhe von etwa 2000 m. Waldsauerklee wächst auf sauren Waldböden an ausgesprochen schattigen und frischen bis feuchten Stellen in Laubmischwäldern und Nadelwäldern. Er kann auch tieferen Schatten ertragen.',
    ellenberg: {
      L: '1',
      T: 'x',
      K: '3',
      F: '5',
      R: '4',
      N: '6',
      S: '0',
      LF: 'G, H',
      LF_B: 'W'
    }
  },
  {
    id: 'stellariaMediaAgg',
    name: 'Vogelmiere',
    latin: 'Stellaria Media agg.',
    'family-name': 'Nelkengewächse',
    'family-latin': 'Caryophyllaceae',
    images: [
      'Chickweed_(aka)-wikipedia.jpg',
      'Stellaria_spp_Sturm5.jpg',
      'Vogelmiere-Rasbak-wikipedia.jpg'
    ],
    description:
      "Die Gewöhnliche Vogelmiere, auch Vogel-Sternmiere, Hühnerdarm (wohl in Bezug auf den kriechenden, runden und gewundenen Stängel), Hühnerscherbe oder Hustdarm genannt, ist eine einjährige krautige Pflanze. Sie ist sehr reich an Vitaminen A, B und C und liefert weit mehr Eisen, Kalium, Kalzium und Magnesium als heimisches Kulturgemüse. Außerdem kann sie bei Husten, Lungenleiden und Rheumabeschwerden Linderung verschaffen. Ihre niederliegenden 3 bis 40 cm langen Stängel bilden oft kleinere Rasenteppiche aus. Der Querschnitt des einreihig behaarten Stängels ist rund. Die Laubblätter sind eiförmig und spitz. Die Blütezeit reicht von März bis Oktober. Sie ist sehr ausbreitungs- und vermehrungsfreudig und überzieht frisch bearbeitete Böden schnell mit einem Rasen. Eine Pflanze kann bis zu 15'000 Samen bilden, pro Jahr können darüber hinaus zwei bis drei Generationen wachsen. Selbst im Winter können neue Pflanzen aus den gekeimten Samen entstehen. Das Kraut und die Samen werden gern von Vögeln gefressen, worauf auch der deutsche Trivialname Bezug nimmt.",
    'months-edible': [3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    taste:
      'Der Grundgeschmack ist sehr mild, ähnlich dem des Kopfsalates, jedoch aromatischer.<br>Bei der kleinen, flächenartig auftretenden Vogel-Sternmiere lassen sich kaum einzelne Pflanzen unterscheiden. Meistens erntet man sie in Büscheln von vielen Pflanzen. Sie ist komplett verwendbar, samt ihren Stängeln, Blüten und Fruchtkugeln. Die während der gesamten Vegetationsperiode sich immer wieder neu bildenden Samen keinem sehr gut auf jeder frischen Erde, zum Beispiel auch in einem Blumenkasten. So hat man ständig frische Pflanzen griffbereit.',
    'months-flowers': [3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    flowers:
      'Ganze Pflanze als delikater Salat oder als sehr zartes spinatartiges Gemüse zuzubereiten. Sie eignet sich allein als Hauptteil eines Gerichts, lässt sich aber auch mit anerem Gemüse kombinieren.',
    'months-leaves': [3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    leaves:
      'Ganze Pflanze als delikater Salat oder als sehr zartes spinatartiges Gemüse zuzubereiten. Sie eignet sich allein als Hauptteil eines Gerichts, lässt sich aber auch mit anerem Gemüse kombinieren.',
    'months-fruits': [3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    fruits:
      'Ganze Pflanze als delikater Salat oder als sehr zartes spinatartiges Gemüse zuzubereiten. Sie eignet sich allein als Hauptteil eines Gerichts, lässt sich aber auch mit anerem Gemüse kombinieren.',
    'months-roots': [], // from table in book appendix
    roots: '',
    medicinal:
      'Bei Husten, Asthma und Lungenerkrankungen eingesetzt, ausserdem zur Reinigung und Kräftigung des ganzen Organismus. Die Pflanze hat eine kühlende, entzündungshemmende, schmerzlindernde, verdauungsfördernde und leicht abführende Wirkung. Sie hilft bei Krämpfen, Leberbeschwerden, übermüdeten oder entzündeten Augen, Rheuma und Blasenkrankheiten. Äusserlich kann sie bei Hautausschlägen, Verbrennungen, Schürfwunden und kleineren Verletzungen eingesetzt werden. Homöopathisch bei Rheumatismus, Gelenkentzündungen, Bronchitis und Schuppenflechte.',
    indicator:
      'In Gärten, auf Äckern und auf anderen Kultur- und Brachflächen, z.B. an Strassen- und Wegrändern. Auf nährstoffreichen Lehmböden bis in eine Höhe von etwa 1900 m.',
    ellenberg: {
      L: '6',
      T: 'x',
      K: 'x',
      F: 'x',
      R: '7',
      N: '8',
      S: '0',
      LF: 'T',
      LF_B: 'W'
    }
  },
  {
    id: 'acerPlatanoidesL',
    name: 'Spitzahorn',
    latin: 'Acer Platanoides L.',
    'family-name': 'Ahorngewächse',
    'family-latin': 'Aceraceae',
    images: [
      'Ahornbluete-Rabensteiner-wikipedia.jpg',
      'Illustration_Acer_platanoides0.jpg',
      'Acer_platanoides_seeds-M.violante-wikipedia.jpg'
    ],
    description:
      'Der Spitzahorn (botanisch Spitz-Ahorn), auch Spitzblättriger Ahorn genannt, ist ein sommergrüner Baum, der durchschnittliche Wuchshöhen von 20 bis 30 Metern erreicht. Er kann etwa 150, maximal 200 Jahre alt werden. Seine Rinde ist in der Jugend glatt und blassbraun; im Alter ist die Borke dunkelbraun oder grau; die Struktur ist längsrissig und nicht schuppig. Die Blütezeit reicht von April bis Mai. Aufgrund seiner Widerstandsfähigkeit gegen Industriebelastung wird er gerne im Stadtbereich zur Begrünung verwendet. Garten- und Parkgestalter haben sich des Spitzahorns besonders angenommen. Es gibt eine Fülle verschiedenartiger Formen. Beliebt sind rotblättrige Züchtungen.',
    'months-edible': [3, 4, 6, 7, 8, 9], // from table in book appendix
    taste:
      'Keimlinge und Früchte haben einen herben bis bitteren Geschmack, der Saft des Stammes ist wässrig-süss, die zarten Blätter und Blüten schmecken mild säuerlich bis süss.',
    'months-flowers': [4], // from table in book appendix
    flowers:
      'Im April kann man die Blütenbüschel roh essen oder aus ihnen Salate zubereiten.',
    'months-leaves': [3, 4], // from table in book appendix
    leaves:
      'Die jungen, zarten Blätter des Spitzahorns samt ihren noch weichen Blattstielen ergeben von März bis April eine Grundlage verschiedener Salate. Man kann sie auch zu Gemüsegerichten oder Suppen verarbeiten. Getrocknet werden sie im Winter in Suppen gegeben.<br>Von März bis April lässt sich der Saft des angeritzten Stammes nutzen (nur sehr massvoll nutzen, da Rindenverletzungen dem Baum erheblich schaden können). Man kann den Saft frisch trinken, oder ihn zu Wein, Essig und Sirup weiterverarbeiten. In Notzeiten wurde die weiche innere Rinde hinter der harten Borke im Frühjahr von gefällten Bäumen abgeschabt, getrocknet und zu Mehl emahlen und zum Strecken von Getreidemehl verwendet.',
    'months-fruits': [3, 6, 7, 8, 9], // from table in book appendix
    fruits:
      'Die unreifen, zartgrünen Flügelfrüchte kann man unmittelbar nach der Blütezeit in Salzlake oder Gewürzessig zu "Pickles" einlegen.<br>Von Juni bis September kann man aus den ausgereiften Flügelfrüchten die Samen herausschälen und diese mit Gemüse kochen oder auch zu "Pickles" einlegen.<br>Im März findet man unter dem Baum die Keimlinge. Auch sie kann man einlegen.',
    'months-roots': [], // from table in book appendix
    roots: '',
    medicinal:
      'Volksmedizinisch wird der Saft oder ein Sud aus frischen Blättern bei Insektenstichen, Gicht, Geschwüren, Entzündungen, Fieber und geschwollenen Augen äusserlich angewendet.',
    indicator:
      'In Schlucht- und Hangwäldern sowie Eichen-Hainbuchen-Wäldern. Häufig trifft man ihn auch an Waldrändern und (wenn auch nicht so häufig) in Hecken an.',
    ellenberg: {
      L: '(4)',
      T: '6',
      K: '4',
      F: 'x',
      R: 'x',
      N: 'x',
      S: '0',
      LF: 'P',
      LF_B: 'S'
    }
  },
  {
    id: 'glechomaHederaceaL',
    name: 'Gewöhnlicher Gundermann',
    latin: 'Glechoma Hederacea L.',
    'family-name': 'Lippenblütengewächse',
    'family-latin': 'Lamiaceae',
    images: [
      'GlechomaHederacea5b_ies-wikipedia.jpg',
      'Illustration_Glechoma_hederacea0b.jpg',
      'Glechoma_hederacea2_ies_FrankVincentz-wikipedia.jpg',
      'GlechomaHederaceaLeaf_ChristianFischer_wikipedia.jpg'
    ],
    description:
      'Der Gundermann, auch Echt-Gundelrebe, Gundelrebe oder Erdefeu genannt, ist eine wintergrüne, ausdauernde krautige Pflanze. Die Behaarung (Indument) der Pflanzenteile ist variabel: Häufig ist sie fast kahl, sie kann aber auch dicht weich behaart sein. Stängel und Blattunterseite sind häufig purpurn überlaufen. Die Blütezeit reicht von März bis Juni. Der Name Gundermann oder auch Gundelrebe rührt von der Heilkraft dieses Krautes bei Eiter, denn dieses wurde früher oft "Gund" genannt.',
    'months-edible': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // from kostbarenatur.net
    taste:
      'Der Geschmack der beim Zerreiben sehr wohlaromatisch und appetitanregend duftenden Pflanze ist herb-aromatisch. Die Blüten schmecken zart süsslich. Der Gundermann gehört, wie viele unserer Küchenkräuter (Pfefferminze, Thymian, Rosmarin, Bohnenkraut und andere), zu den Lippenblütlern. Er riecht und schmeckt aromatisch und wird auch “Wilde Petersilie” genannt. So vielfältig wie wir Petersilie verwenden, kann auch der Gundermann verwendet werden. Der Gundermann ist zwar für den Menschen ungiftig, aber für manche Tiere giftig, insbesondere Pferde.',
    'months-flowers': [3, 4, 5, 6], // from kostbarenatur.net
    flowers:
      'Als essbare Dekoration können die Blüten zu Salaten, Aufstrichen oder als Aroma für Gemüse und Speiseöl verwendet werden.',
    'months-leaves': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // from kostbarenatur.net
    leaves:
      'Blätter als Aromaspender. Sie können roh zur Erfrischung des Atems gegessen oder zum Würzen von Tee, Kräuterlikör, Kräuterwein, Schnaps und Bier verwendet werden oder als Aroma für Würzöle. Zarte Blätter und zarte Triebspitzen sind eine gute Zutat für Salate, Suppen, Eierspeisen (Omelett, Rührei), Quiche, Eintöpfe, Kräuterkäse, Kräuterbutter oder Kräuterquark.',
    'months-fruits': [], // from table in book appendix
    fruits: '',
    'months-roots': [], // from table in book appendix
    roots: '',
    medicinal:
      'Volksmedizinisch bei Magen- und Darmkatarrhen, Blasenleiden, Leberbeschwerden und grippalen Infekten. Dem Gundermann werden ferner ausgleichende Wirkungen auf den Stoffwechsel nachgesagt. Vorzugsweise sollte die frische Pflanze genutzt werden. Man kann sie auch in Pflanzenöl einlegen und das so hergestellte Öl zur Behandlung von Wunden oder zur Hautpflege verwenden. In der Traditionellen Chinesischen Medizin wird die Pflanze zur Behandlung bei Störungen im Dickdarm, in der Blase und in den Lungen eingesetzt.',
    indicator:
      "Der Gundermann wächst in Bodennähe und kriecht die Erde entlang. Auf nährstoffreichen Wiesen, Weiden und an Heckenrändern auf Lehmböden bis in eine Höhe von etwa 1'400 m. Die Pflanze ist das ganze Jahr über zu finden und wächst auch unter der Schneedecke weiter. Der Gundermann kommt bevorzugt auf feuchten, schweren, fruchtbaren sowie kalkhaltigen Böden vor.",
    ellenberg: {
      L: '6',
      T: '6',
      K: '3',
      F: '6',
      R: 'x',
      N: '7',
      S: '0',
      LF: 'G, H',
      LF_B: 'W'
    },
    links: [
      'https://www.kostbarenatur.net/anwendung-und-inhaltsstoffe/gundermann/'
    ],
    colors: ['blau', 'violett']
  },
  {
    id: 'urticaDioicaL',
    name: 'Grosse Brennnessel',
    latin: 'Urtica Dioica L.',
    'family-name': 'Brennnesselgewächse',
    'family-latin': 'Urticaceae',
    images: [
      'GrosseBrennnessel-wikipedia.jpg',
      'Illustration_Urtica_dioica0.jpg'
    ],
    description:
      'Die Grosse Brennnessel ist eine zweihäusige, ausdauernde krautige Pflanze, die Wuchshöhen von 30 bis 300 Zentimeter erreicht. Sie wurzelt bis 70 Zentimeter tief. Die Blütezeit reicht von Juni bis Oktober. Brennnesseln wachsen im Frühjahr rasant und setzen sich schnell gegen andere lichtsuchende Pflanzen durch. Auch in milden Wintern findet man des öfteren junge Triebe und kann sie für die Ernährung nutzen. Sie sind vollgepackt mit Vitaminen, Eisen und Eiweiß und sind ein wahrer Segen für die Gesundheit. Sie ist, ein wertvolles Nahrungsmittel mit vielen Vitaminen, Mineralstoffen und Spurenelementen, eine große und vielfältige Heilerin, eine wunderbare Düngepflanze für stark zehrende Pflanzen.',
    'months-edible': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // from table in book appendix and others..
    taste:
      'Die Brennnessel ist im Grundgeschmack spinatartig, jedoch aromatischer und würziger. Die Samen haben einen nussigen Geschmack.',
    'months-flowers': [5, 6], // from table in book appendix and others
    flowers:
      'Im Frühsommer lassen sich die Blütenknospen gut für einen Salat nutzen.',
    'months-leaves': [3, 4, 5, 6, 7], // from table in book appendix, kostbarenatur.net, https://www.zentrum-der-gesundheit.de/brennnessel-blaetter-ia.html
    leaves:
      'Die Brennnessel ist eine alte Gemüsepflanze, deren Blätter meistens wie Spinat zubereitet gegessen wurden. Aber auch für Eierspeisen, Teigmantelgerichte, als Würzkraut und als Grundlage von Gemüsesäften und Saucen sowie als Aroma für Getränke wie Bier und Tee. Man kann aus der Brennnessel weitere Gemüsegerichte, Füllungen und Pesto bereiten. Die Triebspitzen und zarten, jungen Blätter müssen etwa 3 Sekunden blanchiert, fein gewiegt oder vorsichtig mit einem Nudelholz abgerollt werden, damit sie ihre Brennhaare verlieren. Dann eignen sie sich auch roh für Salate. Sie lassen sich an einem luftigen Platz gut trocknen und als Mineralstofflieferant für den Winter gut aufbewahren.<br> Der beste Zeitpunkt zur Ernte ist dann gekommen, wenn die Brennnessel Kniehöhe noch nicht übersteigt und ihre Hauptstängel noch weich und geschmeidig sind. Ernten Sie Brennnesselblätter (und auch andere Heilpflanzen) nicht, wenn es geregnet hat. Sie verlieren dabei an Aroma und weisen auch einen niedrigeren Wirkstoffgehalt auf als an trockenen Tagen. Warten Sie also auch bei schönem Wetter ab, bis der Tau getrocknet ist und schreiten Sie dann zur Ernte.',
    'months-fruits': [7, 8, 9, 10], // from table in book appendix and kostbarenatur.net, , http://www.kraeuterfrau.ch/archiv/brennnessel.html
    fruits:
      'Geröstet oder getrocknet sind die Samen als Trockengewürz zu verwenden. Sowohl die noch grünen Samen, von Juli bis August, als auch die reifen Samen, im Frühherbst, kann man in Kräuterkäse geben. Getrocknet liefern sie auch eine wertvolle Eiweißquelle für den Winter. Ganz leicht lässt sich aus ihnen ein wertvolles Proteinpulver herstellen, welches nicht nur hochwertige Eiweiße enthält, sondern auch noch eine ganze Reihe Vitamine, Mineralstoffe und Spurenelemente.',
    'months-roots': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // from https://www.brennessel-tee.com, https://eatsmarter.de/lexikon/warenkunde/kraeuter/brennnessel
    roots:
      'Wie alle Teile der Brennessel kann man auch die Wurzeln essen. Sie haben im Gegensatz zu Blättern und Stängeln sogar ganz eigene Wirkstoffe. Allerdings ist der Geschmack der Wurzeln äußerst bitter. Brennesselwurzel sammeln kann man das ganze Jahr über, solange der Boden nicht gefroren ist. Es ist allerdings zu bemerken, dass wenn man die Wurzeln in einer Trockenphase erntet, das Trocknen wesentlich schneller geht. Die beste Zeit zum Ernten der wirkstoffreichen Wurzeln von Brennnessel ist der Herbst.',
    medicinal:
      'Die ganze Pflanze einschliesslich er Samen wird zur Behandlung von rheumatischen Beschwerden und Verdauungsleiden verwendet. Die leicht harntreibende Wirkung wirkt positiv bei Nierenleiden. Volksmedizinisch wird sie innerlich zur Blutbildung und zur Erhöhung der Enzymproduktion der Bauchspeicheldrüse verabreicht. Die Brennnessel wird auch bei Gallenerkrankungen eingesetzt. Äusserlich wendet man sie bei Kopfschuppen und fettigem Haar an. Die blutreinigende und entgiftende Wirkung macht man sich seit Urzeiten für Frühjahrskuren zunutze. Die Pflanze enthält Enzyme und pflanzliche Hormone (Phytohormone), die eine krebsvorbeugende Wirkung haben. Sie senkt den Blutzuckerspiegel, hemmt Entzündungen und lindert Prostatabeschwerden. Die zerstossenen Früchte werden volksmedizinisch äusserlich bei Rheuma und Hautleiden und innerlich als Tonikumn un Biostimulans verwendet.',
    indicator:
      'Nährstoffreiche Standorte im Umkreis von Siedlungen, am Waldrand und im Auenwald. Die Grosse Brennnessel ist ein typischer Stickstoffzeiger und wurde durch Nährstoffeintrag (Eutrophierung) und Entwässerung von Auwäldern oft übermäßig stark gefördert, besonders im Saumbereich der Wälder.',
    ellenberg: {
      L: 'x',
      T: 'x',
      K: 'x',
      F: '6',
      R: '7',
      N: '9',
      S: '0',
      LF: 'H',
      LF_B: 'S'
    },
    links: [
      'https://www.kostbarenatur.net/anwendung-und-inhaltsstoffe/grosse-brennnessel/',
      'https://www.zentrum-der-gesundheit.de/brennnessel-blaetter-ia.html',
      'https://www.brennessel-tee.com'
    ],
    colors: ['grün', 'weiss']
  },
  {
    id: 'lamiumMaculatumL',
    name: 'Gefleckte Taubnessel',
    latin: 'Lamium Maculatum L.',
    'family-name': 'Lippenblütengewächse',
    'family-latin': 'Lamiaceae',
    images: [
      'Gefleckte_Taubnessel_artMechanic-wikipedia.jpg',
      'Lamium_maculatum-Flora_Batava-Volume_v9.jpg',
      'Lamium_maculatum_MdE-wikipedia.jpg',
      '2015_Lamium_maculatum_footpath-Kreuzschnabel-wikipdia.jpg'
    ],
    description:
      'Die sehr variable Gefleckte Taubnessel wächst meist als ausdauernde krautige Pflanze, selten als einjährige Sommerpflanze. Sie ist sommergrün oder wintergrün. Ihre Wuchshöhe schwankt zwischen 20 und 80 cm. Die Blühfähigkeit ist bereits im ersten Wuchsjahr gegeben.Die Blütezeit reicht von März bis September. Sie ist nicht mit der Brennnessel verwandt. Namensgebend sowohl für den wissenschaftlichen als auch ihren deutschen Trivialnamen gilt die gefleckte Unterlippe.',
    'months-edible': [2, 3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    taste:
      'Das Taubnesselkraut, die Keimlinge und die feinen Wurzeln haben einen feinwürzigen Pilzgeschmack. Die Behaarung ist an zarten Pflanzenteilen nicht störend. Andere mitteleuropäische Taubnesselarten sind ebenso verwendbar.',
    'months-flowers': [3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    flowers:
      'Die Blüten eignen sich für süsse Desserts, aber auch zusammen mit den Blättern als dekoratives Gewürz in herzhaft bunter Kräuterbutter und als krönender Abschluss über Salaten.',
    'months-leaves': [2, 3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    leaves:
      'Das Kraut der Taubnesseln ist uns nahezu die ganze Vegetationsperiode über als hervorragende Grundlage für schmackhafte, aromatische Teemischungen bekannt. Besonders junge Blätter und Triebspitzen bieten sich vor der Blüte ab Februar und noch während der Hauptblüte im April als Salat an. Als Gemüse gekocht sind die Blätter und Triebspitzen relativ mild und besonders gut als Suppengemüse geeignet. Sie können auch als spinatähnliches Gemüse oder als Hauptgemüsezutat eines Auflaufes zubereitet werden.',
    'months-fruits': [5, 6, 7, 8, 9, 10], // from table in book appendix
    fruits:
      'In den nach dem Abfallen der Blüte stehen bleibenden Kelchen findet man die Samen, welche gesammelt und nachgetrocknet werden können. Im Winter können sie auf der Fensterbank als frische Keimlinge für Salate dienen.',
    'months-roots': [9, 10], // from table in book appendix
    roots:
      'Die neuen Wurzeln der Triebausläufer verwendet man vorwiegend im Herbst als rohe Knabberei, in Salaten oder Suppen.',
    medicinal:
      'Blüten und Kraut werden arzneilich verwendet. In der Naturheilkunde gilt die Pflanze als belebend, entzündungshemmend, wirksam gegen Bakterien, schleimhautschützend, blutstillend, verdauungsfördernd und harntreibend. Entsprechend vielseitig ist die Anwendung: Zur Schleimlösung bei Katarrhen und Bronchitis, bei Beschwerden im Magen-Darm-Trakt, Gicht und Fieber. Äusserlich helfen Umschläge bei Hautschwellungen, Juckreiz, Nagelbettentzündungen, Beulen und Krampfadern.',
    indicator:
      'An nährstoffreichen Standorten, beispielsweise in Hecken und an Waldrändern. Sie bevorzugt frische bis feuchte Ruderalstellen. Man findet sie im Halbschatten von Gebüschen und Hecken, an Waldsäumen, Mauern und Straßengräben sowie in frischen Edellaubwäldern. Sie ist von der Ebene bis in Höhenlagen von etwa 2000 Meter anzutreffen.',
    ellenberg: {
      L: '5',
      T: 'x',
      K: '4',
      F: '6',
      R: '7',
      N: '8',
      S: '0',
      LF: 'H',
      LF_B: 'S'
    }
  },
  {
    id: 'lamiumAlbumL',
    name: 'Weisse Taubnessel',
    latin: 'Lamium Album L.',
    'family-name': 'Lippenblütengewächse',
    'family-latin': 'Lamiaceae',
    images: [
      'Lamium_album_LC0137-JoergHempel-wikipedia.jpg',
      'Lamium_album_Sturm39.jpg',
      'Lamium_album_001-hZell-wikipedia.jpg'
    ],
    description:
      'Die Weiße Taubnessel ist eine ausdauernde krautige Pflanze, die Wuchshöhen von 20 bis 70 Zentimetern erreicht. Am vierkantigen Stängel stehen kreuzgegenständig die gesägten und gestielten Laubblätter. Die Blütezeit reicht von April bis Oktober. Sie hat im Gegensatz zur Brennnessel keine Brennhaare und ist auch nicht direkt mit ihr verwandt. Die Ähnlichkeit der Blattform zur Brennnessel hat jedoch der Gattung den deutschen Namensteil „Nessel“ eingebracht. ',
    'months-edible': [2, 3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    taste:
      'Das Taubnesselkraut, die Keimlinge und die feinen Wurzeln haben einen feinwürzigen Pilzgeschmack. Die Behaarung ist an zarten Pflanzenteilen nicht störend. Andere mitteleuropäische Taubnesselarten sind ebenso verwendbar.',
    'months-flowers': [4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    flowers:
      'Die Blüten eignen sich für süsse Desserts, aber auch zusammen mit den Blättern als dekoratives Gewürz in herzhaft bunter Kräuterbutter und als krönender Abschluss über Salaten.',
    'months-leaves': [2, 3, 4, 5, 6, 7, 8, 9, 10], // from table in book appendix
    leaves:
      'Das Kraut der Taubnesseln ist uns nahezu die ganze Vegetationsperiode über als hervorragende Grundlage für schmackhafte, aromatische Teemischungen bekannt. Besonders junge Blätter und Triebspitzen bieten sich vor der Blüte ab Februar und noch während der Hauptblüte im April als Salat an. Als Gemüse gekocht sind die Blätter und Triebspitzen relativ mild und besonders gut als Suppengemüse geeignet. Sie können auch als spinatähnliches Gemüse oder als Hauptgemüsezutat eines Auflaufes zubereitet werden.',
    'months-fruits': [5, 6, 7, 8, 9, 10, 11], // from table in book appendix
    fruits:
      'In den nach dem Abfallen der Blüte stehen bleibenden Kelchen findet man die Samen, welche gesammelt und nachgetrocknet werden können. Im Winter können sie auf der Fensterbank als frische Keimlinge für Salate dienen.',
    'months-roots': [9, 10], // from table in book appendix
    roots:
      'Die neuen Wurzeln der Triebausläufer verwendet man vorwiegend im Herbst als rohe Knabberei, in Salaten oder Suppen.',
    medicinal:
      'Blüten und Kraut werden arzneilich verwendet. In der Naturheilkunde gilt die Pflanze als belebend, entzündungshemmend, wirksam gegen Bakterien, schleimhautschützend, blutstillend, verdauungsfördernd und harntreibend. Entsprechend vielseitig ist die Anwendung: Zur Schleimlösung bei Katarrhen und Bronchitis, bei Beschwerden im Magen-Darm-Trakt, Gicht und Fieber. Äusserlich helfen Umschläge bei Hautschwellungen, Juckreiz, Nagelbettentzündungen, Beulen und Krampfadern.',
    indicator:
      'An nährstoffreichen Lehmböden bis in etwa 1700 m Höhe. Die winterharten Taubnesseln wachsen am Weg- und Wiesenrand sowie in Gräben, Hecken und auf Schuttplätzen. Sie wächst besonders auf stickstoffreichem Boden. Nach Ellenberg ist die Weiße Taubnessel eine Halblichtpflanze, ein Frischezeiger, an übermäßig stickstoffreichen Standorten wachsend.',
    ellenberg: {
      L: '7',
      T: 'x',
      K: '3',
      F: '5',
      R: 'x',
      N: '9',
      S: '0',
      LF: 'H',
      LF_B: 'S'
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
