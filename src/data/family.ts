export type FamilyResource = {
  title: string
  description: string
  url: string
  source: string
}

export type FamilySection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type FamilyGuide = {
  slug: string
  number: string
  label: string
  title: string
  summary: string
  intro: string[]
  goodFor: string
  keyFacts: string[]
  sections: FamilySection[]
  insiderTips: string[]
  resources: FamilyResource[]
}

export const familyGuides: FamilyGuide[] = [
  {
    slug: 'healthcare-and-maisa',
    number: '01',
    label: 'Health & appointments',
    title: 'Healthcare, Maisa and looking after the family admin',
    summary: 'What Maisa and MyKanta actually do, how to book care, and how your partner can help without sharing passwords.',
    goodFor: 'Anyone trying to book, message a nurse, check results or help a partner or child with healthcare.',
    intro: [
      'Finnish healthcare becomes much less mysterious once you know which digital door to use. In Helsinki, Maisa is where you deal with the City and HUS: appointments, messages, results, maternity and child health clinics, dental care and quite a bit more. MyKanta is the national record, where you can see health information and prescriptions from providers around Finland.',
      'They overlap, but they are not the same account. That matters when one adult in the family is the fluent Finnish speaker, the calendar keeper or simply better at forms. You can give them proper access instead of passing your bank codes across the sofa.',
    ],
    keyFacts: [
      'Guardians usually see an underage child automatically in Maisa.',
      'An adult must actively grant another adult access.',
      'Maisa permission does not automatically grant MyKanta permission.',
      'Call 116 117 before going to emergency care when it is urgent but not life-threatening.',
    ],
    sections: [
      {
        title: 'Maisa versus MyKanta, in normal language',
        paragraphs: [
          'Think of Maisa as the working inbox for Helsinki and HUS care. You can send a message, manage many appointments, see visit notes and results, request prescription renewals and deal with neuvola or dental care. MyKanta is the wider national archive. It collects prescriptions and patient records from public and private providers across Finland.',
          'A result may appear in one before the other, and not every appointment can be booked online. If Maisa does not show the service you need, use the service phone number rather than assuming you are not eligible.',
        ],
      },
      {
        title: 'Letting your partner help in Maisa',
        paragraphs: [
          'Open Maisa with your own strong identification. Go to Menu, then Manage proxy access, choose Grant proxy access and enter the person you trust. Maisa sends them an invitation, which they accept through their own account. After that, they use Switch profile to move between their information and yours.',
          'You can choose the level of access. Full access is useful when someone genuinely helps manage your care. Read-only access lets them see information without making changes. There is also a more limited option for appointments and messages. Use the narrowest access that still makes family life easier.',
          'This permission works inside Maisa. If you want someone to call a service or speak for you at a desk, the provider may require a separate written authorisation. MyKanta uses its own Suomi.fi authorisation, so set that up separately if you want them to see your national health record or renew prescriptions there.',
        ],
      },
      {
        title: 'Children, privacy and the age nobody warns you about',
        paragraphs: [
          'Guardians normally see their child in Maisa automatically. Children over 10 can also use Maisa themselves if they have strong electronic identification. From age 12, a healthcare professional can assess whether a young person is able to make decisions about a particular piece of care. If they are, the young person may decide that the information is not shown to a guardian.',
          'That does not mean the whole account suddenly disappears on a twelfth birthday. Access can differ from one visit or record to another. It is part of a young person gaining healthcare privacy, not a technical fault.',
        ],
      },
      {
        title: 'Where to book the usual family care',
        paragraphs: [
          'For a child under school age, neuvola is the first home for growth checks, vaccinations and family wellbeing. School-aged children use school health services for routine checks and support, while the local health station handles ordinary illness. Children’s dental appointments and age-based check-ups can be managed in Maisa once booking opens.',
          'If you need an interpreter, say so when booking. Do not quietly bring a child along to interpret adult medical information. Public services can arrange professional interpretation when it is needed for care.',
        ],
      },
    ],
    insiderTips: [
      'Turn on Maisa notifications. Neuvola may offer a cancelled appointment to several families, and the first person to accept gets it.',
      'Keep every adult on their own login. Proxy access is safer, clearer and much easier to revoke than shared bank credentials.',
      'Cancel or move appointments as early as possible. Missed appointments can lead to a fee even when the original visit would have been free.',
      'Save your health station, neuvola and dental numbers before you need them. A tired Tuesday morning is not the moment to start hunting.',
    ],
    resources: [
      { title: 'Acting for a child or adult in Maisa', description: 'Helsinki’s step-by-step explanation of proxy access and the limits between services.', url: 'https://www.hel.fi/en/health-and-social-services/health-care/health-stations/acting-on-behalf-of-a-child-or-an-adult-relative-at-health-stations', source: 'City of Helsinki' },
      { title: 'Welcome Helsinki health services', description: 'A clear English overview of appointments, fees, Maisa, health stations and dental care.', url: 'https://www.hel.fi/en/health-and-social-services/welcome-helsinki-tips-for-health-and-social-services/welcome-helsinki-health-services', source: 'City of Helsinki' },
      { title: 'Acting for another adult in MyKanta', description: 'How national Suomi.fi authorisation works for records and prescriptions.', url: 'https://www.kanta.fi/en/on-behalf-of-an-adult', source: 'Kanta Services' },
      { title: 'Children and young people’s dental care', description: 'Age-based checks, booking and contact details for Helsinki.', url: 'https://www.hel.fi/en/health-and-social-services/health-care/dental-care/children-and-young-peoples-dental-care', source: 'City of Helsinki' },
    ],
  },
  {
    slug: 'babies-and-neuvola',
    number: '02',
    label: 'Pregnancy & babies',
    title: 'Having a baby and getting to know neuvola',
    summary: 'Pregnancy appointments, baby checks, vaccinations and the bit where neuvola looks after the parents too.',
    goodFor: 'Expectant parents, families with a baby, and anyone wondering what this “neuvola” word covers.',
    intro: [
      'Neuvola is one of those Finnish ideas that is hard to translate neatly. It is a free maternity and child health clinic, but it is also meant to support the whole family through pregnancy, birth and the years before school.',
      'You do not need to arrive knowing the system. Your nurse can talk through health, feeding, sleep, relationships, mood, vaccinations and development. If home is feeling much harder than the cheerful baby posters suggest, that belongs in the conversation too.',
    ],
    keyFacts: [
      'Neuvola services are voluntary and free for Helsinki residents.',
      'You can choose from Helsinki’s maternity and child health clinics.',
      'The first appointment after a first baby may be a home visit.',
      'National childhood vaccinations are offered through neuvola and later through school health services.',
    ],
    sections: [
      {
        title: 'Starting during pregnancy',
        paragraphs: [
          'Book the first maternity clinic appointment in Maisa or by phone. If you are unsure about the pregnancy dates, have an underlying condition or need an interpreter, the City asks you to book by phone so the right kind of appointment can be arranged.',
          'Appointments follow the pregnancy and prepare you for birth and early family life. A partner or support person can usually come. If you are new to Finland, say that plainly. Questions about hospital routines, registration and parental leave are ordinary questions here, not an inconvenience.',
        ],
      },
      {
        title: 'After the baby arrives',
        paragraphs: [
          'The child health clinic follows growth and development until school age. There are regular nurse and doctor check-ups, with extra visits when a family needs them. For a first baby, the first meeting is usually at home. The point is not to inspect your parenting. It is to catch problems early and give you somewhere reliable to ask the very specific questions that appear at 3 am.',
          'The clinic also checks how the adults are doing. Be honest about exhaustion, low mood, feeding difficulties, relationship stress or feeling alone. Neuvola can connect families with other professionals and services before things reach breaking point.',
        ],
      },
      {
        title: 'Vaccinations and records from abroad',
        paragraphs: [
          'Finland’s national vaccination programme is free and voluntary. Bring any vaccination records you have from another country, even if they are incomplete or in another language. The nurse can compare them with the Finnish schedule and plan what is needed.',
          'Children receive routine vaccinations at neuvola and later through school health services. Seasonal and risk-group recommendations change, so use the current City or THL page rather than an old parent-group screenshot.',
        ],
      },
      {
        title: 'Finding people when the days feel small',
        paragraphs: [
          'Helsinki playgrounds and family houses run baby mornings and parent activities, often free and without registration. Familia offers English-language support for intercultural couples and new parents. MLL Family Cafes are relaxed places to meet other adults while the children play.',
          'You do not need a crisis or a perfect reason to go. Sometimes the whole win is drinking a coffee near another adult who also has yoghurt on their sleeve.',
        ],
      },
    ],
    insiderTips: [
      'Write questions in your phone as they occur. A calm baby in the clinic can make the entire previous week vanish from memory.',
      'Ask for an interpreter while booking, not when you arrive.',
      'A free service can still have a no-show charge. Cancel appointments you cannot make.',
      'Familia’s English family training is especially useful for couples combining Finnish life with another culture at home.',
    ],
    resources: [
      { title: 'Maternity and child health clinics', description: 'The main Helsinki neuvola page, with clinic finder and appointment routes.', url: 'https://www.hel.fi/en/health-and-social-services/child-and-family-services/maternity-and-child-health-clinics', source: 'City of Helsinki' },
      { title: 'First maternity clinic appointment', description: 'When and how to book, including interpreter advice.', url: 'https://www.hel.fi/en/health-and-social-services/child-and-family-services/maternity-and-child-health-clinics/during-pregnancy/first-appointment-at-the-maternity-clinic', source: 'City of Helsinki' },
      { title: 'Child health clinic', description: 'What happens at baby and child check-ups and how to contact your nurse.', url: 'https://www.hel.fi/en/health-and-social-services/child-and-family-services/maternity-and-child-health-clinics/for-families-with-babies/child-health-clinic', source: 'City of Helsinki' },
      { title: 'Familia family training', description: 'Free English-language support for intercultural couples expecting a child.', url: 'https://www.familiary.fi/duo-familytraining.html', source: 'Familia' },
    ],
  },
  {
    slug: 'daycare-and-preschool',
    number: '03',
    label: 'Under school age',
    title: 'Daycare, preschool and the four-month rule',
    summary: 'How places, fees, Edlevo, pre-primary education and multilingual support fit together before school begins.',
    goodFor: 'Families with children under seven, including those planning a move to Helsinki.',
    intro: [
      'Daycare in Helsinki is more flexible than it first appears, but the application timetable catches plenty of new families. The useful number to remember is four months. That is how early the City asks you to apply for early childhood education when you know care will be needed.',
      'Public daycare is not simply childcare while adults work. It is early childhood education, with play, routines, language support and a plan for each child. There are also family daycare, clubs, private options and pre-primary education in the year before school.',
    ],
    keyFacts: [
      'Apply at least four months before the place is needed when possible.',
      'You can apply before moving to Finland, including without Finnish online identification.',
      'Public fees depend on family income, family size and hours of care. Low-income families may pay nothing.',
      'Pre-primary education at age six is compulsory and free.',
    ],
    sections: [
      {
        title: 'Applying without tripping over the admin',
        paragraphs: [
          'Most families now apply through Edlevo, which Helsinki began using for early childhood applications in 2026. You can apply up to a year ahead. If you do not have Finnish strong identification or a personal identity code yet, use the City’s PDF application. That route also means you can get the process moving before the boxes arrive.',
          'If a job, study place or family situation changes unexpectedly, the City may process an urgent need in around two weeks. You will need proof of the unexpected change. It is a safety valve, not the normal application route.',
        ],
      },
      {
        title: 'Your choices',
        paragraphs: [
          'Municipal daycare centres are the most familiar option. Family daycare is care in a smaller group, often in the carer’s home. Some centres offer extended hours for parents whose work falls outside the usual day. Private and multilingual daycares have their own admissions and fees, although private care support may help.',
          'For children who do not need full daycare, Helsinki also runs free clubs for young children. They can be a gentle way into Finnish routines, language and local friendships while a parent remains at home.',
        ],
      },
      {
        title: 'Language support without losing the home language',
        paragraphs: [
          'Children can receive support for learning Finnish or Swedish as part of early childhood education. Staff should also respect and encourage the languages used at home. Keeping your family language strong does not block Finnish. A secure first language supports learning and lets children keep a real relationship with grandparents and family elsewhere.',
          'Tell the centre which languages your child hears and speaks, what they understand, and how they communicate when tired or upset. That practical knowledge is more useful than pretending everybody understands more than they do.',
        ],
      },
      {
        title: 'The preschool year',
        paragraphs: [
          'Pre-primary education, called esiopetus or eskari, happens in the year a child turns six. It is compulsory and free, usually four hours a day. Many families combine it with early childhood education before or after those hours.',
          'The City usually offers a place based on the home address. Watch the official timetable, because confirmation and any request for another location have deadlines. Children who are new to Finnish or Swedish can receive preparatory support.',
        ],
      },
    ],
    insiderTips: [
      'Apply on time even if your plans are not perfectly settled. You can update details later.',
      'List more than one preferred centre if getting a place by a particular date matters more than one exact building.',
      'Submit income information when asked. If you do not, the maximum fee may be charged.',
      'Ask how the centre communicates. Important notices may land in Edlevo, email and the hallway noticeboard at the same time.',
    ],
    resources: [
      { title: 'Apply for early childhood education', description: 'Timelines, online and PDF applications, and urgent situations.', url: 'https://www.hel.fi/en/childhood-and-education/early-childhood-education/applying-for-early-childhood-education', source: 'City of Helsinki' },
      { title: 'Daycare options', description: 'Municipal, family, extended-hours, club and private options explained.', url: 'https://www.hel.fi/en/childhood-and-education/early-childhood-education/applying-for-early-childhood-education/options-for-early-childhood-education', source: 'City of Helsinki' },
      { title: 'Early childhood education fees', description: 'Current income rules, family size and hours of care.', url: 'https://www.hel.fi/en/childhood-and-education/early-childhood-education/early-childhood-education-fee', source: 'City of Helsinki' },
      { title: 'Getting a pre-primary place', description: 'How the preschool year is assigned and what families need to do.', url: 'https://www.hel.fi/en/childhood-and-education/pre-primary-education/how-to-get-a-pre-primary-education-place-for-a-child', source: 'City of Helsinki' },
    ],
  },
  {
    slug: 'schooling-in-helsinki',
    number: '04',
    label: 'School years',
    title: 'School in Finland, from local school to Wilma messages',
    summary: 'The school path, preparatory teaching, language choices, free meals, support and the mysterious world of Wilma.',
    goodFor: 'Parents of children aged 6 to 16, especially families arriving mid-year or without Finnish.',
    intro: [
      'Finnish school has an excellent international reputation, but that does not make the first week any less confusing. Children usually start pre-primary education at six and comprehensive school at seven. The nine years of comprehensive school are free, and the local school is normally based on your home address.',
      'A child does not need to speak Finnish before being accepted. Helsinki has preparatory education for newcomers, support for learning Finnish or Swedish and several English or bilingual options. The right route depends on the child’s age, previous schooling and language background.',
    ],
    keyFacts: [
      'Comprehensive school covers grades 1 to 9 and usually ages 7 to 16.',
      'Teaching, learning materials, a daily meal and school health services are free.',
      'Newcomers who need Finnish or Swedish can receive preparatory education for up to one calendar year.',
      'Wilma is the everyday channel for absences, messages, schedules and school information.',
    ],
    sections: [
      {
        title: 'Your local school and other options',
        paragraphs: [
          'The City assigns a local school according to the child’s address. It is the simplest route and often means classmates live nearby. Families can also apply to language-focused, bilingual or English education, but admissions and tests differ. Continuous admission to English basic education is mainly for children whose previous education has been fully in English and includes a language assessment.',
          'Private and international schools set their own admissions and may charge fees. Check the actual school rules rather than assuming “international” means the same thing everywhere.',
        ],
      },
      {
        title: 'Preparatory education for a newly arrived child',
        paragraphs: [
          'Preparatory education builds Finnish or Swedish while keeping a child moving in other subjects. In Helsinki, younger pupils are normally placed in a nearby school. Older pupils may join a dedicated preparatory group elsewhere. The programme can last up to one calendar year, and the child gradually joins mainstream lessons where it makes sense.',
          'For pupils aged 9 to 16, placement after an application may take several weeks. If you are arriving during the school year, contact the City’s education guidance early and share school reports from the previous country. They do not need to look Finnish to be useful.',
        ],
      },
      {
        title: 'Wilma and the daily rhythm',
        paragraphs: [
          'Wilma is where guardians read announcements, message teachers, report absences and follow school matters. Guardians normally create an account using strong identification through Suomi.fi. If that is not possible, the school office can help create access another way.',
          'School days are often shorter than families from abroad expect, particularly in the early grades. Children may finish at different times on different days. Morning and afternoon activities are available for younger pupils, but places and fees are separate from the school place, so apply by the stated deadline.',
        ],
      },
      {
        title: 'Support is part of school, not a last resort',
        paragraphs: [
          'Teachers can arrange learning support within ordinary school life. Schools also have nurses, psychologists and social workers. A school social worker can help with attendance, friendships, bullying, family changes or a child who is simply not coping. Contact can begin through Wilma or by phone and is confidential.',
          'Ask the teacher how your child’s Finnish is developing and how home languages can be supported. Do not wait for a formal problem meeting if something feels off. Early, ordinary conversations are how the system is meant to work.',
        ],
      },
    ],
    insiderTips: [
      'Wilma notifications can become a blizzard. Set a routine to check them rather than relying only on email previews.',
      'Ask what children actually need to bring. In comprehensive school, books, materials and lunch are generally provided.',
      'Keep the home language alive. Strong literacy in any language helps a child build new languages and stay connected to family.',
      'If your child is struggling socially, the school social worker is a sensible early contact, not an escalation or punishment.',
    ],
    resources: [
      { title: 'Schools for children in Helsinki', description: 'Local, preparatory, English, bilingual and private routes in one place.', url: 'https://www.hel.fi/en/childhood-and-education/welcome-helsinki-daycare-and-schools/schools-for-children-in-helsinki', source: 'City of Helsinki' },
      { title: 'Preparatory education', description: 'Current age groups, applications and how newcomer teaching works.', url: 'https://www.hel.fi/en/childhood-and-education/comprehensive-education/enrolling-and-applying-to-school/preparatory-education', source: 'City of Helsinki' },
      { title: 'School day and practical matters', description: 'Wilma, meals, absences, school travel and daily routines.', url: 'https://www.hel.fi/en/childhood-and-education/comprehensive-education/comprehensive-school-studies/school-day-and-practical-matters', source: 'City of Helsinki' },
      { title: 'School social worker and psychologist', description: 'Who can help and how a parent or pupil can make contact.', url: 'https://www.hel.fi/en/childhood-and-education/comprehensive-education/support-for-learning-and-wellbeing/school-social-worker-and-psychologist-services', source: 'City of Helsinki' },
    ],
  },
  {
    slug: 'teenagers-and-next-steps',
    number: '05',
    label: 'Teenagers',
    title: 'Teenagers, upper secondary choices and somewhere to ask',
    summary: 'Lukio, vocational school, TUVA, student health and the free youth services that can help untangle the next step.',
    goodFor: 'Families with teenagers approaching the end of comprehensive school or arriving during the upper secondary years.',
    intro: [
      'The jump after grade nine can feel bigger when the family did not grow up with Finnish school words. The two main paths are general upper secondary school, usually called lukio, and vocational education, often called ammattikoulu or simply amis. Both can lead onwards to higher education.',
      'Compulsory education continues until 18, but that does not mean every teenager must already have a perfect career plan at 15. TUVA gives young people time to strengthen Finnish, study skills or grades and work out which path fits.',
    ],
    keyFacts: [
      'After grade nine, the main paths are general upper secondary or vocational education.',
      'Compulsory education normally continues until age 18.',
      'TUVA is preparatory education for young people who need more time, language or direction.',
      'Ohjaamo gives free walk-in help to people aged 15 to 29.',
    ],
    sections: [
      {
        title: 'Lukio and vocational education',
        paragraphs: [
          'Lukio is academic and prepares students for the matriculation examination. Vocational education combines practical skills, workplace learning and general studies. One is not the clever route and the other the lesser route. They suit different learners and both can open further-study doors.',
          'Applications normally run through the national Studyinfo service. English-language options exist, but the selection is smaller. Speak with the school guidance counsellor early if Finnish grades need to be compared with studies abroad.',
        ],
      },
      {
        title: 'When a young person is not ready for either',
        paragraphs: [
          'TUVA can last up to 38 weeks. Students can improve Finnish, digital skills, study routines and grades while exploring upper secondary options. For a newcomer teenager, that breathing room can be far more useful than being pushed straight into a programme they barely understand.',
          'The current school, Helsinki education guidance or Ohjaamo can help work out whether TUVA is the right bridge.',
        ],
      },
      {
        title: 'Health, privacy and asking for help',
        paragraphs: [
          'Upper secondary students use student health services. Teenagers can also contact school or student psychologists, social workers and nurses. As children grow, their right to confidential healthcare grows too. Parents may see less detail in Maisa or MyKanta when a professional considers the young person able to decide about that care.',
          'That shift can surprise internationally minded families. It is worth talking about privacy before it suddenly appears as a missing record. A teenager being able to ask for help safely is a feature of the system, not a family being shut out.',
        ],
      },
      {
        title: 'Ohjaamo is the useful door to remember',
        paragraphs: [
          'Ohjaamo Helsinki is a free, low-threshold service for ages 15 to 29. A young person can walk in with questions about study, work, housing, money, health or relationships. They do not need to know which department owns the problem first.',
          'That makes it particularly helpful for a family new to Finnish bureaucracy. It is somewhere to begin, not another form you must perfectly complete.',
        ],
      },
    ],
    insiderTips: [
      'Learn the words lukio, amis and TUVA. Teenagers and schools use the short versions constantly.',
      'Use Studyinfo for official application details, but use a guidance counsellor to interpret which route makes sense for one actual young person.',
      'Let the teenager attend an open day. Course names rarely show what a Finnish school day really feels like.',
      'Ohjaamo is useful before a crisis. You do not need a referral or a beautifully organised question.',
    ],
    resources: [
      { title: 'Schools for teens in Helsinki', description: 'The City’s overview of upper secondary routes and compulsory education.', url: 'https://www.hel.fi/en/childhood-and-education/welcome-helsinki-daycare-and-schools/schools-for-teens-in-helsinki', source: 'City of Helsinki' },
      { title: 'TUVA preparatory education', description: 'What the programme covers and how to apply.', url: 'https://www.hel.fi/en/childhood-and-education/tuva-training-preparatory-education-for-an-upper-secondary-qualification', source: 'City of Helsinki' },
      { title: 'Ohjaamo Helsinki', description: 'Free walk-in guidance for people aged 15 to 29.', url: 'https://nuorten.hel.fi/en/studies-and-work/ohjaamo-helsinki/', source: 'City of Helsinki' },
      { title: 'Studyinfo', description: 'The national home for education information and applications.', url: 'https://opintopolku.fi/konfo/en/', source: 'Finnish National Agency for Education' },
    ],
  },
  {
    slug: 'benefits-and-family-money',
    number: '06',
    label: 'Kela & money',
    title: 'Family benefits without guessing what you qualify for',
    summary: 'Child benefit, parental leave, the maternity package and the important fact that moving here does not make everything automatic.',
    goodFor: 'New arrivals, expectant parents and families whose work, care or household situation is changing.',
    intro: [
      'Finland has strong family benefits, but the system is not a welcome hamper that appears automatically when you unpack. Eligibility can depend on whether Kela considers you permanently resident, your work, your permit and your family situation. Most benefits also require an application.',
      'The safest habit is to check the current Kela page for your exact situation rather than using somebody else’s old payment amount. Rules, index changes and application deadlines move. Your family details matter more than a confident comment in a Facebook group.',
    ],
    keyFacts: [
      'Tell Kela when you move to Finland and ask for an eligibility decision where needed.',
      'Child benefit is generally for children under 17, but it is not simply assumed.',
      'Child benefit can normally be backdated only for a limited period.',
      'Pregnancy and parental allowances, the maternity package and child care allowances each have separate applications and conditions.',
    ],
    sections: [
      {
        title: 'Start with Kela eligibility',
        paragraphs: [
          'Kela looks at whether your move is permanent and, in some cases, whether you work in Finland or are covered as a family member. Citizenship alone is not the deciding factor. Complete the move notification and benefit applications with accurate dates, work information and family relationships.',
          'Keep copies of decisions and read the reasoning, not just the amount. If something looks wrong, contact Kela quickly. Decisions explain how to request a review and the deadline for doing so.',
        ],
      },
      {
        title: 'The main benefits families meet',
        paragraphs: [
          'Child benefit is paid for children under 17 and has a single-parent supplement where the conditions are met. During pregnancy and early parenthood, Kela handles pregnancy allowance, parental allowance and the choice between the maternity package and a cash benefit. Families caring for a child at home or using private daycare may encounter child home care or private day care allowances.',
          'There may also be general housing allowance, sickness-related support or social assistance depending on the household. Do not assume one benefit application automatically checks all the others.',
        ],
      },
      {
        title: 'Parental leave as two separate plans',
        paragraphs: [
          'Each parent has their own parental allowance entitlement, with a limited number of days that can be transferred. Leave from work and money from Kela are connected but are not the same request. Agree dates with the employer and apply to Kela in the required window.',
          'For international families, check how work abroad, a parent living elsewhere or a recent move affects the application. Those details are normal for Kela, but they may require more evidence.',
        ],
      },
      {
        title: 'Keep the admin boring and organised',
        paragraphs: [
          'Create one shared list of application dates, decisions and requested attachments. Save documents with useful names. When Kela asks for more information, reply inside OmaKela by the deadline even if the answer is “this document does not exist in my previous country”. Silence is much harder for a caseworker to interpret.',
          'Kela offers service in English. If the online application does not fit a cross-border situation, ask rather than forcing the closest wrong answer.',
        ],
      },
    ],
    insiderTips: [
      'Apply for child benefit promptly. Backdating is limited, so waiting can cost real money.',
      'A daycare fee decision uses income information too. Kela and the City are separate, so do not assume one has already told the other.',
      'Check Kela’s annual “changes to benefits” summary each January if your household relies on several payments.',
      'Treat every requested attachment like part of the application, not an optional extra.',
    ],
    resources: [
      { title: 'Benefits for families', description: 'Kela’s main route to pregnancy, parental and child-related support.', url: 'https://www.kela.fi/families', source: 'Kela' },
      { title: 'Can you get benefits after moving?', description: 'How residence, work and family relationships affect coverage.', url: 'https://www.kela.fi/can-you-get-benefits-when-you-move-to-finland', source: 'Kela' },
      { title: 'Child benefit', description: 'Who can receive it, how to apply and the backdating rule.', url: 'https://www.kela.fi/child-benefit', source: 'Kela' },
      { title: 'Pregnancy and parental leave', description: 'Allowance days, transferring days and application routes.', url: 'https://www.kela.fi/on-parental-leave', source: 'Kela' },
    ],
  },
  {
    slug: 'social-services-and-family-support',
    number: '07',
    label: 'Support at home',
    title: 'Getting family support before everything falls apart',
    summary: 'Family centres, counselling, home services and social work, with none of the scary assumptions people bring from elsewhere.',
    goodFor: 'Parents dealing with exhaustion, conflict, illness, behaviour, money stress or a family situation that is simply too much.',
    intro: [
      'The words “social services” can sound frightening if they meant punishment or shame where you grew up. In Helsinki, a large part of family social services is early, practical support. You are allowed to ask while the problem is still small enough to describe without crying in a supermarket car park.',
      'Family centres bring several services together. Staff can help work out whether you need a social counsellor, family counselling, home help, support for a child’s development or something else. You do not have to diagnose the whole household before making contact.',
    ],
    keyFacts: [
      'Families can contact support services themselves. A referral is not always needed.',
      'Family counselling and family social work cover ordinary but difficult family situations.',
      'Home services can provide practical help when strain, illness or another situation affects daily life.',
      'Speech, development and disability support can begin through neuvola, school or a family service contact.',
    ],
    sections: [
      {
        title: 'What family social work actually helps with',
        paragraphs: [
          'Family social work can help when parenting is exhausting, a child’s behaviour is hard to manage, illness changes daily life, family conflict keeps repeating or a teenager is struggling. Support may include family work, home services, a support person or help coordinating other services.',
          'The aim is to make daily life safer and more workable. Asking for support does not automatically mean child welfare placement. Child welfare itself also begins with assessing what support could help a child and family.',
        ],
      },
      {
        title: 'Family counselling and relationship support',
        paragraphs: [
          'The family counselling clinic supports families with parenting, a child’s behaviour or development, family interaction and difficult changes. Couples and separating parents can also find support through City and community organisations.',
          'Familia is particularly good for intercultural relationships because cultural expectations, language and migration can all sit inside the same disagreement. Their counselling is short-term, free and available in English and other languages.',
        ],
      },
      {
        title: 'Development, speech and disability services',
        paragraphs: [
          'If you are concerned about speech, movement, behaviour or development, begin with neuvola for a young child or school health and pupil welfare for a school-aged child. They can assess the situation and make referrals. Helsinki speech therapy for children is free and can arrange an interpreter when needed.',
          'Disability services can support children and families at different stages. The system may involve assessments and documents, so ask who is coordinating the process and what happens next. You should not have to hold five services together from memory.',
        ],
      },
      {
        title: 'Make the first message simple',
        paragraphs: [
          'You do not need formal Finnish or a dramatic summary. Say what is happening, how long it has been happening, how it affects the child or adults, and what would make the next week safer or easier. Ask for service in English or an interpreter.',
          'If you are bounced between services, write down the names, dates and promised next step. Ask directly: “Who owns this now, and when should I hear back?” That sentence is useful in almost every public system.',
        ],
      },
    ],
    insiderTips: [
      'Use the phrase “we need early support”. It describes exactly what many family services are there to provide.',
      'Tell the truth about sleep and exhaustion. Professionals cannot help with the version of home life edited for politeness.',
      'Ask whether one person can coordinate when several services are involved.',
      'If language is blocking a meaningful conversation, request an interpreter at the time the appointment is arranged.',
    ],
    resources: [
      { title: 'Support for children and families', description: 'The City’s overview of early support, family life, development and difficult situations.', url: 'https://www.hel.fi/en/health-and-social-services/child-and-family-services/support-for-children-young-people-and-families', source: 'City of Helsinki' },
      { title: 'Family social work', description: 'Who it is for and the kinds of practical support available.', url: 'https://www.hel.fi/en/health-and-social-services/child-and-family-services/support-for-children-young-people-and-families/support-for-parenting-and-daily-life-in-a-family/family-social-work', source: 'City of Helsinki' },
      { title: 'Family counselling clinic', description: 'Help with parenting, behaviour, relationships and family changes.', url: 'https://www.hel.fi/en/health-and-social-services/child-and-family-services/support-for-children-young-people-and-families/early-support-social-services/family-counselling-clinic', source: 'City of Helsinki' },
      { title: 'Child welfare explained', description: 'A calm English explanation of its purpose and how families can ask for help.', url: 'https://www.infofinland.fi/en/family/children/child-welfare', source: 'InfoFinland' },
    ],
  },
  {
    slug: 'community-and-support-groups',
    number: '08',
    label: 'People & community',
    title: 'Finding your people when family is an ocean away',
    summary: 'Free family houses, parent groups, intercultural support and low-pressure places where both adults and children can connect.',
    goodFor: 'Families looking for company, peer support, familiar languages or somewhere free to go on a long weekday.',
    intro: [
      'Moving with children can be strangely lonely. The children have school or daycare, one adult may have work, and the other can spend weeks having deep conversations only with a self-checkout. Finland has plenty of family activities, but they are often hidden behind organisation names a newcomer would never think to search.',
      'The easiest starts are Helsinki’s playgrounds and family houses, MLL Family Cafes and Familia’s intercultural groups. Most are free, and many do not need registration. You can arrive without already knowing someone, which is rather the point.',
    ],
    keyFacts: [
      'Helsinki has dozens of playgrounds and family houses with free weekday activities.',
      'MLL Family Cafes are free and informal, with hundreds running around Finland.',
      'Familia supports intercultural couples, parents and families in English and other languages.',
      'Community counselling and befriending are available before loneliness becomes a crisis.',
    ],
    sections: [
      {
        title: 'Playgrounds and family houses',
        paragraphs: [
          'Helsinki playgrounds are more than a swing set. Staffed playgrounds and family houses run baby mornings, indoor activities, parent meetups and seasonal programmes. Much of it is free and open without registration. The City’s finder lists locations across Helsinki, so start with the one close enough to become part of an ordinary week.',
          'Some playgrounds also run free clubs for children who are not in full-time early childhood education. Activities and languages differ, so check the local schedule rather than judging the whole network by one visit.',
        ],
      },
      {
        title: 'MLL Family Cafes and FamilyNet',
        paragraphs: [
          'MLL Family Cafes are relaxed, volunteer-supported meetups where adults can talk and children can play. The main language is often Finnish, but plenty of cafes are multilingual in practice. FamilyNet in Uusimaa runs activities aimed specifically at international and multilingual families, including language cafes and parent meetups.',
          'Do not worry about arriving halfway through or missing a week. These are drop-in spaces, not a parenting course with attendance marks.',
        ],
      },
      {
        title: 'Intercultural family support',
        paragraphs: [
          'Familia understands the very specific mixture of love, language, relatives, identity and bureaucracy that can come with an intercultural family. It offers peer groups, family training, relationship advice and activities in English and other languages. There are groups for fathers, parents, families living through separation and people trying to raise multilingual children.',
          'This can be useful even when the relationship is good. Having somewhere to say “our families assume completely different things about Christmas” can save a surprisingly large argument.',
        ],
      },
      {
        title: 'When what you need is one steady person',
        paragraphs: [
          'HelsinkiMissio offers family befriending, an open living room and counselling. Its Sörnäinen services include free, confidential English-language support. These are useful when the missing piece is not another official appointment, but regular human contact.',
          'If you find a group that helps, ask the organiser what else runs nearby. Finland’s community network is full of good small projects with terrible search visibility.',
        ],
      },
    ],
    insiderTips: [
      'Try the nearest group twice. The first visit can feel awkward simply because everybody else already knows where the coffee cups live.',
      'Ask whether WhatsApp or another informal group exists. The real updates often happen there after the official session.',
      'A Finnish-language family cafe can still be a good place to meet internationally minded locals.',
      'City playground staff know the neighbourhood and are often brilliant at pointing families towards other free activities.',
    ],
    resources: [
      { title: 'Playground and family-house activities', description: 'Free baby mornings, parent activities and local programmes.', url: 'https://www.hel.fi/en/childhood-and-education/playgrounds-and-family-houses/activities-at-playgrounds-and-family-houses', source: 'City of Helsinki' },
      { title: 'Find a playground or family house', description: 'Search locations across Helsinki.', url: 'https://www.hel.fi/en/childhood-and-education/playgrounds-and-family-houses/find-playgrounds-and-family-houses', source: 'City of Helsinki' },
      { title: 'MLL Family Cafes', description: 'Free low-pressure meetups for families around Finland.', url: 'https://www.mll.fi/en/for-families/family-cafes/', source: 'Mannerheim League for Child Welfare' },
      { title: 'Familia advice and support', description: 'English and multilingual counselling for intercultural families.', url: 'https://www.familiary.fi/adviceandsupport.html', source: 'Familia' },
      { title: 'HelsinkiMissio for families', description: 'Befriending, open living rooms and counselling.', url: 'https://www.helsinkimissio.fi/en/for-families/', source: 'HelsinkiMissio' },
    ],
  },
  {
    slug: 'urgent-help-and-safety',
    number: '09',
    label: 'Urgent help',
    title: 'Who to call when your family needs help now',
    summary: 'The numbers worth saving, where children go in an emergency, and confidential help for violence, crisis or unsafe home life.',
    goodFor: 'Every family. Save the numbers now, then hopefully leave this guide untouched.',
    intro: [
      'An emergency is a rotten time to learn which Finnish number does what. The short version is 112 when life, health or safety is in immediate danger. For urgent medical problems that cannot wait but are not immediately life-threatening, call the Medical Helpline on 116 117 before heading to emergency care.',
      'Help is also available when the danger is at home. Domestic violence services are for physical violence, threats, coercion and controlling behaviour. Shelters are free, do not need a referral and can be used regardless of gender, nationality or home municipality.',
    ],
    keyFacts: [
      '112 is for an immediate danger to life, health, property or the environment.',
      '116 117 gives urgent medical advice before emergency care.',
      'Poison Information Centre: 0800 147 111.',
      'Nollalinja: 116 016, free and anonymous, 24 hours a day.',
    ],
    sections: [
      {
        title: 'Medical emergencies',
        paragraphs: [
          'Call 112 for severe breathing difficulty, unconsciousness, a serious accident, heavy bleeding, suspected stroke or another immediate threat. Tell the operator where you are, what happened and who is affected. Follow their questions and do not hang up until told to do so.',
          'For urgent illness or injury that cannot wait until the health station opens, call 116 117. The nurse assesses what should happen next and can direct you to the right emergency department. Children under 16 needing emergency hospital care in Helsinki are generally treated at the New Children’s Hospital, but call first unless the situation is life-threatening.',
        ],
      },
      {
        title: 'Poisoning and medicines',
        paragraphs: [
          'Call the Poison Information Centre on 0800 147 111 for advice about a suspected poisoning. Have the product, medicine packet or a photo nearby. If the person is unconscious, having seizures, struggling to breathe or otherwise in immediate danger, call 112.',
          'Store medicines and nicotine products well away from children. Finnish child-resistant packaging is helpful, not magic.',
        ],
      },
      {
        title: 'Violence, threats or an unsafe home',
        paragraphs: [
          'Nollalinja provides free, anonymous help around the clock on 116 016. It serves in English, Finnish and Swedish and can arrange interpretation in additional languages. You can call if you are experiencing violence or are worried about somebody close to you.',
          'Shelters are free and open without a referral. You can go to any shelter with children. Staff can help with practical safety and the next steps. If it is unsafe to research from your own device, use a trusted person’s phone or a public device and clear the browsing history where appropriate.',
        ],
      },
      {
        title: 'Mental health and family crisis',
        paragraphs: [
          'If somebody may harm themselves or another person, call 112. Helsinki’s crisis emergency service is available around the clock for acute crisis situations. MIELI ended its English phone helpline in March 2026, but now offers free English crisis chat, email and bookable remote appointments by video or phone.',
          'You do not need to decide whether something is “bad enough” before calling for advice. Describe what is happening and let the service help assess the urgency.',
        ],
      },
    ],
    insiderTips: [
      'Save 112, 116 117 and the Poison Information Centre in both adults’ phones.',
      'Teach older children their home address and how to call 112.',
      'The 112 Suomi app can send your location automatically when you call through it.',
      'A shelter does not require a police report, referral or money.',
    ],
    resources: [
      { title: 'Urgent and emergency care', description: 'Helsinki’s official guide to 112, 116 117 and emergency departments.', url: 'https://www.hel.fi/en/health-and-social-services/health-care/urgent-and-emergency-care', source: 'City of Helsinki' },
      { title: 'Medical Helpline 116 117', description: 'HUS instructions for urgent medical problems.', url: 'https://www.hus.fi/en/patient/hospitals-and-other-units/medical-helpline-116117', source: 'HUS' },
      { title: 'Nollalinja', description: 'Free, anonymous, round-the-clock help for domestic violence and threats.', url: 'https://nollalinja.fi/en/about-nollalinja/', source: 'Nollalinja' },
      { title: 'Shelter questions answered', description: 'Who can go, what it costs, children, interpreters and pets.', url: 'https://nollalinja.fi/en/frequently-asked-questions-about-shelters/', source: 'Nollalinja' },
      { title: 'MIELI support in English', description: 'Free crisis chat, email and bookable remote appointments by video or phone.', url: 'https://mieli.fi/en/support-and-help/', source: 'MIELI Mental Health Finland' },
    ],
  },
]

export const familySystems = [
  { name: 'Maisa', label: 'Helsinki health admin', description: 'Appointments, messages, results, neuvola, dental care and proxy access.', url: 'https://www.maisa.fi/' },
  { name: 'MyKanta', label: 'National health record', description: 'Prescriptions and patient information from public and private care around Finland.', url: 'https://www.kanta.fi/en/mykanta' },
  { name: 'Wilma', label: 'School life', description: 'School messages, absences, schedules and contact with teachers.', url: 'https://www.hel.fi/en/childhood-and-education/comprehensive-education/comprehensive-school-studies/school-day-and-practical-matters' },
  { name: 'Edlevo', label: 'Daycare life', description: 'Applications, decisions, income details, absences and growing day-to-day communication.', url: 'https://www.hel.fi/en/childhood-and-education/early-childhood-education/e-service-and-contact-information/e-service' },
] as const

export function getFamilyGuide(slug: string) {
  return familyGuides.find((guide) => guide.slug === slug)
}
