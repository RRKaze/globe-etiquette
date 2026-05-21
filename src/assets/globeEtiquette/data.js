export const DATA = {
  "Japan": {
    flag:"🇯🇵", capital:"Tokyo", language:"Japanese", currency:"Yen (¥)", population:"126M",
    do:[
      { text:"Remove shoes before entering homes and many traditional restaurants", cat:"general" },
      { text:"Bow slightly when greeting someone as a sign of respect", cat:"greeting" },
      { text:"Use both hands when giving or receiving items, especially business cards", cat:"greeting" },
      { text:"Speak quietly on public transport — keep phone calls silent", cat:"transport" },
      { text:"Carry your own shopping bags; shops may charge for plastic bags", cat:"general" },
      { text:"Queue patiently and wait your turn in all public spaces", cat:"general" },
      { text:"Say 'Itadakimasu' before eating to show gratitude for the meal", cat:"food" }
    ],
    dont:[
      { text:"Don't tip — it can be considered rude or even insulting", cat:"greeting" },
      { text:"Don't eat or drink while walking in public", cat:"food" },
      { text:"Don't blow your nose in public; excuse yourself to a restroom", cat:"general" },
      { text:"Don't point at people or objects directly with your finger", cat:"general" },
      { text:"Don't stick chopsticks upright in rice — it resembles funeral rites", cat:"food" },
      { text:"Don't speak loudly on the phone while on trains or buses", cat:"transport" },
      { text:"Don't pass food chopstick-to-chopstick — also a funeral custom", cat:"food" }
    ],
    regions:["Tokyo","Osaka","Kyoto","Hokkaido","Okinawa","Hiroshima","Fukuoka"],
    phrases:[
      {label:"Hello",        native:"こんにちは",  romanized:"Konnichiwa"},
      {label:"Thank you",    native:"ありがとうございます", romanized:"Arigatou gozaimasu"},
      {label:"Excuse me",    native:"すみません",  romanized:"Sumimasen"},
      {label:"Help!",        native:"助けて！",    romanized:"Tasukete!"},
      {label:"Please",       native:"お願いします", romanized:"Onegaishimasu"},
      {label:"Sorry",        native:"ごめんなさい", romanized:"Gomennasai"},
    ]
  },
  "France": {
    flag:"🇫🇷", capital:"Paris", language:"French", currency:"Euro (€)", population:"68M",
    do:[
      { text:"Greet with 'Bonjour' — always say hello entering shops or restaurants", cat:"greeting" },
      { text:"Attempt a few words of French; locals greatly appreciate the effort", cat:"greeting" },
      { text:"Take time to enjoy meals — dining is a leisurely cultural ritual", cat:"food" },
      { text:"Dress smartly, especially in Paris; French culture values presentation", cat:"dress" },
      { text:"Bring a small gift — wine, chocolates, or flowers — when invited home", cat:"greeting" },
      { text:"Keep your voice low in restaurants and public spaces", cat:"general" },
      { text:"Say 'S'il vous plaît' and 'Merci' — politeness is paramount", cat:"greeting" }
    ],
    dont:[
      { text:"Don't start eating until the host says 'Bon appétit'", cat:"food" },
      { text:"Don't ask for ketchup with a gourmet meal — it's considered insulting", cat:"food" },
      { text:"Don't be overly casual with strangers — use formal 'vous' not 'tu' initially", cat:"greeting" },
      { text:"Don't rush your waiter — good service here means not being hurried", cat:"food" },
      { text:"Don't expect shops open on Sundays in smaller towns", cat:"general" },
      { text:"Don't chew gum while speaking to someone — considered disrespectful", cat:"general" },
      { text:"Don't walk into a boulangerie and not buy anything just to browse", cat:"food" }
    ],
    regions:["Île-de-France","Normandy","Provence","Brittany","Alsace","Corsica","Loire Valley"],
    phrases:[
      {label:"Hello",        native:"Bonjour"},
      {label:"Thank you",    native:"Merci"},
      {label:"Excuse me",    native:"Excusez-moi"},
      {label:"Help!",        native:"Au secours !"},
      {label:"Please",       native:"S'il vous plaît"},
      {label:"Sorry",        native:"Pardon"},
    ]
  },
  "India": {
    flag:"🇮🇳", capital:"New Delhi", language:"Hindi, English + 20 others", currency:"Rupee (₹)", population:"1.4B",
    do:[
      { text:"Remove shoes before entering temples, mosques, and many homes", cat:"general" },
      { text:"Greet with 'Namaste' — press palms together and bow slightly", cat:"greeting" },
      { text:"Dress modestly, especially at religious sites; cover shoulders and knees", cat:"dress" },
      { text:"Use your right hand for eating, giving, and receiving anything", cat:"general" },
      { text:"Accept food or drinks when offered — refusing is impolite", cat:"food" },
      { text:"Bargain respectfully at markets; it is expected and part of the culture", cat:"general" },
      { text:"Be patient — schedules and timing can be flexible ('IST')", cat:"general" }
    ],
    dont:[
      { text:"Don't point your feet toward people or religious images", cat:"general" },
      { text:"Don't eat beef in Hindu-majority areas; cow is sacred", cat:"food" },
      { text:"Don't enter a place of worship during your period (some temples)", cat:"general" },
      { text:"Don't show public displays of affection in conservative areas", cat:"greeting" },
      { text:"Don't photograph people without asking permission first", cat:"general" },
      { text:"Don't refuse prasad (temple food offering) at a religious site", cat:"food" },
      { text:"Don't waste food — it is considered disrespectful and sinful", cat:"food" }
    ],
    regions:["Maharashtra","Rajasthan","Kerala","Tamil Nadu","Delhi","Goa","West Bengal"],
    phrases:[
      {label:"Hello",        native:"नमस्ते",      romanized:"Namaste"},
      {label:"Thank you",    native:"धन्यवाद",     romanized:"Dhanyavaad"},
      {label:"Excuse me",    native:"माफ़ करें",    romanized:"Maaf karein"},
      {label:"Help!",        native:"मदद करो!",    romanized:"Madad karo!"},
      {label:"Please",       native:"कृपया",       romanized:"Kripaya"},
      {label:"Sorry",        native:"माफ़ करना",    romanized:"Maaf karna"},
    ]
  },
  "United States": {
    flag:"🇺🇸", capital:"Washington D.C.", language:"English", currency:"Dollar ($)", population:"331M",
    do:[
      { text:"Tip 15–20% at restaurants, bars, taxis, and salons — it's expected", cat:"greeting" },
      { text:"Hold the door open for the person behind you", cat:"general" },
      { text:"Make eye contact and smile when greeting someone", cat:"greeting" },
      { text:"Respect personal space — keep about an arm's length distance", cat:"greeting" },
      { text:"Arrive on time or call ahead if you'll be late for any engagement", cat:"general" },
      { text:"Flush public toilets and clean up after yourself at all times", cat:"general" },
      { text:"Say 'please', 'thank you', and 'excuse me' in daily interactions", cat:"greeting" }
    ],
    dont:[
      { text:"Don't cut in line — respecting queues is taken very seriously", cat:"general" },
      { text:"Don't discuss salary, politics, or religion with people you just met", cat:"greeting" },
      { text:"Don't smoke in non-designated areas — heavy fines can apply", cat:"general" },
      { text:"Don't jaywalk in major cities — it is illegal and fined", cat:"transport" },
      { text:"Don't forget to tip hotel staff, bellhops, and housekeeping", cat:"greeting" },
      { text:"Don't be overly casual with police — remain calm and cooperative", cat:"general" },
      { text:"Don't litter — fines can be steep and locals take pride in cleanliness", cat:"general" }
    ],
    regions:["California","Texas","New York","Florida","Washington","Illinois","Hawaii","Alaska"],
    phrases:[
      {label:"Hello",        native:"Hello"},
      {label:"Thank you",    native:"Thank you"},
      {label:"Excuse me",    native:"Excuse me"},
      {label:"Help!",        native:"Help!"},
      {label:"Please",       native:"Please"},
      {label:"Sorry",        native:"Sorry"},
    ]
  },
  "Brazil": {
    flag:"🇧🇷", capital:"Brasília", language:"Portuguese", currency:"Real (R$)", population:"215M",
    do:[
      { text:"Greet with a kiss on the cheek (one or two depending on region)", cat:"greeting" },
      { text:"Dress casually — Brazilians are very relaxed about clothing", cat:"dress" },
      { text:"Be warm and affectionate — Brazilians are very tactile and friendly", cat:"greeting" },
      { text:"Be patient with flexible timing — 'Brazilian time' often means arriving 30+ min late", cat:"general" },
      { text:"Enjoy churrasco (BBQ) meals — refuse and you'll offend the host", cat:"food" },
      { text:"Learn a few words of Portuguese — it shows genuine respect", cat:"greeting" },
      { text:"Embrace small talk before getting to business in meetings", cat:"greeting" }
    ],
    dont:[
      { text:"Don't make the 'OK' hand gesture — it is considered very rude", cat:"greeting" },
      { text:"Don't assume everyone speaks Spanish — they speak Portuguese", cat:"greeting" },
      { text:"Don't wear green and yellow outside of football celebrations", cat:"dress" },
      { text:"Don't discuss Argentina unless you're ready for a lively debate", cat:"general" },
      { text:"Don't be overly formal in social settings — it creates distance", cat:"greeting" },
      { text:"Don't ignore safety advice in unfamiliar urban neighborhoods", cat:"general" },
      { text:"Don't show impatience if things run late — it's culturally normal", cat:"general" }
    ],
    regions:["São Paulo","Rio de Janeiro","Bahia","Amazonas","Minas Gerais","Pernambuco","Santa Catarina"],
    phrases:[
      {label:"Hello",        native:"Olá"},
      {label:"Thank you",    native:"Obrigado / Obrigada"},
      {label:"Excuse me",    native:"Com licença"},
      {label:"Help!",        native:"Socorro!"},
      {label:"Please",       native:"Por favor"},
      {label:"Sorry",        native:"Desculpe"},
    ]
  },
  "Saudi Arabia": {
    flag:"🇸🇦", capital:"Riyadh", language:"Arabic", currency:"Riyal (SAR)", population:"35M",
    do:[
      { text:"Dress modestly — women should cover hair and wear abaya in public", cat:"dress" },
      { text:"Greet with 'As-salamu alaykum' and accept tea or coffee when offered", cat:"greeting" },
      { text:"Show respect for prayer times — businesses close 5 times daily", cat:"general" },
      { text:"Use your right hand for handshakes, eating, and passing items", cat:"general" },
      { text:"Wait for your host to begin eating before you start", cat:"food" },
      { text:"Respect elders and give them precedence in all social situations", cat:"greeting" },
      { text:"Remove shoes before entering someone's home", cat:"general" }
    ],
    dont:[
      { text:"Don't drink alcohol — it is strictly illegal in the country", cat:"food" },
      { text:"Don't eat, drink, or smoke in public during Ramadan daylight hours", cat:"food" },
      { text:"Don't display affection publicly — it can result in legal trouble", cat:"greeting" },
      { text:"Don't photograph government buildings, military sites, or people without consent", cat:"general" },
      { text:"Don't engage in negative talk about Islam, the royal family, or the government", cat:"general" },
      { text:"Don't wear revealing clothing in public areas", cat:"dress" },
      { text:"Don't schedule important meetings on Fridays — it is the holy day", cat:"general" }
    ],
    regions:["Riyadh Province","Mecca","Medina","Eastern Province","Asir","Tabuk","Hail"],
    phrases:[
      {label:"Hello",        native:"السلام عليكم",  romanized:"As-salamu alaykum"},
      {label:"Thank you",    native:"شكراً",          romanized:"Shukran"},
      {label:"Excuse me",    native:"عفواً",          romanized:"Afwan"},
      {label:"Help!",        native:"النجدة!",        romanized:"An-najda!"},
      {label:"Please",       native:"من فضلك",        romanized:"Min fadlak"},
      {label:"Sorry",        native:"آسف",            romanized:"Aasif"},
    ]
  },
  "Germany": {
    flag:"🇩🇪", capital:"Berlin", language:"German", currency:"Euro (€)", population:"84M",
    do:[
      { text:"Be punctual — arriving on time is a sign of respect and professionalism", cat:"general" },
      { text:"Greet everyone with a firm handshake and direct eye contact", cat:"greeting" },
      { text:"Separate your rubbish into the correct recycling bins (Pfand system)", cat:"general" },
      { text:"Be direct and straightforward — honesty is valued over vague politeness", cat:"general" },
      { text:"Carry cash — many shops and restaurants do not accept cards", cat:"general" },
      { text:"Follow pedestrian crossing signals even when no cars are present", cat:"transport" },
      { text:"Respect quiet hours (Ruhezeit) — no loud noise between 10pm and 7am", cat:"general" }
    ],
    dont:[
      { text:"Don't be late to meetings, dinners, or appointments", cat:"general" },
      { text:"Don't make jokes about World War II or Nazi history", cat:"general" },
      { text:"Don't cross the street on a red light, especially in front of children", cat:"transport" },
      { text:"Don't be overly informal with strangers — use 'Sie' not 'du' initially", cat:"greeting" },
      { text:"Don't leave a messy table at a restaurant without stacking plates", cat:"food" },
      { text:"Don't mow your lawn or make loud noise on Sundays", cat:"general" },
      { text:"Don't refuse a handshake — it is considered extremely rude", cat:"greeting" }
    ],
    regions:["Bavaria","Berlin","Hamburg","Baden-Württemberg","North Rhine-Westphalia","Saxony","Thuringia"],
    phrases:[
      {label:"Hello",        native:"Hallo"},
      {label:"Thank you",    native:"Danke schön"},
      {label:"Excuse me",    native:"Entschuldigung"},
      {label:"Help!",        native:"Hilfe!"},
      {label:"Please",       native:"Bitte"},
      {label:"Sorry",        native:"Es tut mir leid"},
    ]
  },
  "Thailand": {
    flag:"🇹🇭", capital:"Bangkok", language:"Thai", currency:"Baht (฿)", population:"70M",
    do:[
      { text:"Greet with a 'wai' — press palms together and bow the head", cat:"greeting" },
      { text:"Remove shoes before entering temples and many homes", cat:"general" },
      { text:"Dress modestly at temples — cover shoulders and knees", cat:"dress" },
      { text:"Show respect to Buddhist monks; women must never touch them", cat:"general" },
      { text:"Smile — Thailand is called 'Land of Smiles' for good reason", cat:"greeting" },
      { text:"Carry small bills; street vendors and tuk-tuks prefer exact change", cat:"transport" },
      { text:"Stand for the national anthem played in cinemas and public events", cat:"general" }
    ],
    dont:[
      { text:"Don't touch anyone's head — it is the most sacred part of the body", cat:"general" },
      { text:"Don't point your feet at people or at Buddha images", cat:"general" },
      { text:"Don't say anything negative about the Royal Family — it is illegal", cat:"general" },
      { text:"Don't wear shoes into a temple; sandals are fine to leave at the door", cat:"dress" },
      { text:"Don't raise your voice or show anger publicly — losing face is shameful", cat:"general" },
      { text:"Don't bargain aggressively or rudely at markets", cat:"general" },
      { text:"Don't make physical contact with monks if you are a woman", cat:"general" }
    ],
    regions:["Bangkok","Chiang Mai","Phuket","Pattaya","Krabi","Koh Samui","Ayutthaya"],
    phrases:[
      {label:"Hello",        native:"สวัสดี",         romanized:"Sawasdee"},
      {label:"Thank you",    native:"ขอบคุณ",         romanized:"Khob khun"},
      {label:"Excuse me",    native:"ขอโทษ",          romanized:"Kho thot"},
      {label:"Help!",        native:"ช่วยด้วย!",       romanized:"Chuay duay!"},
      {label:"Please",       native:"กรุณา",          romanized:"Karuna"},
      {label:"Sorry",        native:"ขอโทษ",          romanized:"Kho thot"},
    ]
  },
  "China": {
    flag:"🇨🇳", capital:"Beijing", language:"Mandarin", currency:"Yuan (¥)", population:"1.4B",
    do:[
      { text:"Present and receive business cards with both hands and a slight bow", cat:"greeting" },
      { text:"Bring gifts when visiting someone's home — avoid clocks or shoes", cat:"greeting" },
      { text:"Pour tea for others before filling your own cup", cat:"food" },
      { text:"Wait for the host or eldest person to begin eating first", cat:"food" },
      { text:"Dress conservatively in rural areas and formal settings", cat:"dress" },
      { text:"Bargain at markets — it is an expected and enjoyable practice", cat:"general" },
      { text:"Use red envelopes (hongbao) for giving money as gifts", cat:"greeting" }
    ],
    dont:[
      { text:"Don't give a clock as a gift — it symbolizes death", cat:"greeting" },
      { text:"Don't tip in mainland China — it can cause confusion or offense", cat:"greeting" },
      { text:"Don't put bones or seeds directly on the table — use the dish provided", cat:"food" },
      { text:"Don't lose your temper in public — composure is highly valued", cat:"general" },
      { text:"Don't discuss Taiwan, Tibet, or Tiananmen casually", cat:"general" },
      { text:"Don't wrap gifts in white or black — they are associated with mourning", cat:"greeting" },
      { text:"Don't refuse food offered by a host — it is considered very rude", cat:"food" }
    ],
    regions:["Beijing","Shanghai","Guangdong","Sichuan","Xinjiang","Tibet","Yunnan"],
    phrases:[
      {label:"Hello",        native:"你好",     romanized:"Nǐ hǎo"},
      {label:"Thank you",    native:"谢谢",     romanized:"Xièxiè"},
      {label:"Excuse me",    native:"对不起",   romanized:"Duìbuqǐ"},
      {label:"Help!",        native:"救命！",   romanized:"Jiùmìng!"},
      {label:"Please",       native:"请",       romanized:"Qǐng"},
      {label:"Sorry",        native:"对不起",   romanized:"Duìbuqǐ"},
    ]
  },
  "Australia": {
    flag:"🇦🇺", capital:"Canberra", language:"English", currency:"AUD ($)", population:"26M",
    do:[
      { text:"Be relaxed and casual — Australians value a laid-back, informal approach", cat:"general" },
      { text:"Use humor and self-deprecation — Aussies love taking the mickey", cat:"greeting" },
      { text:"Tip optionally at nice restaurants; it's appreciated but not mandatory", cat:"greeting" },
      { text:"Respect Aboriginal culture and ask before photographing sacred sites", cat:"general" },
      { text:"Follow sun safety advice — the UV index is extremely high", cat:"general" },
      { text:"Hold doors open for others; small courtesies are standard", cat:"general" },
      { text:"Offer to shout (pay for) a round of drinks when with a group", cat:"food" }
    ],
    dont:[
      { text:"Don't be arrogant or brag — 'tall poppy syndrome' means showing off is frowned upon", cat:"general" },
      { text:"Don't litter — Australia takes its natural environment very seriously", cat:"general" },
      { text:"Don't swim between the flags at the beach without the lifeguard signal", cat:"general" },
      { text:"Don't joke about the bush or wildlife carelessly — wildfires are a real national issue", cat:"general" },
      { text:"Don't ignore wildlife warnings — snakes, spiders, and jellyfish are genuinely dangerous", cat:"general" },
      { text:"Don't refer to New Zealanders as Australians — they are very different cultures", cat:"greeting" },
      { text:"Don't be overly formal or stiff in casual social settings", cat:"greeting" }
    ],
    regions:["New South Wales","Victoria","Queensland","Western Australia","South Australia","Tasmania","Northern Territory"],
    phrases:[
      {label:"Hello",        native:"Hello"},
      {label:"Thank you",    native:"Thank you"},
      {label:"Excuse me",    native:"Excuse me"},
      {label:"Help!",        native:"Help!"},
      {label:"Please",       native:"Please"},
      {label:"Sorry",        native:"Sorry"},
    ]
  },
  "Mexico": {
    flag:"🇲🇽", capital:"Mexico City", language:"Spanish", currency:"Peso (MXN)", population:"130M",
    do:[
      { text:"Greet with a handshake or kiss on the right cheek", cat:"greeting" },
      { text:"Be warm and personable — building trust is key before any business", cat:"greeting" },
      { text:"Respect family values — family is central to Mexican society", cat:"general" },
      { text:"Enjoy street food from busy stalls — the busier, the better the food", cat:"food" },
      { text:"Attend local festivals if invited — Day of the Dead is a UNESCO celebration", cat:"general" },
      { text:"Learn basic Spanish phrases; locals appreciate the effort greatly", cat:"greeting" },
      { text:"Tip 10–15% at restaurants; tipping delivery workers is also common", cat:"greeting" }
    ],
    dont:[
      { text:"Don't confuse Mexican culture with American or Spanish culture", cat:"general" },
      { text:"Don't refer to yourself as 'American' — Mexicans are also Americans", cat:"greeting" },
      { text:"Don't rush into business without personal conversation first", cat:"greeting" },
      { text:"Don't skip a meal when hosted — it is a serious social offense", cat:"food" },
      { text:"Don't assume all Mexican food is spicy — ask before assuming", cat:"food" },
      { text:"Don't drink tap water in most cities — use bottled water", cat:"food" },
      { text:"Don't disrespect religious processions or ceremonies in public spaces", cat:"general" }
    ],
    regions:["Mexico City","Jalisco","Oaxaca","Yucatan","Quintana Roo","Chiapas","Baja California"],
    phrases:[
      {label:"Hello",        native:"Hola"},
      {label:"Thank you",    native:"Gracias"},
      {label:"Excuse me",    native:"Con permiso"},
      {label:"Help!",        native:"¡Ayuda!"},
      {label:"Please",       native:"Por favor"},
      {label:"Sorry",        native:"Lo siento"},
    ]
  },
  "Italy": {
    flag:"🇮🇹", capital:"Rome", language:"Italian", currency:"Euro (€)", population:"60M",
    do:[
      { text:"Greet with a handshake or cheek kisses — 'Buongiorno' for strangers, 'Ciao' for friends", cat:"greeting" },
      { text:"Dress modestly when entering churches — cover shoulders and knees", cat:"dress" },
      { text:"Embrace coffee culture: espresso at the bar, standing, is the authentic experience", cat:"food" },
      { text:"Respect meal timing — lunch 1–3pm, dinner 8–10pm; kitchens close in between", cat:"food" },
      { text:"Learn a few Italian phrases — locals warm up instantly to any genuine attempt", cat:"greeting" },
      { text:"Take your receipt (scontrino) when leaving a café — inspectors can fine you otherwise", cat:"food" },
      { text:"Tip by rounding up the bill; a small cash tip is appreciated but not mandatory", cat:"greeting" }
    ],
    dont:[
      { text:"Don't order a cappuccino after lunch — Italians consider it a breakfast-only drink", cat:"food" },
      { text:"Don't eat near major monuments in some cities — fines apply in Rome and Florence", cat:"food" },
      { text:"Don't rush through meals; lingering over dinner is a cultural norm, not an inconvenience", cat:"food" },
      { text:"Don't touch fruit or vegetables yourself in a market — let the vendor select them", cat:"food" },
      { text:"Don't expect fast Wi-Fi or card payments everywhere — carry cash in rural areas", cat:"general" },
      { text:"Don't be overly punctual for social dinners — arriving 15–20 minutes late is acceptable", cat:"greeting" },
      { text:"Don't wear swimwear away from the beach or pool — even in summer, cover up in towns", cat:"dress" }
    ],
    regions:["Tuscany","Sicily","Lombardy","Rome","Venice","Naples","Sardinia"],
    phrases:[
      {label:"Hello",        native:"Ciao / Buongiorno"},
      {label:"Thank you",    native:"Grazie"},
      {label:"Excuse me",    native:"Scusi"},
      {label:"Help!",        native:"Aiuto!"},
      {label:"Please",       native:"Per favore"},
      {label:"Sorry",        native:"Mi dispiace"},
    ]
  },
  "United Kingdom": {
    flag:"🇬🇧", capital:"London", language:"English", currency:"Pound Sterling (£)", population:"68M",
    do:[
      { text:"Queue patiently — jumping the queue is a serious social offense", cat:"general" },
      { text:"Say 'please', 'thank you', and 'sorry' liberally — British politeness is genuine", cat:"greeting" },
      { text:"Stand on the right side of escalators and let others walk on the left", cat:"transport" },
      { text:"Tip 10–12.5% at restaurants if service charge is not already included", cat:"greeting" },
      { text:"Embrace small talk about the weather — it is a genuine social lubricant", cat:"greeting" },
      { text:"Carry an umbrella — weather changes rapidly throughout the day", cat:"general" },
      { text:"Knock before entering any room; privacy is highly valued", cat:"general" }
    ],
    dont:[
      { text:"Don't mistake England for Britain — Scotland, Wales, and Northern Ireland have distinct cultures", cat:"general" },
      { text:"Don't queue-jump under any circumstances — it causes intense social disapproval", cat:"general" },
      { text:"Don't be brash about money, salary, or personal achievements", cat:"greeting" },
      { text:"Don't call someone 'English' if they are Scottish, Welsh, or Irish", cat:"greeting" },
      { text:"Don't expect shops to be open late — many close by 5–6pm outside city centres", cat:"general" },
      { text:"Don't order at the table in a traditional pub — go to the bar to order drinks", cat:"food" },
      { text:"Don't talk loudly in residential areas at night — noise complaints are taken seriously", cat:"general" }
    ],
    regions:["England","Scotland","Wales","Northern Ireland","London","Yorkshire","Cornwall"],
    phrases:[
      {label:"Hello",        native:"Hello"},
      {label:"Thank you",    native:"Thank you"},
      {label:"Excuse me",    native:"Excuse me"},
      {label:"Help!",        native:"Help!"},
      {label:"Please",       native:"Please"},
      {label:"Sorry",        native:"Sorry"},
    ]
  },
  "South Korea": {
    flag:"🇰🇷", capital:"Seoul", language:"Korean", currency:"Won (₩)", population:"52M",
    do:[
      { text:"Bow when greeting — the depth of the bow reflects the level of respect", cat:"greeting" },
      { text:"Use both hands or right hand supported by the left when giving or receiving anything", cat:"greeting" },
      { text:"Pour drinks for others before filling your own glass", cat:"food" },
      { text:"Address elders and seniors with appropriate honorifics", cat:"greeting" },
      { text:"Remove shoes before entering homes and many traditional restaurants", cat:"general" },
      { text:"Accept food or drink when offered — politely declining once is expected, then accept", cat:"food" },
      { text:"Use Kakao Maps or Naver for navigation — they are extremely accurate locally", cat:"transport" }
    ],
    dont:[
      { text:"Don't tip — it is not customary and can cause genuine confusion", cat:"greeting" },
      { text:"Don't write someone's name in red ink — it is associated with death", cat:"general" },
      { text:"Don't blow your nose at the dining table — excuse yourself to a restroom", cat:"food" },
      { text:"Don't stick chopsticks upright in a rice bowl — it resembles funeral rites", cat:"food" },
      { text:"Don't refuse the first pour of alcohol from an elder — accept, then sip slowly", cat:"food" },
      { text:"Don't be overly casual with strangers — age and hierarchy matter significantly", cat:"greeting" },
      { text:"Don't raise your voice or show visible frustration in public", cat:"general" }
    ],
    regions:["Seoul","Busan","Jeju","Gyeonggi","Incheon","Gyeongju","Gangwon"],
    phrases:[
      {label:"Hello",        native:"안녕하세요",   romanized:"Annyeonghaseyo"},
      {label:"Thank you",    native:"감사합니다",   romanized:"Gamsahamnida"},
      {label:"Excuse me",    native:"실례합니다",   romanized:"Sillyehamnida"},
      {label:"Help!",        native:"도와주세요!",  romanized:"Dowajuseyo!"},
      {label:"Please",       native:"부탁드립니다", romanized:"Butakdeurimnida"},
      {label:"Sorry",        native:"죄송합니다",   romanized:"Joesonghamnida"},
    ]
  },
  "United Arab Emirates": {
    flag:"🇦🇪", capital:"Abu Dhabi", language:"Arabic", currency:"Dirham (AED)", population:"10M",
    do:[
      { text:"Dress modestly in public — cover shoulders and knees outside resorts and beaches", cat:"dress" },
      { text:"Greet with 'As-salamu alaykum' and wait for the other person to initiate a handshake", cat:"greeting" },
      { text:"Accept coffee or dates when offered — refusing is considered impolite", cat:"food" },
      { text:"Respect prayer times — some businesses pause for 15–20 minutes, five times daily", cat:"general" },
      { text:"Use your right hand for eating, giving, and receiving items", cat:"general" },
      { text:"Follow the law strictly — UAE has very low tolerance for infractions", cat:"general" },
      { text:"Carry your passport or ID — it may be requested at various locations", cat:"transport" }
    ],
    dont:[
      { text:"Don't drink alcohol outside licensed hotel bars and approved venues", cat:"food" },
      { text:"Don't display public affection — kissing or hugging in public can result in fines", cat:"greeting" },
      { text:"Don't eat, drink, or smoke in public during Ramadan daylight hours", cat:"food" },
      { text:"Don't photograph government buildings, airports, or people without consent", cat:"general" },
      { text:"Don't use offensive language or gestures — it is a criminal offense", cat:"general" },
      { text:"Don't dress revealingly outside of beach and resort areas", cat:"dress" },
      { text:"Don't bring certain medications without a valid prescription — many are controlled substances", cat:"transport" }
    ],
    regions:["Dubai","Abu Dhabi","Sharjah","Ajman","Ras Al Khaimah","Fujairah","Umm Al Quwain"],
    phrases:[
      {label:"Hello",        native:"السلام عليكم",  romanized:"As-salamu alaykum"},
      {label:"Thank you",    native:"شكراً",          romanized:"Shukran"},
      {label:"Excuse me",    native:"عفواً",          romanized:"Afwan"},
      {label:"Help!",        native:"النجدة!",        romanized:"An-najda!"},
      {label:"Please",       native:"من فضلك",        romanized:"Min fadlak"},
      {label:"Sorry",        native:"آسف",            romanized:"Aasif"},
    ]
  },
  "Turkey": {
    flag:"🇹🇷", capital:"Ankara", language:"Turkish", currency:"Lira (₺)", population:"85M",
    do:[
      { text:"Greet with a warm handshake; close friends exchange cheek kisses", cat:"greeting" },
      { text:"Remove shoes before entering mosques and homes", cat:"general" },
      { text:"Accept tea (çay) when offered — it is central to Turkish hospitality", cat:"food" },
      { text:"Dress modestly at mosques — cover head, shoulders, and legs", cat:"dress" },
      { text:"Bargain respectfully at the Grand Bazaar and local markets", cat:"general" },
      { text:"Learn a few Turkish phrases — 'Teşekkürler' (thank you) earns genuine smiles", cat:"greeting" },
      { text:"Try street food freely — simit, doner, and börek are freshly made throughout the day", cat:"food" }
    ],
    dont:[
      { text:"Don't insult Atatürk, the Turkish flag, or the state — it is a criminal offense", cat:"general" },
      { text:"Don't assume Istanbul is the capital — Ankara is the political capital", cat:"general" },
      { text:"Don't rush tea or coffee; conversation and hospitality take time", cat:"food" },
      { text:"Don't point the sole of your foot at anyone — it is considered disrespectful", cat:"general" },
      { text:"Don't photograph military installations or personnel", cat:"general" },
      { text:"Don't bargain aggressively or rudely — maintain a warm, friendly tone", cat:"general" },
      { text:"Don't discuss sensitive political topics with strangers", cat:"greeting" }
    ],
    regions:["Istanbul","Ankara","Antalya","Cappadocia","Izmir","Trabzon","Bodrum"],
    phrases:[
      {label:"Hello",        native:"Merhaba"},
      {label:"Thank you",    native:"Teşekkürler"},
      {label:"Excuse me",    native:"Affedersiniz"},
      {label:"Help!",        native:"İmdat!"},
      {label:"Please",       native:"Lütfen"},
      {label:"Sorry",        native:"Özür dilerim"},
    ]
  },
  "Indonesia": {
    flag:"🇮🇩", capital:"Jakarta", language:"Bahasa Indonesia", currency:"Rupiah (Rp)", population:"277M",
    do:[
      { text:"Use your right hand for eating, giving, and receiving at all times", cat:"general" },
      { text:"Remove shoes before entering homes, temples, and many restaurants", cat:"general" },
      { text:"Dress modestly — wear a sarong and sash when entering Balinese temples", cat:"dress" },
      { text:"Greet with a smile and a slight bow; handshakes are common in urban areas", cat:"greeting" },
      { text:"Bargain politely at markets — it is expected and enjoyable", cat:"general" },
      { text:"Learn a few Bahasa Indonesia phrases — locals appreciate the effort enormously", cat:"greeting" },
      { text:"Respect local customs at ceremonies and religious sites; ask before photographing", cat:"general" }
    ],
    dont:[
      { text:"Don't use your left hand for eating, giving, or touching others", cat:"general" },
      { text:"Don't touch someone's head — it is considered the most sacred part of the body", cat:"general" },
      { text:"Don't point with your index finger — use your thumb or an open hand instead", cat:"general" },
      { text:"Don't display affection publicly, especially outside tourist areas", cat:"greeting" },
      { text:"Don't disrespect Hindu or Islamic religious ceremonies", cat:"general" },
      { text:"Don't wear shoes inside homes or temples", cat:"dress" },
      { text:"Don't discuss religion, ethnicity, or politics carelessly — these are sensitive topics", cat:"general" }
    ],
    regions:["Bali","Jakarta","Java","Sumatra","Lombok","Sulawesi","Yogyakarta"],
    phrases:[
      {label:"Hello",        native:"Halo"},
      {label:"Thank you",    native:"Terima kasih"},
      {label:"Excuse me",    native:"Permisi"},
      {label:"Help!",        native:"Tolong!"},
      {label:"Please",       native:"Tolong"},
      {label:"Sorry",        native:"Maaf"},
    ]
  },
  "South Africa": {
    flag:"🇿🇦", capital:"Pretoria", language:"11 official languages inc. Zulu, Xhosa, Afrikaans", currency:"Rand (ZAR)", population:"60M",
    do:[
      { text:"Greet warmly — a handshake is standard; rural areas often use a three-part handshake", cat:"greeting" },
      { text:"Tip 10–15% at restaurants; tipping petrol station attendants is also expected", cat:"greeting" },
      { text:"Respect Ubuntu ('I am because we are') — community and collective wellbeing matter deeply", cat:"general" },
      { text:"Follow wildlife and park ranger instructions at all times in game reserves", cat:"general" },
      { text:"Use sun protection seriously — UV levels are extremely high year-round", cat:"general" },
      { text:"Ask permission before photographing people, especially in townships", cat:"general" },
      { text:"Learn a few words of isiZulu or isiXhosa — locals are genuinely delighted", cat:"greeting" }
    ],
    dont:[
      { text:"Don't treat Africa as one homogenous place — South Africa has its own distinct identity", cat:"general" },
      { text:"Don't ignore safety advice in unfamiliar urban areas — be aware of your surroundings", cat:"general" },
      { text:"Don't litter in national parks or on beaches — fines are severe", cat:"general" },
      { text:"Don't drive at night in rural areas if unfamiliar with the region", cat:"transport" },
      { text:"Don't make assumptions about race or ethnicity — South Africa's history is complex and sensitive", cat:"general" },
      { text:"Don't leave valuables visible in parked cars", cat:"transport" },
      { text:"Don't photograph military installations or sensitive government buildings", cat:"general" }
    ],
    regions:["Gauteng","Western Cape","KwaZulu-Natal","Eastern Cape","Limpopo","Cape Town","Durban"],
    phrases:[
      {label:"Hello",        native:"Sawubona",   romanized:"sa-woo-BOH-na"},
      {label:"Thank you",    native:"Ngiyabonga", romanized:"n-gee-ya-BON-ga"},
      {label:"Excuse me",    native:"Uxolo",      romanized:"oo-SHOW-lo"},
      {label:"Help!",        native:"Siza!",      romanized:"SEE-za!"},
      {label:"Please",       native:"Ngicela",    romanized:"n-gee-SEH-la"},
      {label:"Sorry",        native:"Ngiyaxolisa", romanized:"n-gee-ya-show-LEE-sa"},
    ]
  },
  "Argentina": {
    flag:"🇦🇷", capital:"Buenos Aires", language:"Spanish", currency:"Peso (ARS)", population:"46M",
    do:[
      { text:"Greet everyone with a kiss on the right cheek — even when meeting for the first time", cat:"greeting" },
      { text:"Embrace the late dining culture — dinner starts at 9pm or later, often past midnight", cat:"food" },
      { text:"Accept mate if offered and pass the gourd back without wiping the rim", cat:"food" },
      { text:"Be prepared for passionate conversations about football, food, and politics", cat:"greeting" },
      { text:"Dress smartly in Buenos Aires — porteños take great pride in their appearance", cat:"dress" },
      { text:"Arrive 30–45 minutes late to social gatherings — punctuality is considered stiff", cat:"general" },
      { text:"Learn some Argentine Spanish slang (lunfardo) — locals love hearing visitors try", cat:"greeting" }
    ],
    dont:[
      { text:"Don't bring up the Falkland Islands (Malvinas) casually — it is deeply sensitive", cat:"general" },
      { text:"Don't confuse Argentine Spanish with standard Spanish — accents and slang differ greatly", cat:"greeting" },
      { text:"Don't rush meals or ask for the bill before your host signals it is time", cat:"food" },
      { text:"Don't tip less than 10% at restaurants — 15% is standard for good service", cat:"greeting" },
      { text:"Don't assume all Argentine food is beef — regional cuisines vary dramatically", cat:"food" },
      { text:"Don't make jokes about economic hardship — it is a serious and ongoing issue", cat:"general" },
      { text:"Don't call locals 'South Americans' as a catch-all — Argentine identity is very distinct", cat:"greeting" }
    ],
    regions:["Buenos Aires","Patagonia","Mendoza","Córdoba","Salta","Bariloche","Iguazú"],
    phrases:[
      {label:"Hello",        native:"Hola"},
      {label:"Thank you",    native:"Gracias"},
      {label:"Excuse me",    native:"Disculpe"},
      {label:"Help!",        native:"¡Ayuda!"},
      {label:"Please",       native:"Por favor"},
      {label:"Sorry",        native:"Lo siento"},
    ]
  }
};

