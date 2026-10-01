import type { SeedNewsStory } from './news-stories'

export const octoberOneStories: SeedNewsStory[] = [
  {
    slug: 'free-days-helsinki-october-november-2026',
    title: 'Free days in Helsinki worth putting in the calendar',
    standfirst: 'The zoo, major museums and a few dependable favourites are opening their doors for free across October and early November. Here are the dates, times and useful bits to know before you set off.',
    category: 'Culture & community',
    publishedAt: '2026-10-01T10:00:00.000Z',
    readingMinutes: 6,
    featured: true,
    practicalSummary: 'The first dates are Kiasma on 2 October, Korkeasaari Zoo on 5 October and the Natural History Museum on 9 October. HAM and Sinebrychoff are free on 30 October, with more dates in early November. Check the organiser before travelling because hours and capacity can change.',
    html: `
      <p>A family day out in Helsinki can become expensive surprisingly quickly, especially once tickets, lunch and transport all join the conversation.</p>
      <p>The good news is that several of the city’s biggest museums and attractions have free-admission days coming up this October and early November. We have gathered the useful ones in one place, including opening times, addresses and the small details that are easy to miss.</p>
      <p>Save the dates that suit you, then check the organiser’s page before setting off. Free days can be busy and exceptional opening hours do happen.</p>

      <h2>Friday 2 October: Kiasma</h2>
      <p>Kiasma is free from <strong>10:00 to 20:00</strong> at Mannerheiminaukio 2.</p>
      <p>There is also a public guided tour in English at 18:00. The tour is included, but places are limited and registration happens at the information desk on the day. If the tour matters to you, arrive with enough time to sign up rather than walking in at 17:59 with the sort of optimism Helsinki tends to punish.</p>

      <h2>Monday 5 October: Korkeasaari Zoo</h2>
      <p>Korkeasaari is free from <strong>10:00 to 16:00</strong>, with last entry at 15:00.</p>
      <p>You do not need to book in advance. Visitor numbers may be limited, though, so arriving early is the sensible option. This is likely to be the biggest family day in the list. If 5 October does not work, Korkeasaari has another free Monday on 2 November.</p>

      <h2>Friday 9 October: Natural History Museum</h2>
      <p>The Natural History Museum is free from <strong>10:00 to 17:00</strong> at Pohjoinen Rautatiekatu 13.</p>
      <p>Private visitors register at the ticket desk when they arrive. The museum is an easy indoor option with children, but free days are naturally popular. Earlier tends to be calmer.</p>

      <h2>Friday 30 October: two museums in one day</h2>
      <p>HAM Helsinki Art Museum is free from <strong>11:00 to 19:00</strong> at Eteläinen Rautatiekatu 8.</p>
      <p>Sinebrychoff Art Museum has a free evening from <strong>15:00 to 18:00</strong> at Bulevardi 40.</p>
      <p>The two museums are close enough to combine if you fancy a proper art afternoon. You do not need to turn it into a challenge, though. One museum enjoyed properly is better than speed-walking through two while everybody quietly loses the will to live.</p>

      <h2>Early November has more</h2>
      <ul>
        <li><strong>Monday 2 November:</strong> Korkeasaari Zoo, 10:00–16:00</li>
        <li><strong>Friday 6 November:</strong> Ateneum, 10:00–18:00</li>
        <li><strong>Friday 6 November:</strong> Kiasma, 10:00–20:00</li>
        <li><strong>Wednesday 11 November:</strong> Natural History Museum, 10:00–17:00</li>
      </ul>
      <p>Ateneum and Kiasma on the same Friday make 6 November especially useful for anybody coming into the city centre from further out.</p>

      <h2>Three places that are always free</h2>
      <p>You do not have to wait for a special date.</p>
      <ul>
        <li><strong>Helsinki City Museum</strong>, Aleksanterinkatu 16. Open Monday to Friday 11:00–19:00 and weekends 11:00–17:00.</li>
        <li><strong>Tram Museum</strong>, Töölönkatu 51 A. Open daily 11:00–17:00.</li>
        <li><strong>Worker’s Museum</strong>, Kirstinkuja 4. Open Wednesday to Sunday 11:00–17:00 through 1 November.</li>
      </ul>
      <p>Helsinki City Museum is particularly handy with younger children, while the Tram Museum is a compact option when you want an outing without committing the entire day.</p>

      <h2>Before you go</h2>
      <ol>
        <li>Open the organiser’s official page and recheck the date and hours.</li>
        <li>Look at HSL’s Journey Planner for the route you will actually take.</li>
        <li>Arrive earlier where capacity may be limited.</li>
        <li>Check cloakroom, accessibility and buggy information if it matters to your visit.</li>
        <li>Keep one of the always-free museums in mind as a backup.</li>
      </ol>
      <p>We will keep adding genuinely useful free days as they appear. If you know one we have missed, send it to <a href="mailto:moi@expats.fi">moi@expats.fi</a> and we will take a look.</p>
    `,
    sources: [
      { name: 'Kiasma: free admission day', url: 'https://kiasma.fi/en/events/free-admission-day/' },
      { name: 'Kiasma: public guided tour in English', url: 'https://kiasma.fi/en/guided-tours/public-guided-tour-in-english/' },
      { name: 'Korkeasaari: free entry days', url: 'https://korkeasaari.fi/en/visit-us/info/free-entry-days/' },
      { name: 'Natural History Museum: visitor information', url: 'https://www.helsinki.fi/en/luomus/visit-us/natural-history-museum' },
      { name: 'HAM: tickets and free admission', url: 'https://www.hamhelsinki.fi/en/visitors/tickets-prices/' },
      { name: 'Sinebrychoff Art Museum: free evening', url: 'https://sinebrychoffintaidemuseo.fi/en/other-events/ilmaisilta/' },
      { name: 'Ateneum: free admission day', url: 'https://ateneum.fi/en/other-events/ilmaispaiva/' },
      { name: 'Helsinki City Museum: museums', url: 'https://www.helsinginkaupunginmuseo.fi/en/museums/' },
    ],
  },
]
