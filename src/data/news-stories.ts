export type SeedNewsStory = {
  slug: string
  title: string
  standfirst: string
  category: 'Helsinki' | 'Finland' | 'Work & money' | 'Life admin' | 'Culture & community'
  publishedAt: string
  readingMinutes: number
  featured: boolean
  practicalSummary: string
  html: string
  sources: Array<{ name: string; url: string }>
}

export const seedNewsStories: SeedNewsStory[] = [
  {
    slug: 'finland-foreign-language-residents-kela-benefits-2026',
    title: 'More internationals live in Finland. A smaller share now needs basic support',
    standfirst: 'New Kela figures complicate a very familiar argument. The amount paid to foreign-language residents has grown, but the share receiving social assistance, unemployment support and housing allowance has fallen sharply.',
    category: 'Finland',
    publishedAt: '2026-09-04T09:30:00.000Z',
    readingMinutes: 8,
    featured: true,
    practicalSummary: 'Kela’s figures track registered native language, not nationality or immigration status. Between 2017 and 2025, Finland’s foreign-language population grew by more than 70 percent, while the share receiving basic social assistance fell from 23 to 18 percent and the share receiving labour market subsidy fell from 24 to 16 percent.',
    html: `
      <p>Statistics about immigration and benefits have a habit of arriving online without their shoes on, then sprinting straight into an argument.</p>
      <p>A large number gets pulled out, somebody adds a furious caption, and the useful question disappears: what is actually changing as Finland becomes more international?</p>
      <p>New figures from Kela give us a much better answer. Finland's foreign-language population has grown quickly, and the total amount paid to that population through major income-support benefits has increased. At the same time, a smaller share of foreign-language residents now receives basic social assistance, unemployment support or general housing allowance than in 2017.</p>
      <p>Both parts are true. Leaving either one out gives you a much poorer picture.</p>
      <h2>What did Kela find?</h2>
      <p>Kela examined nine major benefits that help people cover everyday living costs. These included basic social assistance, labour market subsidy, general housing allowance, sickness allowance, parental allowances, child-care support and Kela-paid pensions.</p>
      <p>In 2025, Kela paid about €9.2 billion through those benefits. Roughly €1.8 billion, or 20 percent, went to people registered as speaking a language other than Finnish, Swedish or Sámi.</p>
      <p>Back in 2017, the same group received 15 percent of €8.6 billion in payments.</p>
      <p>Read on its own, that change from 15 to 20 percent sounds dramatic. The missing context is that Finland's foreign-language population grew by more than 70 percent over the same period, from 373,000 people in 2017 to 646,000 in 2025.</p>
      <p>There are simply far more international residents in Finland than there were eight years ago. It would be strange if their share of almost every national system had not grown too.</p>
      <h2>A smaller share is receiving last-resort support</h2>
      <p>The more revealing comparison looks at recipients within the foreign-language population itself.</p>
      <p>In 2017, around 23 percent of adult foreign-language residents received basic social assistance. By 2025, the figure had fallen to 18 percent.</p>
      <p>The share receiving labour market subsidy dropped from 24 to 16 percent. General housing allowance followed a similar path, falling from 26 to 18 percent.</p>
      <p>The number of recipients can still rise while the recipient rate falls. There were 137,000 foreign-language recipients of social assistance in 2025, up from 110,000 in 2017, because the wider population grew much faster.</p>
      <p>Kela's Head of Research, Signe Jauhiainen, says the falling rates suggest that a larger proportion of the growing foreign-language population is now working or studying.</p>
      <h2>Why did the euro amounts rise?</h2>
      <p>There is no single answer.</p>
      <p>Population growth is the obvious part. Inflation matters too, and Kela notes that its euro figures are nominal, meaning they have not been adjusted to remove the effect of rising prices.</p>
      <p>The arrival of Ukrainians under temporary protection has also changed the population and benefit figures. Kela says the rise in foreign-language recipients of social assistance since 2023 is largely explained by Ukrainian speakers.</p>
      <p>Benefit reforms matter as well. Students moved from general housing allowance to the student housing supplement in 2025, while people living in owner-occupied homes lost access to general housing allowance. Those changes altered who remained inside the housing-allowance statistics.</p>
      <p>This is why one headline percentage cannot tell you whether people are working, studying, raising children, retired, newly arrived or dealing with a rough patch.</p>
      <h2>Not every benefit tells the same story</h2>
      <p>Foreign-language residents received 41 percent of total basic social assistance spending in 2025. That is a significant share and should not be hidden.</p>
      <p>It also should not be presented as if it describes the entire benefits system. Foreign-language recipients accounted for less than five percent of national pension recipients. Their share of sickness-allowance recipients has remained around five percent, compared with roughly nine to ten percent across the total population.</p>
      <p>Guarantee pension is different again. It is designed to protect people with very small pensions, including residents who have not lived in Finland long enough to build a larger national pension. The rules and purpose of each benefit shape the numbers.</p>
      <h2>Who counts as foreign-language here?</h2>
      <p>Kela grouped people by the native language recorded in its benefit register. Anyone whose registered native language was not Finnish, Swedish or Sámi was included. People with no registered native language were included too.</p>
      <p>That is useful for studying broad change, but it is not the same thing as measuring nationality, citizenship or immigration status.</p>
      <p>A Finnish citizen who grew up speaking Arabic may be counted as foreign-language. An immigrant registered as a Finnish or Swedish speaker may not be. Kela says this plainly, and any honest discussion of the figures should do the same.</p>
      <h2>What does it mean for people living here?</h2>
      <p>First, receiving a benefit is not evidence that somebody has cheated or failed. These systems exist for unemployment, low income, illness, parenthood, housing costs and old age. People use them when their circumstances meet the rules.</p>
      <p>Second, the new numbers do not support the simple claim that a growing international population automatically means a growing dependency rate. For several of the most debated benefits, the rate has moved in the opposite direction.</p>
      <p>Finland still has real work to do. International residents face a difficult labour market, uneven recognition of overseas qualifications and language requirements that can shut capable people out of jobs. Falling benefit-recipient rates are encouraging, but they do not mean those barriers have vanished.</p>
      <p>The useful takeaway is less dramatic than the social-media version. Finland has become much more international. More foreign-language residents now appear in national spending figures because more foreign-language residents live here. Within that growing population, however, the share relying on several core forms of support has fallen.</p>
      <p>That is not a neat political slogan. It is simply a fuller and fairer reading of the numbers.</p>
    `,
    sources: [
      { name: 'Kela Info Tray: foreign-language recipients of benefits, 2017 to 2025', url: 'https://tietotarjotin.fi/en/news/1435987/fewer-foreign-language-recipients-of-social-assistance-and-unemployment-benefits-than-before' },
      { name: 'Yle News summary of the Kela findings', url: 'https://yle.fi/a/74-20244107' },
    ],
  },
  {
    slug: 'helsinki-international-grocery-store-boom-2026',
    title: 'Helsinki’s international food shops are having a proper moment',
    standfirst: 'The city has gone from a handful of specialist grocers to nearly 100. Behind the snack trends and excellent spice aisles is a bigger story about migration, entrepreneurship and who gets to shape Finnish food culture.',
    category: 'Culture & community',
    publishedAt: '2026-09-04T08:45:00.000Z',
    readingMinutes: 7,
    featured: true,
    practicalSummary: 'Helsinki now has close to 100 grocery shops specialising in food from outside Finland. They are filling gaps left by a highly concentrated supermarket market, while giving international residents familiar ingredients and everyone else a much larger pantry.',
    html: `
      <p>There is a particular kind of relief in finding the right rice, chilli, tea or biscuit after months of being told the supermarket version is basically the same.</p>
      <p>Sometimes it is basically the same. Sometimes it absolutely is not, and no amount of cheerful Finnish packaging is going to settle the matter.</p>
      <p>Helsinki's international grocery shops have become one of the clearest signs of how the city is changing. According to fresh reporting from Yle, the number has grown from only a few to nearly 100 over the past fifteen years.</p>
      <p>These shops are useful places to buy dinner. They are also small community anchors, routes into entrepreneurship and one of the easiest ways for the rest of Helsinki to discover that their regular supermarket has been working with a fairly limited imagination.</p>
      <h2>A small-shop boom in a very big-chain market</h2>
      <p>Finland's grocery market is unusually concentrated.</p>
      <p>The Finnish Competition and Consumer Authority says S Group, Kesko and Lidl together account for roughly 92 percent of grocery retail. That leaves independent shops trying to operate beside three enormous systems with powerful buying networks, familiar loyalty programmes and stores in almost every neighbourhood.</p>
      <p>International grocers are not likely to replace the weekly Prisma trip. Their advantage is that they can stock more deeply for particular cuisines, respond quickly to community demand and sell ingredients that remain too specialised for a mainstream chain.</p>
      <p>That can mean several varieties of the same staple rather than one token product tucked onto a world-food shelf.</p>
      <h2>One shop became five</h2>
      <p>Yle followed the story of Jun Li and his family company, Long Harvest Oy, which has built RF Asian Market from one shop to five in around five years. Three are in Helsinki and the newest opened in Iso Omena in Espoo.</p>
      <p>Li moved to Finland from China's Anhui province around twenty years ago. He worked in the clothing and restaurant industries before helping establish a food wholesaler. He told Yle that finding work as a foreigner was difficult, so entrepreneurship became his route forward.</p>
      <p>That part of the story will sound familiar to plenty of international founders here. Starting a business is not the easy alternative to employment. It brings permits, premises, tax, suppliers, Finnish paperwork and the small matter of convincing people to walk through the door. Sometimes, though, building your own opportunity feels more possible than waiting for somebody else to recognise your experience.</p>
      <p>RF Asian Market now employs more than twenty people. Li estimates that around half of its customers are native Finns. International customers often arrive for the ingredients used in everyday cooking back home, while other shoppers are drawn by new drinks, snacks and products they have seen online.</p>
      <h2>These shops do more than sell nostalgia</h2>
      <p>It is tempting to describe an international food shop only as a place where immigrants can find a taste of home. That matters enormously, but it is only half the picture.</p>
      <p>A well-stocked grocery shop lets families keep ordinary routines. It saves someone carrying half a suitcase of ingredients after every visit abroad. It gives parents a way to pass familiar meals to their children, and lets friends cook for one another without turning a simple recipe into an ingredient-substitution experiment.</p>
      <p>The shops also change the wider city's food habits. Ingredients that once felt niche become normal. A Finnish shopper comes in for the viral noodles, notices six unfamiliar vegetables and returns next week with a recipe saved on their phone.</p>
      <p>That exchange is how food culture actually grows. Not through a speech about diversity, but because somebody discovers the good chilli crisp.</p>
      <h2>The churn behind the growth</h2>
      <p>The headline number does not mean every shop survives.</p>
      <p>Yle's Finnish-language investigation found that 94 specialist grocery shops opened in Helsinki between 2020 and 2026, while 52 closed during the same period. Growth is real, but so is the turnover.</p>
      <p>Food retail is a difficult business. Rent, refrigeration, importing, waste, labelling rules and narrow margins do not become friendlier because the shop has a lovely community story.</p>
      <p>Helsinki requires grocery shops and other food businesses to register before opening. Imported products must meet Finnish and EU food-safety and labelling rules. For a small operator bringing in unfamiliar goods, compliance is part of the daily job, not a form filled out once and forgotten.</p>
      <h2>How to find the good ones</h2>
      <p>Start in the neighbourhoods where people actually live and shop. Hakaniemi and the streets around it have a strong cluster, while eastern Helsinki, central shopping centres and university areas have increasingly broad choices. Espoo and Vantaa deserve their own exploration too.</p>
      <p>Do not rely only on the shop name to tell you what is inside. Many stores carry products from several countries and regions. Walk the aisles, ask what is popular and take a photograph of the label if you need help working out how to use something.</p>
      <p>Opening hours and stock can move quickly, so check the shop's own page before making a special journey. If you are looking for one exact ingredient, a quick call or message can save a cross-city disappointment.</p>
      <h2>A bigger story for Expats.fi</h2>
      <p>This boom is also a reminder that our Eats coverage should not stop at cafés and restaurants.</p>
      <p>The people importing, stocking and explaining these ingredients are part of Helsinki's international food story. We want to start mapping the grocers that readers genuinely use, with clear locations and a note on what each one is best for.</p>
      <p>For now, the bigger point is worth celebrating. Helsinki's pantry is expanding because international residents are not only arriving in the city. They are building businesses, creating jobs and changing what everybody else gets to eat.</p>
      <p>That feels like progress you can put in a shopping basket.</p>
    `,
    sources: [
      { name: 'Yle News: Helsinki sees international grocery store boom', url: 'https://yle.fi/a/74-20244227' },
      { name: 'Yle Finnish investigation and interview with Jun Li', url: 'https://yle.fi/a/74-20240353' },
      { name: 'Finnish Competition and Consumer Authority research on grocery-market concentration', url: 'https://www.kkv.fi/uploads/sites/2/2025-04-working-papers-price-transmissions-in-the-finnish-foodchain.pdf' },
      { name: 'City of Helsinki: registering a food business', url: 'https://www.hel.fi/en/business-and-work/apply-for-permits-and-facilities/food-business/registering-a-food-business' },
    ],
  },
  {
    slug: 'deepfake-images-finland-what-to-do-2026',
    title: 'That fake photo is not a joke. Here is what to do if it happens to you',
    standfirst: 'Explicit deepfakes are spreading through Finnish schools, workplaces and social circles. If somebody creates or shares one of you or your child, save the evidence, get support and report what happened.',
    category: 'Life admin',
    publishedAt: '2026-09-04T08:00:00.000Z',
    readingMinutes: 9,
    featured: false,
    practicalSummary: 'If a fake intimate image is created or shared, do not blame the person shown. Preserve screenshots, account details, links and dates, report the content to the platform and contact the police. Call 112 only when somebody is in immediate danger. Victim Support Finland can explain the process in English.',
    html: `
      <p>AI can now turn an ordinary photograph into an explicit fake before the kettle has boiled.</p>
      <p>That speed can make the whole thing sound lightweight, like another grim internet prank. It is not. The person shown may know the image is fake, but they still have to wonder who has seen it, where it will appear next and whether somebody believes it.</p>
      <p>Yle journalist Johanna Vehkoo describes the spread of explicit deepfakes in Finland as an epidemic. Recent investigations have found cases involving schoolgirls, colleagues, women in the voluntary defence forces and public figures.</p>
      <p>If this happens to you, your child or somebody close to you, the first thing to understand is simple: the person in the image has done nothing wrong.</p>
      <h2>What is a deepfake?</h2>
      <p>A deepfake is manipulated or generated image, audio or video that makes a real person appear to say or do something they did not do.</p>
      <p>The technology is also used in impersonation scams. Finland's National Cyber Security Centre has received reports of fake Finnish-language recordings of public figures and an English-language case where a cloned chief executive's voice requested a large money transfer.</p>
      <p>Explicit image abuse is especially personal. A normal photograph from social media, school or work can be altered to create a nude or sexual image without the person's knowledge or consent.</p>
      <p>The image being fake does not make the violation or its impact fake.</p>
      <h2>Start by preserving evidence</h2>
      <p>Your first instinct may be to delete everything immediately. Remove public material where you can, but collect evidence before links, messages or accounts disappear.</p>
      <ul>
        <li>Take screenshots showing the image, message, username and surrounding conversation.</li>
        <li>Copy the page address or direct link.</li>
        <li>Write down the date and time you found it.</li>
        <li>Save the profile details of the person who posted or sent it.</li>
        <li>Keep threatening messages, requests for money and any earlier contact.</li>
      </ul>
      <p>You do not need to send the image around to prove it exists. Store the evidence securely and avoid creating more copies than necessary, particularly when a child is involved.</p>
      <p>If the material is on a school or workplace system, tell the responsible adult, principal, safeguarding contact, manager or HR team. That does not replace a police report, but it can help stop immediate circulation and preserve internal records.</p>
      <h2>Report the content to the platform</h2>
      <p>Use the platform's reporting tools for non-consensual intimate imagery, harassment, impersonation or child sexual material, whichever accurately describes the situation.</p>
      <p>Keep a record of the report and any case number. If the platform offers an appeal after rejecting the report, use it and explain clearly that the image is fabricated and was created or shared without consent.</p>
      <p>Do not get pulled into a long argument with the uploader. If there are threats or demands, preserve them. If money is requested, do not pay before speaking with police. Payment does not guarantee that a copy will disappear.</p>
      <h2>Make a police report</h2>
      <p>Finnish police say you do not need to know the legal name of an offence before asking for help. If you believe something wrong has happened, you can report the facts and let the police assess them.</p>
      <p>For a non-urgent case, file a police report online or visit a police station. Include a clear timeline and the evidence you saved. Screenshots and information from an online profile can be useful.</p>
      <p>The police online reporting service is unavailable overnight between 22.45 and 06.00. You can prepare the material and submit it when the service reopens.</p>
      <p>Call 112 if someone is in immediate danger, there is an urgent threat to health or safety, or police help is needed straight away. A distressing but non-urgent online discovery should normally go through the police reporting service rather than the emergency number.</p>
      <h2>If a child is involved</h2>
      <p>Stay calm in front of them, even if you are furious.</p>
      <p>The Police of Finland stresses that a young person whose image has been shared must not be left to manage alone. Do not ask what they did to cause it. They did not cause it.</p>
      <p>Give them a safe adult presence, protect ordinary routines such as meals and sleep, and explain the next steps before making a report. Save all related material. Schools and other professionals may also have a duty to notify police when they suspect a sexual offence against a child, including an offence committed online.</p>
      <p>If there is an immediate concern about the child's wellbeing or safety, seek urgent health care or call 112.</p>
      <h2>Get somebody beside you</h2>
      <p>Victim Support Finland, usually called RIKU, supports victims, relatives and witnesses. Its services are confidential and you can ask for advice even if you are not sure whether the situation meets the definition of a crime.</p>
      <p>RIKU's national helpline is 116 006. English-language users can also send a contact request through its website. A trained support person may be able to accompany a victim during police interviews and court proceedings.</p>
      <p>That practical support matters. When something intimate and humiliating has been pushed into public view, even filling in a form can feel enormous.</p>
      <h2>What about fake calls and videos?</h2>
      <p>Deepfakes are not always explicit. A familiar face or voice can be used to create urgency and ask for money, credentials or confidential information.</p>
      <p>Do not rely on a video call looking convincing. End the call and contact the person or organisation through a number you already trust. Ask a question that only the real person should know. Treat any surprising request for a large transfer, banking codes or secrecy as a reason to stop.</p>
      <p>If banking details have been exposed, contact the bank immediately and then file a police report.</p>
      <h2>The useful bit to remember</h2>
      <p>You do not have to prove that an image is sophisticated, diagnose which AI tool made it or win an argument with the person sharing it.</p>
      <p>Save the evidence. Report the content. Tell somebody safe. Contact the police and get support.</p>
      <p>Most importantly, do not let anyone reduce it to banter. A fake intimate image can do very real harm, and the person targeted deserves to be taken seriously from the first conversation.</p>
    `,
    sources: [
      { name: 'Yle All Points North: Finland’s deepfake epidemic', url: 'https://yle.fi/a/74-20244431' },
      { name: 'Police of Finland: personal integrity and intimate images online', url: 'https://poliisi.fi/en/-/everyone-is-entitled-to-personal-integrity-even-online' },
      { name: 'Police of Finland: file a police report', url: 'https://poliisi.fi/en/report-a-crime' },
      { name: 'National Cyber Security Centre Finland: deepfakes used in cybercrime', url: 'https://kyberturvallisuuskeskus.fi/en/news/national-cyber-security-centre-finlands-weekly-review-032024' },
      { name: 'Victim Support Finland services in English', url: 'https://www.riku.fi/en/service-brochure-english/' },
    ],
  },
  {
    slug: 'english-language-upper-secondary-finland-2026',
    title: 'Finland’s first English-language lukio classes are now underway',
    standfirst: 'A new route has opened for internationally mobile families: the regular Finnish upper secondary curriculum, taught in English. It is a welcome change, but the eligibility and fee rules need a careful read.',
    category: 'Finland',
    publishedAt: '2026-08-30T12:00:00.000Z',
    readingMinutes: 8,
    featured: true,
    practicalSummary: 'Seven schools have started teaching the Finnish upper secondary curriculum in English. The route is mainly for young people already living in Finland whose Finnish or Swedish is not yet strong enough for lukio, rather than students moving here solely to study.',
    html: `
      <p>For years, internationally mobile families looking at upper secondary education in Finland have usually been pointed towards one familiar option: the International Baccalaureate.</p>
      <p>That remains a solid route, but it is no longer the only way to complete upper secondary school fully in English.</p>
      <p>From August 2026, a small group of Finnish schools began teaching the regular Finnish general upper secondary curriculum in English. That means students can work towards the Finnish matriculation examination without first becoming academically fluent in Finnish or Swedish.</p>
      <p>It is a proper change, and a potentially important one for families who have built a life here but arrived too late for their children to comfortably catch up with every subject in Finnish.</p>
      <p>There are, however, a few catches worth understanding before anyone starts mentally packing a school bag.</p>
      <h2>What has actually changed?</h2>
      <p>English-language general upper secondary education can now be offered under the Finnish national curriculum.</p>
      <p>This is different from an international school creating its own programme. Students study the same broad curriculum used in Finnish-language and Swedish-language lukio education, only in English. English versions of the Finnish matriculation examinations are expected to become available from autumn 2028.</p>
      <p>The first intake began in August 2026. According to the Finnish National Agency for Education, seven schools were involved:</p>
      <ul>
        <li>Aviapolis Upper Secondary School in Vantaa</li>
        <li>The English School in Helsinki</li>
        <li>Helsinki Upper Secondary School of Languages</li>
        <li>Jyväskylä Lyseo Upper Secondary School</li>
        <li>Oulu Lyseo Upper Secondary School</li>
        <li>Pori Upper Secondary School</li>
        <li>Pyynikki Upper Secondary School in Tampere</li>
      </ul>
      <p>Across the seven schools, 132 students were selected for 170 available places.</p>
      <p>For Helsinki families, the fully English track at Helsinki Upper Secondary School of Languages is the clearest municipal option. The City of Helsinki says applicants without Finnish or Swedish may be eligible, and admission includes an entrance examination rather than relying only on a Finnish comprehensive-school grade average.</p>
      <h2>How is this different from the IB?</h2>
      <p>The short answer is breadth.</p>
      <p>After its preparatory year, the IB Diploma Programme focuses on six selected subjects. The Finnish general upper secondary curriculum offers a wider range of subjects throughout the student's studies.</p>
      <p>Neither option is automatically better. Some students love the structure and international recognition of the IB. Others may prefer the flexibility of the Finnish curriculum, particularly if they expect to continue into higher education in Finland.</p>
      <p>Both routes can lead to Finnish and international universities. The right choice depends on the student, the subjects they enjoy and where the family expects to be living in a few years.</p>
      <h2>Who is the new English route actually for?</h2>
      <p>This is the part families need to read carefully.</p>
      <p>The programme is aimed at students living in Finland whose Finnish or Swedish is not yet strong enough for upper secondary studies in those languages. It was designed particularly with internationally mobile families and Finnish returnees in mind.</p>
      <p>It is not intended as a general English-language route for students moving to Finland solely to attend school.</p>
      <p>Eligibility is tightly defined. The Finnish National Agency for Education says younger applicants will generally need to have studied in a Finnish comprehensive school for no more than three years. Adult applicants are generally limited to those who have lived in Finland for no more than three years.</p>
      <p>Students from outside the EU and EEA also need to pay close attention to their residence-permit basis. The English-language programme is not intended for third-country nationals whose reason for coming to Finland is simply to study at upper secondary level.</p>
      <p>In other words, this is mainly a route for families who are already here for work, family or another established reason, not a new international student-recruitment scheme.</p>
      <h2>What about fees?</h2>
      <p>Finland's reputation for free education can make this bit surprising.</p>
      <p>The City of Helsinki has introduced tuition fees for certain students from outside the EU, EEA and Switzerland who begin upper secondary education from 1 August 2026 and came to Finland, or received their residence permit, for study purposes.</p>
      <p>Helsinki currently lists the annual fee as €10,600 for the national upper secondary programme and €14,000 for the IB Diploma Programme.</p>
      <p>There are exemptions. These include students permanently living in the European Economic Area, certain exchange students, people receiving temporary protection and some apprenticeship students.</p>
      <p>Do not guess your position from a Facebook thread. Check the school's current admissions information and, if residence permits are involved, confirm the rules directly with the school and Migri.</p>
      <h2>What should families do now?</h2>
      <p>If your child is already living in Helsinki and needs an upper secondary place, start with the City of Helsinki's application page and the school itself.</p>
      <p>The normal joint application takes place in spring through Studyinfo. Helsinki also runs rolling admission rounds when places are available. These are especially relevant for families who arrive in the middle of the school year.</p>
      <p>If a young person moves to Helsinki without a study place after the school year has begun, the city recommends contacting Ohjaamo Helsinki. They can help work through the available routes instead of leaving families to bounce between school websites.</p>
      <p>This first intake is small, so it will not solve every family's situation overnight. Still, it closes a very real gap. A teenager should not have to abandon the Finnish education path simply because their family moved here when they were fourteen or fifteen and academic Finnish has not caught up yet.</p>
      <p>For international families planning to stay, that is a genuinely welcome step.</p>
      <h2>What happens next?</h2>
      <p>The first English-language Finnish matriculation examinations are planned for autumn 2028. Until then, the schools, students and education authorities will be learning what works in practice.</p>
      <p>We will keep an eye on application dates, eligibility guidance and any additional schools joining the programme.</p>
    `,
    sources: [
      { name: 'Finnish National Agency for Education: English-language upper secondary education', url: 'https://www.oph.fi/en/news/2025/finnish-general-upper-secondary-school-can-be-completed-english-autumn-2026' },
      { name: 'Finnish National Agency for Education: 2026 school-year changes', url: 'https://www.oph.fi/fi/uutiset/2026/uusi-lukuvuosi-alkaa-oppimisen-tuki-uudistui-seuraavaksi-vuorossa-arviointi' },
      { name: 'City of Helsinki: Applying to upper secondary school', url: 'https://www.hel.fi/en/childhood-and-education/general-upper-secondary-education/apply-to-general-upper-secondary-school' },
      { name: 'City of Helsinki: Education in different languages', url: 'https://www.hel.fi/en/childhood-and-education/general-upper-secondary-education/studies-in-general-upper-secondary-school/general-upper-secondary-education-in-different-languages' },
    ],
  },
  {
    slug: 'helsinki-tram-routes-change-31-august-2026',
    title: 'Helsinki’s trams are changing again. Check your route before Monday',
    standfirst: 'Runeberginkatu loses its tram service, tram 5 stretches to Jätkäsaari and tram 8 becomes much shorter from 31 August. Some of these changes will be with us until the end of 2027.',
    category: 'Helsinki',
    publishedAt: '2026-08-27T12:30:00.000Z',
    readingMinutes: 6,
    featured: true,
    practicalSummary: 'Search your usual trip in the HSL Journey Planner using 31 August or a later date. Trams 1, 2, 5, 8, 10 and 13 change, and regular journeys through Töölö, Kamppi, Jätkäsaari and the city centre may need a different stop or an extra transfer.',
    html: `
      <p>If you regularly catch a tram through Töölö, Kamppi or the city centre, give the HSL app a quick look before heading out on Monday morning.</p>
      <p>Several Helsinki tram routes will change from 31 August, and this is not simply a timetable adjustment. Runeberginkatu will lose its tram service while construction of the West Helsinki Light Rail continues, tram 5 will take on a much larger role and tram 8 will become considerably shorter.</p>
      <p>Some of these arrangements are expected to remain in place until the end of 2027, so this is one worth learning rather than hoping it disappears after a couple of weeks.</p>
      <h2>What is actually changing?</h2>
      <p>The biggest disruption is in Töölö, where trams will no longer run along Runeberginkatu.</p>
      <p>Trams 1 and 2 will instead travel along Mannerheimintie between Ylioppilastalo and Ooppera. Tram 2 will also stop travelling past the Central Railway Station and Mikonkatu. Its new city-centre route will run along Aleksanterinkatu.</p>
      <p>That may catch people out. If you normally use tram 2 to reach the railway station, do not assume your usual stop will still work on Monday.</p>
      <p>Trams 4 and 10 will run every ten minutes rather than every seven or eight minutes. HSL says the slightly lower frequency is intended to keep traffic moving along Mannerheimintie, which will now be carrying more tram routes.</p>
      <h2>Tram 5 is getting a much bigger job</h2>
      <p>Tram 5 will be extended from Katajanokka through the city centre, Kamppi and Ruoholahti to Tahitinkatu in Jätkäsaari.</p>
      <p>It will run roughly every ten minutes each day. At weekends, tram 5T will travel to West Harbour instead of Tahitinkatu.</p>
      <p>This extended route replaces part of tram 8's current journey and should be particularly useful for people travelling between the city centre, Ruoholahti, Jätkäsaari and the ferry terminal.</p>
      <p>Tram 8, meanwhile, will run only between Arabia and Ooppera. Its new terminus will be on Ruusulankatu, just west of the Opera junction.</p>
      <p>If you currently use tram 8 between Töölö and Jätkäsaari, your journey will probably involve a change at Kamppi. HSL estimates that the transfer will add around five minutes to most journeys.</p>
      <h2>Some services are returning</h2>
      <p>There is a bit of good news for Käpylä and Mäkelänkatu.</p>
      <p>Trams 1 and 7 will return to Mäkelänkatu after the summer construction disruption. Tram 1 will once again run to Käpylä and serve Eira at the other end of its regular weekday route. Tram 1T will continue to serve West Harbour at weekends.</p>
      <p>Tram 7 will also return to Mäkelänkatu and will no longer use its temporary route through Helsinginkatu and Aleksis Kiven katu.</p>
      <h2>Smaller changes to trams 10 and 13</h2>
      <p>Water supply work in Ullanlinna means tram 10 will temporarily operate as tram 10B and terminate at Kolmikulma. HSL expects this arrangement to last around four weeks.</p>
      <p>Tram 13 will temporarily terminate at Ilmala because its usual Maistraatintori terminus in West Pasila is affected by building work. That change is expected to last approximately two months.</p>
      <p>In other words, even if you never travel through Töölö, it is still worth checking your route.</p>
      <h2>What about buses?</h2>
      <p>Buses running along Runeberginkatu will continue operating. People travelling between Töölö and Jätkäsaari can change between the bus and tram 5 at Kamppi.</p>
      <p>HSL is also moving the Fredrikinkatu stops used by buses 20 and 30 closer to the tram stops, which should make those transfers less painful.</p>
      <p>Still, give yourself an extra few minutes during the first week. A technically possible connection and a comfortable connection are not always the same thing, especially when half the city is standing at a stop trying to work out where tram 8 has gone.</p>
      <h2>What should you do now?</h2>
      <p>Search for your journey in the HSL Journey Planner using 31 August or a later date. Searching with an earlier date may still show the old routes.</p>
      <p>If you use the same tram regularly, save the route in the HSL app and turn on disruption notifications. That is particularly sensible here because smaller stop changes and temporary diversions may continue as construction progresses.</p>
      <p>The Runeberginkatu disruption is part of the wider West Helsinki Light Rail project. The eventual result should be a larger tram network and fewer buses travelling through Runeberginkatu, but reaching that point is going to involve a fair bit of shuffling around first.</p>
      <p>For now, the simple version is this: tram 5 becomes much more useful, tram 8 becomes much shorter and your familiar trip through Töölö may no longer work the way it did last week.</p>
    `,
    sources: [
      { name: 'HSL route changes from 31 August', url: 'https://www.hsl.fi/en/hsl/news/service-updates/2026/08/changes-to-tram-routes-from-31-august' },
      { name: 'HSL Runeberginkatu disruption guide', url: 'https://www.hsl.fi/en/hsl/news/service-updates/2026/06/tram-services-to-be-suspended-on-runeberginkatu-at-the-end-of-august' },
      { name: 'HSL Journey Planner', url: 'https://reittiopas.hsl.fi/' },
    ],
  },
  {
    slug: 'finland-economy-wages-jobs-august-2026',
    title: 'Finland’s economy is growing again. So why does everything still feel tight?',
    standfirst: 'GDP, exports and confidence have improved, but unemployment is still high and households remain cautious. The recovery is real, although plenty of people are still waiting to feel it.',
    category: 'Work & money',
    publishedAt: '2026-08-27T11:45:00.000Z',
    readingMinutes: 9,
    featured: false,
    practicalSummary: 'Finland’s economy grew by 0.4 percent during the second quarter, but the labour market remains difficult and home prices are still falling. This is progress before a victory lap, and daily life may take longer to catch up with the national numbers.',
    html: `
      <p>Finland's economy grew again during spring and early summer, which is obviously better news than another quarter spent sliding backwards.</p>
      <p>Statistics Finland says gross domestic product increased by 0.4 percent between April and June compared with the first three months of 2026. Exports jumped, private investment edged upwards and manufacturing grew across several industries.</p>
      <p>That sounds encouraging. It is encouraging.</p>
      <p>It also does not mean the job search has suddenly become easy, grocery bills feel painless or everyone should start browsing for a new sofa.</p>
      <p>The latest numbers show an economy making progress while plenty of households are still waiting to feel the benefit.</p>
      <h2>What moved in the right direction?</h2>
      <p>Exports did much of the heavy lifting. Their volume rose by 5.7 percent from the previous quarter. A significant ship delivery helped that figure, although Statistics Finland says export growth was visible more widely too.</p>
      <p>Manufacturing grew across the forest, metal, electrical and electronics industries. Professional, scientific and technical services also improved slightly.</p>
      <p>Private investment rose by 0.5 percent, while private consumption increased by just 0.1 percent.</p>
      <p>That last figure is worth pausing on. People are spending a little more, but hardly throwing caution to the wind. Services did better, while spending on non-durable, semi-durable and durable goods fell.</p>
      <h2>Why did public investment fall so dramatically?</h2>
      <p>One number looks particularly alarming: public investment fell by 35.3 percent during the quarter.</p>
      <p>That does not mean Finland suddenly cancelled a third of its schools, roads and public projects. Statistics Finland says the comparison was heavily affected by the timing of fighter aircraft deliveries. None were recorded during the second quarter. Real-estate investment by employment pension schemes also remained lower, particularly in residential construction.</p>
      <p>It is a useful reminder that quarterly figures can swing because one very large item lands in one period and not another.</p>
      <h2>People are feeling less gloomy</h2>
      <p>Finland's consumer confidence indicator rose from -5.3 in July to -3.0 in August. Its long-term average is -2.9, which means confidence has essentially returned to its usual level.</p>
      <p>Greater Helsinki was the most optimistic part of the country, recording a positive score of 0.8.</p>
      <p>That does not mean everyone is suddenly feeling flush. Nearly a quarter of respondents said their personal finances were worse than a year earlier, while 26 percent said they were better.</p>
      <p>People also remained cautious about expensive purchases. Only 14 percent thought August was a good time to buy durable goods such as furniture, appliances or electronics.</p>
      <p>That distinction matters. Confidence improving does not necessarily mean households have loads of spare cash. It can simply mean that fewer people believe things are about to get worse.</p>
      <h2>Wages are finally beating inflation</h2>
      <p>The average level of nominal earnings for full-time wage and salary earners rose by 3.4 percent between April and June compared with the same period in 2025.</p>
      <p>Once price increases are taken into account, real earnings rose by 1.6 percent. In plain English, wages grew faster than the cost of living during that period. For someone whose pay followed the wider trend, their salary bought slightly more than it did a year earlier.</p>
      <p>Statistics Finland estimated average monthly earnings for full-time employees at €4,300. That number needs some context. It is an average across different industries, professions and seniority levels. It is not a promise of what a typical newcomer, junior worker or job applicant should expect to earn.</p>
      <p>Higher earners can also pull an average upwards. When comparing a job offer, industry salary data and collective agreements are normally more useful than one national average.</p>
      <p>The strongest annual earnings growth was recorded in wellbeing services county administration, where pay increased by 4.8 percent. Growth in negotiated wages for central government employees was lower at 2.4 percent.</p>
      <h2>The job market remains the difficult bit</h2>
      <p>Finland had approximately 2.64 million employed people in July, roughly unchanged from a year earlier.</p>
      <p>The number of unemployed people reached 289,000, which was 20,000 higher than in July 2025. The trend unemployment rate stood at 10.5 percent.</p>
      <p>The increase was uneven. Statistics Finland recorded 24,000 more unemployed women than a year earlier, while the number of unemployed men fell by 4,000.</p>
      <p>These are national figures and individual experiences vary enormously by profession, location, qualifications and language skills. Still, they confirm what plenty of jobseekers have been saying for months: finding work in Finland remains genuinely difficult.</p>
      <p>That can be particularly rough for international residents who are also dealing with unfamiliar recruitment habits, Finnish-language requirements and professional networks that take time to build.</p>
      <p>If your search has dragged on, the figures offer some important perspective. It is not automatically evidence that you have failed to understand Finland or that your experience is uniquely hopeless. You are looking for work in a genuinely tight market.</p>
      <h2>People are still worried about losing their jobs</h2>
      <p>Although views about Finland's overall unemployment situation improved in August, employed respondents remained concerned about their own security.</p>
      <p>Twenty-nine percent thought their risk of unemployment or temporary lay-off had increased. Only seven percent believed that risk had decreased.</p>
      <p>That helps explain why improved confidence has not immediately turned into enthusiastic spending. People may feel that the national economy is stabilising while still being careful with their own money.</p>
      <p>Consumers also estimated inflation to be considerably higher than the measured rate. Statistics Finland reported annual inflation of 2.1 percent in July, while survey respondents felt prices had risen by around 5 percent.</p>
      <p>That gap may sound strange, but lived experience does not always resemble the national shopping basket used to calculate inflation. If your rent, groceries or other regular expenses have risen sharply, a relatively calm headline rate may not feel especially convincing.</p>
      <h2>What does this mean for expats?</h2>
      <p>For people already in steady employment, the figures are cautiously positive. Real earnings are growing again, confidence has improved and Greater Helsinki appears less pessimistic than the rest of the country.</p>
      <p>For jobseekers, the message is more mixed. The economy may be moving in a better direction, but employers are not yet hiring strongly enough to make the search easy.</p>
      <p>It remains worth widening your approach beyond standard job adverts. Check municipal employment services, industry groups, professional events, direct applications and personal contacts. If Finnish is frequently blocking you from roles you could otherwise do, even a modest improvement can help demonstrate that you are actively building towards workplace proficiency.</p>
      <p>Most importantly, do not read improving economic headlines as proof that you should already have found something. National confidence can recover before recruitment does.</p>
      <h2>And what is happening with housing?</h2>
      <p>Home prices are still falling. Preliminary figures show prices for older homes in housing companies dropped by 3.4 percent nationally in July compared with a year earlier. In Greater Helsinki, the fall was 3.6 percent. Vantaa recorded a 6.2 percent decline.</p>
      <p>Sales through estate agents were also down 9.5 percent from a year earlier.</p>
      <p>For buyers, falling prices may create room to negotiate. It does not necessarily make buying affordable. Interest costs, bank requirements, renovations and housing-company loans can quickly change the calculation.</p>
      <p>For owners trying to sell, the market may require patience and realistic pricing. For renters, lower sale prices do not automatically produce lower rents.</p>
      <h2>What happens next?</h2>
      <p>Statistics Finland will publish updated second-quarter figures and sector accounts on 18 September. A preliminary estimate for the third quarter is expected on 30 October, followed by fuller national accounts on 27 November.</p>
      <p>Those releases should tell us whether the growth is becoming broader and steadier or whether the spring improvement relied too heavily on a handful of large export and investment movements.</p>
      <p>For now, the fairest summary is simple: Finland is moving in the right direction, but it is far too early for a victory lap.</p>
    `,
    sources: [
      { name: 'Statistics Finland national accounts, April to June 2026', url: 'https://stat.fi/en/publication/cmfql1cwv04mw0evy5vav0lbs' },
      { name: 'Statistics Finland consumer confidence, August 2026', url: 'https://stat.fi/en/publication/cmf5h6ytr3p1207urrweuysgw' },
      { name: 'Statistics Finland earnings, April to June 2026', url: 'https://stat.fi/en/publication/cmfpfbsco1lax08vxtw0gweiq' },
      { name: 'Statistics Finland Labour Force Survey, July 2026', url: 'https://stat.fi/en/publication/cmfp92ulja76508urnykex72w' },
      { name: 'Statistics Finland housing prices, July 2026', url: 'https://stat.fi/en/publication/cmetlovofknpr07uew29d0ntw' },
    ],
  },
  {
    slug: 'helsinki-design-week-2026-useful-guide',
    title: 'Helsinki Design Week is here, and plenty of the good stuff is free',
    standfirst: 'The city centre becomes a ten-day design festival from 28 August to 6 September. Here is what is worth knowing, what needs booking and where to begin if design is not normally your thing.',
    category: 'Culture & community',
    publishedAt: '2026-08-28T10:15:00.000Z',
    readingMinutes: 7,
    featured: true,
    practicalSummary: 'Helsinki Design Week runs from 28 August to 6 September. Several headline installations and public events are free, but the Futuro House and Aalto 90 Pavilion require advance registration. Check the official programme before travelling because events are spread across the city.',
    html: `
      <p>Helsinki Design Week begins today, which is good news even if the phrase design festival makes you picture an expensive chair in a silent white room.</p>
      <p>From 28 August to 6 September, events, installations, studios and conversations will spread across central Helsinki. Some are aimed squarely at design professionals, but plenty are simply interesting ways to see the city, poke your head into places that are not normally open and learn why Finland can turn a vase into a national conversation.</p>
      <p>A fair amount of the programme is free. The small catch is that free does not always mean you can wander in whenever you fancy. Several of the most popular events require advance registration, so a little planning will save you arriving at a lovely pavilion with nothing but optimism.</p>
      <h2>What is Helsinki Design Week actually about?</h2>
      <p>This year's theme is The Oncoming Other. In less festival-like language, it is about encounters, unfamiliar perspectives and how people share a city.</p>
      <p>There is no single main venue. Instead, the festival uses a network of meeting points, exhibitions and partner spaces across Helsinki. That makes it feel more like a city trail than an event you enter through one gate.</p>
      <p>The programme covers architecture, fashion, interiors, materials, graphic design and city planning. You do not need to understand any of those professionally. Pick one thing that sounds fun, then let the nearby events do the rest.</p>
      <h2>The big free installations</h2>
      <p>One of the headline attractions is the Futuro House in Kaisaniemi Botanic Garden. Finnish architect Matti Suuronen designed the flying-saucer-shaped house in 1968, when the future apparently involved a lot more fibreglass and much rounder windows.</p>
      <p>For Design Week, its interior has been reimagined by Marimekko. Entry is free, but you need to register in advance through the official Helsinki Design Week site.</p>
      <p>At the South Harbour, the Aalto 90 Pavilion celebrates the ninetieth anniversary of Alvar Aalto's famous vase. The seven-metre structure follows the vase's wavy outline and contains a photography exhibition by Arno Rafael Minkkinen.</p>
      <p>That is also free with advance registration. Both attractions are likely to be popular, so book before building an afternoon around them.</p>
      <h2>A new place to watch the city change</h2>
      <p>The Museum of Finnish Architecture and Design is opening a new event and gathering space at Eteläranta 6.</p>
      <p>On 31 August from 16.00 to 18.00, the space will host a public programme about how architecture and design shape Helsinki. The wider idea is especially interesting because visitors will be able to follow the area as work progresses on the new architecture and design museum.</p>
      <p>If you have ever walked past a Finnish development site and wondered what is being built, why it takes years and who decided on that particular shade of grey, this is a more welcoming route into the conversation.</p>
      <h2>Design Market and the family option</h2>
      <p>Design Market takes over Cable Factory on 29 and 30 August. It brings Finnish furniture, clothing, homeware and smaller design brands together under one roof.</p>
      <p>You can browse without pretending you are planning to replace every object in your flat. It is also a useful place to discover local makers beyond the names found in every airport shop.</p>
      <p>Children's Design Week runs at Cable Factory over the same weekend. For families, that makes this one of the easiest festival stops because the grown-ups can look around without selling the day as an educational architecture outing.</p>
      <h2>Fancy seeing where the work happens?</h2>
      <p>Open Studios takes place on 28 August and 4 September. Designers and creative teams open their working spaces, giving visitors a look behind the finished products and polished shop windows.</p>
      <p>These events can also be genuinely handy for international residents working in creative industries. Helsinki's professional circles can feel small and slightly hidden until you are standing in the same room as the people who make the work. Go because you are curious, but take your professional confidence with you.</p>
      <h2>City-centre ideas, mushrooms and an English-language talk</h2>
      <p>HDW Lab will use a two-storey space at the corner of Kluuvikatu and Aleksanterinkatu to test ideas for a livelier city centre. From 2 to 4 September, residents can visit and discuss how empty shops and public spaces might be used differently.</p>
      <p>There is also an open workshop on 4 September from 12.00 to 14.00. Registration is required.</p>
      <p>Outside the lab, Finland's first wild mushroom bar will serve seasonal produce from 1 to 4 September. That may be the most Finnish sentence published on this website all week.</p>
      <p>An English-language seminar called Towards a More Vibrant City Centre takes place outside Helsinki City Hall on 1 September from 14.00 to 16.00. It brings together people working in planning, business and culture to discuss how quieter city centres can find new life. Registration information is available through the festival programme.</p>
      <h2>How to avoid turning it into homework</h2>
      <p>The full programme is large. Do not try to understand all of it before leaving home.</p>
      <ol>
        <li>Choose one headline event or neighbourhood.</li>
        <li>Check whether your first choice requires registration.</li>
        <li>Open the official programme map and add one nearby event.</li>
        <li>Leave enough space for a coffee, a wander and something you had not planned.</li>
      </ol>
      <p>Dates, capacity and ticket arrangements vary across partner events, so use the official programme as the final word. A free public installation, a paid talk and a limited studio visit can all sit beside one another on the same page.</p>
      <p>If design is already your world, you probably have a colour-coded programme ready. If it is not, this is still a fine excuse to see familiar Helsinki streets behaving a little differently for ten days.</p>
    `,
    sources: [
      { name: 'City of Helsinki Design Week guide', url: 'https://www.hel.fi/en/news/helsinki-design-week-brings-events-and-installations-to-the-city-centre' },
      { name: 'Helsinki Design Week official programme', url: 'https://helsinkidesignweek.com/?lang=en' },
    ],
  },
  {
    slug: 'job-applicant-profile-mandatory-september-2026',
    title: 'Job hunting in Finland? One more profile becomes compulsory in September',
    standfirst: 'Most unemployed jobseekers will need to publish a Job Market Finland profile within 15 business days. Here is who it covers, what employers can see and what to sort before September arrives.',
    category: 'Life admin',
    publishedAt: '2026-08-24T12:30:00.000Z',
    readingMinutes: 6,
    featured: true,
    practicalSummary: 'If you are registered as a jobseeker, check whether the new profile duty applies to you. The deadline is usually 15 business days, the profile can remain anonymous, and free help is available if the Finnish employment system already has your head spinning.',
    html: `
      <p>Finnish job hunting already comes with enough tabs, forms and official vocabulary to make a perfectly capable person wonder whether they have accidentally applied to become an accountant. From 1 September 2026, there is another item to put on the list: a published job applicant profile on Job Market Finland.</p>
      <p>The important bit is that this is not simply a nice extra for people who fancy polishing their online presence. For most people registered as jobseekers, creating and publishing the profile will become an obligation.</p>
      <h2>What is actually changing?</h2>
      <p>A new jobseeker will generally have 15 business days from the start of their job search to create and publish a profile. People whose unemployment began before September are not automatically forgotten. Their 15-business-day clock starts after their next jobseeker interview.</p>
      <p>The duty can apply if you are unemployed, temporarily laid off, working part time or on a reduced working week. It may also cover part-time entrepreneurs, students and people studying independently while receiving unemployment benefit.</p>
      <p>There are exceptions. If your job search lasts no more than 15 business days, you normally do not need to publish a profile. An employment services specialist can also decide that publication is not appropriate or necessary in your particular situation. In other words, do not guess if your circumstances are unusual. Ask the person handling your case and get a clear answer.</p>
      <h2>Will all of Finland be reading your CV?</h2>
      <p>No. This is probably the first question many people will have, especially anyone who does not want their current employer, neighbour or curious former colleague wandering across their details.</p>
      <p>Published profiles can be viewed by authenticated employers and private recruitment agencies using Job Market Finland. The basic profile is generally anonymous. Employers can see the title, introduction, skills and any other information you choose to publish, but your name and contact details are not shown automatically.</p>
      <p>There is one small trap worth noticing. If you add a link to a personal LinkedIn page, portfolio or website, that link may identify you even when the profile itself does not. That might be exactly what you want, but it should be a choice rather than a surprise.</p>
      <h2>What should you put in it?</h2>
      <p>Think of the profile as a short shop window rather than your entire professional autobiography. Employers should be able to understand what you do, what you are good at and what sort of work you want without decoding a page of vague corporate language.</p>
      <p>Job Market Finland divides the profile into skills, an introduction, and work experience and education. Give the profile a useful title, write a clear opening paragraph, add the areas where you can work, and be specific about your experience. If you work in English, say so clearly. If you have Finnish or Swedish at any level, include that honestly too.</p>
      <p>The service uses the details to recommend jobs and allows employers to contact suitable candidates, including for roles that may never appear as a public vacancy. That does not magically fix Finland's difficult job market, but a well-written profile gives you another route into it.</p>
      <h2>What to do now</h2>
      <ol>
        <li>Log in to Job Market Finland and check whether you already have a profile.</li>
        <li>Ask your employment services specialist whether the obligation applies to your situation.</li>
        <li>Draft the profile before the deadline rather than trying to write your life story on business day fourteen.</li>
        <li>Check every external link if remaining anonymous matters to you.</li>
        <li>Use the free Helsinki Employment Services workshops if you want help turning your experience into a clear profile.</li>
      </ol>
      <p>One final point: this article explains the general rule, but your employment plan and benefit situation are personal. If anything is unclear, confirm it with your local employment authority. A five-minute question now is better than finding out later that an official deadline has quietly wandered past.</p>
    `,
    sources: [
      { name: 'City of Helsinki Employment Services', url: 'https://www.hel.fi/en/news/a-job-applicant-profile-helps-employers-find-your-competence-creating-one-will-be-mandatory-for' },
      { name: 'Job Market Finland', url: 'https://tyomarkkinatori.fi/en/news/tyollisyyspalveluja_koskevat_lakiuudistukset_vuonna_2026_' },
      { name: 'Job Market Finland profile guide', url: 'https://tyomarkkinatori.fi/en/teemasivut/job-applicant-profile' },
    ],
  },
  {
    slug: 'helsinki-population-700000-new-arrivals',
    title: 'Helsinki has passed 700,000 people, and new arrivals are a huge part of the story',
    standfirst: 'The capital is growing faster than it has in years. Behind the milestone is a younger, more international Helsinki that will need more homes, services and room for people to feel they belong.',
    category: 'Helsinki',
    publishedAt: '2026-08-24T09:00:00.000Z',
    readingMinutes: 7,
    featured: false,
    practicalSummary: 'Helsinki is not merely getting bigger. It is becoming younger and more international, with migration driving most of the growth. That should shape housing, language access, public transport and how seriously the city treats belonging.',
    html: `
      <p>Somewhere in Helsinki this month, the city's 700,000th resident arrived without a brass band, a ceremonial tram ticket or even a slightly awkward municipal cake. They may have been born at Naistenklinikka, stepped off a train from another Finnish town, or dragged two overpacked suitcases through Helsinki Airport after moving from the other side of the world.</p>
      <p>However it happened, Helsinki has now passed a genuine milestone. The city had around 600,000 residents in 2012. Fourteen years later it has crossed 700,000, and recent growth has been especially quick.</p>
      <h2>This growth did not come from nowhere</h2>
      <p>The City of Helsinki says the population has grown by an average of roughly 5,600 people a year since 2000. In 2025 alone, the increase was more than 10,000.</p>
      <p>Migration is the main engine. Since the 2010s, about 80 percent of Helsinki's population growth has come from people moving from abroad or from elsewhere in Finland. In 2025, net migration accounted for 90 percent of the increase.</p>
      <p>That matters because discussion about migration can become strangely abstract in Finland. It is often presented as a national policy argument, when in Helsinki it is also the simple daily reality of who is opening cafés, driving buses, raising children, studying, building businesses and trying to work out which bin takes a broken drinking glass.</p>
      <h2>A younger city inside an ageing country</h2>
      <p>Helsinki's largest age group is 25 to 34. Elsewhere in Finland, the most typical age group is 55 to 64. Working-age residents are currently the capital's fastest-growing group, even as the number of older residents also rises.</p>
      <p>The international numbers are just as striking. At the end of 2025, 19 percent of Helsinki residents had been born abroad. Foreign-language speakers made up 21 percent of the city, compared with 11 percent across Finland, and more than 150 native languages were registered here.</p>
      <p>For an expat, those figures can be reassuring. Feeling like the only outsider in the room is difficult when one in five people around you has a mother tongue other than Finnish, Swedish or Sámi. But a diverse population on paper does not automatically create an easy place to settle.</p>
      <h2>Growth creates pressure as well as energy</h2>
      <p>More residents mean more demand for housing, schools, daycare, healthcare and transport. They also mean more competition for jobs and affordable homes. If the city grows without those services keeping pace, a celebratory population number can quickly become a longer queue and a higher rent.</p>
      <p>The city has also acknowledged that segregation between neighbourhoods has intensified over the past decade. Helsinki has examples of neighbourhood renewal that worked well, including Myllypuro, but the challenge grows alongside the population. A city can be international and still leave people living in separate social worlds.</p>
      <p>Language access belongs in that conversation. If one fifth of residents speak another mother tongue, clear English information is not a tourist favour. It is part of making healthcare, employment, education and local democracy work for the people who actually live here.</p>
      <h2>Helsinki has always been a city of arrivals</h2>
      <p>There is a nice bit of perspective in the city's own history. Helsinki's first major growth wave came in the late nineteenth century, when railways and industrial work drew young people from the countryside. After the Second World War, another large wave arrived and some existing residents worried the city was becoming too crowded. New suburbs were later built as families looked for more space.</p>
      <p>The details change, but the rhythm is familiar. People arrive for work, education, safety, family and the hope of a better life. Then they slowly stop being new arrivals and become part of what Helsinki is.</p>
      <p>The city projects 800,000 residents by the end of the 2030s and one million sometime in the 2060s. That future Helsinki will not feel like today's city with extra people squeezed into it. It will be shaped by the people arriving now.</p>
      <p>So yes, 700,000 is a big number. The more interesting question is whether all 700,000 people can build a decent life here and feel that the city belongs to them too.</p>
    `,
    sources: [
      { name: 'City of Helsinki population milestone', url: 'https://www.hel.fi/en/news/helsinkis-population-exceeds-700000' },
      { name: 'City of Helsinki history of new arrivals', url: 'https://www.hel.fi/en/uutiset/helsinki-a-city-of-new-arrivals' },
    ],
  },
  {
    slug: 'finland-job-vacancies-small-rise-2026',
    title: 'Finland finally has a few more job vacancies. Keep the champagne in the fridge for now',
    standfirst: 'Vacancies rose year on year for the first time since 2022, with the clearest improvement in Helsinki-Uusimaa and construction. It is encouraging, but the numbers are still closer to a pulse than a party.',
    category: 'Work & money',
    publishedAt: '2026-08-23T10:00:00.000Z',
    readingMinutes: 5,
    featured: false,
    practicalSummary: 'There are early signs that the long decline in vacancies may have stopped, particularly in Helsinki-Uusimaa and construction. Treat it as a reason to widen your search, not proof that finding work has suddenly become easy.',
    html: `
      <p>If you have spent the last year sending job applications into what feels like a beautifully designed Finnish void, there is finally a small piece of better news. Finland recorded 29,600 open vacancies in the second quarter of 2026, up two percent from the same period last year.</p>
      <p>That is the first year-on-year quarterly increase since 2022. After a long run of falling numbers, even a small upward movement deserves attention.</p>
      <p>It does not, however, mean the job market has suddenly burst into life. Statistics Finland describes the total as almost unchanged, and its senior statistician warned that a two percent rise is small enough to sit within statistical uncertainty. The sensible reading is that the decline may have stopped, not that a full recovery has arrived.</p>
      <h2>Where did the improvement appear?</h2>
      <p>The clearest regional rise was in Helsinki-Uusimaa, which recorded 1,600 more vacancies than a year earlier. Construction showed the largest increase by industry, adding around 1,400 open positions.</p>
      <p>Private companies accounted for 19,500 vacancies, or roughly two thirds of the national total. The share of fixed-term jobs fell from 39 to 34 percent, while part-time roles increased from 15 to 19 percent.</p>
      <p>Those details matter more than the headline if you are actually looking for work. A rise concentrated in one region or industry will not feel like a recovery to everyone. People working in technology, hospitality, education or the public sector can still be facing a very different market.</p>
      <h2>What this means for international jobseekers</h2>
      <p>The honest answer is: a little encouragement, with both feet kept firmly on the ground.</p>
      <p>Helsinki-Uusimaa showing the strongest improvement is useful for an international workforce because the capital region has Finland's largest concentration of employers operating in English. Construction picking up may also create work beyond building sites, including engineering, design, project management, logistics and professional services.</p>
      <p>But the official figures do not tell us how many vacancies are genuinely open to applicants without fluent Finnish, how many are advertised repeatedly, or how intense the competition is for each role. Anyone promising that the market has turned a corner is getting ahead of the evidence.</p>
      <h2>How to use the small shift</h2>
      <ul>
        <li>Recheck employers you stopped watching during the downturn, especially in Helsinki-Uusimaa.</li>
        <li>Look one step around your usual job title. A construction recovery also needs procurement, finance, communications, safety and software.</li>
        <li>Make your English-language value obvious rather than hoping an employer will infer it.</li>
        <li>Keep building direct connections. A slightly healthier market still rewards the person who is known before a role is advertised.</li>
      </ul>
      <p>A two percent increase will not make anyone's rent feel lighter, and it will not undo the frustration of months spent looking. Still, long declines usually end quietly before they look convincing. For now, this is a flicker worth watching.</p>
    `,
    sources: [
      { name: 'Statistics Finland job vacancy survey', url: 'https://stat.fi/en/publication/cmfxzvr0kgj1k07w3ya6x3vac' },
      { name: 'Yle News', url: 'https://yle.fi/a/74-20241992' },
    ],
  },
  {
    slug: 'helsinki-airport-trains-autumn-2026',
    title: 'The airport trains are mostly back, but a few autumn oddities remain',
    standfirst: 'The worst of the summer rail disruption has ended. Malminkartano is still closed until September, some I and P services remain less frequent, and one late airport train is missing until October.',
    category: 'Helsinki',
    publishedAt: '2026-08-22T09:00:00.000Z',
    readingMinutes: 4,
    featured: false,
    practicalSummary: 'Most Main Line and Ring Rail services have returned, but check the HSL Journey Planner before airport trips. Malminkartano remains closed until 7 September and some reduced I and P frequencies continue until 4 October.',
    html: `
      <p>There are few quicker ways to realise you have become a proper Helsinki local than standing at your usual platform and slowly noticing that your train is not coming, your backup train is also not coming, and everyone else appears to have understood this three weeks ago.</p>
      <p>The good news is that the largest summer disruptions on the Main Line and Ring Rail Line ended on 10 August. Trains again run between Huopalahti and Myyrmäki, Pohjois-Haaga and Kannelmäki have reopened, and the A train between Helsinki and Leppävaara is back.</p>
      <p>The slightly less tidy news is that normal still comes with a few footnotes.</p>
      <h2>The remaining changes</h2>
      <p>Malminkartano station remains closed until 4am on 7 September while renovation work continues. Trains pass through without stopping, so local passengers need to use an alternative station or bus connection.</p>
      <p>On the Helsinki-Huopalahti-Myyrmäki side of the Ring Rail Line, I and P trains run every 20 minutes during the daytime instead of every 10 minutes until 4 October. Late evening and weekend morning services run every 30 minutes instead of every 15.</p>
      <p>On the airport side, most frequencies are back to normal. Every other I train terminates at Myyrmäki and returns towards Helsinki Airport as a P train. The daily 9.26pm I service from Helsinki is cancelled until 4 October, and the early weekday I train now leaves Helsinki at 4.31am rather than 4.36am.</p>
      <h2>Airport trip? Give yourself breathing room</h2>
      <p>The airport remains connected in both directions, but this is not the moment to rely on a timetable you memorised last winter. Search the exact journey and date in HSL's Journey Planner, especially for an early flight, late arrival or connection involving Malminkartano.</p>
      <p>If the app suggests a route that looks stranger than usual, check the details before dismissing it. Replacement buses and alternative stations may add a transfer, and the reduced western frequency can turn a missed train into a longer wait.</p>
      <p>The summer's transport chaos is mostly behind us. Until October, though, five minutes spent checking your route is still cheaper than a taxi booked while sprinting through Pasila.</p>
    `,
    sources: [
      { name: 'HSL service update', url: 'https://www.hsl.fi/en/hsl/news/service-updates/2026/07/train-services-on-the-main-line-and-ring-rail-line-to-largely-return-to-normal--see-service-changes' },
      { name: 'HSL Journey Planner', url: 'https://reittiopas.hsl.fi/' },
    ],
  },
  {
    slug: 'siberian-wildfire-smoke-finland-air-quality',
    title: 'Smoke from Siberia reached Finland. Here is what that hazy sky actually means',
    standfirst: 'Fine particles travelled thousands of kilometres into Finland this week. The air was expected to clear quickly, but knowing where to check and when to take it easy is useful long after this particular haze has gone.',
    category: 'Finland',
    publishedAt: '2026-08-24T15:30:00.000Z',
    readingMinutes: 6,
    featured: false,
    practicalSummary: 'The current smoke episode was expected to ease by Tuesday. If the sky looks hazy or breathing feels uncomfortable, check the live HSY or national air-quality map, ease off hard outdoor exercise and follow local health advice rather than relying on what the weather app says.',
    html: `
      <p>Finland is usually the place people point to when they want to show off clean air. Then a pale haze rolls across the sky, the sunset turns suspiciously dramatic, and somebody tells you the smoke has travelled all the way from Siberia.</p>
      <p>That is what happened this week. Fine particles from extensive wildfires were carried into Lapland over the weekend, then spread down western Finland and into the south. The Finnish Meteorological Institute told Finnish news agency STT that air quality in many areas had dropped to fair or satisfactory on Monday morning, although the situation was expected to improve by Tuesday.</p>
      <p>For most people this was a short-lived inconvenience rather than an emergency. It is still a useful reminder that Finland's air does not stop at the border, and that a clear-looking day is not always the same thing as a clean-air day.</p>
      <h2>How can smoke travel that far?</h2>
      <p>The particles involved are known as PM2.5, meaning they are smaller than 2.5 micrometres across. They are tiny enough to remain suspended in the atmosphere and travel thousands of kilometres with moving air masses.</p>
      <p>HSY, the Helsinki Region Environmental Services Authority, says long-range transport accounts for more than half of the fine-particle concentration in the capital region on average. Most of the time those particles arrive without creating a noticeable episode. Smoke from wildfires can push levels higher and reduce visibility, producing the washed-out horizon people noticed this week.</p>
      <p>The current concentrations were described as similar to levels commonly experienced in Central Europe. That gives the story some perspective. The air became worse by Finnish standards, but this was not being described as a repeat of Finland's most serious smoke events.</p>
      <h2>Who should pay closer attention?</h2>
      <p>Fine particles can irritate anyone, but people with asthma, other respiratory conditions or cardiovascular disease may react sooner. Older people, small children and pregnant people can also be more sensitive to poor air quality.</p>
      <p>Symptoms can include coughing, irritation, shortness of breath or an unusual tight feeling while exercising. You do not need to diagnose the sky yourself. If the air-quality index is poor and a hard run makes you feel rough, swap it for something gentler or move the workout indoors.</p>
      <p>During an intense long-range smoke episode, HSY advises people to reduce strenuous outdoor activity and follow live air-quality information. Going indoors and temporarily limiting ventilation can reduce exposure. There is an important bit of Finnish common sense attached: if your home is overheating and you have a heart or respiratory condition, excessive heat can be the greater risk. Do not turn the flat into a sauna in an attempt to keep every particle outside.</p>
      <h2>Where should you check?</h2>
      <p>For Helsinki, Espoo, Vantaa and the surrounding region, HSY publishes a live map and short-term forecast. Monitoring stations update throughout the day, so the map is more useful than a screenshot from somebody's phone taken six hours earlier.</p>
      <p>Air quality can vary across a city. A busy road, local wood burning and street dust can all affect what you are breathing even when the regional smoke situation is improving. Check the place where you actually plan to be.</p>
      <p>This week's Siberian haze was forecast to move on quickly. The habit worth keeping is simple: when the horizon looks odd, check the proper air-quality map before assuming it is mist, pollen or your windows needing a wash.</p>
    `,
    sources: [
      { name: 'Yle News report using Finnish Meteorological Institute information', url: 'https://yle.fi/a/74-20242628' },
      { name: 'HSY live air quality', url: 'https://www.hsy.fi/en/airquality/' },
      { name: 'HSY guide to long-range fine particles', url: 'https://www.hsy.fi/en/air-quality-and-climate/air-protection-and-health/air-quality-challenges-now-and-in-the-future/long-range-transport-reduces-air-quality/' },
    ],
  },
  {
    slug: 'aalto-works-unesco-finland-guide',
    title: 'Finland just gained a whole new UNESCO site, except it comes in 13 pieces',
    standfirst: 'Thirteen buildings and neighbourhoods designed by Alvar, Aino and Elissa Aalto now form Finland’s eighth World Heritage Site. Five are in Helsinki, while the rest make a rather excellent excuse for a Finnish road trip.',
    category: 'Culture & community',
    publishedAt: '2026-08-24T14:00:00.000Z',
    readingMinutes: 8,
    featured: false,
    practicalSummary: 'You do not need to be an architecture expert to explore the new World Heritage Site. Helsinki has five of its 13 locations, including Finlandia Hall, the Aalto home and studio. Check access and tour times before visiting because several sites remain working buildings or have limited entry.',
    html: `
      <p>Finland has a new UNESCO World Heritage Site, although calling it a site makes it sound much tidier than it is. Aalto Works stretches across 13 buildings and groups of buildings in seven Finnish locations, from a former tuberculosis sanatorium in Paimio to a mill community in Kotka and five landmarks here in Helsinki.</p>
      <p>The World Heritage Committee approved the collection in July 2026. It is Finland's eighth entry on the list and the country's first new one since the Kvarken Archipelago was added in 2006.</p>
      <p>If the name Aalto currently means a vase you have seen in every Finnish design shop, this is a good chance to look beyond it. The collection is a tour through the way Finland imagined homes, healthcare, work, culture and public life during the twentieth century.</p>
      <h2>Not simply the work of one famous man</h2>
      <p>Alvar Aalto is the name most people recognise, but UNESCO's listing credits a much wider creative story. The buildings were designed by Alvar, Aino Marsio-Aalto and Elissa Aalto, together with the Aalto studio, Artek and other collaborators.</p>
      <p>That matters because the familiar lone-genius version leaves out two formidable architects and designers. Aino helped shape the studio's early modernism, interiors and furniture. Elissa became a partner in the practice, led projects and continued the studio's work after Alvar's death. The UNESCO title gives the whole body of work a more honest frame.</p>
      <p>The sites were completed between 1928 and 1988. UNESCO highlights their human-centred approach, meaning modern architecture designed around how people actually move, recover, work and live rather than simply how a building looks in a photograph.</p>
      <h2>Five places to begin in Helsinki</h2>
      <p>Helsinki has the easiest mini-route through the collection. Finlandia Hall is the obvious landmark beside Töölönlahti, but it is only one part of the story.</p>
      <ul>
        <li><strong>The Aalto House in Munkkiniemi</strong> combines the family's home and early studio. It feels personal and surprisingly modest beside Aalto's public reputation.</li>
        <li><strong>Studio Aalto</strong>, also in Munkkiniemi, shows the working environment built for the growing architectural practice.</li>
        <li><strong>The House of Culture in Alppila</strong> is a sweeping red-brick concert and meeting building originally commissioned by the Finnish Communist Party.</li>
        <li><strong>Kela's main office</strong> is a civic building where architecture, furniture and the machinery of Finland's welfare state meet.</li>
        <li><strong>Finlandia Hall</strong> is the collection's big ceremonial face, designed for concerts, congresses and international occasions.</li>
      </ul>
      <p>Do not assume UNESCO status turns every building into a walk-in museum. The Aalto home and studio use guided visits, while other locations remain workplaces, venues or public institutions. Check each official site before crossing town.</p>
      <h2>The rest make a fine Finnish tour</h2>
      <p>The other eight locations spread the story across the country: Paimio Sanatorium, Sunila's mill housing in Kotka, Villa Mairea near Pori, Säynätsalo Town Hall, Jyväskylä University's Aalto campus, the Muuratsalo Experimental House, Seinäjoki's civic and cultural centre and the Church of the Three Crosses in Imatra.</p>
      <p>Together they are a slightly unconventional travel itinerary. You get industrial history, islands, university buildings, churches, family homes and some very Finnish arguments about whether a severe brick wall is beautiful.</p>
      <h2>What changes now?</h2>
      <p>UNESCO recognition does not freeze the buildings or automatically renovate them. It brings international attention and a stronger obligation to protect the shared value of the collection. The hard work remains maintenance, careful repairs and keeping buildings useful without sanding away what made them important.</p>
      <p>For those of us who moved to Finland, the collection also offers a shortcut into understanding the country. The buildings reveal how ideas about equality, nature, wellbeing and public institutions were turned into physical spaces. They are not the whole Finnish story, but they explain a fair bit of the scenery.</p>
      <p>Start with one place in Helsinki. If you find yourself judging door handles and discussing the emotional quality of brick by the end, congratulations. Finland may have got to you.</p>
    `,
    sources: [
      { name: 'UNESCO World Heritage Centre', url: 'https://whc.unesco.org/en/list/1752/' },
      { name: 'Finnish Heritage Agency', url: 'https://www.museovirasto.fi/en/articles/aaltojen-arkkitehtuuri-on-suomen-kahdeksas-unescon-maailmanperintokohde' },
      { name: 'Alvar Aalto Foundation site guide', url: 'https://www.alvaraalto.fi/en/alvar-aalto-foundation/alvar-aalto-and-unesco-world-heritage/aalto-works-sites/' },
    ],
  },
  {
    slug: 'finland-official-mail-digital-inboxes-2026',
    title: 'Finland has quietly moved the letterbox into your phone. Check these two inboxes',
    standfirst: 'Official mail is now primarily digital for many adults using Finnish online services. Suomi.fi Messages and OmaKela are useful, but missing a notification can mean missing a deadline too.',
    category: 'Life admin',
    publishedAt: '2026-08-24T12:00:00.000Z',
    readingMinutes: 7,
    featured: false,
    practicalSummary: 'Check both Suomi.fi Messages and OmaKela, make sure their notification email or phone number is current, and do not assume deleting an app restores paper post. Paper remains available, but you need to choose it in the relevant settings or contact the service.',
    html: `
      <p>One of Finland's small administrative thrills used to be finding an official brown envelope on the doormat and wondering whether it contained a tax refund, a Kela decision or a polite demand that you explain something by Friday.</p>
      <p>In 2026, a lot of that mail moved online. This is quicker and generally easier, but it comes with one obvious danger: the important letter is now sitting in an inbox you might not remember exists.</p>
      <p>There are two places international residents should understand. Suomi.fi Messages is a secure mailbox used by many public authorities. OmaKela is Kela's own service for benefit applications, decisions and messages. They overlap around notifications, but they are not the same inbox.</p>
      <h2>What changed with Suomi.fi Messages?</h2>
      <p>Since 14 April 2026, adults who strongly identify themselves in a public authority's online service are generally directed to activate Suomi.fi Messages. Once active, public authorities can deliver official messages there instead of posting the same letter on paper.</p>
      <p>You read them through the Suomi.fi website or mobile app. The service asks for an email address so it can notify you when something new arrives. The notification is only the nudge. The official message itself remains inside the secure mailbox.</p>
      <p>People who do not use public digital services continue receiving paper mail. Minors, people under guardianship and certain people acting through continuing powers of attorney are also treated differently.</p>
      <h2>And what changed at Kela?</h2>
      <p>Kela made its own digital shift earlier, from 15 January 2026. Customers who use OmaKela and have provided an email address or phone number generally receive decision notices and letters in OmaKela without another paper copy.</p>
      <p>Kela says it sends a notification through Suomi.fi Messages, email or text when a new item is available. That can feel like mail about mail, but the practical point is simple: open OmaKela and read the actual document.</p>
      <p>Some Kela communications still arrive on paper, and customers who do not use OmaKela continue receiving paper decisions. Certain pension, disability, estate and social-assistance documents also have specific paper arrangements.</p>
      <h2>Four minutes of housekeeping</h2>
      <ol>
        <li>Log in to Suomi.fi and open Messages. Confirm the email address used for notifications.</li>
        <li>Log in to OmaKela and check your latest decisions, requests for information and contact details.</li>
        <li>Turn on notifications in the Suomi.fi app if you use it.</li>
        <li>Add a recurring reminder to check both services, especially while an application is being processed.</li>
      </ol>
      <p>This matters because official deadlines do not become optional when the notification disappears into a crowded email account. A request for supporting documents, decision appeal period or employment-services message may keep moving even if you have not opened it.</p>
      <h2>Can you keep paper mail?</h2>
      <p>Yes. Paper remains an option. Suomi.fi allows users to switch back to paper in the Messages settings, currently for one year at a time. If you later return to a public e-service after that period, you may be guided to activate digital messages again.</p>
      <p>Kela users can also request paper letters through OmaKela settings or customer service. The important bit is that deleting the Suomi.fi mobile app does not deactivate the digital mailbox. Removing the icon from your phone is not the same as changing the delivery choice.</p>
      <p>If digital services are difficult, help is available by phone and in person. Kela also provides English-language customer service and can arrange interpretation when needed.</p>
      <p>Finland's administration has not stopped sending letters. It has simply given the letterbox a password. Check it now and save yourself the deeply Finnish experience of learning about an important deadline from a reminder about the deadline.</p>
    `,
    sources: [
      { name: 'Suomi.fi digital official mail guidance', url: 'https://www.suomi.fi/news/public-authorities-to-begin-primarily-sending-digital-mail-to-users-of-digital-services-in-april' },
      { name: 'Suomi.fi support and paper-mail options', url: 'https://www.suomi.fi/news/transition-to-primarily-electronic-official-mail-information-and-support-for-citizens' },
      { name: 'Kela decision and letter delivery changes', url: 'https://www.kela.fi/news/kela-to-phase-out-paper-mail-letters-will-be-delivered-only-via-omakela' },
      { name: 'Kela OmaKela guidance', url: 'https://www.kela.fi/e-services' },
    ],
  },
  {
    slug: 'helsinki-archipelago-action-plan-2026',
    title: 'Helsinki wants its islands to feel less like a secret club',
    standfirst: 'A new four-year plan promises easier island connections, electric water transport, better eastern waterfronts and even the return of city rowing boats. Lovely ideas, but most of the big changes are still ahead.',
    category: 'Helsinki',
    publishedAt: '2026-08-24T10:00:00.000Z',
    readingMinutes: 6,
    featured: false,
    practicalSummary: 'The city has approved a 2026 to 2029 direction for better archipelago access, including a circular ferry route and more electric transport. Treat it as a roadmap rather than a timetable, and keep using official route and island information for trips happening now.',
    html: `
      <p>Helsinki is surrounded by islands, which sounds wonderfully democratic until you try to visit one and discover the boat runs twice on alternate Thursdays, tickets are sold through a website last updated during Nokia's glory years, and the return journey requires faith.</p>
      <p>The City of Helsinki has noticed the gap between having a spectacular archipelago and making it easy for ordinary residents to use. Its new Maritime Helsinki action plan covers 2026 to 2029 and aims to bring the sea closer to daily life rather than leaving it as scenery behind the Market Square.</p>
      <p>The plan includes a circular ferry route from the Market Square to nearby islands, more electric water transport, better waterfront paths and beaches, support for island services and the return of city rowing boats.</p>
      <h2>What is actually being promised?</h2>
      <p>The headline idea is to make local water transport behave a little more like public transport. Routes should be easier to understand, connections more useful and the busiest services gradually electrified.</p>
      <p>The city identifies Suomenlinna and Pihlajasaari connections as flagship projects. Electric transport to Pihlajasaari is scheduled to begin in 2028. A new circular archipelago service would connect the Market Square with islands off the Helsinki coast, giving people without their own boat a more natural way to move between destinations.</p>
      <p>Waterfront development will focus particularly on eastern Helsinki. The plan talks about clearer routes, more pleasant beaches and new year-round services along the shore.</p>
      <p>City rowing boats are also due to return as part of the waterfront network. The previous boats were a brilliantly Finnish idea: borrow a shared rowing boat and get onto the water without buying, storing or pretending to understand your own boat.</p>
      <h2>More access also means more business</h2>
      <p>If more people can reach the islands, they need places to eat, warm up, rent equipment and occasionally admit they have no idea how to paddle a kayak. Helsinki expects the plan to create opportunities for cafés, saunas, rentals, guided trips and other small maritime services.</p>
      <p>The city says it wants clearer permits, more predictable operating models and longer contracts so businesses can invest with less uncertainty. That could be good news for the sort of independent operators our directory loves, especially if the opportunities remain open to small companies rather than only large tourism firms.</p>
      <h2>The environmental balancing act</h2>
      <p>Easier access is not automatically good for the islands. More boats, visitors and services can put pressure on delicate habitats. The city says routes and signs will steer people away from sensitive areas, while electrification should reduce some local emissions and noise.</p>
      <p>That balance needs watching. The best version of the plan allows more Helsinki residents to enjoy the archipelago without slowly loving its quietest places to death.</p>
      <h2>What can you do this summer?</h2>
      <p>The action plan is a roadmap, not a new timetable that starts tomorrow. Several of the most exciting pieces are still being planned, and the Pihlajasaari electric service has a 2028 target.</p>
      <p>For trips now, check the current operator, ticket and return information for each island. Suomenlinna has regular public transport, while recreational islands may use seasonal private services with different tickets and last departures.</p>
      <p>Still, the direction is encouraging. Helsinki's sea should not feel like a premium backdrop available only to boat owners and people who have inherited a mysterious family cottage. If the city delivers, catching a ferry for a swim, sauna or coffee could become a normal part of living here rather than a minor research project.</p>
    `,
    sources: [
      { name: 'City of Helsinki Maritime Helsinki action plan announcement', url: 'https://www.hel.fi/en/news/helsinki-to-bring-the-sea-closer-to-daily-life-new-action-plan-to-improve-water-transport' },
      { name: 'City of Helsinki archipelago transport information', url: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/islands/waterway-transport-in-the-helsinki-archipelago' },
    ],
  },
]
