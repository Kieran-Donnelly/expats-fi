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
    title: 'Finland’s economic mood is lifting, but the job market is still doing it tough',
    standfirst: 'Real earnings are growing again and consumer confidence has improved. The harder truth is that unemployment remains high and finding work is still genuinely difficult.',
    category: 'Work & money',
    publishedAt: '2026-08-27T11:45:00.000Z',
    readingMinutes: 7,
    featured: false,
    practicalSummary: 'The latest figures offer cautious encouragement, not a victory lap. People in steady employment have regained a little purchasing power, while jobseekers are still navigating a difficult market with 20,000 more unemployed people than a year ago.',
    html: `
      <p>There is finally a little more optimism appearing in Finland's economic figures, although anyone currently searching for work would be forgiven for wondering where it has been hiding.</p>
      <p>Fresh figures from Statistics Finland show that consumer confidence improved noticeably in August. Wages are also growing faster than prices, giving people in full-time employment a modest increase in real purchasing power.</p>
      <p>The harder part of the story is the labour market. Finland had 20,000 more unemployed people in July than it did a year earlier, and many employed people still feel that their own job may be at risk.</p>
      <p>So, are things getting better? A little. Is Finland suddenly out of the woods? Not quite.</p>
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
      <p>There are encouraging signs here, but Finland's employment recovery still has a fair distance to travel.</p>
    `,
    sources: [
      { name: 'Statistics Finland consumer confidence, August 2026', url: 'https://stat.fi/en/publication/cmf5h6ytr3p1207urrweuysgw' },
      { name: 'Statistics Finland earnings, April to June 2026', url: 'https://stat.fi/en/publication/cmfpfbsco1lax08vxtw0gweiq' },
      { name: 'Statistics Finland Labour Force Survey, July 2026', url: 'https://stat.fi/en/publication/cmfp92ulja76508urnykex72w' },
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
