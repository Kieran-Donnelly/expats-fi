import type { EditorialGuide } from './editorial-guide'

export const housingGuides: EditorialGuide[] = [
  {
    slug: 'finding-a-rental-home-in-finland',
    number: '01',
    label: 'Finding a home',
    tags: ['Rental search', 'Applications', 'Helsinki', 'Scam checks'],
    title: 'Finding a rental home in Finland without applying in a blind panic',
    summary: 'Where to search, what landlords usually ask for, how city housing differs and the checks worth making before any money leaves your account.',
    goodFor: 'New arrivals, renters moving within Finland and anyone whose property search currently consists of forty tabs and one increasingly desperate group chat.',
    intro: [
      'Finding a sensible rental in Helsinki can take time, particularly when the budget is tight, the moving date is close or the application does not yet include Finnish income and credit history. That pressure can make every listing feel like the last available home in the country. It is not.',
      'A good search runs on several tracks at once. Apply to large rental companies and city-linked providers, watch private listings, tell your real-life network what you need and keep the application documents ready. Move quickly, but do not let urgency talk you into sending money before you understand who you are dealing with and what you are signing.',
    ],
    keyFacts: [
      'Rental homes come from private landlords, housing companies, employers, student providers and state-subsidised municipal systems.',
      'Landlords commonly ask for proof of identity, income or funds, and may check Finnish credit information.',
      'Heka homes in Helsinki are allocated according to housing need, urgency and search criteria, not simply first come, first served.',
      'Never treat pressure, an unusually cheap price or a convincing-looking message as proof that a listing is genuine.',
    ],
    sections: [
      {
        title: 'Run more than one search at the same time',
        paragraphs: [
          'Private rental websites can move quickly, but they are only one route. Check large professional landlords, smaller housing companies, city and state-subsidised providers, student housing where eligible, employer contacts and reputable relocation services. Some providers keep applications open and contact suitable applicants when a home becomes available.',
          'Set a realistic search area using actual HSL journey times rather than a mental map built around Helsinki Central Station. A home near a train or Metro stop farther out may create an easier daily life than a smaller, more expensive flat with several awkward connections. Search Helsinki, Espoo and Vantaa when your work and family arrangements allow it.',
        ],
      },
      {
        title: 'Prepare one clean application pack',
        paragraphs: [
          'Keep your identification, contact details, household size, preferred moving date and evidence of income or funds ready. A landlord may ask about employment, benefits, studies, pets and previous rental references. Answer honestly and provide only what is reasonably needed through a secure channel.',
          'If you have just arrived and do not yet have Finnish credit history, say that plainly. Offer other useful evidence, such as an employment contract, proof of savings, guarantor information where appropriate or a reference from a previous landlord. Do not email copies of sensitive identity documents to an unverified stranger simply because they wrote “urgent” in capital letters.',
        ],
      },
      {
        title: 'Read the listing beyond the headline rent',
        paragraphs: [
          'Check the water charge, electricity arrangement, heating, internet, laundry, sauna, parking, storage and any advance payment. Look for the deposit, lease type, earliest termination date, annual rent review, pet and smoking rules, accessibility and whether the home is furnished. A slightly cheaper rent can stop being cheaper once separate heating or a difficult commute enters the picture.',
          'Useful listing words include vuokra for rent, vakuus or vuokratakuu for deposit, vesimaksu for water charge, yksiö for a studio and kaksio for a two-room home, usually a living room and one bedroom. The stated number of rooms normally does not count the kitchen. Ask when the layout or included equipment is unclear.',
        ],
      },
      {
        title: 'Treat viewings as a two-way check',
        paragraphs: [
          'Look at ventilation, windows, water pressure, signs of moisture, storage, noise, mobile reception and the condition of appliances. Ask what belongs to the apartment, who handles maintenance and how keys are delivered. If the viewing is remote, request a live video call or another reliable way to confirm the home and the person offering it.',
          'A genuine landlord may need to choose quickly too, but you should still receive a written lease and enough information to understand it. Be cautious if you cannot verify the address, the supposed landlord will not show the home, the payment recipient keeps changing or you are pushed to transfer a deposit through an unusual payment method before a contract exists.',
        ],
      },
      {
        title: 'Use city housing applications properly',
        paragraphs: [
          'Helsinki’s Heka system uses housing need, urgency and application criteria rather than a simple waiting list. Keep the application accurate, include the areas and home types that genuinely work and update it when your household, address or circumstances change. Applying broadly may help, but accepting an impossible commute or inaccessible home helps nobody.',
          'City housing is one part of the search, not an emergency guarantee. Keep looking elsewhere while the application is active. If online identification or the application itself is a barrier, use the provider’s advisory service rather than abandoning the route or paying somebody unofficial to complete it for you.',
        ],
      },
    ],
    insiderTips: [
      'Save a short reusable introduction, then personalise the first two lines for each serious application.',
      'Check the evening journey home as well as the weekday morning journey to work.',
      'Ask exactly what the monthly water charge covers and whether it is fixed, per person or adjusted by meter.',
      'Reverse-search suspicious listing photos and compare the address, price and contact name across platforms.',
      'Do not reject every outer neighbourhood before visiting. Helsinki’s transport map and its social reputation are not the same thing.',
    ],
    resources: [
      { title: 'Rental homes in Finland', description: 'Current multilingual guidance on finding a rental, typical requirements, equipment, pets and listing vocabulary.', url: 'https://infofinland.fi/en/housing/rental-home', source: 'InfoFinland' },
      { title: 'Apply for a Heka home', description: 'Eligibility, application steps, identification options and how Helsinki selects tenants.', url: 'https://www.hel.fi/en/housing/heka-rental-apartments/apply-for-a-heka-rental-apartment', source: 'City of Helsinki' },
      { title: 'Housing counselling', description: 'English-language help for Helsinki residents with applications, rental agreements, rent arrears and housing difficulties.', url: 'https://www.hel.fi/en/health-and-social-services/social-support-and-financial-assistance/guidance-and-advice/housing-counselling', source: 'City of Helsinki' },
    ],
  },
  {
    slug: 'lease-deposit-and-moving-in',
    number: '02',
    label: 'Lease & deposit',
    tags: ['Tenancy agreement', 'Deposit', 'Move-in', 'Tenant rights'],
    title: 'Before you sign: the Finnish lease, deposit and move-in checks that matter',
    summary: 'A plain-English walk through fixed and ongoing leases, deposits, rent increases, condition records and the small evidence file that can save an enormous argument later.',
    goodFor: 'Anyone holding a tenancy agreement, preparing to pay a deposit or collecting the keys to a Finnish rental home.',
    intro: [
      'Getting offered a home is a relief. It is also the exact moment people stop reading and start imagining where the sofa will go. Take one evening and read the whole agreement anyway. The expensive parts often live in ordinary-looking clauses about duration, rent reviews, extra charges and the earliest date you can leave.',
      'A written lease protects both sides, but it only helps when you understand it and keep a copy. Ask for unclear wording to be explained before signing. If the answer matters, get the clarification in writing rather than relying on a friendly phone call neither person will remember the same way six months later.',
    ],
    keyFacts: [
      'A lease should state the rent, payment date, deposit, extra charges, duration, notice terms and agreed rent-review method.',
      'A fixed-term lease is normally binding until its end date, while an ongoing lease ends through proper notice.',
      'A rental deposit cannot exceed three months’ rent and must not be casually treated as the final rent payments.',
      'Photograph and report existing damage promptly after receiving the keys, even when it looks too small to matter.',
    ],
    sections: [
      {
        title: 'Know which kind of lease you are signing',
        paragraphs: [
          'A toistaiseksi voimassa oleva agreement continues until the tenant or landlord terminates it according to the rules. A määräaikainen agreement has a fixed end date and is normally binding on both sides for that period. Some ongoing leases also contain an earliest termination date or contract penalty, so the heading alone does not tell the whole story.',
          'Think honestly about work probation, residence status, family plans and possible moves before accepting a long fixed term. A beautiful apartment does not make a binding contract flexible. If you need a special break clause, negotiate it before signing and make sure it appears in the written agreement.',
        ],
      },
      {
        title: 'Read every euro, not just the rent',
        paragraphs: [
          'Write down the rent, due date, water charge, electricity, heating, internet, parking, sauna, laundry and any other recurring payment. Check whether the landlord can review the rent, the exact basis for the review and when it can happen. A landlord cannot simply invent a new unilateral increase outside the agreement and applicable rules.',
          'Confirm the deposit amount, account and return conditions. The deposit may protect against unpaid rent, inadequate final cleaning or damage beyond normal wear, but it is not an automatic gift to the landlord. Keep proof of payment and never assume you can skip the final months’ rent because the landlord already holds a deposit.',
        ],
      },
      {
        title: 'Make the move-in condition impossible to forget',
        paragraphs: [
          'Walk through the empty home in daylight if possible. Photograph walls, floors, cupboards, bathroom surfaces, windows and every existing mark. Test the supplied appliances, count keys and record meter readings where relevant. A slow video can capture the relationship between rooms, while close photographs show individual damage.',
          'Send the condition report through a traceable channel and keep the original files. Do not rely only on images stored inside a messaging app. Note smells, moisture, broken fittings or cleanliness problems in words as well as pictures. You are building a shared starting point, not preparing a courtroom drama.',
        ],
      },
      {
        title: 'Understand normal wear and actual damage',
        paragraphs: [
          'A tenant is not responsible for ordinary wear caused by normal living. A landlord may claim compensation for damage caused deliberately or through negligence. The line depends on the home, tenancy length, material and circumstances, which is why the move-in record matters.',
          'Ask written permission before painting, drilling unusual fixtures or making alterations. Report leaks, broken equipment and developing defects quickly. Ignoring a small issue that grows into major damage can turn a maintenance problem into a responsibility argument.',
        ],
      },
      {
        title: 'Keep one tiny tenancy folder',
        paragraphs: [
          'Save the signed lease, listing, condition report, deposit receipt, insurance certificate, key count, rent messages and maintenance reports. Add the landlord, property manager and emergency maintenance contact. Keep a copy somewhere you can access if your phone is lost or the apartment is temporarily unusable.',
          'If you and the landlord agree to change something, confirm the agreement in writing. A tidy record does not make the relationship unfriendly. It lets both people solve practical questions without reconstructing an eighteen-month-old conversation from memory.',
        ],
      },
    ],
    insiderTips: [
      'Translate the agreement for understanding, but keep the signed original and ask which language version controls if several are provided.',
      'Check the earliest possible moving-out date, not just the words “valid until further notice”.',
      'Photograph the inside of the oven, fridge, freezer and bathroom cabinet. Cleaning disputes enjoy hiding in small doors.',
      'Write the number of keys into the handover record and photograph unusual electronic tags or parking controls.',
      'If a clause involves a large penalty or you genuinely do not understand it, get tenant or consumer advice before signing.',
    ],
    resources: [
      { title: 'Tenancy agreements', description: 'Multilingual guidance on lease types, deposits, extra charges, notice periods and moving out.', url: 'https://infofinland.fi/housing/rental-home/tenancy-agreement', source: 'InfoFinland' },
      { title: 'Rental apartment rights', description: 'Official consumer guidance on deposits, rent increases, defects, liability and ending a lease.', url: 'https://www.kkv.fi/en/consumer-affairs/housing/rental-apartments/', source: 'Finnish Competition and Consumer Authority' },
      { title: 'Rights and obligations at home', description: 'Practical guidance for tenants and owners, including repairs, alterations, entry and building rules.', url: 'https://infofinland.fi/en/housing/rights-and-obligations-of-occupants', source: 'InfoFinland' },
    ],
  },
  {
    slug: 'setting-up-and-running-your-home',
    number: '03',
    label: 'Running the home',
    tags: ['Electricity', 'Insurance', 'Internet', 'Safety'],
    title: 'Keys collected. Now make the home actually work',
    summary: 'Electricity, insurance, internet, water, heating, smoke alarms and the practical contacts worth sorting before the first Finnish night in your new place.',
    goodFor: 'New tenants, first-time renters in Finland and households moving between apartments with several contracts to update.',
    intro: [
      'A Finnish apartment can look ready while still needing several invisible pieces before it works as a home. Electricity may need its own contract. Internet can exist in the building but require activation. The water charge may be separate, and home insurance may be a condition of the lease.',
      'Set these up before moving day where possible. Keep the start dates together and take screenshots or confirmation emails. Nothing sharpens the memory of an exhausting move like discovering at 21:30 that the lights, Wi-Fi and takeaway app all depend on jobs you planned to do tomorrow.',
    ],
    keyFacts: [
      'Tenants usually arrange their own electricity supply contract, while the local network company handles distribution.',
      'Many landlords require home insurance, and it is sensible to understand both belongings cover and liability cover.',
      'Central heating is commonly included in rent, but water, electric heating and other charges depend on the agreement.',
      'Know the normal maintenance number and the emergency maintenance number before a leak, lockout or loss of heat occurs.',
    ],
    sections: [
      {
        title: 'Start electricity before you need it',
        paragraphs: [
          'Check whether the lease says you must make an electricity contract. In most rentals, the tenant chooses an electricity seller and gives the new address and start date. The local distribution network is tied to the address and cannot be chosen in the same way. Depending on the arrangement, the energy and distribution charges may arrive together or separately.',
          'Compare the total contract, not one attractive number. Look at fixed or spot pricing, monthly fees, duration, termination terms and how price changes work. Avoid agreeing during an unexpected sales call when you have not seen the full terms. Keep confirmation of the start date and end or transfer the old contract correctly when moving.',
        ],
      },
      {
        title: 'Home insurance is more than replacing a laptop',
        paragraphs: [
          'A landlord may require home insurance throughout the tenancy. Policies differ, but cover can include belongings, accidental damage, liability and legal expenses. Check the deductible, maximum amounts, exclusions, travel or storage coverage and whether everyone in the household is included.',
          'Give the insurer correct information about the home, size, household and use. A cheap policy that excludes the risk you actually face is not a bargain. Save the policy number and claims contact somewhere outside the apartment as well as inside your email.',
        ],
      },
      {
        title: 'Find out what the building already provides',
        paragraphs: [
          'Ask whether the home has housing-company broadband, which operator provides it and whether you need to order an activation or router. Check the laundry room, sauna, storage cage, bicycle space, waste area, parking and booking system. Some services are included, some have separate monthly charges and others have a waiting list.',
          'Notify the property manager or building contact when required so your name, resident information and access work correctly. The official notification of move does not necessarily complete every practical building record. Do not attach your own lock, camera or permanent fitting in a shared area without permission.',
        ],
      },
      {
        title: 'Water, heating and ventilation need fewer guesses',
        paragraphs: [
          'Water may be charged per resident, included or measured and adjusted later. Central heating is often included in rent, while electric or oil heating can create a separate and potentially significant cost. Confirm the arrangement before moving, especially in a detached or older home.',
          'Do not block ventilation vents because a winter draught feels annoying. Report persistent cold, moisture, unusual smells or poor ventilation through the proper maintenance route. Brief, regular airing can help, but it does not replace a functioning building system.',
        ],
      },
      {
        title: 'Save the urgent numbers before the urgent thing',
        paragraphs: [
          'Your building or landlord should provide maintenance contacts. Use the emergency number for genuine urgent problems such as a major leak, loss of heat in dangerous weather or being locked out when the service covers it. Routine repairs belong through the normal channel. For fire, immediate danger or a serious emergency, call 112.',
          'If water is leaking, act quickly and call the building’s emergency maintenance service. Do not install plumbing-connected appliances yourself unless you are qualified and authorised to do so. Keep sauna areas clear, follow the home’s smoke-alarm arrangement and learn the safest exit route from the building.',
        ],
      },
    ],
    insiderTips: [
      'Put electricity, insurance and internet start dates into the same moving checklist as the keys.',
      'Ask whether building broadband needs activation before buying a separate mobile or fixed connection.',
      'Save maintenance contacts under the building address so another household member can find them quickly.',
      'Photograph meter readings where relevant and keep the image with the move-in record.',
      'Do not use an apartment sauna as storage or dry laundry above the heater, even when you never plan to switch it on.',
    ],
    resources: [
      { title: 'Moving-house checklist', description: 'Officially maintained guidance on address notification, electricity, internet, insurance, cleaning and keys.', url: 'https://infofinland.fi/en/housing/moving-house', source: 'InfoFinland' },
      { title: 'Electricity consumer guidance', description: 'Current information on electricity contracts, supply problems, sales and consumer rights.', url: 'https://www.kkv.fi/en/consumer-affairs/housing/electricity/', source: 'Finnish Competition and Consumer Authority' },
      { title: 'Safety at home', description: 'Fire, water, electrical and household preparedness guidance for homes in Finland.', url: 'https://infofinland.fi/en/housing/safety-at-home', source: 'InfoFinland' },
    ],
  },
  {
    slug: 'repairs-rent-trouble-and-moving-out',
    number: '04',
    label: 'When things go wrong',
    tags: ['Repairs', 'Rent arrears', 'Complaints', 'Moving out'],
    title: 'Repairs, rent trouble and moving out without making the problem bigger',
    summary: 'Who to contact, what to put in writing, when rent reduction may apply and where Helsinki residents can get help before a housing problem becomes a crisis.',
    goodFor: 'Tenants dealing with defects, landlord disagreements, unpaid rent, neighbour problems, notice periods or a deposit that has not come home.',
    intro: [
      'Housing problems become expensive when everybody waits. A slow leak grows. A missed rent payment becomes several. A landlord assumes you accepted a defect because it was never reported. The useful habit is simple: act early, use the correct contact and keep a calm written record.',
      'This guide is a starting point, not individual legal advice. Serious disputes depend on the agreement and facts. Do not withhold rent, cancel a lease immediately or accept a large claim based only on something you read online. Get advice for the actual situation before taking a step that is difficult to reverse.',
    ],
    keyFacts: [
      'Report defects promptly and in writing, using emergency maintenance immediately when the problem risks people or property.',
      'A tenant may be entitled to a reasonable rent reduction when a defect materially affects living, but the facts and notification timing matter.',
      'If rent will be late, contact the landlord and housing counselling before silence turns one missed payment into a larger housing crisis.',
      'End a lease in writing through a provable channel and follow the correct notice period and moving-out instructions.',
    ],
    sections: [
      {
        title: 'Send the problem to the person who can fix it',
        paragraphs: [
          'Urgent leaks, loss of essential building services and similar problems usually belong to building maintenance first. Issues with the lease, supplied appliances, rent or permissions may belong to the landlord or property manager. The contact list given at move-in should explain the division. If it does not, ask.',
          'Describe what happened, when it started, how it affects the home and what you have already done. Include clear photographs or video where useful. Keep the report and any reference number. Calling can speed up an emergency response, but follow with a written record when the issue or agreement matters.',
        ],
      },
      {
        title: 'Do not improvise your own rent reduction',
        paragraphs: [
          'Official consumer guidance says a tenant can have a right to a reasonable reduction when the home has defects that affect living or is not in the agreed condition. The amount depends on the severity and period, and the right is linked to when the landlord learned about the problem.',
          'That does not mean guessing a discount and quietly paying less. State the problem and your request in writing, gather evidence and seek advice if there is disagreement. Unexplained underpayment can create rent arrears on top of the original defect.',
        ],
      },
      {
        title: 'Act before rent arrears become the whole story',
        paragraphs: [
          'If you know the rent will be late, contact the landlord immediately and propose a realistic plan. Apply for any support you may be entitled to and contact municipal housing counselling. Helsinki specifically advises residents to ask for help early, including with applications, rental agreements and rent-payment difficulties.',
          'Do not promise an instalment you cannot make simply to end an uncomfortable call. Put any payment arrangement in writing and keep paying current obligations where possible. If other debts are competing with housing, seek financial and debt advice so the rent is not handled in isolation.',
        ],
      },
      {
        title: 'Handle noise and neighbour problems in proportion',
        paragraphs: [
          'Ordinary living noise is part of apartment life. For repeated serious disturbance, note dates and times, speak calmly with the neighbour when safe and use the building manager or landlord’s process if it continues. Do not retaliate with noise, threats or a public notice containing accusations.',
          'If you believe somebody is in immediate danger, contact emergency services. If the issue concerns domestic safety, harassment or discrimination, get support from the appropriate service rather than treating it only as a building-etiquette disagreement.',
        ],
      },
      {
        title: 'Moving out is a small project, not one final cleaning day',
        paragraphs: [
          'Check whether the lease is ongoing or fixed-term and follow the landlord’s written termination channel. For an ongoing lease, the tenant’s statutory notice period is generally one calendar month, calculated according to the rules unless a lawful arrangement changes the practical date. Fixed-term leases normally run to their agreed end.',
          'Clean to the required standard, empty storage areas, photograph the final condition, record readings where relevant and return every key as instructed. Give the landlord your current contact and payment details for the deposit return. If money is withheld, ask for the reasons, amounts and evidence in writing, then use consumer advice or the complaint process when you cannot resolve it directly.',
        ],
      },
    ],
    insiderTips: [
      'Report a leak immediately. Nobody has ever improved water damage by waiting until Monday for a nicer email.',
      'Keep messages factual: the date, problem, effect, evidence and the solution you are asking for.',
      'Contact Helsinki housing counselling as soon as rent trouble appears, not after every informal option has collapsed.',
      'Photograph the cleaned oven, bathroom, floors, cupboards and empty storage cage on moving day.',
      'When a dispute involves serious money or losing the home, get individual advice before signing, withholding or agreeing to anything final.',
    ],
    resources: [
      { title: 'Rental apartment complaint guidance', description: 'Official complaint routes for deposits, poor condition, rent increases, compensation and lease termination.', url: 'https://www.kkv.fi/en/consumer-affairs/consumer-advisory-services/making-a-complaint/rental-apartment/', source: 'Finnish Competition and Consumer Authority' },
      { title: 'Helsinki housing counselling', description: 'English-language support with rent arrears, housing applications, agreements and other housing difficulties.', url: 'https://www.hel.fi/en/health-and-social-services/social-support-and-financial-assistance/guidance-and-advice/housing-counselling', source: 'City of Helsinki' },
      { title: 'Emergency housing in Helsinki', description: 'Current access information for adults who urgently need short-term overnight accommodation.', url: 'https://www.hel.fi/en/health-and-social-services/social-support-and-financial-assistance/services-for-the-unhoused/accommodation-and-housing-services-for-the-unhoused/emergency-housing', source: 'City of Helsinki' },
    ],
  },
]

export function getHousingGuide(slug: string) {
  return housingGuides.find((guide) => guide.slug === slug)
}
