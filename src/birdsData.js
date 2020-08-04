const birdsData = [
    [
        {
            id: 1,
            name: 'Волнистый попугай',
            species: 'Melopsittacus undulatus',
            description:
                'В списке самых популярных и любимых птиц волнистые попугаи занимают почетное первое место. Их жизнерадостность, открытость и стремление к общению помогли им стать настоящим другом для человека.',
            image: 'assets/img/budgerigar.jpg',
            audio: 'assets/audio/budgerigar.mp3',
        },
        {
            id: 2,
            name: 'Корелла',
            species: 'Nymphicus',
            description:
                'Эта волшебная птица родом из Австралии. Волшебная, потому что помимо своего народного австралийского имени Корелла, у нее есть и второе имя, которое дали ей европейские натуралисты – Нимфа.',
            image: 'assets/img/nymphicus.jpg',
            audio: 'assets/audio/nymphicus.mp3',
        },
        {
            id: 3,
            name: 'Неразлучники',
            species: 'Agapornis',
            description:
                'Свое столь романтичное название эти птицы получили за счет верности и необыкновенной нежности друг к другу. Считается, что в дикой природе эти особи, выбирая пару, хранят потом ей верность до самой смерти одного из партнеров.',
            image: 'assets/img/agapornis.jpg',
            audio: 'assets/audio/agapornis.mp3',
        },
        {
            id: 4,
            name: 'Роскошный горный попугай',
            species: 'Polytelis anthopeplus',
            description:
                'Роскошный горный попугай – это, в первую очередь, грациозная и сообразительная птица. Дружба с ней, принесет вам много радостных мгновений, но при условии, что резкий и громкий голос попугая не будет доставлять вам дискомфорта.',
            image: 'assets/img/polytelis_anthopeplus.jpg',
            audio: 'assets/audio/polytelis_anthopeplus.mp3',
        },
        {
            id: 5,
            name: 'Благородный попугай',
            species: 'Eclectus roratus',
            description:
                'Благородные зелено-красные попугаи очень умные и добрые птицы. Их поведение оправдывает свое название – это действительно чувственные и интеллигентные создания.',
            image: 'assets/img/eklektus.jpg',
            audio: 'assets/audio/eclectus.mp3',
        },
        {
            id: 6,
            name: 'Какарики',
            species: 'Cyanoramphus',
            description:
                'Попугаи какарики – одни из самых непоседливых и гиперактивных попугаев, которых содержат в неволе. Свое название они получили из языка маори, что в переводе означает «маленький попугайчик».',
            image: 'assets/img/cyanoramphus.jpg',
            audio: 'assets/audio/cyanoramphus.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Сизый голубь',
            species: 'Columba livia',
            description:
                'Вокализация — характерное для семейства в целом воркование: раскатистое, глухое урчание, особенно ярко выраженное у самцов в брачный период, когда они подзывают самок или метят территорию. ',
            image: 'assets/img/colomba.jpg',
            audio: 'assets/audio/columba.mp3',
        },
        {
            id: 2,
            name: 'Вяхирь',
            species: 'Columba palumbus',
            description:
                'Вяхирь – самый крупный в Европе лесной голубь. Голос у самца низкий и глухой, нередко воркование вяхиря пугает путников в лесу.',
            image: 'assets/img/columba_palumbus.jpg',
            audio: 'assets/audio/columba_palumbus.mp3',
        },
        {
            id: 3,
            name: 'Обыкновенная горлица',
            species: 'Streptopelia turtur',
            description:
                'Название дано горлицам за выделяющийся рисунок на шее. Иногда предполагают, что источником названия послужило звукоподражание воркованию горлицы, которое могли изображать в виде гур-гур.',
            image: 'assets/img/turtur.jpg',
            audio: 'assets/audio/streptopelia.mp3',
        },
        {
            id: 4,
            name: 'Кольчатая горлица',
            species: 'Streptopelia decaocto',
            description:
                'Взлетает и летит эта птица с характерным хлопаньем крыльев, полёт у нее быстрый, маневренный, на небольшой высоте; привлекает внимание длинный ступенчатый хвост с широкой белой полосой по краю.',
            image: 'assets/img/streptopelia_decaocto.jpg',
            audio: 'assets/audio/streptopelia_decaocto.mp3',
        },
        {
            id: 5,
            name: 'Клинтух',
            species: 'Columba oenas',
            description:
                'Воркование — серия повторяющихся глухих двухсложных выкриков несколько истерической интонации, с ударением на первый слог. Воркующая птица обычно сидит в глубине кроны, увидеть её трудно.',
            image: 'assets/img/columba_oenas.jpg',
            audio: 'assets/audio/columba_oenas.mp3',
        },
        {
            id: 6,
            name: 'Венценосный голубь',
            species: 'Goura',
            description:
                'Как говорят опытные голубятники, венценосный голубь является настоящей королевской особой среди огромного количества пород и видов этих пернатых.',
            image: 'assets/img/goura.jpg',
            audio: 'assets/audio/goura.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Чирок-трескунок',
            species: 'Anas querquedula',
            description:
                'У селезня — тихий скрипучий треск, у самки — дребезжащее кряканье. Издает при взлете отрывистое “клеррб, клеррб”, визгливое “кнэк” или “кнэрр”.',
            image: 'assets/img/anas_querquedula.jpg',
            audio: 'assets/audio/anas_querquedula.mp3',
        },
        {
            id: 2,
            name: 'Чирок-свистунок',
            species: 'Anas crecca',
            description:
                'Голос самца в брачный период — ритмичные переливчатые посвисты «тир-лик, тир-лик». Кряканье самки высокое по тембру, писклявое.',
            image: 'assets/img/anas_crecca.jpg',
            audio: 'assets/audio/anas_crecca.mp3',
        },
        {
            id: 3,
            name: 'Серый гусь',
            species: 'Anser anser',
            description:
                'Серый гусь - крупная птица, являющаяся родоначальником домашних гусей. Это гусь хорошо ходит и быстро бегает по земле, а также превосходно плавает и ныряет, но спасается нырянием только в период линьки.',
            image: 'assets/img/anser.jpg',
            audio: 'assets/audio/anser.mp3',
        },
        {
            id: 4,
            name: 'Серая утка',
            species: 'Anas strepera',
            description:
                'Серая утка чаще подаёт свой голос по сравнению, например, с кряквой. Голос самки более трескучий, а самца похож на карканье вороны.',
            image: 'assets/img/anas_strepera.jpg',
            audio: 'assets/audio/anas_strepera.mp3',
        },
        {
            id: 5,
            name: 'Шилохвость',
            species: 'Anas acuta',
            description:
                'Самка крякает очень похоже на домашнюю утку и крякву, но немного грубее. От самца в брачное время можно слышать короткий свистовой звук, который начинается с негромкого хрипловатого "придыхания".',
            image: 'assets/img/anas_acuta.jpg',
            audio: 'assets/audio/anas_acuta.mp3',
        },
        {
            id: 6,
            name: 'Обыкновенная гага',
            species: 'Somateria mollissima',
            description:
                'Достаточно большая по размерам, коренастого типа утка, обладает относительно укороченной шеей, а также крупной головой и клинообразным, похожим на гусиный, клювом.',
            image: 'assets/img/somateria_mollissima.jpg',
            audio: 'assets/audio/somateria_mollissima.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Белый аист',
            species: 'Ciconia ciconia',
            description:
                'Отличительными чертами этого вида являются общая бело-чёрная окраска, а также длинные красные лапы и клюв. Характерен силуэт летящей птицы с вытянутой шеей и расправленными широкими и длинными крыльями.',
            image: 'assets/img/ciconia_ciconia.jpg',
            audio: 'assets/audio/ciconia_ciconia.mp3',
        },
        {
            id: 2,
            name: 'Египетская цапля',
            species: 'Bubulcus ibis',
            description:
                'Цапля средних размеров, общий окрас оперения белый. Имеет характерную форму головы, отличающуюся массивным клювом и выдающейся зобной частью. В период размножения грудь, спина и голова приобретают ярко-рыжий цвет, клюв становится красновато-жёлтым.',
            image: 'assets/img/bubulcus_ibis.jpg',
            audio: 'assets/audio/bubulcus_ibis.mp3',
        },
        {
            id: 3,
            name: 'Обыкновенная кваква',
            species: 'Nycticorax nycticorax',
            description:
                'Кваква более криклива, чем другие цапли. Её обычные крики звучат как «квау, квау» или «квак, квак, квак», повторяясь несколько раз со значительными интервалами. Наиболее часто голос кваквы удаётся слышать с наступлением сумерек, когда птицы находятся высоко в воздухе, или же при взлёте.',
            image: 'assets/img/nycticorax.jpg',
            audio: 'assets/audio/nycticorax_nycticorax.mp3',
        },
        {
            id: 4,
            name: 'Малая выпь',
            species: 'Ixobrychus minutus',
            description:
                'Весенняя песня самца — глухие, однообразные звуки «крро, крро…» или «врро, врро…», следующие один за другим с интервалом в 2-3 секунды. Поют в основном в сумерках. Другие звуки малой выпи — скрежещущее стрекотание; мелодичное, но напоминающее карканье «кэв» и другое.',
            image: 'assets/img/ixobrychus_minutus.jpg',
            audio: 'assets/audio/ixobrychus_minutus.mp3',
        },
        {
            id: 5,
            name: 'Большая белая цапля',
            species: 'Casmerodius albus',
            description:
                'Эту крупную цаплю невозможно не узнать благодаря её полностью белому оперению. В зимнем наряде её клюв жёлтый, в брачный период он окрашивается в чёрный цвет. Тогда же на спине образуются украшения в виде длинных нитеобразных перьев — эгреток.',
            image: 'assets/img/casmerodius_albus.jpg',
            audio: 'assets/audio/casmerodius_albus.mp3',
        },
        {
            id: 6,
            name: 'Каравайка',
            species: 'Plegadis falcinellus',
            description:
                'Молчалива, за пределами гнездовых колоний от неё очень редко удаётся услышать хоть какой-то звук. У гнёзд издаёт негромкие крики, напоминающие карканье и шипенье.',
            image: 'assets/img/plegadis_falcinellus.jpg',
            audio: 'assets/audio/plegadis_falcinellus.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Камышница',
            species: 'Gallinula chloropus',
            description:
                'Среди болотных птиц камышница одна из первых оповещает об опасности громким тревожным криком. Её манера плавать не лишена изящества, при этом шея её совершает лёгкие покачивания, а хвост поднят вверх.',
            image: 'assets/img/gallinula_chloropus.jpg',
            audio: 'assets/audio/gallinula_chloropus.mp3',
        },
        {
            id: 2,
            name: 'Серый журавль',
            species: 'Grus grus',
            description:
                ' Во время сезонных миграций объединяется в многочисленные стаи, выстраивающиеся в полёте клином. Громкие крики, издаваемые чаще всего в полёте, напоминают звук трубы.',
            image: 'assets/img/grus_grus.jpg',
            audio: 'assets/audio/grus_grus.mp3',
        },
        {
            id: 3,
            name: 'Султанка',
            species: 'Porphyrio porphyrio',
            description:
                'С лёгкостью передвигается по густой водной растительности благодаря длинным пальцам, хорошо лазает по стеблям растений. Голосовой диапазон богат и разнообразен, крики этой птицы напоминают хрюканье, свист и звуки трубы.',
            image: 'assets/img/purple_gallinule.jpg',
            audio: 'assets/audio/porphyrio_martinica.mp3',
        },
        {
            id: 4,
            name: 'Стрепет',
            species: 'Tetrax tetrax',
            description:
                'Голос стрепета — отрывистое, сухое «трэкк-трэкк». Своеобразен полет стрепета. Сорвавшись с земли, он летит очень быстро. Кажется, что птица дрожит и трепещет на месте, но в то же время быстро двигается вперед.',
            image: 'assets/img/tetrax_tetrax.jpg',
            audio: 'assets/audio/tetrax_tetrax.mp3',
        },
        {
            id: 5,
            name: 'Лысуха',
            species: '	Fulica atra',
            description:
                'Пacтушковая птица крупных размеров, которую легко узнать по общей шиферно-чёрной окраске, контрастирующей с белыми клювом и «бляшкой» на лбу, и по зеленоватым лапам.',
            image: 'assets/img/fulica_atra.jpg',
            audio: 'assets/audio/fulica_atra.mp3',
        },
        {
            id: 6,
            name: 'Малый погоныш',
            species: 'Porzana parva',
            description:
                'Птица малых размеров с буро-оливковой верхней частью тела и тёмно-серой нижней. Жёлто-зелёный клюв имеет основание красного цвета, ноги зеленоватые с лёгким желтоватым отливом.',
            image: 'assets/img/porzana_parva.jpg',
            audio: 'assets/audio/porzana_parva.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Глухарь',
            species: 'Tetrao urogallus',
            description:
                'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
            image: 'assets/img/tetrao_urogallus.jpg',
            audio: 'assets/audio/tetrao_urogallus.mp3',
        },
        {
            id: 2,
            name: 'Рябчик',
            species: 'Bonasa bonasia',
            description:
                'Песня – тонкая длинная свистовая трель, отличающаяся у самца и самки только характером ее звукового рисунка. У самца: "фииить, фюиииить, фюИть-ти-ти-те-тю".',
            image: 'assets/img/bonasa_bonasia.jpg',
            audio: 'assets/audio/bonasa_bonasia.mp3',
        },
        {
            id: 3,
            name: 'Красная куропатка',
            species: 'Alectoris rufa',
            description:
                'Красная куропатка имеет ряд призывов, имеющих социальную функцию. Призывы «че» или «цет-псиэ-ток» могут повторяться длительное время. Пение самцов слышно на расстоянии более нескольких сотен метров.',
            image: 'assets/img/alectoris_rufa.jpg',
            audio: 'assets/audio/alectoris_rufa.mp3',
        },
        {
            id: 4,
            name: 'Обыкновенный фазан',
            species: 'Phasianus colchicus',
            description:
                'Всех фазанов отличает клинообразный длинный хвост, который суживается по направлению к кончику. Крылья короткие, овальные. У самцов на лапах есть характерные шпоры.',
            image: 'assets/img/phasianus_colchicus.jpg',
            audio: 'assets/audio/phasianus_colchicus.mp3',
        },
        {
            id: 5,
            name: 'Европейский кеклик',
            species: 'Alectoris graeca',
            description:
                'Этот вид отличается сероватой окраской верхней части тела, грудью винного цвета и характерной чёрной полосой, которая, подобно воротничку, окаймляет белое горло и направляется к глазам и лбу.',
            image: 'assets/img/alectoris_graeca.jpg',
            audio: 'assets/audio/alectoris_graeca.mp3',
        },
        {
            id: 6,
            name: 'Полевой тетерев',
            species: '	Lyrurus tetrix',
            description:
                'Тетерев наиболее интенсивно токует на рассвете, издавая «бормотание», похожее на воркование голубя.',
            image: 'assets/img/lyrurus_tetrix.jpg',
            audio: 'assets/audio/lyrurus_tetrix.mp3',
        },
    ],
];

export default birdsData;
