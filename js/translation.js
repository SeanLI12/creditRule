let popularlist=["o_GENERALRULES","o_FOOTBALL","o_BASKETBALL","o_PARLAYMULTIPLES","o_GASHOUT","o_BETBUILDER","o_OUTRIGHTS","o_EACHWAY"];

let localization={
	"All Terms":[
	   {
		  "_CMSKEY":"o_SPORTSRULES",
		  "EN":"Sport Rules",
		  "ZH":"体育规则",
		  "ID":"Sport Rules",
		  "JA":"Sport Rules",
		  "KM":"Sport Rules",
		  "KO":"Sport Rules",
		  "PT":"Sport Rules",
		  "TH":"Sport Rules",
		  "VI":"Sport Rules",
		  "FILE":"sportrule"
	   },
	   {
		  "_CMSKEY":"o_GENERALRULES",
		  "EN":"General",
		  "ZH":"一般体育说明",
		  "ID":"RINGKASAN",
		  "JA":"概要",
		  "KM":"ទស្សនៈទូទៅ",
		  "KO":"개요",
		  "PT":"VISÃO GERAL",
		  "TH":"เนื้อหาโดยรวม",
		  "VI":"CƯỢC THỂ THAO",
		  "FILE":"general"
	   },
	   {
		  "_CMSKEY":"o_FOOTBALL",
		  "EN":"Football",
		  "ZH":"足球",
		  "ID":"SEPAKBOLA",
		  "JA":"フットボール",
		  "KM":"កីឡាបាល់ទាត់",
		  "KO":"축구",
		  "PT":"FUTEBOL",
		  "TH":"ฟุตบอล",
		  "VI":"BÓNG ĐÁ",
		  "FILE":"football"
	   },
	   {
		  "_CMSKEY":"o_BASKETBALL",
		  "EN":"Basketball",
		  "ZH":"篮球",
		  "ID":"BOLA BASKET",
		  "JA":"バスケットボール",
		  "KM":"កីឡាបាល់បោះ",
		  "KO":"농구",
		  "PT":"BASQUETE",
		  "TH":"บาสเกตบอล",
		  "VI":"BÓNG RỔ",
		  "FILE":"basketball"
	   },
	   {
		  "_CMSKEY":"o_PARLAYMULTIPLES",
		  "EN":"Parlays Multiples",
		  "ZH":"连串过关/复式过关/组合过关",
		  "ID":"Parlays/Multiples/Taruhan Combo",
		  "JA":"パーレイ / マルチプル / コンボ ベット",
		  "KM":"ភ្នាល់គូបក/ភ្នាល់គូវិល/ភ្នាល់បកសរុប(Parlays / Multiples / Combo Bets)",
		  "KO":"팔레이 / 조합 베팅 / 콤보 베팅",
		  "PT":"Apostas múltiplas / Combinadas / Acumuladas",
		  "TH":"พาร์เลย์ / มัลติเพิล / คอมโบ เบท",
		  "VI":"Cược Xâu/ Cược liên hoàn",
		  "FILE":"parlays-multiples"
	   },
	   {
		  "_CMSKEY":"o_GASHOUT",
		  "EN":"Cash Out",
		  "ZH":"提前结算规则",
		  "ID":"Peraturan Cash Out",
		  "JA":"キャッシュアウトルール",
		  "KM":"ក្បួន Cash Out",
		  "KO":"캐시 아웃 규칙",
		  "PT":"Regras de Cash Out",
		  "TH":"แคชเอ้าท์",
		  "VI":"Luật Trả Cược Sớm",
		  "FILE":"cashout"
	   },
	   {
		  "_CMSKEY":"o_OUTRIGHTS",
		  "EN":"Outright",
		  "ZH":"冠军",
		  "ID":"OUTRIGHT",
		  "JA":"アウトライト",
		  "KM":"Outright (ការប្រកួតតាមព្រឹត្ដិការណ៍)",
		  "KO":"사전 예측 마켓",
		  "PT":"APOSTAS PARA CAMPEÃO",
		  "TH":"การทายผล",
		  "VI":"CƯỢC CHUNG CUỘC",
		  "FILE":"outright"
	   },
	   {
		  "_CMSKEY":"o_EACHWAY",
		  "EN":"Each Way",
		  "ZH":"独赢及位置的投注规则",
		  "ID":"TARUHAN PERINGKAT (E/W) Rules",
		  "JA":"イーチウェイ (E/W) ルール\t  ",
		  "KM":"ច្បាប់​នៃ​ការ​ភ្នាល់",
		  "KO":"연승식 베팅(연승식) 규칙\t  ",
		  "PT":"Regras Each Way ",
		  "TH":"กฎการเดิมพัน  \"ทายอันดับ\"",
		  "VI":"Luật  Cược Thắng/Xếp Hạng",
		  "FILE":"each-way"
	   },
	   {
		  "_CMSKEY":"o_AMERICANFOOTBALL",
		  "EN":"American Football",
		  "ZH":"美式足球",
		  "ID":"SEPAK BOLA AMERIKA",
		  "JA":"アメリカン　フットボール",
		  "KM":"AMERICAN FOOTBALL (បាល់ទាត់អាមេរិក)",
		  "KO":"미식 축구",
		  "PT":"FUTEBOL AMERICANO",
		  "TH":"อเมริกันฟุตบอล",
		  "VI":"BÓNG ĐÁ MỸ",
		  "FILE":"american-football"
	   },
	   {
		  "_CMSKEY":"o_ARCHERYSHOOTING",
		  "EN":"Archery / Shooting",
		  "ZH":"射箭与射击",
		  "ID":"PEMANAHAN DAN PENEMBAK",
		  "JA":"アーチェリー",
		  "KM":"ល្បែងបាញ់ព្រួញ",
		  "KO":"양궁 및 사격",
		  "PT":"ARCO E FLECHA",
		  "TH":"ยิงธนู &amp; ยิงปืน",
		  "VI":"BẮN CUNG VÀ BẮN SÚNG",
		  "FILE":"archery"
	   },
	   {
		  "_CMSKEY":"o_ATHLETICS",
		  "EN":"Athletic",
		  "ZH":"田径",
		  "ID":"ATLETIK",
		  "JA":"陸上競技",
		  "KM":"ATHLETICS (កីឡាអត្ដពលកម្ម)",
		  "KO":"육상",
		  "PT":"ATLETISMO",
		  "TH":"กรีฑา",
		  "VI":"ĐIỀN KINH",
		  "FILE":"athletic"
	   },
	   {
		  "_CMSKEY":"o_AUSSIERULES",
		  "EN":"Aussie Rules",
		  "ZH":"澳式足球",
		  "ID":"AUSSIE RULES",
		  "JA":"オージー　ルール",
		  "KM":"AUSSIE RULES (វិធានអូស្រ្តាលី)",
		  "KO":"호주 풋불 규칙",
		  "PT":"Futebol Australiano",
		  "TH":"กฎการเดิมพันแบบออสซี่",
		  "VI":"Aussie Rules",
		  "FILE":"aussie"
	   },
	   {
		  "_CMSKEY":"o_BADMINTON",
		  "EN":"Badminton",
		  "ZH":"羽毛球",
		  "ID":"BULU TANGKIS ",
		  "JA":"バトミントン",
		  "KM":"កីឡាវាយសី ",
		  "KO":"배드민턴",
		  "PT":"BADMINTON",
		  "TH":"แบดมินตัน",
		  "VI":"CẦU LÔNG",
		  "FILE":"badminton"
	   },
	   {
		  "_CMSKEY":"o_BASEBALL",
		  "EN":"Baseball",
		  "ZH":"棒球",
		  "ID":"BASEBALL",
		  "JA":"野球",
		  "KM":"BASEBALL (កីឡាវាយកូនបាល់)",
		  "KO":"야구",
		  "PT":"BEISEBOL",
		  "TH":"เบสบอล",
		  "VI":"BÓNG CHÀY",
		  "FILE":"baseball"
	   },
	   {
		  "_CMSKEY":"o_BEACHSOCCER",
		  "EN":"Beach Soccer",
		  "ZH":"沙滩足球",
		  "ID":"SEPAKBOLA PANTAI",
		  "JA":"ビーチ サッカー",
		  "KM":"Beach Soccer (បាល់ទាត់លើឆ្នេរខ្សាច់)",
		  "KO":"비치사커",
		  "PT":"FUTEBOL DE PRAIA (ou FUTEBOL DE AREIA)",
		  "TH":"ฟุตบอลชายหาด",
		  "VI":"BÓNG ĐÁ BÃI BIỂN",
		  "FILE":"beach-soccer"
	   },
	   {
		  "_CMSKEY":"o_BEACHVALLEYBALL",
		  "EN":"Beach Volleyball",
		  "ZH":"沙滩排球",
		  "ID":"VOLI PANTAI",
		  "JA":"ビーチ バレーボール",
		  "KM":"Beach Volleyball (បាល់ទះលើឆ្នេរខ្សាច់)",
		  "KO":"비치 발리볼",
		  "PT":"VÔLEI DE PRAIA",
		  "TH":"วอลเลย์บอลชายหาด",
		  "VI":"BÓNG CHUYỀN BÃI BIỂN",
		  "FILE":"beach-volleyball"
	   },
	   {
		  "_CMSKEY":"o_BOXINGFIGHTING",
		  "EN":"Boxing / Fighting",
		  "ZH":"拳击",
		  "ID":"TINJU",
		  "JA":"ボクシング",
		  "KM":"BOXING (កីឡាប្រដាល់)",
		  "KO":"권투",
		  "PT":"BOXE",
		  "TH":"มวย",
		  "VI":"QUYỀN ANH",
		  "FILE":"boxing"
	   },
	   {
		  "_CMSKEY":"o_CRICKET",
		  "EN":"Cricket",
		  "ZH":"板球",
		  "ID":"KRIKET ",
		  "JA":"クリケット",
		  "KM":"CRICKET (កីឡាគ្រីកឃេត)",
		  "KO":"크리켓",
		  "PT":"CRICKET",
		  "TH":"อเมริกันฟุตบอล",
		  "VI":"CRICKET",
		  "FILE":"cricket"
	   },
	   {
		  "_CMSKEY":"o_CYCLING",
		  "EN":"Cycling",
		  "ZH":"自行车",
		  "ID":"SEPEDA",
		  "JA":"サイクリング",
		  "KM":"Cycling (កីឡាជិះកង់)",
		  "KO":"사이클",
		  "PT":"CICLISMO",
		  "TH":"ปั่นจักรยาน",
		  "VI":"ĐUA XE ĐẠP",
		  "FILE":"cycling"
	   },
	   {
		  "_CMSKEY":"o_DART",
		  "EN":"Darts",
		  "ZH":"飞镖",
		  "ID":"PANAHAN",
		  "JA":"ダーツ",
		  "KM":"កីឡាគប់ព្រួញ",
		  "KO":"다트",
		  "PT":"DARDOS",
		  "TH":"ปาลูกดอก",
		  "VI":"NÉM PHI TIÊU",
		  "FILE":"darts"
	   },
	   {
		  "_CMSKEY":"o_ESPORTS",
		  "EN":"ESports",
		  "ZH":"电子竞技",
		  "ID":"ESPORTS",
		  "JA":"ESPORTS",
		  "KM":"ច្បាប់ទូទៅ",
		  "KO":"E스포츠",
		  "PT":"ESPORTS",
		  "TH":"อี-สปอร์ต",
		  "VI":"ESPORTS",
		  "FILE":"esports"
	   },
	   {
		  "_CMSKEY":"o_FIELDHOCKEY",
		  "EN":"Field Hockey",
		  "ZH":"曲棍球",
		  "ID":"LAPANGAN HOKI",
		  "JA":"フィールドホッケー",
		  "KM":"FIELD HOCKEY (កីឡាវាយកូនបាល់លើវាល)",
		  "KO":"필드 하키",
		  "PT":"HÓQUEI DE CAMPO",
		  "TH":"ฮอกกี้สนาม",
		  "VI":"KHÚC CÔN CẦU SÂN CỎ",
		  "FILE":"field-hockey"
	   },
	   {
		  "_CMSKEY":"o_FINANCIALBETS",
		  "EN":"Financial Bets",
		  "ZH":"金融投注",
		  "ID":"TARUHAN FINANCIAL",
		  "JA":"ファイナンシャルベット",
		  "KM":"FINANCIAL BETS (ការភ្នាល់ហិរញ្ញវត្ថុ)",
		  "KO":"파이낸셜 베팅",
		  "PT":"APOSTAS FINANCEIRAS",
		  "TH":"ตลาดหุ้น",
		  "VI":"CƯỢC TÀI CHÍNH",
		  "FILE":"financial-bets"
	   },
	   {
		  "_CMSKEY":"o_FUTSAL",
		  "EN":"Futsal",
		  "ZH":"室内足球",
		  "ID":"FUTSAL",
		  "JA":"フットサル",
		  "KM":"(ហ្វូតសាល)",
		  "KO":"풋살",
		  "PT":"FUTSAL",
		  "TH":"ฟุตซอล",
		  "VI":"BÓNG ĐÁ TRONG NHÀ",
		  "FILE":"futsal"
	   },
	   {
		  "_CMSKEY":"o_GOLF",
		  "EN":"Golf",
		  "ZH":"高尔夫球",
		  "ID":"GOLF",
		  "JA":"ゴルフ",
		  "KM":"GOLF វាយកូនគោល",
		  "KO":"골프",
		  "PT":"GOLF",
		  "TH":"กอล์ฟ",
		  "VI":"GOLF",
		  "FILE":"golf"
	   },
	   {
		  "_CMSKEY":"o_GYMNASTICS",
		  "EN":"Gymnastics",
		  "ZH":"体操",
		  "ID":"OLAHRAGA SENAM",
		  "JA":"器械体操",
		  "KM":"GYMNASTICS (កីឡាកាយសម្ព័ន្ធ)",
		  "KO":"체조",
		  "PT":"GINÁSTICA",
		  "TH":"ยิมนาสติก",
		  "VI":"THỂ DỤC DỤNG CỤ",
		  "FILE":"gymnastics"
	   },
	   {
		  "_CMSKEY":"o_HANDBALL",
		  "EN":"Handball",
		  "ZH":"手球",
		  "ID":"BOLA TANGAN",
		  "JA":"ハンドボール",
		  "KM":"(កីឡាបាល់គប់)",
		  "KO":"핸드볼",
		  "PT":"HANDEBOL",
		  "TH":"แฮนบอล",
		  "VI":"BÓNG NÉM",
		  "FILE":"handball"
	   },
	   {
		  "_CMSKEY":"o_ICEHOCKEY",
		  "EN":"Ice Hockey",
		  "ZH":"冰球",
		  "ID":"HOKI ES ",
		  "JA":"アイスホッケー",
		  "KM":"(កីឡាវាយកូនបាល់លើទឹកកក)",
		  "KO":"아이스 하키",
		  "PT":"HÓQUEI NO GELO",
		  "TH":"ฮ็อกกี้น้ำแข็ง",
		  "VI":"KHÚC CÔN CẦU SÂN BĂNG",
		  "FILE":"ice-hockey"
	   },
	   {
		  "_CMSKEY":"o_JUDO",
		  "EN":"Judo / Wrestling / Taekwondo",
		  "ZH":"柔道、摔跤、跆拳道",
		  "ID":"JUDO",
		  "JA":"柔道",
		  "KM":"JUDO (កីឡាយូដូ)",
		  "KO":"유도/레슬링/태권도",
		  "PT":"JUDÔ",
		  "TH":"ยูโด/มวยปล้ำ/เทควันโด",
		  "VI":"JUDO / ĐẤU VẬT / TAEKWONDO",
		  "FILE":"judo"
	   },
	   {
		  "_CMSKEY":"o_LOTTERY",
		  "EN":"Lottery",
		  "ZH":"乐透彩票投注",
		  "ID":"TARUHAN LOTRE",
		  "JA":"ロッタリー・ ベッティング",
		  "KM":"LOTTERY BETTING (ការចាក់ឆ្នោត)",
		  "KO":"복권",
		  "PT":"APOSTAS DE LOTERIA",
		  "TH":"การเดิมพัน ลอตเตอรี่ ",
		  "VI":"CƯỢC XỔ SỐ ",
		  "FILE":"lottery"
	   },
	   {
		  "_CMSKEY":"o_LACROSSE",
		  "EN":"Lacrosse",
		  "ZH":"长曲棍球",
		  "ID":"LACROSSE",
		  "JA":"ラクロス",
		  "KM":"Lacrosse (កីឡាវាយកូនបាល់)",
		  "KO":"라크로스",
		  "PT":"LACROSSE",
		  "TH":"อเมริกันฟุตบอล",
		  "VI":"LACROSSE",
		  "FILE":"lacrosse"
	   },
	   {
		  "_CMSKEY":"o_MEDALBETTING",
		  "EN":"Medal Sports / Medal Betting",
		  "ZH":"体育/奖章投注",
		  "ID":"MEDAL SPORT / TARUHAN MEDALI",
		  "JA":"メダル スポーツ / メダル ベッティング",
		  "KM":"MEDAL SPORTS / MEDAL BETTING (កីឡាដណ្ដើមមេដាយ/ការភ្នាល់មេដាយ)",
		  "KO":"메달 스포츠/메달 배팅",
		  "PT":"ESPORTES COM MEDALHAS /APOSTAS EM MEDALHAS",
		  "TH":"กีฬาประเภทเหรียญ / การเดิมพันเหรียญรางวัล",
		  "VI":"CƯỢC TỔNG SỐ HUY CHƯƠNG",
		  "FILE":"medal-betting"
	   },
	   {
		  "_CMSKEY":"o_MOTOSPORT",
		  "EN":"Motor Sports",
		  "ZH":"赛车",
		  "ID":"MOTOR SPORT",
		  "JA":"モーター スポーツ",
		  "KM":"Motor sports (កីឡាប្រណាំងម៉ូតូ)",
		  "KO":"모터 스포츠",
		  "PT":"CORRIDA DE CARROS",
		  "TH":"การแข่งรถ",
		  "VI":"ĐUA XE MÔ-TÔ",
		  "FILE":"motor-sports"
	   },
	   {
		  "_CMSKEY":"o_OLYMPICS",
		  "EN":"Olympics",
		  "ZH":"奥林匹克或相关事件投注",
		  "ID":"Olimpiade & Pertandingan Dunia",
		  "JA":"オリンピック / ワールド ゲーム",
		  "KM":"Olympics / World Games (កីឡាអូឡាំពិក / កីឡាពិភពលោក)",
		  "KO":"올림픽 / 국제 선수권 대회",
		  "PT":"OLIMPÍADAS / CAMPEONATOS MUNDIAIS",
		  "TH":"โอลิมปิก/ การแข่งขันระดับชาติ",
		  "VI":"OLYMPICS / GIẢI ĐẤU THẾ GIỚI",
		  "FILE":"olympics"
	   },
	   {
		  "_CMSKEY":"o_SNOOKER",
		  "EN":"Snooker / Pool",
		  "ZH":"斯诺克/台球",
		  "ID":"SNOOKER / BILLYAR",
		  "JA":"スヌーカー / プール",
		  "KM":"កីឡាស្នូកឃ័រ ",
		  "KO":"스누커/포켓볼",
		  "PT":"SINUCA / BILHAR",
		  "TH":"สนุ๊กเกอร์ / พูล",
		  "VI":"BIDA",
		  "FILE":"snooker"
	   },
	   {
		  "_CMSKEY":"o_ROWINGCANOEING",
		  "EN":"Rowing / Canoeing",
		  "ZH":"赛艇和皮划艇",
		  "ID":"Dayung & Kano",
		  "JA":"ローイング / カヌーイング(ボート競技)",
		  "KM":"ROWING / CANOEING (កីឡាអុំទូក/ចែវទូក)",
		  "KO":"조정과 카누",
		  "PT":"REMO / CANOAGEM",
		  "TH":"เรือพาย/เรือแคนู",
		  "VI":"ĐUA THUYỀN / CA NÔ",
		  "FILE":"rowing"
	   },
	   {
		  "_CMSKEY":"o_SOFTBALL",
		  "EN":"Softball",
		  "ZH":"垒球",
		  "ID":"SEPAKBOLA",
		  "JA":"フットボール",
		  "KM":"កីឡាបាល់ទាត់",
		  "KO":"축구",
		  "PT":"FUTEBOL",
		  "TH":"ฟุตบอล",
		  "VI":"BÓNG ĐÁ",
		  "FILE":"softball"
	   },
	   {
		  "_CMSKEY":"o_TABLETENNIS",
		  "EN":"Table Tennis",
		  "ZH":"兵乓球",
		  "ID":"TENIS MEJA",
		  "JA":"テーブルテニス（卓球）",
		  "KM":"កីឡាវាយប៉េងប៉ុង",
		  "KO":"탁구",
		  "PT":"TÊNIS DE MESA",
		  "TH":"ปิงปอง",
		  "VI":"BÓNG BÀN",
		  "FILE":"table-tennis"
	   },
	   {
		  "_CMSKEY":"o_TENNIS",
		  "EN":"Tennis",
		  "ZH":"网球",
		  "ID":"TENIS",
		  "JA":"テニス",
		  "KM":" (កីឡាតិន្នីស)",
		  "KO":"테니스",
		  "PT":"TÊNIS",
		  "TH":"เทนนิส",
		  "VI":"QUẦN VỢT",
		  "FILE":"tennis"
	   },
	   {
		  "_CMSKEY":"o_TRIATHOLONMODERNPENTAHLON",
		  "EN":"Triathlon / Modern Pentahlon",
		  "ZH":"三项全能和现代五项运动",
		  "ID":"Triathlon Dan Pancalomba",
		  "JA":"トライアスロン＆モダン・ペンタロン（近代5種競技）",
		  "KM":"TRIATHLON AND MODERN PENTATHLON RULES (កីឡាទ្រីយ៉ាថ្លុនិង កីឡាទំនើបទាំងប្រាំ)",
		  "KO":"철인 3종 경기와 근대 5종 경기",
		  "PT":"TRIATLO & PENTATLO MODERNO",
		  "TH":"กฎ ไตรกีฬา และ ปัญจกีฬาสมัยใหม่",
		  "VI":"BA VÀ NĂM MÔN THI ĐẤU PHỐI HỢP",
		  "FILE":"triathlon-modern-pentahlon"
	   },
	   {
		  "_CMSKEY":"o_VOLLEYBALL",
		  "EN":"Volleyball",
		  "ZH":"排球",
		  "ID":"BOLA VOLI",
		  "JA":"バレーボール",
		  "KM":"កីឡាបាល់ទះ",
		  "KO":"배구",
		  "PT":"VOLEIBOL",
		  "TH":"วอลเลย์บอล",
		  "VI":"BÓNG CHUYỀN",
		  "FILE":"volleyball"
	   },
	   {
		  "_CMSKEY":"o_WATERPOLO",
		  "EN":"Water Polo",
		  "ZH":"水球",
		  "ID":"POLO AIR",
		  "JA":"ウォーター・ポロ（水球）",
		  "KM":"Water Polo (កីឡាបាល់គប់ក្នុងទឹក)",
		  "KO":"수구",
		  "PT":"PÓLO AQUÁTICO",
		  "TH":"โปโลน้ำ",
		  "VI":"BÓNG NƯỚC",
		  "FILE":"water-polo"
	   },
	   {
		  "_CMSKEY":"o_WEIGHTLIFTING",
		  "EN":"Weightlifting",
		  "ZH":"举重",
		  "ID":"WEIGHTLIFTING",
		  "JA":"ウェイトリフティング（重量上げ）",
		  "KM":"Weightlifting (កីឡាលើកទម្ងន់)",
		  "KO":"역도",
		  "PT":"HALTEROFILISMO",
		  "TH":"กีฬายกน้ำหนัก",
		  "VI":"CỬ TẠ",
		  "FILE":"weightlifting"
	   },
	   {
		  "_CMSKEY":"o_WINTERSPORTSWINTEROLYMPICS",
		  "EN":"Wintersports / Winter Olympics",
		  "ZH":"冬季运动& 冬季奥运会/比赛",
		  "ID":"WINTER SPORTS & WINTER OLYMPICS / GAMES",
		  "JA":"ウィンター（冬季）スポーツ＆ウィンター（冬季）オリンピック / ゲーム",
		  "KM":"Wintersports-Winterolympics (កីឡារដូវរងា និងកីឡាអូឡាំពិករដូវរងា/កីឡាផ្សេងៗ)",
		  "KO":"동계 스포츠/동계 올림픽",
		  "PT":"ESPORTES DE INVERNO & JOGOS OLÍMPICOS DE INVERNO",
		  "TH":"กีฬาฤดูหนาวและโอลิมปิกฤดูหนาว / เกม",
		  "VI":"CƯỢC THỂ THAO& OLYMPICS MÙA ĐÔNG",
		  "FILE":"wintersports-winterolympics"
	   },
	   {
		  "_CMSKEY":"o_POPULAR",
		  "EN":"Popular",
		  "ZH":"热门",
		  "ID":"Popular",
		  "JA":"Popular",
		  "KM":"Popular",
		  "KO":"Popular",
		  "PT":"Popular",
		  "TH":"Popular",
		  "VI":"Popular",
		  "FILE":"Popular"
	   },
	   {
		  "_CMSKEY":"o_ALLSPORTSATOZ",
		  "EN":"All Sports A - Z",
		  "ZH":"按拼音排序",
		  "ID":"All Sports A - Z",
		  "JA":"All Sports A - Z",
		  "KM":"All Sports A - Z",
		  "KO":"All Sports A - Z",
		  "PT":"All Sports A - Z",
		  "TH":"All Sports A - Z",
		  "VI":"All Sports A - Z",
		  "FILE":"allsportsatoz"
	   }
	]
 }