export const COUNTRY_ISO3 = {
  "Japan":"JPN","France":"FRA","India":"IND","United States":"USA","Brazil":"BRA",
  "Saudi Arabia":"SAU","Germany":"DEU","Thailand":"THA","China":"CHN","Australia":"AUS",
  "Mexico":"MEX","Italy":"ITA","United Kingdom":"GBR","South Korea":"KOR",
  "United Arab Emirates":"ARE","Turkey":"TUR","Indonesia":"IDN","South Africa":"ZAF","Argentina":"ARG",
};

export const COUNTRY_COORDS = {
  "Japan":[35.7,139.7,5],"France":[46.2,2.2,5],"India":[20.6,78.9,4],
  "United States":[38,-97,4],"Brazil":[-10,-55,4],"Saudi Arabia":[24,45,5],
  "Germany":[51.2,10.5,5],"Thailand":[15.9,100.9,5],"China":[35,105,4],
  "Australia":[-25,133,4],"Mexico":[23,-102,5],
  "Italy":[41.9,12.5,5],"United Kingdom":[54.7,-3.4,5],"South Korea":[36.5,127.9,6],
  "United Arab Emirates":[24,54,6],"Turkey":[39,35,5],"Indonesia":[-2,118,4],
  "South Africa":[-29,25,5],"Argentina":[-38,-65,4],
  "Russia":[62,95,3],"Canada":[60,-96,3],"Kazakhstan":[48,68,4],
  "Algeria":[28,2,4],"Democratic Republic of the Congo":[-3,24,4]
};

