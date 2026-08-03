export type EmbassySeed = {
  country: string
  countryCode: string
  slug: string
  region: 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Oceania'
  representationType: 'resident-embassy' | 'representative-office' | 'non-resident-embassy' | 'honorary-consulate' | 'foreign-ministry'
  missionName: string
  city: string
  hostCountry: string
  sourceUrl: string
  notes: string
  lastVerifiedAt: string
}

const directoryUrl = 'https://um.fi/representation-of-foreign-states-in-finland-or-in-the-nearest-country-to-finland?contentlan=2&culture=en-us&nodeid=49157'

const countryRows = `
Afghanistan|AF|Asia|Kabul
Albania|AL|Europe|Tirana
Algeria|DZ|Africa|Algiers
Andorra|AD|Europe|Andorra la Vella
Angola|AO|Africa|Luanda
Antigua and Barbuda|AG|North America|St. John's
Argentina|AR|South America|Buenos Aires
Armenia|AM|Asia|Yerevan
Australia|AU|Oceania|Canberra
Austria|AT|Europe|Vienna
Azerbaijan|AZ|Asia|Baku
Bahamas|BS|North America|Nassau
Bahrain|BH|Asia|Manama
Bangladesh|BD|Asia|Dhaka
Barbados|BB|North America|Bridgetown
Belarus|BY|Europe|Minsk
Belgium|BE|Europe|Brussels
Belize|BZ|North America|Belmopan
Benin|BJ|Africa|Porto-Novo
Bhutan|BT|Asia|Thimphu
Bolivia|BO|South America|La Paz
Bosnia and Herzegovina|BA|Europe|Sarajevo
Botswana|BW|Africa|Gaborone
Brazil|BR|South America|Brasília
Brunei|BN|Asia|Bandar Seri Begawan
Bulgaria|BG|Europe|Sofia
Burkina Faso|BF|Africa|Ouagadougou
Burundi|BI|Africa|Gitega
Cabo Verde|CV|Africa|Praia
Cambodia|KH|Asia|Phnom Penh
Cameroon|CM|Africa|Yaoundé
Canada|CA|North America|Ottawa
Central African Republic|CF|Africa|Bangui
Chad|TD|Africa|N'Djamena
Chile|CL|South America|Santiago
China|CN|Asia|Beijing
Colombia|CO|South America|Bogotá
Comoros|KM|Africa|Moroni
Congo|CG|Africa|Brazzaville
Costa Rica|CR|North America|San José
Côte d'Ivoire|CI|Africa|Yamoussoukro
Croatia|HR|Europe|Zagreb
Cuba|CU|North America|Havana
Cyprus|CY|Europe|Nicosia
Czechia|CZ|Europe|Prague
Democratic Republic of the Congo|CD|Africa|Kinshasa
Denmark|DK|Europe|Copenhagen
Djibouti|DJ|Africa|Djibouti
Dominica|DM|North America|Roseau
Dominican Republic|DO|North America|Santo Domingo
Ecuador|EC|South America|Quito
Egypt|EG|Africa|Cairo
El Salvador|SV|North America|San Salvador
Equatorial Guinea|GQ|Africa|Malabo
Eritrea|ER|Africa|Asmara
Estonia|EE|Europe|Tallinn
Eswatini|SZ|Africa|Mbabane
Ethiopia|ET|Africa|Addis Ababa
Fiji|FJ|Oceania|Suva
France|FR|Europe|Paris
Gabon|GA|Africa|Libreville
Gambia|GM|Africa|Banjul
Georgia|GE|Asia|Tbilisi
Germany|DE|Europe|Berlin
Ghana|GH|Africa|Accra
Greece|GR|Europe|Athens
Grenada|GD|North America|St. George's
Guatemala|GT|North America|Guatemala City
Guinea|GN|Africa|Conakry
Guinea-Bissau|GW|Africa|Bissau
Guyana|GY|South America|Georgetown
Haiti|HT|North America|Port-au-Prince
Honduras|HN|North America|Tegucigalpa
Hungary|HU|Europe|Budapest
Iceland|IS|Europe|Reykjavík
India|IN|Asia|New Delhi
Indonesia|ID|Asia|Jakarta
Iran|IR|Asia|Tehran
Iraq|IQ|Asia|Baghdad
Ireland|IE|Europe|Dublin
Israel|IL|Asia|Jerusalem
Italy|IT|Europe|Rome
Jamaica|JM|North America|Kingston
Japan|JP|Asia|Tokyo
Jordan|JO|Asia|Amman
Kazakhstan|KZ|Asia|Astana
Kenya|KE|Africa|Nairobi
Kiribati|KI|Oceania|South Tarawa
Kosovo|XK|Europe|Pristina
Kuwait|KW|Asia|Kuwait City
Kyrgyzstan|KG|Asia|Bishkek
Laos|LA|Asia|Vientiane
Latvia|LV|Europe|Riga
Lebanon|LB|Asia|Beirut
Lesotho|LS|Africa|Maseru
Liberia|LR|Africa|Monrovia
Libya|LY|Africa|Tripoli
Liechtenstein|LI|Europe|Vaduz
Lithuania|LT|Europe|Vilnius
Luxembourg|LU|Europe|Luxembourg
Madagascar|MG|Africa|Antananarivo
Malawi|MW|Africa|Lilongwe
Malaysia|MY|Asia|Kuala Lumpur
Maldives|MV|Asia|Malé
Mali|ML|Africa|Bamako
Malta|MT|Europe|Valletta
Marshall Islands|MH|Oceania|Majuro
Mauritania|MR|Africa|Nouakchott
Mauritius|MU|Africa|Port Louis
Mexico|MX|North America|Mexico City
Micronesia|FM|Oceania|Palikir
Moldova|MD|Europe|Chișinău
Monaco|MC|Europe|Monaco
Mongolia|MN|Asia|Ulaanbaatar
Montenegro|ME|Europe|Podgorica
Morocco|MA|Africa|Rabat
Mozambique|MZ|Africa|Maputo
Myanmar|MM|Asia|Naypyidaw
Namibia|NA|Africa|Windhoek
Nauru|NR|Oceania|Yaren
Nepal|NP|Asia|Kathmandu
Netherlands|NL|Europe|Amsterdam
New Zealand|NZ|Oceania|Wellington
Nicaragua|NI|North America|Managua
Niger|NE|Africa|Niamey
Nigeria|NG|Africa|Abuja
North Korea|KP|Asia|Pyongyang
North Macedonia|MK|Europe|Skopje
Norway|NO|Europe|Oslo
Oman|OM|Asia|Muscat
Pakistan|PK|Asia|Islamabad
Palau|PW|Oceania|Ngerulmud
Palestine|PS|Asia|Ramallah
Panama|PA|North America|Panama City
Papua New Guinea|PG|Oceania|Port Moresby
Paraguay|PY|South America|Asunción
Peru|PE|South America|Lima
Philippines|PH|Asia|Manila
Poland|PL|Europe|Warsaw
Portugal|PT|Europe|Lisbon
Qatar|QA|Asia|Doha
Romania|RO|Europe|Bucharest
Russia|RU|Europe|Moscow
Rwanda|RW|Africa|Kigali
Saint Kitts and Nevis|KN|North America|Basseterre
Saint Lucia|LC|North America|Castries
Saint Vincent and the Grenadines|VC|North America|Kingstown
Samoa|WS|Oceania|Apia
San Marino|SM|Europe|San Marino
São Tomé and Príncipe|ST|Africa|São Tomé
Saudi Arabia|SA|Asia|Riyadh
Senegal|SN|Africa|Dakar
Serbia|RS|Europe|Belgrade
Seychelles|SC|Africa|Victoria
Sierra Leone|SL|Africa|Freetown
Singapore|SG|Asia|Singapore
Slovakia|SK|Europe|Bratislava
Slovenia|SI|Europe|Ljubljana
Solomon Islands|SB|Oceania|Honiara
Somalia|SO|Africa|Mogadishu
South Africa|ZA|Africa|Pretoria
South Korea|KR|Asia|Seoul
South Sudan|SS|Africa|Juba
Spain|ES|Europe|Madrid
Sri Lanka|LK|Asia|Sri Jayawardenepura Kotte
Sudan|SD|Africa|Khartoum
Suriname|SR|South America|Paramaribo
Sweden|SE|Europe|Stockholm
Switzerland|CH|Europe|Bern
Syria|SY|Asia|Damascus
Taiwan|TW|Asia|Taipei
Tajikistan|TJ|Asia|Dushanbe
Tanzania|TZ|Africa|Dodoma
Thailand|TH|Asia|Bangkok
Timor-Leste|TL|Asia|Dili
Togo|TG|Africa|Lomé
Tonga|TO|Oceania|Nuku'alofa
Trinidad and Tobago|TT|North America|Port of Spain
Tunisia|TN|Africa|Tunis
Türkiye|TR|Asia|Ankara
Turkmenistan|TM|Asia|Ashgabat
Tuvalu|TV|Oceania|Funafuti
Uganda|UG|Africa|Kampala
Ukraine|UA|Europe|Kyiv
United Arab Emirates|AE|Asia|Abu Dhabi
United Kingdom|GB|Europe|London
United States|US|North America|Washington, D.C.
Uruguay|UY|South America|Montevideo
Uzbekistan|UZ|Asia|Tashkent
Vanuatu|VU|Oceania|Port Vila
Vatican City|VA|Europe|Vatican City
Venezuela|VE|South America|Caracas
Vietnam|VN|Asia|Hanoi
Yemen|YE|Asia|Sana'a
Zambia|ZM|Africa|Lusaka
Zimbabwe|ZW|Africa|Harare
`.trim().split('\n').map((row) => {
  const [country, countryCode, region, capital] = row.split('|')
  return { country, countryCode, region: region as EmbassySeed['region'], capital }
})

