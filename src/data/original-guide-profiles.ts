export type GuideProfile = {
  focus: string
  plan: [string, string, string]
  watch: [string, string, string]
  officialUrl: string
}

function topic(focus: string, plan: string, watch: string, officialUrl: string): GuideProfile {
  const split = (value: string) => value.split('|') as [string, string, string]
  return { focus, plan: split(plan), watch: split(watch), officialUrl }
}

/**
 * Topic-specific editorial briefs for the original guides.
 *
 * The source site was used as a research index: page titles, section headings
 * and the questions an expat is likely to have informed these briefs. The copy
 * below is original and intentionally points readers to the current authority.
 */
export const originalGuideProfiles: Record<string, GuideProfile> = {
  'moving_to_finland-index': topic(
    'Moving to Finland is a chain of decisions rather than one application. Start by separating your immigration route, address, identity number, work or study plans and practical move into a sequence you can actually manage.',
    'Confirm whether your route is EU/EEA, Nordic, family, work, study or another permit route.|Create a first-month checklist for housing, address notification, identity details, banking, healthcare and insurance.|Keep one secure folder for applications, translations, receipts, appointment confirmations and decisions.',
    'Rules depend on nationality, purpose and length of stay, so do not rely on a friend’s route.|Budget for deposits, travel, document translation, permits and the first weeks before regular income.|Put a winter plan in place: clothing, lighting, transport backup and a realistic arrival date.',
    'https://migri.fi/en/'
  ),
  'moving_to_finland-quick_guide': topic(
    'A good first month has a rhythm: establish the right to stay, register where you live, make yourself reachable to authorities, then set up work, study, money and healthcare. The order matters because one identifier or decision often unlocks the next service.',
    'Write down your arrival date, legal basis for staying and the municipality where you will live.|Book the authority appointments you need and ask which documents must be originals, certified copies or translations.|Choose only the first essential accounts and services; postpone expensive long-term commitments until you know the area.',
    'Do not treat a tourist stay as permission to work or settle.|Keep your address current and tell authorities when a temporary arrangement becomes permanent.|Ask for written confirmation when a provider says an application or registration is complete.',
    'https://www.infofinland.fi/en/moving-to-finland'
  ),
  'moving_to_finland-address_and_postal_services': topic(
    'Your address connects you to the Population Information System, municipal services and the delivery of official letters. Posti, the Digital and Population Data Services Agency and your own service providers may each have a part to play.',
    'Submit the move notification within the permitted window and distinguish a permanent move from a temporary stay.|Set up OmaPosti or another secure delivery method and arrange forwarding if mail will go to an old address.|Update banks, employers, insurers, schools and subscriptions after the official address is in place.',
    'Use the exact apartment letter, stairwell and postcode shown in your lease.|A forwarding order does not replace the official notification of move.|Check delivery days and collection points for your postcode, especially when expecting a permit card or decision.',
    'https://www.posti.fi/en/private/arrival-and-forwarding/change-of-address'
  ),
  'moving_to_finland-study_in_finland': topic(
    'Finland has universities, universities of applied sciences, vocational routes and exchange options. The right choice depends on your qualification, language, programme, funding and the residence route that supports your studies.',
    'Compare programmes on Studyinfo and each institution’s own admissions page, including language, fees and intake dates.|Prepare transcripts, proof of language, passport details and any portfolio or entrance-exam material early.|Plan housing, insurance, finances and residence formalities before accepting an offer.',
    'An admission offer is not automatically a residence permit or a guarantee of work rights.|Check whether tuition, scholarships and student benefits apply to your nationality and programme.|Make sure your housing contract and arrival dates match the academic calendar.',
    'https://www.studyinfinland.fi/'
  ),
  'moving_to_finland-work_and_residence_permits': topic(
    'The route to Finland changes with citizenship, job, salary, employer, family situation and length of stay. EU/EEA and Nordic citizens have different registration duties from people who need a residence permit.',
    'Identify the exact permit or registration category before signing a job or booking travel.|Collect the employment contract, passport, qualifications, family documents and translations that category requires.|Submit the application through the official service and track biometric, embassy and decision steps.',
    'Do not start work on an assumption that an application alone gives permission.|A permit tied to a job can be affected by changes to the employer, role or unemployment.|Use Migri’s current instructions rather than an old checklist copied from another applicant.',
    'https://migri.fi/en/working-in-finland'
  ),
  'moving_to_finland-registration': topic(
    'Registration is the point where your move becomes visible in Finland’s public systems. A personal identity code, municipality of residence and registered address can affect tax, healthcare, banking, education and benefits.',
    'Check whether you need an EU right-of-residence registration, a residence permit registration or a DVV population-information appointment.|Bring the identity, residence, family and address evidence requested for your situation.|Ask which details were recorded and save the decision or certificate with its date.',
    'A Finnish personal identity code is not the same thing as a residence permit.|Registration does not remove the need to report later changes of address, family status or name.|Never email identity documents to an unverified intermediary.',
    'https://dvv.fi/en/foreigners-registration'
  ),
  'moving_to_finland-citizenship': topic(
    'Finnish citizenship is a later-stage decision built on residence, identity, language, conduct and other statutory conditions. Dual or multiple nationality questions also involve the law of your existing country.',
    'Read the current Migri citizenship conditions and calculate which residence periods and absences count for you.|Gather language evidence, identity documents, tax and employment records and any explanations the application may need.|Treat the application as a legal process: answer every question accurately and keep copies of what you submit.',
    'Citizenship is not a shortcut around a residence-permit problem.|Your current nationality may impose its own rules on dual citizenship, military service or loss of nationality.|Do not rely on an informal residence calculator when your history is complicated; ask Migri or a qualified adviser.',
    'https://migri.fi/en/finnish-citizenship'
  ),
  'moving_to_finland-importing_and_customs': topic(
    'Household goods, vehicles, pets, alcohol, tobacco and online purchases can fall under different customs, tax and animal-health rules. Moving from an EU country is not identical to moving from outside the EU.',
    'Make separate lists for personal effects, vehicle, pets and restricted goods before packing.|Check Tulli and the Finnish Food Authority for the documents, declarations and deadlines that apply.|Keep purchase evidence, registration papers, vaccination records and a packing inventory accessible during transit.',
    'Do not assume personal belongings, a new vehicle or pet travel are automatically tax-free.|A carrier’s advice is not a customs decision.|Rules for excise goods and animal movements can change quickly, so verify just before departure.',
    'https://tulli.fi/en/moving'
  ),
  'moving_to_finland-international_movers': topic(
    'An international move is a logistics project with three risk points: what is packed, how it crosses borders and what happens if a delivery is delayed or damaged. A clear inventory and written quote are more valuable than a low headline price.',
    'Get comparable quotes that state volume, packing, transport mode, customs handling, delivery floor and insurance.|Photograph valuable items, label boxes by room and keep passports, medicines and documents out of the shipment.|Confirm the move date, contact person, claims process and what happens if access to either home changes.',
    'Check whether the quote includes VAT, storage, stairs, parking, customs and unpacking.|Do not ship irreplaceable documents or medicines in the main consignment.|Read the mover’s liability limits and declared-value requirements before signing.',
    'https://www.suomi.fi/citizen/moving'
  ),
  'moving_to_finland-storage_warehousing': topic(
    'Storage is useful when your arrival dates do not line up, a home is being renovated or you are between countries. The right facility depends on access, temperature, insurance, contract length and who will move the items.',
    'Measure the volume and separate items that need climate control, ventilation or special handling.|Compare the full monthly cost, access hours, lock arrangements, collection service and notice period.|Create a numbered inventory and photograph the condition of valuable or fragile items.',
    'Ask what the facility’s insurance actually covers and whether your household policy applies.|Avoid storing passports, medication, irreplaceable papers or anything you may need urgently.|Set a review date so an inexpensive short-term store does not become an unnoticed long-term bill.',
    'https://www.suomi.fi/citizen/moving'
  ),
  'moving_to_finland-relocation_services': topic(
    'Relocation advisers can save time by coordinating housing, registrations, schools and cultural orientation, but their scope varies. Use them to organise decisions, not to replace an authority or an employment lawyer.',
    'Write a brief listing the family, city, language, timing and tasks you need help with.|Ask for a fixed scope, named deliverables, fees, VAT, subcontractors and cancellation terms.|Keep ownership of your logins and original documents while the adviser records progress.',
    'A relocation provider cannot grant a permit, guarantee a school place or promise a particular apartment.|Check whether recommendations are independent or partner-funded.|Make sure urgent safeguarding, health or immigration issues go directly to the responsible authority.',
    'https://www.infofinland.fi/en/moving-to-finland'
  ),
  'moving_to_finland-leaving_finland': topic(
    'Leaving Finland involves more than handing back keys. Your move notification, tax position, Kela coverage, bank arrangements, insurance, business records and deposits can all need a final check.',
    'Choose the official moving date and submit the notification within the required timeframe.|Contact Kela, the Tax Administration, employer or pension provider, bank, insurer and utilities with that date.|Record final readings, balances, refunds, forwarding details and any open claims before departure.',
    'Ask how tax returns, prepayments, benefits and pension records continue after you leave.|Do not close the only Finnish account before salary, deposit or tax refunds have cleared.|Keep access to Suomi.fi and official mail long enough to receive decisions.',
    'https://www.suomi.fi/citizen/moving'
  ),

  'housing-index': topic(
    'Finnish housing decisions combine the apartment itself with the building, housing company, utilities, transport and your right to occupy it. Search broadly, understand the vocabulary and check the contract before money changes hands.',
    'Set a realistic monthly ceiling that includes rent or loan, utilities, insurance, transport and maintenance.|Search both municipal and private channels, then compare the building and neighbourhood as well as the floor plan.|Prepare identity, income, references and deposit funds so you can act when a suitable home appears.',
    'Helsinki-area prices and availability can differ sharply from other cities.|A housing-company apartment is usually bought through shares, not by buying the land directly.|Register your new address and arrange electricity, internet and insurance as part of moving in.',
    'https://www.suomi.fi/housing-and-everyday-life'
  ),
  'housing-housing_and_utilities': topic(
    'Finnish homes may use district heating, electric heating, geothermal systems or other arrangements, and many apartments sit inside a housing company. The person responsible for each bill depends on the lease and the building.',
    'Ask the landlord or seller who pays water, electricity, heating, internet, sauna and parking.|Read the building’s house rules and learn how maintenance requests, keys, laundry rooms and recycling work.|Take meter readings and photograph the condition when you receive the keys.',
    'Check whether an electricity contract is required before moving in and whether the home has a fixed or variable connection.|A housing-company fee can include services but does not necessarily cover every utility.|Use Finnish and Swedish building terms carefully when comparing documents.',
    'https://www.suomi.fi/housing-and-everyday-life'
  ),
  'housing-real_estate_terms': topic(
    'Finnish property adverts compress a lot of information into short codes: rooms, kitchen, bathroom, floor, tenure, energy and housing-company fees. Learning the vocabulary prevents an expensive misunderstanding.',
    'Build a small glossary for h, k, kk, kph, vh, parveke, yhtiövastike, hoitovastike and velkaosuus.|Read the whole advert and the housing-company information rather than relying on photographs.|Ask the agent to explain whether a figure is monthly, one-off, debt-related or included in the sale price.',
    'A “two-room” Finnish advert normally includes a living room plus one bedroom, not two bedrooms.|The apartment’s share of housing-company debt can affect both price and monthly charges.|Translate the meaning, not just each word, when a legal term is unfamiliar.',
    'https://www.kkv.fi/en/consumer-affairs/housing/'
  ),
  'housing-finding_housing_in_finland': topic(
    'Finding a home works best as a repeatable search routine. Use several portals, learn the Finnish keywords, prepare a short introduction and respond quickly without sending sensitive information to an unverified advertiser.',
    'Define city, commute, size, furnished status, pets, accessibility and maximum total monthly cost.|Set alerts on major portals and municipal or student-housing providers, using Finnish search terms as well as English.|Prepare a viewing checklist and a ready-to-send application with only the documents genuinely requested.',
    'Never pay a deposit before you have verified the landlord, property and contract.|Check transport, grocery access, noise, storage, laundry and the building’s condition at the viewing.|A low rent can hide high utilities, a long commute or a housing-company renovation.',
    'https://www.infofinland.fi/en/living-in-finland/housing'
  ),
  'housing-furnished_apartments_in_finland': topic(
    'Furnished and serviced apartments bridge the gap between a hotel and a long lease. They are useful for a first landing, a temporary project or a family that needs time to inspect permanent housing.',
    'Decide whether you need a short stay, a registered address, a full kitchen, cleaning or workspace.|Compare the all-in price with a normal lease, including electricity, internet, linen, cleaning and VAT.|Confirm inventory, check-in, deposit, cancellation, pets and what happens if the stay extends.',
    '“Furnished” can mean anything from a complete kitchen to a few essential items.|Ask whether the address can be used for official registration or only for mail.|Photograph the inventory and defects on arrival so the deposit is protected.',
    'https://www.suomi.fi/housing-and-everyday-life'
  ),
  'housing-corporate_accommodation_in_finland': topic(
    'Corporate accommodation is a housing and employment benefit as much as a booking. The employer, employee and provider should all understand the term, tax treatment, length and responsibility for damage.',
    'Write down who pays, who signs, who can live there and how long the assignment is expected to last.|Compare a serviced apartment, normal lease and hotel against the employee’s real needs.|Confirm invoicing, cleaning, internet, parking, notice and relocation if the work site changes.',
    'A company-paid home may have payroll or tax implications; ask the employer’s accountant.|Do not assume a corporate booking can become a personal tenancy without a new agreement.|Make sure the employee has a clear contact for repairs and emergencies.',
    'https://www.suomi.fi/company/starting-a-business'
  ),
  'housing-project_accommodation_in_finland': topic(
    'Large project teams need accommodation that is safe, close enough to the work site and manageable for changing headcount. The practical brief should cover people, shifts, transport, kitchens, laundry and local neighbours.',
    'Give providers the site, dates, headcount range, room mix, shift pattern and transport needs.|Ask for a location plan and a per-person cost that separates rent, cleaning, utilities and services.|Nominate one person to manage arrivals, damage reports, extensions and departures.',
    'Check fire safety, occupancy limits, insurance, accessibility and the legal basis for the arrangement.|A low nightly rate may fail once transport, linen and cleaning are added.|Build a change clause for schedule delays and workers joining or leaving the project.',
    'https://www.suomi.fi/company/starting-a-business'
  ),
  'housing-estate_agents_in_finland': topic(
    'A Finnish estate agent can market, show and document a property transaction, but you remain responsible for understanding what you are buying or signing. Compare the agent’s role, fee and documentation before instructing them.',
    'Check the agent’s authorisation, language service, commission basis and who pays it.|Ask for the property information, housing-company documents, energy details and known defects before making an offer.|Use an independent inspector, bank or lawyer when the transaction is complex or high-value.',
    'An agent is not your personal legal or tax adviser.|Read the offer conditions, deadlines and financing clause carefully.|Keep a record of every disclosure and question; silence is not a substitute for written clarification.',
    'https://www.kkv.fi/en/consumer-affairs/housing/'
  ),
  'housing-selling_property_in_finland': topic(
    'Selling a Finnish home is a documentation exercise. Buyers need reliable information about the apartment, house, land, housing company, renovations, costs and any debt or defect that could affect the decision.',
    'Gather title or share certificates, housing-company documents, permits, renovation records, energy information and recent costs.|Ask one or more agents for a written marketing and commission proposal, then decide how offers will be handled.|Agree the disclosure record and handover plan before accepting an offer.',
    'Do not hide a defect because it feels minor; disclosure duties can continue after the sale.|Check capital-gains and transfer-tax consequences with the Tax Administration or adviser.|Keep keys, manuals, guarantees and meter readings organised for the handover.',
    'https://www.kkv.fi/en/consumer-affairs/housing/'
  ),
  'housing-renting_in_finland': topic(
    'A Finnish tenancy agreement should make the home, rent, deposit, term, notice, repairs and permitted use clear. A tenant’s daily rights are easier to protect when the contract and condition record are precise.',
    'Read the agreement in full and confirm whether it is open-ended, fixed-term, furnished, shared or sublet.|Ask what the deposit secures, how rent can change and which utilities or insurance you arrange.|Photograph the home, report defects in writing and keep payment receipts.',
    'Never transfer a deposit for a property or landlord you have not verified.|A fixed-term lease may not end in the same way as an open-ended lease.|Get advice before withholding rent, subletting or making alterations.',
    'https://www.kkv.fi/en/consumer-affairs/housing/rental-apartments/'
  ),
  'housing-buying_property_in_finland': topic(
    'Buying a Finnish home can mean buying shares in a housing company, an apartment or house directly, a right-of-occupancy home or another structure. The purchase price is only one part of the financial commitment.',
    'Ask the bank for a realistic borrowing range before viewing seriously and include housing-company debt and monthly charges.|Read the inspection, title, share, zoning and renovation information before making an offer.|Use the offer conditions to protect financing, inspection and a clear completion date.',
    'Non-EU/EEA buyers may need a permit for certain real-estate purchases; apartment shares are treated differently.|Transfer tax and registration deadlines are separate from the sale contract.|Do not sign an offer you cannot fund if a condition fails.',
    'https://www.kkv.fi/en/consumer-affairs/housing/'
  ),
  'housing-investment_property_in_finland': topic(
    'An investment property needs a different test from a family home: tenant demand, vacancy, maintenance, financing, taxes, regulation and the time you can actually spend managing it.',
    'Choose a city and tenant profile before comparing individual apartments or commercial space.|Model rent, vacancy, loan interest, housing-company charges, repairs, tax and management rather than using gross yield alone.|Check ownership restrictions, permits, insurance and the exit plan before committing capital.',
    'Market reports are not forecasts and a high yield can signal higher vacancy or repair risk.|Outside-EU/EEA real-estate purchases may require Ministry of Defence permission.|Get current tax and financing advice; do not copy a calculation from a different year.',
    'https://www.defmin.fi/en/administrative_branch/real_estate_purchases'
  ),
  'housing-home_loans_in_finland': topic(
    'A Finnish home-loan decision is about repayment capacity, collateral, stress tolerance and the property itself. Banks will look at income, commitments and documents, while a newcomer may need to explain their residence and employment history.',
    'Ask several banks for an indicative assessment and compare margin, reference rate, fees, amortisation and insurance requirements.|Prepare payslips, tax information, employment contract, residence details, debts and savings evidence.|Stress-test the payment if interest, energy, maintenance or income changes.',
    'A loan promise is not the same as a final approval for a specific home.|Guarantees, pledges and state guarantees have conditions and costs.|Never borrow the maximum simply because a calculator allows it.',
    'https://www.finanssiala.fi/en/topics/housing-loans/'
  ),
  'housing-tax_advantages_for_housing': topic(
    'Housing tax treatment changes with the transaction, the home’s use, the type of work and the year. A deduction or exemption usually has a narrow definition and requires the right receipts or declaration.',
    'Identify whether the issue is transfer tax, loan interest, capital gains, renovation work or household expenses.|Read the current Tax Administration guidance for your exact situation and note the tax year.|Keep invoices, dates, ownership shares, payment evidence and any decision that supports the claim.',
    'First-home rules, rates and deductions can change; old articles are not a safe basis for a purchase.|A home used as your own residence can be treated differently from an investment property.|Ask a tax professional before relying on a large deduction or exemption.',
    'https://www.vero.fi/en/individuals/housing/'
  ),
  'housing-financial_support_for_housing': topic(
    'Housing support can involve Kela benefits, municipal or state-subsidised homes and the household’s income, rent and composition. Eligibility is personal and can change when work, family or address changes.',
    'Check Kela’s current housing-benefit rules and the local provider’s application process separately.|Prepare the lease, rent breakdown, household details, income evidence and bank information.|Report changes promptly and save the decision so you understand the next review date.',
    'Support is not automatic because a home is expensive or a household is new to Finland.|A benefit decision can change when income or household membership changes.|Emergency housing and ordinary housing support are different routes.',
    'https://www.kela.fi/housing-benefits'
  ),
  'housing-student_housing_in_finland': topic(
    'Student housing is often cheaper and close to campus, but demand follows the academic calendar. Exchange students, degree students, families and short programmes may need different providers or a private-market backup.',
    'Apply as soon as your offer or exchange place is confirmed and list acceptable neighbourhoods, room types and dates.|Read the student provider’s rules on queueing, deposit, furnishings, internet and termination.|Keep a private-room or short-term option ready for the arrival gap.',
    'A shared room can have different kitchen, bathroom and contract arrangements from a studio.|Your housing contract may not cover furniture, insurance or electricity.|Do not miss an offer deadline while waiting for a preferred neighbourhood.',
    'https://www.studyinfinland.fi/life-in-finland/housing'
  ),
  'housing-emergency_accommodation_in_finland': topic(
    'Emergency accommodation is about immediate safety and a stable next step, not finding the ideal long-term home. The right contact depends on homelessness, domestic violence, family safety, age and medical need.',
    'If someone is in immediate danger call 112; otherwise contact the local social emergency service or crisis organisation.|Say clearly whether you need a bed tonight, protection from violence, children’s support, language help or a longer housing plan.|Ask what documents, benefits, transport and follow-up appointment are needed next.',
    'Do not delay a safety decision while searching online for a perfect service.|Shelters and municipal services have different eligibility and confidentiality rules.|Keep a trusted person informed and use an interpreter if you cannot explain the risk safely.',
    'https://www.suomi.fi/citizen/social-security-and-health-care/social-services'
  ),

  'living_in_finland-index': topic(
    'Settling into Finland is mostly about building small, reliable routines: transport, school or daycare, healthcare, tax, language, news and local services. You do not need to master the culture before you start living here.',
    'List the recurring tasks in your household and assign each one a Finnish or English service doorway.|Choose one language-learning habit, one local information source and one social activity.|Save the municipality’s service pages, emergency number and library or community contacts.',
    'Municipalities organise many everyday services differently.|English may be available for the headline information but not every form or appointment.|Rules, fees and opening hours change, so bookmark the owner of each service rather than an old directory.',
    'https://www.infofinland.fi/en/living-in-finland'
  ),
  'living_in_finland-driving': topic(
    'Driving in Finland combines licence recognition, road rules, vehicle registration, inspection, winter tyres and insurance. The correct answer can depend on where your licence was issued and how long you are resident.',
    'Check Traficom before driving on a foreign licence and find out whether an exchange, translation or test is required.|Budget for registration tax, inspection, insurance, tyres, parking and maintenance when comparing a car.|Learn the local signs, right-of-way rules, darkness and winter-driving expectations before a long trip.',
    'A valid licence does not remove the need for a registered, inspected and insured vehicle.|Studded-tyre periods and road conditions are seasonal; follow current rules and signs.|Do not buy a used car without checking its history, inspection and outstanding costs.',
    'https://www.traficom.fi/en/transport/road/drivers-and-vehicles'
  ),
  'living_in_finland-preschools_kindergartens': topic(
    'Early education is organised locally and can include municipal daycare, private providers, language-immersion groups, preschools and playgroups. The right application depends on the child’s age, language, schedule and municipality.',
    'Contact your municipality early and compare opening hours, location, languages, fees and meals.|Ask how the place supports a child who is new to Finnish or Swedish and what information the family must provide.|Visit or request an orientation conversation before the first day.',
    'A foreign-language group may still have Finnish routines and forms.|A place is not guaranteed simply because you have found a provider online.|Tell the centre about allergies, additional support, custody arrangements and emergency contacts.',
    'https://www.oph.fi/en/education-and-qualifications/early-childhood-education-and-care'
  ),
  'living_in_finland-international_schools': topic(
    'International, bilingual, private and IB schools can be helpful for a mobile family, but admission, fees, transport and language support vary widely. Start with the municipality and the school’s published admissions rules.',
    'Make a shortlist based on the child’s year, curriculum, language, location and likely length of stay.|Ask about application windows, assessment, waiting lists, tuition, meals, transport and special educational support.|Keep the previous school’s records and vaccination or health information ready for transfer.',
    '“International” does not always mean every year or subject is taught in English.|A private or international school may not follow the same timetable or progression as your home country.|Have a local comprehensive-school option in view while applications are pending.',
    'https://www.oph.fi/en/education-and-qualifications/basic-education'
  ),
  'living_in_finland-education': topic(
    'Finland’s education system includes early education, comprehensive school, general upper secondary, vocational education, higher education and adult learning. The route in depends on the learner’s age, previous studies and municipality.',
    'Identify the level and language support the learner needs before contacting the local education authority.|Gather certificates, translations, learning-support information and proof of address where requested.|Ask about preparatory education, vocational pathways, student welfare and the calendar for applications.',
    'Compulsory education and admission rules can differ by age and residence status.|A translated certificate may need an official statement rather than a literal translation.|Schools, families and health professionals may need consent to share support information.',
    'https://www.oph.fi/en/education-and-qualifications'
  ),
  'living_in_finland-public_healthcare': topic(
    'Public healthcare is organised through wellbeing services counties, with health centres, hospitals, pharmacies, dental care and mental-health services. Your route depends on residence, entitlement, urgency and the type of care needed.',
    'For an emergency call 112; for urgent but non-life-threatening care use the local health advice or emergency service.|Find your health station, pharmacy, maternity or dental route and learn how appointments are booked.|Keep your identity, medicines, allergies, previous records and language needs ready for the clinician.',
    'A Kela card is not the only test of healthcare entitlement, and visitors may need travel insurance or private care.|Patient fees and waiting times vary by service and region.|Never delay urgent care because you are unsure which card or form you have.',
    'https://www.suomi.fi/health'
  ),
  'living_in_finland-private_healthcare': topic(
    'Private care can offer a faster appointment, a specific specialist or a practical route for visitors and people using travel insurance. The price, reimbursement and language service need checking before booking.',
    'Decide whether you need a general practitioner, specialist, dentist, laboratory or urgent clinic.|Ask for the consultation price, likely tests, cancellation fee, payment method and insurance paperwork.|Take a concise medical history and request records or instructions after the visit.',
    'Private care is not automatically reimbursed by Kela or an insurer.|A clinic’s English-language booking page may not describe every fee.|Use public emergency services when delay would be unsafe.',
    'https://www.valvira.fi/web/en/healthcare'
  ),
  'living_in_finland-social_security': topic(
    'Finnish social security combines residence-based Kela benefits with earnings-related insurance and pensions. Entitlement is assessed against your circumstances, not simply your nationality or the fact that you have a Finnish address.',
    'Check Kela’s coverage assessment when you move, start work, study, bring family or leave Finland.|List the benefits that may matter—health, family, unemployment, housing, study, disability or pension—and read each condition separately.|Report changes in income, residence, family and work promptly.',
    'A decision for one benefit does not guarantee another.|Benefits may involve waiting periods, taxation, employment insurance or recovery of overpayments.|Use the official calculator and appeal instructions if a decision seems wrong.',
    'https://www.kela.fi/in-english'
  ),
  'living_in_finland-tax': topic(
    'Tax in Finland is administered by Verohallinto and usually begins with a tax card for earned income. The relevant answer depends on residence, income source, employer, foreign ties and the tax year.',
    'Apply for or update the tax card before income starts and check the withholding rate on payslips.|Keep records of foreign income, work expenses, investments, rental activity and any treaty questions.|Read the pre-completed tax return and correct it by the stated deadline.',
    'Tax residency and citizenship are not the same question.|VAT on purchases, income tax, capital income and business tax are separate systems.|US citizens and people with foreign assets may need specialist cross-border advice.',
    'https://www.vero.fi/en/individuals/'
  ),
  'living_in_finland-language_training': topic(
    'Finnish language study is easier when it is connected to the life you are already building. Courses range from municipal integration and adult education to universities, summer universities, workplace training and online practice.',
    'Choose a goal—survival phrases, work, an exam, parenting, study or social life—before choosing a course.|Combine structured lessons with short daily listening, reading and speaking tasks.|Use the course calendar and a Finnish-English dictionary to turn new words into real errands.',
    'Course dates, fees and eligibility change by municipality and provider.|Swedish is also an official language and may be the better route in some regions.|Do not wait for perfect grammar before using simple Finnish in shops, transport or appointments.',
    'https://www.infofinland.fi/en/living-in-finland/finnish-and-swedish'
  ),
  'living_in_finland-language_clubs_summer_camps': topic(
    'Language clubs and camps give children and adults a low-pressure way to practise with activities, sport and other families. The best fit depends on age, language mix, supervision, accessibility and dates.',
    'Search municipal, university, association and provider calendars for the season and your child’s age.|Ask what language is used, how much outdoor time there is, what meals or equipment are included and who to contact in an emergency.|Treat a club as a weekly routine rather than a one-off language lesson.',
    'Camps may fill early and some are seasonal or only advertised in Finnish.|Confirm safeguarding, pick-up permissions, allergies and cancellation terms.|Check whether the group is recreational, instructional or intended for a particular level.',
    'https://www.oph.fi/en/education-and-qualifications/leisure-activities'
  ),
  'living_in_finland-culture': topic(
    'Finnish culture is not a single personality type. It is easier to understand through ordinary places—libraries, saunas, schools, nature, food, music, design, festivals and the way people manage personal space and time.',
    'Choose a cultural doorway that fits you: a library card, museum, local event, choir, class, nature trail or community centre.|Notice the expectations around punctuality, queues, quietness, direct speech and shared facilities.|Ask a Finnish friend what is local custom, what is regional and what is simply their preference.',
    'Avoid turning stereotypes into rules about every Finnish person.|Cultural confidence grows through repeated contact, not one “Finnish culture” lecture.|Your own traditions can sit alongside local participation; integration is not erasure.',
    'https://finland.fi/life-society/'
  ),
  'living_in_finland-finnish_language': topic(
    'Finnish has a reputation for complexity, but its regular sounds and spelling make small progress visible. Start with useful phrases and patterns rather than trying to memorise an entire grammar book.',
    'Learn pronunciation, greetings, numbers, dates, directions and the words that appear in your own work or family life.|Use one course or app consistently and practise short conversations with patient people.|Keep a notebook of words you actually hear in signs, messages, appointments and shops.',
    'Finnish endings change a word’s role, so learn short phrases as whole units at first.|Swedish and English are useful in many settings, but language expectations vary by employer and municipality.|Humour about Finnish can be fun without treating the language or its speakers as a joke.',
    'https://www.infofinland.fi/en/living-in-finland/finnish-and-swedish'
  ),
  'living_in_finland-news': topic(
    'Following Finnish news helps you understand decisions that affect transport, work, schools, weather and local life. English, Swedish, Russian and Sámi sources can be useful while you build Finnish reading confidence.',
    'Choose one national public-service source, one local municipality or newspaper source and one topic-specific feed.|Learn the difference between a news report, an opinion piece, a public notice and a social-media claim.|Save unfamiliar place names and institutions so the next article becomes easier to follow.',
    'Check the date and original source before sharing a breaking story.|A translation can lose context, especially in politics, law or a local emergency.|Use official announcements for instructions about closures, health, weather and safety.',
    'https://yle.fi/news'
  ),
  'living_in_finland-religion': topic(
    'Finland protects freedom of religion and belief, and communities include Lutheran, Orthodox, Catholic, Islamic, Jewish, other faith and non-religious organisations. Finding a congregation is usually a matter of language, location and practice.',
    'Search for a community that describes its services, language, accessibility and family activities clearly.|Contact the group before attending if you need a translation, dietary accommodation, children’s programme or a quiet space.|Learn how school religious education and community membership are handled in your municipality.',
    'Nominal church membership does not describe every person’s beliefs or practice.|A place of worship may have different pastoral, cultural and legal roles.|Respect privacy and safety when discussing belief, conversion or family expectations.',
    'https://www.infofinland.fi/en/living-in-finland/religion-in-finland'
  ),
  'living_in_finland-driving_tips': topic(
    'A short Finnish driving checklist should cover the essentials: 112, valid documents, speed and alcohol rules, lights, winter conditions, parking and what to do after a collision.',
    'Learn the signs and right-of-way at the exact places you drive most often.|Check your licence, vehicle registration, insurance, tyres and visibility before winter.|Keep a small emergency kit and know how to report a collision or breakdown.',
    'The legal speed limit, road sign and temporary restriction always wins over a remembered rule.|Driving under the influence includes more than “feeling fine”.|If conditions are poor, changing the journey is often the safest driving decision.',
    'https://www.liikenneturva.fi/en/'
  ),
  'living_in_finland-city_by_city': topic(
    'Municipal websites are the practical map of Finnish life. They explain local daycare, schools, healthcare, libraries, transport, permits, events, recycling, sports and emergency contacts better than a national guide can.',
    'Find your municipality’s English, Finnish and Swedish service pages and save the emergency or advice numbers.|Make a local list for health station, library, school or daycare, transport planner, waste service and housing advice.|Subscribe to local notices when the municipality offers them.',
    'A service can move between the municipality, wellbeing services county and a national authority.|Neighbouring cities can use different apps, zones, fees and application dates.|Use the address where the service is delivered, not only the city you recognise.',
    'https://www.suomi.fi/frontpage'
  ),
  'living_in_finland-finnish_jokes': topic(
    'Finnish humour often plays with understatement, language mistakes, regional differences and the gap between a literal translation and what someone means. Sharing a laugh works best when you are laughing with people, not at a group.',
    'Start with safe everyday phrases and ask a Finnish friend what the joke relies on.|Notice how silence, deadpan delivery and understatement change the effect.|Keep humour away from a person’s nationality, disability, trauma or an unequal workplace situation.',
    'A joke translated word for word may lose its context.|“Finnish” and “Swedish” jokes are old traditions, not facts about real people.|Do not use a humorous phrase in a formal email, complaint or appointment unless you know the relationship well.',
    'https://finland.fi/life-society/'
  ),
  'living_in_finland-fingerpori': topic(
    'Fingerpori depends on Finnish wordplay, double meanings and cultural references. It is a good reminder that humour and language grow together—and that a translation may need an explanation rather than a direct replacement.',
    'Read a strip first for the situation, then look up the key word or expression.|Keep a small list of puns, idioms and place references you want to ask about.|Use comics as a supplement to structured language study, not as a test of whether you “understand Finns”.',
    'Copyright belongs to the creator and publisher; use official licensed editions or links.|A translated joke may be an adaptation rather than a literal translation.|Do not repost strips or build a commercial collection without permission.',
    'https://www.hs.fi/fingerpori/'
  ),
  'living_in_finland-seasons': topic(
    'Finland changes dramatically through the year: daylight, snow, rain, ice, pollen, school terms and travel conditions all shape the practical calendar. Planning around the season makes daily life calmer and safer.',
    'Put daylight, temperature, clothing, tyres, heating and transport into the same seasonal checklist.|Plan summer bookings and winter equipment earlier than feels necessary, especially in Lapland or at popular cottages.|Use local weather and road-service information rather than a generic climate chart.',
    'The south, west, east and north can have very different conditions on the same day.|Darkness and ice affect energy, mood, commuting and children’s outdoor time.|Treat extreme-weather warnings as operational information, not just a forecast.',
    'https://en.ilmatieteenlaitos.fi/'
  ),

  'employment-index': topic(
    'Working in Finland requires two parallel plans: finding a role and understanding the terms once you have one. Qualifications, language, networks, residence status, collective agreements and public employment services all matter.',
    'Map your occupation, right to work, Finnish or Swedish level and transferable evidence before applying.|Use both English and Finnish job terms across company sites, Job Market Finland and professional networks.|Learn the basics of contracts, pay, working time, holidays, safety and unemployment support before your first day.',
    'An English-speaking vacancy is not the same thing as an English-only workplace.|Recruiters cannot grant a permit or guarantee a job.|Employment data and hiring conditions change, so check current sector information rather than old anecdotes.',
    'https://www.workinfinland.com/en/'
  ),
  'employment-foreign_qualifications': topic(
    'A foreign qualification can be comparable, recognised for a particular job or insufficient for a regulated profession. The responsible authority depends on the field, so “recognition” is not one universal certificate.',
    'Decide whether you need an employer’s assessment, an official statement, a higher-education decision or a professional licence.|Collect the final diploma, transcript, syllabus, identity documents and authorised translations requested.|Ask the competent authority what the decision allows—and what it does not allow—before applying for jobs.',
    'An advisory statement does not automatically grant a right to practise.|Healthcare, teaching and other regulated work can have language, registration and aptitude requirements.|Do not pay an intermediary who promises recognition without naming the statutory authority.',
    'https://www.oph.fi/en/services/recognition-and-international-comparability-qualifications'
  ),
  'employment-finding_work': topic(
    'The Finnish job search rewards clarity and persistence. Show what you can do, explain your right to work and demonstrate a realistic plan for learning the language or working in an international team.',
    'Create a short CV and cover letter for one target role, using the employer’s terminology and measurable examples.|Build a list of companies, recruiters, alumni, events and professional communities rather than relying only on job boards.|Practise a direct interview answer about your skills, availability, permit and language level.',
    'A translated CV with no Finnish keywords can disappear from search results.|Never pay for a job or send bank details during recruitment.|Follow up once, then keep applying and improving the evidence in your portfolio.',
    'https://www.workinfinland.com/en/find-a-job/'
  ),
  'employment-finnish_labour_market': topic(
    'Labour-market headlines are broad averages. Your real prospects depend on region, occupation, language, qualification, employer size and whether the vacancy is permanent, project-based or seasonal.',
    'Use current Statistics Finland, Ministry and sector information to identify demand and competition.|Compare the skills employers repeatedly request with a short course, portfolio project or language target you can complete.|Plan a runway for the search, including part-time work, networking and public employment support.',
    'An optimistic growth-sector list does not promise an entry-level job.|Unemployment measures differ depending on who is counted and how often.|Do not move cities or retrain solely because of one forecast.',
    'https://stat.fi/en'
  ),
  'employment-employment_services': topic(
    'Recruitment agencies, company career pages, public services and job portals serve different purposes. Some will only work with people already entitled to work in Finland; none can replace a residence-permit application.',
    'Choose the channel that matches your stage: orientation, vacancy search, agency introduction, unemployment support or employer contact.|Translate the search words and read the Finnish version of promising adverts.|Keep one version of your CV, references and work samples ready for safe upload.',
    'Check who pays the recruiter and what personal data is retained.|An agency may specialise in a city, sector or language and not represent every vacancy.|Use Job Market Finland and municipal services if you become unemployed.',
    'https://tyomarkkinatori.fi/en'
  ),
  'employment-eures_employment_service': topic(
    'EURES supports worker mobility across the EU, EEA and Switzerland through vacancies, advisers and country information. It is most useful when you search deliberately and understand what each advert actually offers.',
    'Filter by occupation, location, language and contract, then read the employer’s original advert and application instructions.|Use an EURES adviser for cross-border questions about mobility, recognition or conditions.|Compare the offer with Finnish tax, housing, travel and social-insurance realities before accepting.',
    'A portal listing does not verify every detail of a job or remove permit requirements.|Salary may be quoted before tax and benefits may depend on the collective agreement.|Keep evidence of applications and the contact person if a cross-border issue arises.',
    'https://eures.europa.eu/index_en'
  ),
  'employment-te_employment_service': topic(
    'Job Market Finland is the current doorway to Finnish public employment services. It combines vacancies, advice, career planning and support for people who are unemployed, changing direction, studying or hiring.',
    'Create a profile only after reading what information is public and what is required.|Search Finnish occupation names, save suitable vacancies and use local service appointments for a plan.|If you become unemployed, register promptly and follow the instructions for reporting changes or work.',
    'Employment services are moving from older TE-office language into a municipal model, so check the current service owner.|Benefits and registration deadlines can affect each other.|A public adviser can explain a route but cannot promise an employer or permit.',
    'https://tyomarkkinatori.fi/en'
  ),
  'employment-wages_conditions': topic(
    'Finnish pay and working conditions come from the contract, legislation and the applicable collective agreement. Working time, rest, holidays, safety and accident insurance are as important as the monthly salary.',
    'Ask which collective agreement, pay group, hours, probation, overtime and holiday rules apply.|Read every payslip and keep records of hours, leave, travel and safety incidents.|Raise a concern early with the supervisor, occupational safety authority or union rather than letting evidence disappear.',
    'A job title does not decide the correct pay or working-time rule.|Foreign workers have the same basic labour protections as other employees.|Never accept unsafe work or surrender a passport as a condition of employment.',
    'https://www.tyosuojelu.fi/web/en'
  ),
  'employment-employment_contract': topic(
    'A written employment contract turns a conversation into something both sides can check. It should identify the parties, work, place, start date, term, pay, hours, holidays, notice and any applicable agreement.',
    'Ask for the contract and attachments before starting, then compare it with the job advert and offer.|Clarify fixed-term reasoning, probation, variable hours, remote work, expenses and intellectual property in writing.|Store payslips, schedules, amendments and notices together throughout the employment.',
    'An oral agreement can still be binding, but proving its terms is harder.|A fixed-term contract and a trial period are different concepts.|Do not sign a blank schedule, repayment clause or non-compete without understanding it.',
    'https://www.tyosuojelu.fi/web/en/employment-relationship'
  ),
  'employment-employment_law_and_disputes': topic(
    'Employment disputes are easier to resolve when you know the rule, the evidence and the right first contact. Many issues can be clarified through a supervisor, union, occupational safety authority or written complaint before court is considered.',
    'Keep the contract, payslips, working-time records, messages and a dated account of what happened.|Check the applicable collective agreement and official labour-law guidance before making an accusation.|Ask for a written response and escalate to a union, adviser or authority when the issue remains unresolved.',
    'Do not secretly rely on a social-media summary for a dismissal or discrimination deadline.|If there is violence, harassment or immediate safety risk, prioritise safety and report it.|A lawyer can explain litigation and settlement; an authority may provide guidance but not represent you.',
    'https://www.tyosuojelu.fi/web/en/employment-relationship'
  ),
  'employment-unions': topic(
    'A union can combine legal advice, collective bargaining, workplace representation, insurance and professional community. The best one usually follows your occupation or collective agreement rather than your nationality.',
    'Find the union that covers your sector and compare membership fee, waiting periods, unemployment fund and services in English.|Join before a dispute or redundancy if you want the full benefit of membership rules.|Use the shop steward, union adviser or occupational safety route with a clear timeline and documents.',
    'Union membership and an unemployment fund are related but not identical choices.|A union cannot guarantee a job or decide every legal question for you.|Check what help applies to a problem that started before you joined.',
    'https://www.suomi.fi/citizen/working-life-and-unemployment'
  ),

  'entrepreneurship-index': topic(
    'Starting a business in Finland is accessible, but the easy registration step is only the beginning. Choose a viable activity, structure, tax and bookkeeping plan, then make sure your residence and insurance position support the work.',
    'Describe the customer, offer, costs, risk and first route to sales before choosing a company form.|Use the Enterprise Finland and YTJ guidance to register correctly and separate personal and business money.|Build a calendar for tax, pension, payroll, accounting, contracts and annual reporting.',
    'Self-employment can affect a residence permit, Kela cover and unemployment status.|A Business ID does not mean every licence or tax registration is complete.|Get professional advice where liability, employees, VAT or foreign ownership is involved.',
    'https://www.suomi.fi/company'
  ),
  'entrepreneurship-establishing': topic(
    'The practical start-up route is a set of registrations and choices: business form, name, Business ID, trade register, tax registers, banking and bookkeeping. The right order depends on the activity and the people behind it.',
    'Write a one-page plan and choose the simplest lawful form that fits risk, ownership and funding.|Use YTJ forms and current Finnish authority instructions rather than an old template.|Open a business account, choose an accounting workflow and store registration confirmations in one place.',
    'A light start-up service may not cover permits, contracts or immigration advice.|Separate the company’s obligations from your personal tax and insurance obligations.|Check whether the activity needs food, alcohol, construction, transport, financial or professional authorisation.',
    'https://www.ytj.fi/en/'
  ),
  'entrepreneurship-business_space': topic(
    'A business address, coworking desk, workshop, shop, kitchen or virtual office each solves a different problem. The best premises are defined by customers, staff, stock, permits, privacy and the actual work.',
    'List the minimum space, access hours, equipment, storage, meeting, mail and signage requirements before viewing.|Compare rent, VAT, service fees, utilities, fit-out, insurance and notice period on a full-cost basis.|Check zoning, building rules and any licence needed for the activity.',
    'A registered address may not be a place where customers or employees can work.|A cheap desk can fail if it cannot receive goods or protect confidential records.|Read the sublease, access and liability clauses before moving equipment in.',
    'https://www.suomi.fi/company/starting-a-business'
  ),
  'entrepreneurship-accounting_and_auditing_firms': topic(
    'An accountant can help with bookkeeping, payroll, tax filings and financial statements; an auditor has a separate assurance role when the law or your stakeholders require one. Do not assume one quote includes both.',
    'Ask firms what they do, which software they use, who owns the data and how quickly they answer questions.|Compare monthly fees, one-off registrations, payroll, VAT, year-end, audit and advisory work.|Give the accountant clean source documents and agree a monthly closing routine.',
    'Language support does not guarantee knowledge of your industry or cross-border rules.|Check professional authorisation, conflicts, confidentiality and professional-liability arrangements.|The director still carries responsibility for the company’s records and deadlines.',
    'https://www.vero.fi/en/businesses-and-corporations/'
  ),
  'entrepreneurship-electronic_financial_management': topic(
    'Finnish financial administration is designed around digital invoices, bank feeds, approvals, payroll and tax reporting. The best system is the one your team will use consistently and that leaves a clear audit trail.',
    'Map how a sale, purchase, invoice, payment, reimbursement and approval should move through the business.|Compare software on Finnish VAT, e-invoice, payroll, permissions, exports, support and accountant integration.|Create rules for backups, user access, receipts and the monthly close.',
    'Automation magnifies a bad chart of accounts or incorrect VAT setting.|Keep human approval for unusual payments, new suppliers and payroll changes.|Make sure you can export the records if you change software or accountant.',
    'https://www.vero.fi/en/businesses-and-corporations/business-operations/electronic-invoicing/'
  ),
  'entrepreneurship-accountancy': topic(
    'Every business in Finland needs records that show what came in, what went out, what tax was collected and what the business owes. Bookkeeping and notifications are recurring work, not a task to postpone until year end.',
    'Choose an accounting period, chart of accounts and receipt process with your accountant.|Put VAT, employer, annual-report and payment dates into a shared calendar with an owner for each task.|Reconcile bank, sales, purchases and payroll monthly so errors are found while evidence is fresh.',
    'Tax deadlines depend on the company and reporting method.|A sole trader and limited company do not have identical accounting or tax obligations.|Keep records for the statutory retention period and protect them from unauthorised access.',
    'https://www.vero.fi/en/businesses-and-corporations/taxes-and-charges/'
  ),
  'entrepreneurship-taxation': topic(
    'Business taxation follows the legal form, the transactions and the people receiving income. VAT, income tax, payroll withholding, pension contributions and cross-border tax are separate questions.',
    'Ask an accountant to compare the tax and liability consequences of the forms you are considering.|Register for the relevant tax systems and create a process for invoices, receipts, payroll and VAT evidence.|Review tax forecasts whenever turnover, staff, ownership or foreign sales change.',
    'A headline corporate rate does not describe the company’s total tax burden.|VAT treatment can depend on product, customer, place of supply and registration threshold.|Never use a foreign tax rule or old Finnish rate without checking the current year.',
    'https://www.vero.fi/en/businesses-and-corporations/'
  ),
  'entrepreneurship-employer_information': topic(
    'Hiring the first employee changes a business into an employer with payroll, pension, accident insurance, safety, working-time and equality responsibilities. Foreign employers may also need a Finnish representative or reporting route.',
    'Choose payroll and insurance providers before the first salary and identify the applicable collective agreement.|Give the employee a written contract, safe work, payslip and clear contact for questions.|Set a monthly checklist for withholding, employer contributions, pension, accident cover and records.',
    'The owner cannot outsource responsibility by forwarding a payroll email.|A contractor may legally be an employee depending on the real relationship.|Get advice before hiring across borders, posting a worker or using a pay subsidy.',
    'https://www.suomi.fi/company/employing-people'
  ),
  'entrepreneurship-development_and_finance': topic(
    'Business finance is a sequence of proof: a useful product, credible customers, sensible numbers and a plan for risk. Public advice, ELY services, Finnvera and Business Finland may support different stages and sectors.',
    'Separate survival cash flow from growth investment and build a 12-month scenario with a downside case.|Ask an adviser which public grant, loan, guarantee or development service actually fits your company.|Prepare a concise plan, forecasts, ownership information and evidence of customer demand.',
    'Funding is rarely free money and may require eligible costs, reporting or co-financing.|Do not take a loan before you understand personal guarantees, security and repayment.|A business adviser’s optimism is not a substitute for a signed customer or a cash forecast.',
    'https://www.businessfinland.fi/en/for-finnish-customers/services'
  ),
  'entrepreneurship-lawyers': topic(
    'A Finnish lawyer is most useful before a problem becomes expensive: company formation, shareholder arrangements, employment, lease, intellectual property, debt, privacy and cross-border contracts all reward early review.',
    'Describe the decision, risk, people, documents and deadline before asking for a quote.|Check the lawyer’s specialism, language, conflict checks, fee basis and who will do the work.|Ask for the advice in writing and store the final contract, minutes or filing with the business records.',
    'Legal aid and commercial representation are different services.|A lawyer cannot guarantee an authority’s decision or a court result.|If a deadline is near, say so immediately; do not wait for a perfect brief.',
    'https://oikeus.fi/en/index.html'
  ),

  'finance-index': topic(
    'Personal finance in Finland is mostly digital: bank accounts, online payments, insurance, cards, loans and official messages all connect to your identity and income. Set up the basics securely before chasing the cheapest product.',
    'Create a monthly cash-flow view in euros, including rent, tax, insurance, food, transport and irregular annual bills.|Choose a bank, payment method and secure document routine that work with your residence and identity status.|Build an emergency buffer before taking consumer credit or investing.',
    'A Finnish bank account is useful but not a guarantee of every service or credit product.|Never share online-bank credentials, codes or approval requests with someone who calls unexpectedly.|Compare the total cost and cancellation terms, not just the monthly headline.',
    'https://www.finanssiala.fi/en/'
  ),
  'finance-insurance': topic(
    'Insurance protects against specific risks; it is not a general refund promise. Home, travel, motor, health, pet, liability and life policies each define what is covered, excluded, excessed and reported.',
    'List the losses your household or business could not absorb and insure those first.|Compare policy wording, deductible, territorial limits, security conditions, claims channel and renewal price.|Tell the insurer about a move, vehicle, pet, valuable item or business change that affects risk.',
    'A travel policy may exclude pre-existing conditions, long stays or work.|Home insurance can be required by a lease but may not cover every building or liability issue.|Report damage promptly, preserve evidence and ask for a written decision if a claim is declined.',
    'https://www.fine.fi/en/'
  ),
  'finance-banking': topic(
    'Finnish banking is card-first and digital, with fewer cash and branch habits than many newcomers expect. The right bank depends on identity, language, income, international transfers, business needs and how quickly you need the account.',
    'Ask banks what identification, address, residence and source-of-funds evidence they require.|Compare account fees, cards, cash access, e-invoices, customer service and transfer costs before choosing.|Keep a second payment route for the first weeks and for a lost card or locked app.',
    'A foreign passport may be accepted while some services still need a Finnish identity code or stronger verification.|International transfers have exchange-rate and intermediary costs.|Use only the bank’s official app or domain and check recipient details before approving.',
    'https://www.finanssiala.fi/en/topics/banking/'
  ),
  'finance-account': topic(
    'Opening a personal account is a practical identity and risk assessment, not just a form. Bring a clear explanation of your residence, income, expected transactions and why you need each service.',
    'Ask for a basic payment account and the documents needed for your exact status.|Read the price list for account, card, cash, transfer, statement and foreign-currency charges.|Set up e-invoices and alerts only after the secure login and recovery process works.',
    'Cheques are rarely useful in Finland and can be expensive to process.|A bank may ask for more information about tax residence or source of funds.|Never let an employer or landlord keep your bank codes or payment card.',
    'https://www.kkv.fi/en/consumer-affairs/banking-and-insurance/'
  ),
  'finance-online_banking': topic(
    'Online banking is the gateway to bills, tax, Kela, contracts and strong identification. Convenience comes with a duty to protect the device, approvals, recovery route and private information.',
    'Activate the app through an official branch or verified channel and learn how to lock access quickly.|Use unique passwords, device updates, screen lock, transaction alerts and a separate recovery method.|Pause every payment request and compare the name, amount and account number before approving.',
    'Banks, police and authorities do not ask for codes through an unexpected call or link.|A message can appear inside a genuine app and still be a scam payment request.|Report a suspected fraud to the bank immediately; speed matters more than embarrassment.',
    'https://www.kyberturvallisuuskeskus.fi/en'
  ),
  'finance-loans': topic(
    'A loan is a long contract about cost, risk and repayment—not a solution to an unclear monthly budget. Banks will look at income, expenses, existing credit, security and sometimes your residence history.',
    'Write the purpose, amount, term and affordable payment before comparing lenders.|Compare annual percentage rate, reference rate, fees, insurance, early repayment and default consequences.|If payments become difficult, contact the lender and debt-advice service before missing several bills.',
    'A credit-card limit is not income and a “quick” loan can be very expensive.|A mortgage, student loan and consumer credit have different security and interest structures.|Do not sign a guarantee for someone else without independent advice.',
    'https://www.takuusaatio.fi/en/'
  ),
  'finance-disputes': topic(
    'Most banking disputes benefit from a calm written trail. First identify the transaction or term, then ask the bank for its explanation and use the appropriate complaints, ombudsman or consumer route.',
    'Collect the agreement, price list, statements, messages, dates and the outcome you want.|Complain to the bank in writing and give it a reasonable deadline to respond.|If the answer is not satisfactory, contact the Financial Ombudsman Bureau, Consumer Advisory Services or a lawyer as appropriate.',
    'Do not ignore a payment deadline while disputing a fee unless an adviser tells you to.|A regulator may supervise a bank without representing you in a private claim.|Fraud and unauthorised payments need immediate bank contact, not a slow ordinary complaint.',
    'https://www.fine.fi/en/'
  ),

  'connections-index': topic(
    'A useful support network in Finland can include official services, local friends, international groups, cultural societies and your own embassy. Start with one low-pressure connection and build from there.',
    'Choose the help you need—practical information, friendship, language, professional contacts or consular support.|Check who runs each group, how current its information is and whether membership or fees apply.|Keep official decisions and personal data out of public forums.',
    'Online communities are valuable local knowledge, not an authority.|A group may be Helsinki-focused even when its name says Finland.|If someone is in danger or a document deadline is near, go directly to the responsible service.',
    'https://www.infofinland.fi/en/living-in-finland/participation-and-influence'
  ),
  'connections-forums': topic(
    'Forums can answer the question that a national web page never anticipated: which office picks up a form, how a neighbourhood feels or what a school actually asks for. Use them as lived experience, then verify the conclusion.',
    'Search old threads before posting and include your city, date, legal status and the exact decision you face.|Compare at least two answers and ask for the official link behind a claim.|Remove passport numbers, bank details, children’s data and private medical information from public posts.',
    'A confident answer may be outdated, sponsored or based on a different nationality.|Moderation and privacy differ between forums and social platforms.|Do not let a forum replace a permit, tax, health or legal professional.',
    'https://www.infofinland.fi/en/living-in-finland/participation-and-influence'
  ),
  'connections-groups': topic(
    'Clubs and interest groups are often the fastest route to a real social life because the activity gives people something to talk about. Look beyond “expat” groups to sport, music, parents, volunteering, language and neighbourhood organisations.',
    'Pick a recurring activity that fits your schedule, budget, transport and energy rather than joining every online group.|Send a short message asking about language, trial sessions, age range, accessibility and what to bring.|Attend twice before deciding whether the group feels welcoming and sustainable.',
    'Membership fees, safeguarding, alcohol and photography policies vary.|A group can be international without being a support service or a place for confidential advice.|Respect a quiet “no” and the local rules of shared spaces.',
    'https://www.hel.fi/en/culture-and-leisure'
  ),
  'connections-friendship_societies': topic(
    'Friendship societies connect Finnish and international communities around a country, language or cultural tradition. They can provide events, lectures and introductions without requiring you to choose between your old and new identity.',
    'Search the Finnish Society of Internationalisation or local association listings for a society that matches your interests.|Ask whether events are social, educational, language-focused, family-friendly or member-only.|Volunteer for one small task so you meet people through doing rather than only introducing yourself.',
    'Some societies are dormant or have moved to social media; check the latest event date.|A cultural association is not an embassy and cannot provide consular services.|Confirm fees, political status, accessibility and the language of the event.',
    'https://um.fi/finland-abroad'
  ),
  'connections-embassies': topic(
    'An embassy, consulate, honorary consulate or non-resident mission can help with passports, nationality, civil documents, emergency assistance, voting and some legalisation services. The correct office depends on your nationality and the task.',
    'Use the Finnish Ministry for Foreign Affairs directory and your mission’s own website to identify the responsible office.|Ask what appointment, original document, fee, translation or witness requirement applies before travelling.|Keep a separate emergency note with the mission’s phone, your document numbers and a trusted contact.',
    'An honorary consulate may offer a narrower service than an embassy.|Missions cannot override Finnish immigration, tax or criminal law.|Opening hours, fees and appointment rules change, so verify on the day you contact them.',
    'https://um.fi/representation-of-foreign-states-in-finland'
  ),

  'events-index': topic(
    'Finland’s events calendar is spread across municipalities, venues, associations, museums, sports clubs and national ticket providers. The best way to find something is to search by place and interest, not only by “expat events”.',
    'Choose a city, date range, language and activity, then check the organiser’s own event page.|Compare ticket terms, accessibility, travel home and whether the event is suitable for children.|Save the venue address and arrival plan; Finnish events may start exactly on time.',
    'Listings can remain online after tickets sell out or a date changes.|A ticket platform does not guarantee the quality or safety of every organiser.|For outdoor events, check weather, darkness and transport disruption before leaving.',
    'https://www.visitfinland.com/en/'
  ),
  'events-events': topic(
    'Event information in Finland is distributed across venue calendars, city pages, museums, festivals, theatres, sports clubs and ticket sellers. Use the organiser’s own page as the final source when dates or tickets matter.',
    'Search by city and activity, then narrow by date, language, age, accessibility and budget.|Check the organiser, ticket terms, doors and start time, transport home and whether food or seating is included.|Save the confirmation and a backup route; many venues expect punctual arrival.',
    'A directory can remain online after an event is sold out or rescheduled.|Ticket platforms may have different refund and transfer rules.|For outdoor events, check weather, lighting, clothing and the last public-transport departure.',
    'https://www.myhelsinki.fi/en/see-and-do/events'
  ),
  'events-expat_sports': topic(
    'Sports such as cricket, rugby, Gaelic games, American football, baseball, martial arts, cycling, fishing and rowing give newcomers a ready-made community. You can often try a session before committing to a season.',
    'Search the national association and local club, then ask about beginner sessions, equipment, language and insurance.|Choose a realistic weekly commitment and a route home in winter.|Introduce yourself as a beginner if you are one; clubs can usually place you at the right level.',
    'Club safety, coaching and child-protection practices matter as much as the sport.|Outdoor kit and season dates are different from warmer countries.|Do not assume an informal gathering has insurance or first-aid cover.',
    'https://www.olympiakomitea.fi/en/'
  ),
  'events-finnish_sports': topic(
    'Ice hockey, floorball, skiing, skating, rally, folk racing and ice swimming are not just tourist images; they are activities with local clubs, safety rules and seasons. Start as a spectator or beginner and learn the etiquette.',
    'Pick an activity that matches your fitness, transport and tolerance for cold and water.|Use the club or federation’s guidance for equipment, lessons, conditions and safety.|Ask a local participant what is expected at the rink, sauna, trail or changing room.',
    'Ice and cold-water sports need proper supervision and equipment.|Snow and daylight can close or change a route even when a calendar event remains listed.|Buying gear before trying the activity can be an expensive mistake.',
    'https://www.suomisport.fi/en'
  ),

  'telecommunications_and_media-index': topic(
    'A connected home usually needs a mobile plan, broadband decision, television or streaming choice and a way to follow Finnish news. Compare coverage, building technology, language and the true monthly cost.',
    'Check what the building already provides before ordering a separate connection.|Choose one mobile route for arrivals and work, then add home broadband or streaming only when you know the use case.|Save contract, device, cancellation and support details in your household file.',
    'Advertised speed is not the same as indoor coverage or evening performance.|A landlord or housing company may control the cable or fibre route.|Contracts, public-broadcasting obligations and content rights can differ from your previous country.',
    'https://www.traficom.fi/en/communications'
  ),
  'telecommunications_and_media-telephone': topic(
    'Finnish mobile service is usually contract-based or prepaid, with data, roaming, identification and coverage as the main choices. Keep a local number practical for banks, landlords, schools and appointments.',
    'Decide whether you need a short-term prepaid SIM, a monthly plan, an eSIM or a family/business account.|Compare data, calls, EU roaming, activation, device financing, cancellation and international-call pricing.|Secure voicemail, account recovery and a second contact method before changing number.',
    'A plan that is cheap in Helsinki may have poor rural or indoor coverage.|Roaming within the EU has conditions and fair-use limits.|Never read a verification code to an unexpected caller claiming to be the operator.',
    'https://www.traficom.fi/en/communications/phone-and-broadband-services'
  ),
  'telecommunications_and_media-isp': topic(
    'Finnish broadband is generally reliable, but the correct service depends on the building’s fibre or cable connection, the area, the contract and whether you need a mobile backup.',
    'Ask the landlord or housing company which providers and connection types reach the address.|Compare installation, router, speed, data limits, support, fixed term and cancellation rather than only the first-month price.|Test the service before relying on it for work, study or a move.',
    'A building connection can be included in the housing charge but still need activation.|Coverage maps do not describe every room or winter outage.|Keep mobile data available for emergency communication and service interruptions.',
    'https://www.traficom.fi/en/communications/broadband-and-telephone'
  ),
  'telecommunications_and_media-television': topic(
    'Finnish television depends on the signal available in the building—cable, terrestrial or satellite—and the equipment that can decode it. Streaming has added choice but not removed local broadcasting and licence questions.',
    'Ask the building manager whether the home uses DVB-C, DVB-T2 or another signal before buying equipment.|Choose free, public-service, pay-TV or streaming content based on language, sport, news and budget.|Check accessibility, subtitles, recording, device compatibility and internet use.',
    'A television bought abroad may not support the local tuner or power plug safely.|The public broadcasting tax is a household tax question, not a premium-channel subscription.|Programme availability and rights vary by country and service.',
    'https://www.traficom.fi/en/communications/tv-and-radio'
  ),
  'telecommunications_and_media-pay_tv': topic(
    'Pay-TV usually combines a package subscription with access hardware or a viewing card. The practical questions are signal type, compatible module, contract term, cancellation, sports rights and the total monthly price.',
    'Confirm the building signal and television or set-top-box compatibility before ordering.|Compare package contents, introductory price, equipment, installation, recording and cancellation.|Keep the card, contract and provider support details together so a move is easy.',
    'A smart card cannot be inserted directly into every television.|A channel listed in a package can still be unavailable during a rights change or technical fault.|Do not accept a long fixed term without understanding the exit conditions.',
    'https://www.traficom.fi/en/communications/tv-and-radio'
  ),
  'telecommunications_and_media-net_tv': topic(
    'Streaming and IPTV deliver live, catch-up and on-demand content through the internet. They are convenient for international households, but location rights, subtitles, device limits and broadband reliability still matter.',
    'List the channels and languages the household actually watches before subscribing.|Check Finnish availability, simultaneous streams, offline viewing, subtitles, cancellation and child controls.|Use a wired or well-placed Wi-Fi connection and keep billing alerts active.',
    'A VPN may breach a service’s terms and does not make every programme legally available.|A subscription can renew after an introductory price ends.|Avoid unofficial IPTV boxes and streams that expose the household to fraud or malware.',
    'https://www.traficom.fi/en/communications/tv-and-radio'
  ),
  'telecommunications_and_media-satellite_tv': topic(
    'Satellite television can help with international channels where internet options are limited, but the dish needs a clear view, permission, installer and compatible service. Finnish buildings often have rules about external equipment.',
    'Check the building’s permission, façade rules and landlord or housing-company contact before buying a dish.|Confirm the satellite position, signal in your location, installation cost and weather resilience.|Compare the full subscription and equipment cost with legal streaming or cable options.',
    'A dish that works in one direction or flat may not work from your balcony.|Northern weather, trees and snow can reduce reliability.|Some broadcasters restrict reception by country, so confirm rights before signing.',
    'https://www.traficom.fi/en/communications/tv-and-radio'
  ),
  'telecommunications_and_media-radio': topic(
    'Radio is a low-bandwidth way to hear Finnish news, weather, music and languages while you learn the country. National public-service stations, local commercial stations and online streams serve different audiences.',
    'Choose a national source for public-service news and a local station for traffic, events and regional information.|Use the RadioMedia directory or the station’s own app to check frequency and streaming options.|Keep a battery-powered or car option available for serious weather or power disruption.',
    'A station’s language and schedule can change by region.|Online streams may be geo-restricted or use more data than expected.|For emergencies, follow official warnings rather than a casual presenter or social post.',
    'https://www.traficom.fi/en/communications/tv-and-radio/radio'
  ),

  'travel_finland-index': topic(
    'Travel in Finland is easiest when you combine the right mode with the season, distance and last connection. Trains, buses, ferries, flights, local transport and car hire each work well in different parts of the country.',
    'Choose the destination and weather window first, then compare door-to-door routes rather than one ticket price.|Use official operators and municipal journey planners for current times, disruptions and accessibility.|Keep a backup for the last kilometre and an extra margin for winter or a missed connection.',
    'Long distances and sparse services can make a “nearby” destination take a full day.|Timetables change for public holidays and seasonal routes.|Travel insurance, cancellation terms and identification requirements differ by trip.',
    'https://www.visitfinland.com/en/'
  ),
  'travel_finland-accommodation': topic(
    'Finland has hotels, hostels, cottages, holiday homes, campsites, serviced apartments and cabins. Price and availability depend heavily on season, city, festival, ski conditions and how far in advance you book.',
    'Choose the stay around the trip: kitchen and laundry for a longer visit, reception for a late arrival, or a cottage for nature and space.|Compare cleaning, linen, breakfast, sauna, parking, cancellation, taxes and transport—not only the nightly rate.|Save check-in instructions and a plan for groceries and keys.',
    'A summer cottage may be remote and a winter resort may have very limited off-season services.|Short-term rental rules and deposits differ from a normal tenancy.|Check accessibility, fire safety, water, heating and mobile coverage before booking.',
    'https://www.visitfinland.com/en/where-to-go/'
  ),
  'travel_finland-finnish_travel_guides': topic(
    'Finland rewards planning by region and activity: national parks, lakes, archipelago, cycling, hiking, boating, heritage and winter trails all need different kit and transport.',
    'Choose a region, season and activity level, then read the official trail or destination guidance.|Check maps, distances, toilets, water, permits, fire rules, accessibility and mobile coverage.|Tell someone your route for remote trips and pack for conditions rather than photographs.',
    'Nature is not automatically safe because it is close to a city.|Berry, fishing, fire, hunting and parking rules apply in different places.|Weather, daylight and public transport can change a route after you have left.',
    'https://www.luontoon.fi/en'
  ),
  'travel_finland-finnish_adventures': topic(
    'Northern lights, husky rides, saunas, ice hotels, snowmobiles, Santa, Moomins and frozen-water experiences are memorable when the operator is safe, honest about conditions and clear about what the price includes.',
    'Choose the experience and physical demands before comparing operators or destinations.|Ask about transfers, clothing, age, medical limits, weather cancellation and guide qualifications.|Book a lower-risk backup activity so one cloudy or thawing day does not ruin the trip.',
    'The aurora is never guaranteed and snow or ice conditions can change quickly.|Extreme activities need insurance and a clear safety briefing.|Do not drive, swim or walk on ice based on a social-media photograph.',
    'https://www.visitfinland.com/en/things-to-do/'
  ),
  'travel_finland-finnish_travel_agencies': topic(
    'A travel agency can sell a package, arrange a tailor-made route, provide day trips or combine flights, hotels, transfers and activities. The useful comparison is the agency’s responsibility when something changes.',
    'Write the trip brief: dates, travellers, accessibility, language, budget, pace and non-negotiables.|Ask for the itinerary, inclusions, supplier names, cancellation, assistance and payment schedule in writing.|Check whether the package has statutory traveller protection and who to call during the trip.',
    'The cheapest headline may exclude bags, transfers, meals or local taxes.|A full-service agency and an online booking site have different support obligations.|Do not pay an invoice whose recipient or cancellation terms you cannot verify.',
    'https://www.kkv.fi/en/consumer-affairs/travel-and-accommodation/'
  ),
  'travel_finland-cruises': topic(
    'Ferries from Helsinki and Turku connect Finland with the Baltic region and the archipelago, while local ferries make islands and crossings part of everyday transport. A cruise is both a journey and a timed hotel booking.',
    'Compare route, cabin, vehicle, meals, port transfer, passport requirements and total taxes before booking.|Check the operator’s current timetable and disruption policy, especially for local island routes.|Arrive early with medicines, documents and a plan for the port or terminal.',
    'Cruise prices can change with meals, cabins, fuel or vehicle charges.|Border rules still apply even when the vessel feels like a floating city.|Do not assume a local ferry accepts the same ticket or payment method as city transport.',
    'https://www.finnlines.com/en/'
  ),
  'travel_finland-flights': topic(
    'Flying within or from Finland is simple when you compare the whole trip: airport transfer, baggage, check-in, connection time, winter disruption and the cost of replacing a missed flight.',
    'Search more than one airline or comparison service, then read the operating carrier’s terms.|Confirm airport, terminal, bags, seat, name spelling, connection and cancellation details before payment.|Keep a realistic buffer for road, rail and security time when travelling from outside Helsinki.',
    'A cheap fare can become expensive after bags, seat and transport are added.|Domestic weather and airport schedules can change quickly in winter.|Use the carrier or airport for live information, not a cached comparison page.',
    'https://www.finavia.fi/en'
  ),
  'travel_finland-bus_train': topic(
    'Long-distance trains and buses connect Finland’s cities, university towns, ports and Lapland. The best choice depends on route, price, luggage, overnight travel, accessibility and the last local connection.',
    'Check both VR and bus operators, including the route planner and station maps.|Compare advance fares, flexible tickets, seat reservations, bicycles, pets, luggage and delays.|Plan the walk or local bus from the arrival station before buying the cheapest connection.',
    'A ticket may be tied to one departure and not protect a missed connection.|Winter maintenance and public holidays alter schedules.|Freight and courier services have separate size, timing and liability rules from passenger travel.',
    'https://www.vr.fi/en'
  ),
  'travel_finland-public_transport': topic(
    'Finnish local transport includes buses, trains, trams, metros, ferries, bicycles and taxis. Tickets are usually zone or validity based, so the journey planner and local authority are the reliable source.',
    'Identify the local operator, zones, ticket app, contactless option and inspection rules before travelling.|Use a door-to-door planner and check the final departure, platform, lift and walking route.|Choose a day or season ticket only after comparing the trips you will actually make.',
    'A ticket valid in one city may not cover a neighbouring operator or ferry.|Taxis can be regulated and safe but still expensive; check the fare basis before boarding.|Service changes, strikes and weather can make the backup route essential.',
    'https://www.hsl.fi/en'
  ),
  'travel_finland-car_hire': topic(
    'Car hire is useful for cottages, national parks and routes with little public transport, but the contract decides the real cost. Licence, age, payment card, insurance, fuel, mileage and winter equipment all matter.',
    'Compare the total price including excess, deposit, additional driver, child seats, one-way fee, fuel and cleaning.|Photograph the vehicle, wheels, glass and fuel level at collection and return.|Check the route, parking, charging or fuel stations and winter driving conditions before leaving.',
    'A foreign licence may need a translation or permit; confirm with the rental company and Traficom.|The renter can be liable for damage even when a basic insurance package exists.|Do not drive on roads or ice you are not equipped and authorised to use.',
    'https://www.traficom.fi/en/transport/road/drivers-and-vehicles'
  ),

  'shopping_in_finland-index': topic(
    'Shopping in Finland becomes easier when you learn where categories are sold, how prices are displayed, which loyalty schemes fit your household and how returns or online imports work.',
    'Set a weekly food and household budget, then compare unit prices and opening hours across retailers.|Keep receipts and learn the Finnish words for sale, clearance, size, ingredients, warranty and return.|Use official consumer and customs guidance for unusual, expensive or imported purchases.',
    'The lowest ticket price may exclude delivery, deposit, installation or warranty support.|Opening hours and stock are local and seasonal.|A loyalty card is optional; do not trade personal data for a saving you will not use.',
    'https://www.kkv.fi/en/consumer-affairs/'
  ),
  'shopping_in_finland-sales_tax': topic(
    'Finnish prices usually show VAT already included, while business invoices and imported goods can require a more careful ALV calculation. The correct rate and customs treatment depend on the product, buyer and transaction.',
    'Check whether the price is consumer-inclusive or a business price before comparing offers.|For online imports, calculate VAT, customs, excise, delivery and handling together.|Keep the invoice and product classification if you need a business deduction, return or customs explanation.',
    'VAT rates and product exceptions change, so do not copy a percentage from an old article.|A retailer’s Finnish price and an overseas checkout may have different tax obligations.|Alcohol, tobacco, vehicles and some food or digital services have special rules.',
    'https://www.vero.fi/en/businesses-and-corporations/taxes-and-charges/vat/'
  ),
  'shopping_in_finland-retailers': topic(
    'A retailer directory is most useful as a starting point, not a guarantee that a branch still exists. Finnish chains, department stores, specialist shops, markets and repair providers each have different hours and services.',
    'Translate the product into Finnish or Swedish and search by postcode as well as chain name.|Check the shop’s own address, stock, opening hours, returns and delivery information before travelling.|Compare a local independent shop with a chain when advice, repair or unusual stock matters.',
    'A retailer’s online and physical selection may differ.|Store names and branches change; stale directory listings are common.|For expensive goods, read warranty, installation and after-sales support before paying.',
    'https://www.kkv.fi/en/consumer-affairs/consumer-goods/'
  ),
  'shopping_in_finland-loyalty_cards': topic(
    'K-Plussa, S-Etukortti and other programmes can return value through discounts, points or cooperative benefits, but the benefit depends on where you shop and what data you share.',
    'List the shops, fuel, travel and services your household already uses before joining.|Read the fee, points expiry, payment requirement, privacy notice and how benefits are paid.|Choose one simple way to track the card and receipts instead of collecting every programme.',
    'A loyalty price is not automatically cheaper than another shop’s normal price.|Cooperative membership and a payment card can be separate products.|Do not use someone else’s card or share household data without understanding the terms.',
    'https://www.kkv.fi/en/consumer-affairs/'
  ),
  'shopping_in_finland-groceries': topic(
    'Food shopping is a weekly logistics problem: price, distance, dietary needs, language, season and transport all matter. Supermarkets, market halls, specialist shops and online groceries each solve a different part.',
    'Build a short list of affordable staples, unit prices and nearby shops before experimenting with speciality products.|Learn labels for allergens, dates, origin, deposits and cooking instructions; use market halls for seasonal variety.|Compare delivery slots, substitutions, bag fees and minimum orders for online shopping.',
    'Best-before and use-by dates are not the same safety instruction.|A cheap offer may be a large pack, deposit product or loyalty price.|Ask a shop or food authority about unfamiliar allergens instead of guessing from a translation.',
    'https://www.ruokavirasto.fi/en/foodstuffs/'
  ),
  'shopping_in_finland-sales': topic(
    'Finnish sales can be worthwhile when you compare the previous price, condition, size, warranty and urgency. Seasonal clearance, outlet stock, food reductions and travel offers all have different patterns.',
    'Track the normal price and your actual need before waiting for a discount.|Read the return, warranty and “last item” condition and check whether the price includes delivery or installation.|Set a limit so a 40% discount does not become 100% unnecessary spending.',
    'A sale item is not automatically exempt from consumer rights when it is faulty.|Online “limited time” offers can reset or renew; save the advert and checkout terms.|Travel and rail offers often depend on a specific date and non-refundable ticket.',
    'https://www.kkv.fi/en/consumer-affairs/consumer-goods/'
  ),
  'shopping_in_finland-online_shopping': topic(
    'Online shopping opens Finnish, EU and international choice, but delivery, VAT, customs, seller identity, returns and fraud sit behind the button. Verify the shop before the price looks attractive.',
    'Check the trader’s country, terms, contact details, delivery, returns, payment and privacy information before ordering.|Calculate the total landed cost and keep the order, invoice, tracking and correspondence.|Use a payment method with sensible dispute protection and inspect goods promptly on arrival.',
    'An EU purchase and a non-EU import can have different VAT, customs and consumer-rights paths.|Marketplace sellers may not be the platform itself.|Do not click a delivery-fee link from an unexpected message; open the courier’s site directly.',
    'https://tulli.fi/en/private-persons/online-shopping'
  ),
}
