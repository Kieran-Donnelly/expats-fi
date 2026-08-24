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
]