export const REGION_HIGHLIGHTS = {
  "Japan": {
    "Tokyo": {
      do:["Use a Suica or Pasmo IC card for seamless train and bus travel","Explore beyond the tourist trail — each ward like Shimokitazawa or Yanaka has a unique character","Book popular ramen shops and izakayas in advance — queues form early"],
      dont:["Don't eat while walking in busy station areas — find a designated spot","Don't hail taxis from the road — use official taxi ranks or the GO app"]
    },
    "Kyoto": {
      do:["Visit popular shrines at dawn to experience them before the crowds arrive","Rent a bicycle — many temples are spread across the city and cycling is the best way to explore","Dress appropriately near Gion — this is a working geisha district, not a theme park"],
      dont:["Don't photograph geiko or maiko without explicit permission — it is considered disrespectful","Don't ignore 'no photography' signs inside temple grounds"]
    },
    "Osaka": {
      do:["Embrace 'kuidaore' — eating until you drop is the city's proud cultural motto","Try takoyaki and okonomiyaki from street stalls in Dotonbori","Osakanians are famously outgoing — feel free to strike up conversations"],
      dont:["Don't stand on the left side of escalators — Osaka uniquely stands on the right, opposite to Tokyo","Don't miss Kuromon Ichiba market — arriving after 11am means the freshest stalls are already gone"]
    }
  },
  "France": {
    "Île-de-France": {
      do:["Always say 'Bonjour' when entering any shop, café, or office — it is non-negotiable politeness","Validate your metro ticket before boarding — inspectors do check","Book major museums (Louvre, Musée d'Orsay) online in advance to skip long queues"],
      dont:["Don't eat on the métro or RER — it is frowned upon","Don't expect English menus outside tourist-heavy areas — a translation app helps"]
    },
    "Provence": {
      do:["Visit lavender fields in June–July for peak bloom — check local harvest calendars first","Buy local olive oil, herbs, and wine directly from producers at village markets","Greet with two or three cheek kisses depending on the village — follow the local lead"],
      dont:["Don't drive without a plan — winding country roads require patience and a good map","Don't visit popular spots like the Gorges du Verdon in August without booking accommodation ahead"]
    }
  },
  "Thailand": {
    "Bangkok": {
      do:["Use the BTS Skytrain and MRT to avoid traffic — Bangkok traffic is notoriously severe","Negotiate tuk-tuk fares firmly before getting in — always agree on a price first","Dress modestly even outside temples — covered shoulders are appreciated across the city"],
      dont:["Don't get into a tuk-tuk without negotiating a price — overcharging tourists is extremely common","Don't ignore traffic when crossing roads — pedestrian rights are limited outside designated crossings"]
    },
    "Chiang Mai": {
      do:["Dress in white and cover up when visiting Doi Suthep — the sacred mountain temple deserves respect","Hire a local guide for trekking in the hills — it supports communities and improves safety","Attend a traditional Khantoke dinner to experience northern Thai culture authentically"],
      dont:["Don't ride elephants at exploitative camps — choose sanctuaries where elephants roam freely","Don't bargain aggressively or rudely at the Night Bazaar — be friendly and patient"]
    },
    "Phuket": {
      do:["Swim between the red-and-yellow flags — beaches have strong rip currents outside flagged zones","Visit Wat Chalong temple with shoulders and knees covered","Rent a scooter only if you are an experienced rider — traffic is fast and roads can be narrow"],
      dont:["Don't leave valuables unattended on the beach — theft is a known issue in busy areas","Don't assume all beaches are safe year-round — check for jellyfish warnings in season"]
    }
  },
  "United States": {
    "New York": {
      do:["Walk on the right side of the sidewalk and keep moving — New Yorkers are always in a hurry","Tip 20% at sit-down restaurants — it is a significant part of servers' income","Use the subway — it runs 24/7 and is the fastest way around Manhattan"],
      dont:["Don't stop suddenly in the middle of a busy sidewalk to check your phone","Don't honk your car horn without serious reason — fines apply in many city areas"]
    },
    "Hawaii": {
      do:["Greet with 'Aloha' and embrace the spirit of respect for land and people","Remove footwear when entering local homes — it is a deeply ingrained custom","Support local businesses and buy from Hawaiian artisans, not mass-produced souvenir shops"],
      dont:["Don't remove sand, coral, lava rocks, or any natural material from the islands — it is illegal and disrespectful","Don't touch sea turtles or monk seals — federal law prohibits it and fines are steep"]
    },
    "California": {
      do:["Recycle and compost — California has strict waste separation laws","Tip consistently — California's service industry relies heavily on gratuity","Carry water and sun protection on any outdoor activity — the climate can be deceptive"],
      dont:["Don't idle your car engine unnecessarily — emissions laws are strictly enforced","Don't underestimate wildfire risk in summer — always check local fire alerts when hiking"]
    }
  },
  "Italy": {
    "Rome": {
      do:["Book the Colosseum and Vatican in advance — queues without a ticket can stretch for hours","Dress modestly near Vatican City at all times — guards can refuse entry for bare shoulders or knees","Use the free drinking fountains (nasoni) throughout the city — the water is fresh and safe"],
      dont:["Don't swim or dip your feet in the Trevi Fountain or any public fountain — heavy fines apply","Don't eat a sit-down meal directly next to a major monument — you will pay tourist prices for poor quality"]
    },
    "Tuscany": {
      do:["Book vineyard visits and cooking classes well in advance — they fill up months ahead in summer","Rent a car to explore the countryside — Chianti villages are not easily reached by public transport","Eat at agriturismos (farm restaurants) for the most authentic and affordable local food"],
      dont:["Don't rush from city to city — Tuscany rewards those who slow down and stay in one area","Don't visit during Ferragosto (15 August) expecting everything open — Italy largely shuts down"]
    }
  },
  "United Kingdom": {
    "London": {
      do:["Use an Oyster card or contactless payment on the Tube — buying single tickets is significantly more expensive","Stand on the right on all escalators — the left is for those walking","Book popular restaurants and shows weeks in advance — London fills up quickly"],
      dont:["Don't talk loudly on the Tube — commuters observe a quiet, eyes-down culture","Don't assume all of London is expensive — street markets, parks, and museums are largely free"]
    },
    "Scotland": {
      do:["Dress in waterproof layers year-round — Scottish weather changes within minutes","Respect private land even in open countryside — Scottish access rights come with responsibilities","Try haggis, whisky, and Irn-Bru at least once — it shows genuine cultural curiosity"],
      dont:["Don't call Scottish people English — it is one of the easiest ways to cause offence","Don't underestimate highland terrain — even short hikes can turn dangerous without proper gear"]
    }
  },
  "Indonesia": {
    "Bali": {
      do:["Wear a sarong and sash when entering any temple — many provide them at the entrance for free","Participate respectfully in local ceremonies if invited — it is a rare and genuine cultural honour","Purchase a Bali tourist card for easier temple access across the island"],
      dont:["Don't enter a temple during your period — it is considered spiritually impure by Balinese Hindu tradition","Don't step on or over the daily canang sari (flower offerings) placed on the ground — always step around them"]
    }
  },
  "United Arab Emirates": {
    "Dubai": {
      do:["Dress modestly in malls, public spaces, and markets — beachwear stays at the beach","Download the RTA app for taxis and the Metro — it is reliable, clean, and inexpensive","Try the Gold and Spice Souks in Deira for an authentic local experience beyond the skyscrapers"],
      dont:["Don't photograph people at prayer or inside mosques without explicit permission","Don't drink alcohol on the street or in unlicensed venues — public intoxication is a criminal offense"]
    }
  },
  "South Korea": {
    "Seoul": {
      do:["Load a T-money card for all subway, bus, and even convenience store payments","Visit Gyeongbokgung Palace at opening time (9am) before tour groups arrive","Try street food in Gwangjang Market — bindaetteok and mayak gimbap are iconic"],
      dont:["Don't jaywalk — Korean pedestrians follow signals carefully and it attracts strong disapproval","Don't speak loudly on the subway — Seoulites observe a quiet transit culture similar to Tokyo"]
    },
    "Jeju": {
      do:["Rent a car — public transport on Jeju is limited and driving is the best way to explore the coastline","Hike Hallasan (Korea's highest peak) with proper gear — weather changes rapidly at altitude","Try Jeju black pork and hallabong tangerines — they are the island's most celebrated foods"],
      dont:["Don't underestimate hike times on Hallasan — certain trails close after midday to ensure safe descent","Don't miss the haenyeo (women divers) performances — they are a UNESCO-protected cultural tradition"]
    }
  },
  "South Africa": {
    "Cape Town": {
      do:["Book Table Mountain cable car tickets online — the summit closes without warning in strong wind","Visit Boulders Beach to see the African penguin colony — a genuinely magical experience","Explore the Bo-Kaap neighbourhood on foot — its colourful houses and Cape Malay history are unique"],
      dont:["Don't hike alone on Table Mountain — go in a group on quieter trails","Don't leave anything visible in your car when parked — smash-and-grabs are common in tourist areas"]
    }
  }
};

export const TILES = {
  night:{ fill:"#b8b2a8", hover:"#2f86f0", border:"#7a7268" },
  day:{   fill:"#f0ebe3", hover:"#1d6fd4", border:"#8a8070" }
};
