import type { EditorialGuide } from './editorial-guide'

export const settlingGuides: EditorialGuide[] = [
  {
    slug: 'first-90-days-in-finland',
    number: '01',
    label: 'Arrival pathway',
    title: 'Your first 90 days in Finland, in an order that actually works',
    summary: 'Permits, registration, banking, tax, Kela, healthcare and the everyday jobs around them, arranged by what needs doing now and what can wait.',
    goodFor: 'People moving to Finland for work, study or family, and anyone already here with twelve official tabs open and no idea which one comes first.',
    intro: [
      'Moving to Finland creates a strange little chain reaction. You need a bank account to make everyday life easier, strong identification to use half the public services, a Finnish identity code for many bank and authority processes, and the right registrations before some of those pieces fall into place. None of this means you have failed if it takes a while. The system simply has dependencies that official pages often explain one office at a time.',
      'This guide puts the jobs into a sensible order. It is a route map, not a promise that every newcomer follows the same route. Your citizenship, reason for moving, length of stay and family situation affect the exact steps, so use the official links beside the guide to confirm your own case.',
    ],
    keyFacts: [
      'A Finnish personal identity code is not the same thing as a residence permit, EU registration or municipality of residence.',
      'EU citizens staying for more than three continuous months normally register their right of residence with Migri. Nordic citizens follow a different DVV route.',
      'A municipality of residence can unlock local resident services, but it is not granted automatically to every person with an identity code.',
      'Kela decides benefit eligibility from your circumstances. Moving here or receiving an identity code does not by itself approve every benefit.',
    ],
    sections: [
      {
        title: 'Before the flight, ferry or overloaded family car',
        paragraphs: [
          'Sort your legal right to come and stay before treating the practical checklist as the main event. A non-EU citizen will normally need the appropriate first residence permit before moving. An EU citizen does not need a residence permit, but should understand the registration rule if the stay will pass three continuous months. Nordic citizens register their personal data through DVV rather than applying for EU registration with Migri.',
          'Bring original identity documents and the records that may be difficult to replace from Finland. Depending on your situation, that can include civil-status documents, legalised or translated marriage and birth certificates, employment or study documents, prescriptions, a medication summary and records concerning children. Check the exact authority instructions before paying for translations or legalisation.',
        ],
        bullets: [
          'Keep scans in secure storage, but bring the originals an authority asks to inspect.',
          'Write down permit expiry dates and passport expiry dates before travel.',
          'Budget for deposits, temporary accommodation and the period before a Finnish bank account is ready.',
          'Keep access to your old phone number and bank if they are tied to identity checks or bills back home.',
        ],
      },
      {
        title: 'The first 72 hours: make daily life function',
        paragraphs: [
          'Your first jobs are deliberately ordinary: know where you are sleeping, make sure you can receive calls and messages, learn the route to work or study and keep your essential documents together. A prepaid Finnish SIM can be useful while a personal phone subscription is unavailable. In the Helsinki region, the HSL app, an HSL card, contactless payment and certain paper tickets provide different ways to travel. Check the zones before buying, and make sure the ticket is valid before boarding or entering a payment area.',
          'Save 112 for immediate danger and 116 117 for urgent medical advice that is not an emergency. If you take regular medicine, do not wait until the final dose to find out how a Finnish prescription or renewal will work.',
        ],
        bullets: [
          'Put your name on the door and mailbox exactly as the building requires.',
          'Photograph the condition of a rental home when you move in and report existing damage in writing.',
          'Save the landlord, maintenance company and after-hours maintenance number separately.',
          'Check smoke alarms, home insurance expectations and what the rent does not include.',
        ],
      },
      {
        title: 'Weeks one and two: separate Migri, DVV and the address notification',
        paragraphs: [
          'Migri deals with residence permits and EU registration. DVV maintains the Population Information System and handles matters such as registering personal data, addresses and municipality of residence. Posti handles mail delivery. These jobs can overlap in timing, but they are not interchangeable.',
          'If you do not already have a Finnish personal identity code, check whether your route is Migri, DVV or, in certain work cases, the Tax Administration. If you intend to live here permanently, also check whether you need to apply for a municipality of residence. Submit the appropriate move or address notification and do not assume that telling a landlord, employer or Posti updates every authority and private company.',
        ],
        bullets: [
          'Non-EU citizen: check the conditions and validity of your residence permit throughout your stay.',
          'EU citizen: submit EU registration before three continuous months have passed if the rule applies to you.',
          'Nordic citizen: follow DVV instructions for Nordic citizens rather than the ordinary EU registration route.',
          'Family: check that every family member, including each child, has the required registration and address details.',
        ],
      },
      {
        title: 'Weeks one to four: tax, salary and banking',
        paragraphs: [
          'If you work in Finland, deal with the tax card early and ask your employer what they require from you. The Tax Administration explains the route for people arriving from overseas, including cases where a Finnish identity code can be issued for work-related tax matters. International and remote-work taxation can become complicated quickly, so do not rely on a colleague’s percentage or circumstances.',
          'For banking, compare the account, card, service fees and strong identification rather than chasing a free tote bag. Finnish online banking credentials often become your key to public and private digital services. A bank may need an appointment and documents about identity, address, work or the intended use of the account. Ask what is missing if strong identification is not offered at the same time as the account.',
        ],
        bullets: [
          'Give payroll the information it requests and confirm the first salary date.',
          'Keep enough money accessible outside the new account until cards and credentials work.',
          'Never let a partner, employer or helper log in with your bank credentials.',
          'Ask the bank for written reasons and complaint instructions if a service is refused.',
        ],
      },
      {
        title: 'The first month: Kela, healthcare and the services around your home',
        paragraphs: [
          'Kela social security and municipal healthcare are related parts of Finnish life, but they are not the same decision. Kela assesses whether you can receive particular benefits or a Kela card based on living or working in Finland and your wider circumstances. A municipality of residence normally gives access to the local public healthcare system at resident client fees. Other routes to care can apply through work, study, EU coordination or special circumstances.',
          'Find your actual health doorway before you are ill. That may be a Helsinki health station, occupational healthcare supplied by an employer, student healthcare, private insurance or another local service. Then set up the correct portal. MyKanta is the national health record. Helsinki and HUS also use Maisa for many appointments, messages and local records.',
        ],
        bullets: [
          'Notify Kela of the move when applying for a benefit or Kela card, using OmaKela or the relevant form.',
          'Check exactly what occupational healthcare includes. A logo on an employee page is not a list of covered treatment.',
          'Arrange electricity, internet and home insurance where these are not included.',
          'Choose a transport ticket only after checking your real commute and HSL zones.',
        ],
      },
      {
        title: 'Months two and three: build a life, not just an admin folder',
        paragraphs: [
          'The paperwork matters, but settling is also the point where you need recurring places and familiar faces. Pick a Finnish or Swedish learning route that fits your week, not an imaginary week in which you have unlimited energy. Join one activity that meets repeatedly. Regular sport, a language café, volunteering, a parent group or an adult education course usually gives friendship a better chance than attending ten unrelated newcomer events.',
          'If children moved with you, check daycare, preschool or school arrangements early. If you are jobseeking, find the correct employment-service route for your municipality and register promptly when eligibility or a benefit depends on it. If you drive, check licence validity, insurance, parking and seasonal tyre responsibilities rather than waiting for winter.',
        ],
      },
      {
        title: 'The dependency chain nobody draws for you',
        paragraphs: [
          'Think of the process as several lanes, not one queue. Your legal right to reside belongs to Migri or the EU and Nordic rules. Your recorded identity, address and municipality belong mainly to DVV. Tax belongs to Vero. Benefits belong to Kela. Local healthcare and education belong to a municipality or wellbeing-services authority. A bank decides its own customer process and whether it can issue strong identification.',
          'Progress in one lane can help another, but it does not automatically complete it. Keep a simple list showing the application, authority, date, reference number, missing document and next follow-up date. That tiny table will save you from treating every brown envelope as a brand-new mystery.',
        ],
      },
    ],
    insiderTips: [
      'Book limited in-person appointments as soon as you know you need them. You can keep researching while the date approaches.',
      'Use one exact version of your name across bookings and forms, matching your identity document unless the service instructs otherwise.',
      'Ask every office what happens next and whether you must contact another authority yourself. Never assume the systems have finished talking to each other.',
      'Keep a physical folder for original documents and a short digital timeline for applications and calls.',
      'Do not measure your move against somebody whose citizenship, employer, family and bank were different. Their three-day success story may be a completely different route.',
    ],
    resources: [
      { title: 'Moving to Finland checklist', description: 'The broad official-style checklist covering permits, registration, tax, banking, housing and social security.', url: 'https://www.infofinland.fi/en/moving-to-finland/moving-to-finland-checklist', source: 'InfoFinland' },
      { title: 'Residence permits and EU registration', description: 'Choose the correct immigration route and confirm the current requirements.', url: 'https://migri.fi/en/permits-and-citizenship', source: 'Finnish Immigration Service' },
      { title: 'Registering as a foreign citizen', description: 'Personal data, identity code, address and municipality-of-residence instructions.', url: 'https://dvv.fi/en/foreigner-registration', source: 'Digital and Population Data Services Agency' },
      { title: 'Arriving in Finland from overseas', description: 'The Tax Administration starting point for work, tax cards and tax residency.', url: 'https://www.vero.fi/en/individuals/tax-cards-and-tax-returns/arriving_in_finland/', source: 'Finnish Tax Administration' },
      { title: 'Moving to Finland and Kela', description: 'How Kela assesses benefits and how to notify Kela when applying.', url: 'https://www.kela.fi/moving-to-finland', source: 'Kela' },
      { title: 'HSL tickets and fares', description: 'Current ticket types, zones, buying methods and fare information for the capital region.', url: 'https://www.hsl.fi/en/tickets-and-fares', source: 'HSL' },
    ],
  },
  {
    slug: 'digital-finland-survival-kit',
    number: '02',
    label: 'Digital life',
    title: 'The Digital Finland survival kit',
    summary: 'Bank credentials, Suomi.fi, MyKanta, Maisa, MyTax, OmaKela and OmaPosti, with a plain-English explanation of what each door is for.',
    goodFor: 'Anyone who has finally received Finnish online credentials and is wondering why Finland immediately rewarded them with seven different inboxes.',
    intro: [
      'Finland is wonderfully digital once the pieces are working. Before that, it can feel like being handed a ring of identical keys in the dark. Your bank credentials may identify you, Suomi.fi may deliver an official decision, OmaPosti may hold a bill, MyKanta may show a prescription and Maisa may be where you actually message the nurse.',
      'The trick is not finding one super-app. There is not one. The trick is understanding which services are identity keys, which are inboxes, which are records and which are places where you can actually complete a task.',
    ],
    keyFacts: [
      'Finnish online banking credentials are often used as strong identification, but they remain personal banking security credentials. Never share them.',
      'Suomi.fi Messages and OmaPosti are separate digital mail services. Important information may also still arrive on paper.',
      'MyKanta is the national health record. Maisa is a regional working service used by Helsinki, HUS and other participating providers.',
      'Authorising a trusted person is service-specific. Maisa proxy access does not automatically create a MyKanta authorisation.',
    ],
    sections: [
      {
        title: 'Start with the key: strong electronic identification',
        paragraphs: [
          'Strong identification proves to a service that you are you. Finnish online banking credentials are the most familiar route, while a mobile certificate or chip-based identity card can work in supported services. A normal bank account and card do not always mean that strong identification has been enabled, so ask the bank exactly what you are receiving.',
          'Treat the credentials like the keys to your bank, health record, tax information and official decisions, because that is effectively what they become. A helpful partner can sit beside you, translate the page or use a valid authorisation. They should not enter with your credentials.',
        ],
      },
      {
        title: 'Suomi.fi: official messages, powers of attorney and your registered data',
        paragraphs: [
          'Suomi.fi has several separate jobs. Suomi.fi Messages is a secure channel used by participating public authorities. E-Authorizations lets you grant or request a digital mandate so another person can act in selected matters. The service can also show register data held about you.',
          'If you activate Messages, enable notifications and learn where the inbox is. A notification email should tell you to check the service, not ask you to send bank credentials by reply. Open Suomi.fi through its official address or app rather than using a nervous-looking link in an unexpected message.',
        ],
        bullets: [
          'Messages: decisions and communication from participating authorities.',
          'E-Authorizations: controlled permission for another person to handle selected matters.',
          'Register data: a way to inspect information held in participating official registers.',
          'Identification: the doorway used by many Finnish public services.',
        ],
      },
      {
        title: 'Health: MyKanta is not the same as Maisa',
        paragraphs: [
          'MyKanta is the national view of prescriptions and health information recorded by public and private providers. It is also where you can request many prescription renewals, record certain choices and use valid Suomi.fi authorisations to act for another person.',
          'Maisa is used by Helsinki, HUS and some other organisations for many appointments, messages, questionnaires and local care records. A result may appear in one place before another. If somebody helps manage your care, set up the proper permission in each relevant service rather than sharing a login.',
        ],
      },
      {
        title: 'Money and benefits: MyTax and OmaKela',
        paragraphs: [
          'MyTax is where you can view tax information, request or change a tax card, handle tax returns and receive decisions from the Tax Administration. Check the service when income changes rather than discovering at the end of the year that the estimated annual income was too low.',
          'OmaKela is Kela’s transaction service and currently operates in Finnish and Swedish. Kela’s information pages and forms are available more widely in English. You can apply for benefits, send supporting documents and follow decisions through the relevant route. Do not assume a submitted application means approval, and do not send the same document repeatedly unless Kela asks for it.',
        ],
      },
      {
        title: 'Post and parcels: OmaPosti is another inbox',
        paragraphs: [
          'OmaPosti brings parcel tracking, delivery choices, digital letters and invoices together. Activating it does not automatically mean every sender stops using paper. Check your delivery settings, enable notifications and remember that a bill paid through your bank may still look unpaid in OmaPosti unless you mark it manually.',
          'Parcel scams thrive on urgency. If a message says a parcel needs a tiny payment or sudden address verification, leave the message and check the shipment inside the official OmaPosti app or Posti website. If you entered bank details into a suspicious page, contact your bank immediately.',
        ],
      },
      {
        title: 'The everyday layer: HSL, e-invoices and MobilePay',
        paragraphs: [
          'The HSL app handles route planning, tickets and disruption information in the capital region. Buy the correct zones and make sure the ticket is valid before boarding or entering the Metro, train or ferry payment area. Resident pricing and customer groups can depend on registered information, so use HSL’s current instructions rather than an old screenshot.',
          'E-invoices are arranged through your online bank and can make recurring bills easier to manage. MobilePay is common for splitting costs, small purchases and some group payments, but it is not a replacement for a bank account or official identification. Keep a short list of recurring bills until you know which ones are automatic and which still expect a manual payment.',
        ],
      },
      {
        title: 'Before your credentials work',
        paragraphs: [
          'Newcomers can spend weeks in the awkward gap before strong identification is ready. Ask each authority for the paper, phone or in-person route. Keep the original decision letters. Use a prepaid phone service if needed, buy transport through a supported non-authenticated method and book service-point appointments early.',
          'Do not let the digital version of Finland convince you that the non-digital route has vanished. It may be slower and less obvious, but authorities must provide ways to handle many essential matters when a person cannot use the standard online service.',
        ],
      },
    ],
    insiderTips: [
      'Create a bookmarks folder containing the official login pages. Use those bookmarks instead of links in unexpected emails or text messages.',
      'Turn on notifications, but never treat the notification itself as the official decision. Open the real service and read the document there.',
      'Use a password manager for ordinary service passwords. Bank credentials and one-time codes stay outside it if your bank instructs you to handle them differently.',
      'Keep a one-page list showing which service holds tax, health, benefits, post and transport information. The names become obvious after a month, but the first week is brutal.',
      'Set up authorisations before illness, travel or family chaos makes them urgent.',
    ],
    resources: [
      { title: 'Suomi.fi Messages instructions', description: 'How the official digital mailbox works, including activation and reading messages.', url: 'https://www.suomi.fi/instructions-and-support/messages', source: 'Suomi.fi' },
      { title: 'Suomi.fi e-Authorizations', description: 'Grant or request a controlled electronic mandate for supported services.', url: 'https://www.suomi.fi/e-authorizations', source: 'Suomi.fi' },
      { title: 'MyKanta instructions', description: 'Health records, prescriptions and acting on behalf of another person.', url: 'https://www.kanta.fi/en/web/guest/instructions-and-use', source: 'Kanta Services' },
      { title: 'MyTax', description: 'The official Tax Administration e-service and guidance for personal tax matters.', url: 'https://www.vero.fi/en/e-file/mytax/', source: 'Finnish Tax Administration' },
      { title: 'OmaKela', description: 'The Kela transaction service for applications, attachments and decisions.', url: 'https://www.kela.fi/omakela', source: 'Kela' },
      { title: 'OmaPosti', description: 'Official parcel tracking, delivery choices, digital letters and invoices.', url: 'https://www.posti.fi/en/omaposti', source: 'Posti' },
    ],
  },
]

export function getSettlingGuide(slug: string) {
  return settlingGuides.find((guide) => guide.slug === slug)
}