const residents = new Set(`Algeria|Argentina|Austria|Belarus|Belgium|Brazil|Bulgaria|Canada|Chile|China|Colombia|Croatia|Cuba|Cyprus|Czechia|Denmark|Egypt|Estonia|France|Georgia|Germany|Greece|Hungary|Iceland|India|Indonesia|Iran|Iraq|Ireland|Israel|Italy|Japan|Kazakhstan|Latvia|Lithuania|Malaysia|Mexico|Morocco|Namibia|Netherlands|Norway|Peru|Philippines|Poland|Portugal|Qatar|Romania|Russia|Saudi Arabia|Serbia|Slovakia|South Korea|Spain|Sweden|Switzerland|Thailand|Tunisia|Türkiye|Ukraine|United Arab Emirates|United Kingdom|United States|Uruguay|Vietnam`.split('|'))

const nonResidentGroups: Record<string, string[]> = {
  'Berlin|Germany': `Bahrain|Brunei|Burundi|Cabo Verde|Chad|Jordan|Kyrgyzstan|Liberia|Maldives|Mali|Myanmar|Oman|Paraguay|Yemen`.split('|'),
  'Brussels|Belgium': `Barbados|Bhutan|Central African Republic|Guinea-Bissau|Honduras|Mauritania|São Tomé and Príncipe`.split('|'),
  'Copenhagen|Denmark': `Burkina Faso|Côte d'Ivoire|Luxembourg|Nepal|Niger|Slovenia|Uganda`.split('|'),
  'London|United Kingdom': `Cambodia|Cameroon|Democratic Republic of the Congo|Eswatini|Gabon|Gambia|Jamaica|Madagascar|Malawi|Mauritius|Saint Vincent and the Grenadines|Seychelles|Sierra Leone|Trinidad and Tobago|Turkmenistan`.split('|'),
  'Moscow|Russia': `Djibouti|Guinea`.split('|'),
  'Oslo|Norway': `Ghana|South Sudan`.split('|'),
  'Stockholm|Sweden': `Afghanistan|Albania|Angola|Armenia|Australia|Azerbaijan|Bangladesh|Bolivia|Bosnia and Herzegovina|Botswana|Congo|Dominican Republic|Ecuador|El Salvador|Eritrea|Ethiopia|Guatemala|Kenya|Kosovo|Kuwait|Laos|Lebanon|Libya|Moldova|Mongolia|Mozambique|New Zealand|Nigeria|North Korea|North Macedonia|Pakistan|Panama|Rwanda|Somalia|South Africa|Sri Lanka|Sudan|Syria|Tanzania|Vatican City|Zambia|Zimbabwe`.split('|'),
  'Andorra la Vella|Andorra': ['Andorra'],
  'Paris|France': ['Benin', 'Comoros'],
  'San José|Costa Rica': ['Costa Rica'],
  'Geneva|Switzerland': ['Guyana'],
  'Dublin|Ireland': ['Lesotho'],
  'Valletta|Malta': ['Malta'],
  'Podgorica|Montenegro': ['Montenegro'],
  'San Marino|San Marino': ['San Marino'],
  'The Hague|Netherlands': ['Senegal', 'Suriname', 'Venezuela'],
  'Singapore|Singapore': ['Singapore'],
  'Minsk|Belarus': ['Tajikistan'],
  'Riga|Latvia': ['Uzbekistan'],
}

const nonResidentByCountry = new Map<string, { city: string; hostCountry: string }>()
for (const [location, countries] of Object.entries(nonResidentGroups)) {
  const [city, hostCountry] = location.split('|')
  for (const country of countries) nonResidentByCountry.set(country, { city, hostCountry })
}

const representativeOffices = new Set(['Palestine', 'Taiwan'])
const honoraryConsulates = new Set(['Haiti', 'Togo'])

function slugify(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export const embassySeeds: EmbassySeed[] = countryRows.map(({ country, countryCode, region, capital }) => {
  const shared = { country, countryCode, slug: slugify(country), region, sourceUrl: directoryUrl, lastVerifiedAt: '2026-08-03T00:00:00.000Z' }

  if (residents.has(country)) {
    return { ...shared, representationType: 'resident-embassy', missionName: `Embassy of ${country} in Finland`, city: 'Helsinki', hostCountry: 'Finland', notes: 'Resident embassy in Helsinki. Check the official directory before visiting because opening hours and contact details can change.' }
  }
  if (representativeOffices.has(country)) {
    return { ...shared, representationType: 'representative-office', missionName: country === 'Taiwan' ? 'Taipei Representative Office in Finland' : 'Palestinian Mission in Finland', city: 'Helsinki', hostCountry: 'Finland', notes: 'Representative office in Helsinki. Check the official directory before visiting.' }
  }
  if (honoraryConsulates.has(country)) {
    return { ...shared, representationType: 'honorary-consulate', missionName: `Honorary Consulate of ${country} in Finland`, city: 'Helsinki', hostCountry: 'Finland', notes: 'No resident or accredited non-resident embassy was listed; the Finnish directory lists an honorary consular presence in Helsinki.' }
  }

  const nonResident = nonResidentByCountry.get(country)
  if (nonResident) {
    return { ...shared, representationType: 'non-resident-embassy', missionName: `Embassy of ${country} accredited to Finland`, city: nonResident.city, hostCountry: nonResident.hostCountry, notes: `This embassy handles Finland from ${nonResident.city}. Check the official Finnish diplomatic directory before travelling or sending documents.` }
  }

  return { ...shared, representationType: 'foreign-ministry', missionName: `${country} Ministry of Foreign Affairs / nearest consular mission`, city: capital, hostCountry: country, notes: 'No representation accredited to Finland was listed in the Finnish Ministry for Foreign Affairs directory when checked. Contact the country’s foreign ministry to confirm the nearest mission responsible for people in Finland.' }
})
