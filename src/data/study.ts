import type { EditorialGuide } from './editorial-guide'

export type StudyProvider = {
  name: string
  type: 'University' | 'University of applied sciences' | 'Vocational college'
  area: string
  note: string
  url: string
}

export const studyGuides: EditorialGuide[] = [
  {
    slug: 'choosing-the-right-study-route',
    number: '01',
    label: 'Start here',
    tags: ['Studyinfo', 'Qualifications', 'Adult learners'],
    title: 'Choosing a study route without getting lost in Finnish school names',
    summary: 'Universities, UAS, vocational qualifications, integration training and open studies, translated into normal language.',
    goodFor: 'Anyone who knows they want to study but is not yet sure which Finnish route matches the job, qualification or life they already have.',
    intro: [
      'Finland has a lot of education, but the names do not always help. A university and a university of applied sciences are both higher education. Vocational education can be for a teenager leaving school or an adult changing careers. Integration training can include language and working-life skills, but it is not the same thing as enrolling in a degree.',
      'The best starting question is not “which school is best?” It is “what do I need at the end?” A recognised qualification, a route into a particular job, Finnish for working life, a few missing skills or simply the chance to test a subject all lead to different doors.',
    ],
    keyFacts: [
      'Studyinfo is the national place to compare programmes and check how each application works.',
      'Universities are research-led. Universities of applied sciences are more professionally and practically focused.',
      'Vocational education can lead to a full qualification or let you complete only the parts your work requires.',
      'Open university and open UAS courses usually welcome anyone, but they do not automatically make you a degree student.',
    ],
    sections: [
      {
        title: 'If you want a degree',
        paragraphs: [
          'Look at universities and universities of applied sciences. Universities are the natural home for academic subjects, research and careers where a particular university degree is required. A university bachelor’s degree normally leads into a master’s route. A UAS degree is built closer to working life and includes practical training. Fields such as business, nursing, engineering, hospitality and social services are strongly represented.',
          'Do not decide from the English programme title alone. Open the curriculum, check where graduates work, read the admission method and confirm whether the qualification leads to the profession you have in mind. In regulated fields, a degree and the right to practise are separate questions.',
        ],
      },
      {
        title: 'If you want a job skill or a new trade',
        paragraphs: [
          'Vocational education is often the more direct route. It is practical, flexible and available to adults as well as school-leavers. Your existing skills are recorded in a personal competence development plan, called a HOKS, so you should not have to repeat everything you already know. Learning can happen at college, online and in a real workplace.',
          'This route covers far more than traditional trades. Business, ICT, health, restaurants, beauty, logistics and services all sit inside vocational education. Language requirements vary by course, and the school can test whether your Finnish, Swedish or English is strong enough for safe study and workplace learning.',
        ],
      },
      {
        title: 'If Finnish is the thing blocking the next step',
        paragraphs: [
          'Ask about integration training, labour-market language training, preparatory education or a programme that combines Finnish with a professional field. Integration training is usually arranged through your municipality’s employment or integration services after an assessment and integration plan. You are not normally choosing a random school from a national list and sending them an application.',
          'Some universities of applied sciences also run preparatory studies for immigrants, while TUVA can help people build language and study skills before upper-secondary vocational education. The useful route depends on your age, previous education, employment status and current Finnish level.',
        ],
      },
      {
        title: 'If you want to test the water first',
        paragraphs: [
          'Open university, open UAS, summer university and MOOCs let you study without first winning a degree place. This is good for testing a subject, updating professional knowledge or building credits towards an open-path application. Courses can still have prerequisites, schedules and fees, so “open” means open access rather than unlimited free study.',
          'If you need a residence permit specifically for study, be careful with online and open routes. A course that mainly consists of distance learning and does not require you to live in Finland is not normally a basis for a Finnish study residence permit.',
        ],
      },
    ],
    insiderTips: [
      'Search Studyinfo by the qualification you want, then use teaching language and location as filters. Starting with a school name hides good options.',
      'Write to admissions with your actual certificates attached or clearly listed. “Can I apply?” gets a better answer when they can see the qualification.',
      'Ask what language is used during workplace placements, not only in the classroom.',
      'If you already hold a foreign degree, speak with a SIMHE guidance service before beginning another full degree from scratch.',
    ],
    resources: [
      { title: 'Studyinfo', description: 'National programme search, application routes and admission details.', url: 'https://opintopolku.fi/konfo/en/', source: 'Finnish National Agency for Education' },
      { title: 'The Finnish education system', description: 'The official map from early education through vocational and higher education.', url: 'https://www.oph.fi/en/education-system', source: 'Finnish National Agency for Education' },
      { title: 'Education in Finland', description: 'Clear multilingual explanations of every main study route.', url: 'https://www.infofinland.fi/en/education', source: 'InfoFinland' },
      { title: 'Using a foreign diploma or degree in Finland', description: 'Recognition, regulated professions and where previous study may need an official decision.', url: 'https://www.infofinland.fi/en/work-and-enterprise/finnish-working-life/foreign-diploma-or-degree-in-finland', source: 'InfoFinland' },
    ],
  },
  {
    slug: 'universities-and-universities-of-applied-sciences',
    number: '02',
    label: 'Higher education',
    tags: ['University', 'UAS', 'Applications'],
    title: 'Universities, UAS and the application calendar that moves quickly',
    summary: 'How academic and practical degrees differ, where English programmes live and what to check before pressing apply.',
    goodFor: 'People comparing bachelor’s, master’s or doctoral study and anyone trying to understand the difference between a university and an ammattikorkeakoulu.',
    intro: [
      'Finland has two kinds of higher education institution. Universities are built around academic research. Universities of applied sciences, usually shortened to UAS or AMK, are built around professional practice. Neither is a second-rate version of the other. They are designed for different jobs.',
      'The application can be deceptively short. Some English-taught programmes use a January joint application, while others have their own dates, exams, portfolios or rolling admissions. The programme page in Studyinfo is the source that matters for that exact course and year.',
    ],
    keyFacts: [
      'A university bachelor’s degree is normally about three years and a university master’s about two more.',
      'UAS bachelor’s degrees usually take about 3.5 to 4.5 years and include practical training.',
      'A UAS master’s normally requires a suitable higher education degree and relevant work experience after it.',
      'Admission can use certificates, entrance exams, assignments, interviews or an open-study route.',
    ],
    sections: [
      {
        title: 'University or UAS?',
        paragraphs: [
          'Choose a university when the subject is academic, research matters or the profession specifically requires a university degree. Choose a UAS when you want a course shaped closely around a profession, projects and workplace practice. Engineering and business exist in both systems, so compare the curriculum rather than relying on the subject name.',
          'A UAS qualification still gives eligibility for further higher education. The route may simply look different. Likewise, a university programme can be practical, but its structure and assessment usually sit closer to theory and research.',
        ],
      },
      {
        title: 'How applications actually work',
        paragraphs: [
          'Studyinfo shows whether a programme uses the national joint application or a separate application. A joint application lets you rank several choices on one form, but the rules and number of choices depend on the application. Separate applications can happen at entirely different times. Read the admission criteria from top to bottom before paying for translations or language tests.',
          'English-language UAS programmes often use the International UAS Exam, but not every course does. Universities may use certificate selection, entrance examinations, interviews, portfolios or course-specific assignments. A previous foreign qualification can provide eligibility if it gives access to higher education in the country where it was awarded.',
        ],
      },
      {
        title: 'Language and the hidden Finnish inside an English degree',
        paragraphs: [
          'An English-taught degree can still lead into a Finnish-speaking workplace. Nursing, social services, teaching and customer-facing fields are obvious examples. Check the language of placements and professional registration, and treat Finnish courses inside the degree as part of the career plan rather than an annoying extra.',
          'For a Finnish- or Swedish-taught programme, schools commonly expect strong independent study ability in that language and may ask for recognised proof. The exact certificate and score belong to the programme’s admission criteria.',
        ],
      },
      {
        title: 'You already have a degree from abroad',
        paragraphs: [
          'Do not assume you need to begin again. For an unregulated job, an employer can often assess your qualification directly. For a regulated profession or a role where Finnish law requires a certain degree, you may need a recognition decision or right to practise from the relevant authority.',
          'SIMHE services can help map previous higher education, identify bridging studies and explain realistic routes into Finnish higher education. That conversation can save years.',
        ],
      },
    ],
    insiderTips: [
      'Save the deadline in Helsinki time and submit before the final evening. Missing attachments can be as final as missing the form.',
      'Check whether document translations must be made by an authorised translator.',
      'Look at the course list and placements, not only the university’s marketing page.',
      'Apply for housing as soon as the study place is real. The August rush is not gentle.',
    ],
    resources: [
      { title: 'Bachelor’s and master’s admissions', description: 'Official overview for international higher education applicants.', url: 'https://www.studyinfinland.fi/admissions/bachelors-and-masters-admissions', source: 'Study in Finland' },
      { title: 'Applying for education and training', description: 'Joint applications, continuous applications and separate routes explained.', url: 'https://www.infofinland.fi/en/education/applying-for-education-and-training', source: 'InfoFinland' },
      { title: 'Universities of applied sciences', description: 'Practical degrees, language requirements, open UAS and master’s routes.', url: 'https://www.infofinland.fi/en/education/universities-of-applied-sciences', source: 'InfoFinland' },
      { title: 'Universities', description: 'Degree structure, open university and postgraduate study.', url: 'https://www.infofinland.fi/en/education/universities', source: 'InfoFinland' },
    ],
  },
  {
    slug: 'vocational-study-and-apprenticeships',
    number: '03',
    label: 'Practical routes',
    tags: ['Vocational', 'Apprenticeship', 'Career change'],
    title: 'Vocational study, apprenticeships and learning a job by doing it',
    summary: 'A practical route into trades, services, healthcare, business and technology, including what language and workplace learning really involve.',
    goodFor: 'Adults changing field, people who prefer practical learning and anyone who needs a Finnish qualification for working life.',
    intro: [
      'Vocational education in Finland is not only for teenagers and it is not limited to plumbing and carpentry. Adults use it to move into healthcare, ICT, logistics, restaurants, business, beauty, construction and dozens of other fields.',
      'The system is based on competence. At the beginning, the school creates a personal plan called a HOKS, recording what you already know and what you still need to demonstrate. That makes it one of the more sensible routes for somebody arriving with real work experience but without a Finnish certificate.',
    ],
    keyFacts: [
      'Continuous application means many vocational programmes accept applications outside the spring joint application.',
      'You can complete a whole qualification or selected qualification units.',
      'An apprenticeship is paid employment. A training agreement is workplace learning without an employment relationship or salary.',
      'Schools may assess language skills, commonly around B1 or B2 depending on the course and safety requirements.',
    ],
    sections: [
      {
        title: 'What the studying feels like',
        paragraphs: [
          'Vocational study combines college teaching, online work and real workplace learning. Competence is assessed through practical demonstrations in real tasks. The time needed depends on the qualification and what your HOKS recognises from earlier work and study.',
          'Ask exactly how much of the course happens at a workplace and who finds that placement. In a Finnish-taught programme, classroom support may be available, but the course is still professional education rather than a full-time language course.',
        ],
      },
      {
        title: 'Apprenticeship is a job first',
        paragraphs: [
          'An oppisopimus combines paid work with study. You need an employer, enough working hours and duties that cover the required competence. The employer pays a salary under the relevant collective agreement and a workplace instructor supports the learning.',
          'Schools and employment services can advise, but they do not magically hand every applicant an apprenticeship employer. A realistic approach is to speak with the vocational college, identify the required work and then approach employers with a clear explanation of how the arrangement works.',
        ],
      },
      {
        title: 'Continuous application versus joint application',
        paragraphs: [
          'The spring joint application mainly serves people finishing comprehensive school. Adults, career changers, people with an earlier qualification and apprenticeship applicants usually use continuous application. Each provider controls the dates and selection method for those places.',
          'Applications may include an interview, language assessment, suitability test or health requirements. Healthcare, transport and safety-critical fields can have additional conditions. The school’s current programme page has the final details.',
        ],
      },
      {
        title: 'TUVA and other bridges',
        paragraphs: [
          'TUVA prepares people for upper-secondary vocational education or general upper-secondary school. It can strengthen Finnish or Swedish, study skills and basic-education grades. It is particularly relevant to younger newcomers, but adults without an upper-secondary qualification may also find a suitable route.',
          'If you already have a profession, ask whether a full qualification is necessary. A smaller qualification unit, recognition process or short continuing-education course may get you where you need to go faster.',
        ],
      },
    ],
    insiderTips: [
      'Ask for a HOKS discussion that properly records overseas work experience, even when you cannot produce a perfect Finnish certificate for every skill.',
      'Find out the working language of placements before accepting the course.',
      'For an apprenticeship, approach employers with the college contact details ready. Make the arrangement easy to understand.',
      'A qualification taught in English may still lead to a workplace that expects Finnish. Start the job vocabulary early.',
    ],
    resources: [
      { title: 'Vocational education and training', description: 'Qualifications, competence demonstrations, language and workplace learning.', url: 'https://www.infofinland.fi/en/education/vocational-education-and-training', source: 'InfoFinland' },
      { title: 'Continuous application', description: 'Search current vocational programmes and provider-specific application routes.', url: 'https://opintopolku.fi/konfo/en/haku?order=desc&size=20&sort=score', source: 'Studyinfo' },
      { title: 'Apprenticeship training', description: 'How paid work and vocational study fit together.', url: 'https://oppisopimus.fi/en/', source: 'Finnish apprenticeship providers' },
      { title: 'TUVA and vocational education', description: 'The bridge into vocational or general upper-secondary education, plus current application routes.', url: 'https://www.infofinland.fi/en/education/vocational-education-and-training', source: 'InfoFinland' },
    ],
  },
  {
    slug: 'integration-training-and-finnish-for-working-life',
    number: '04',
    label: 'Integration study',
    tags: ['Finnish', 'Integration plan', 'Employment services'],
    title: 'Integration training, Finnish classes and the route nobody can simply self-enrol in',
    summary: 'What integration training teaches, who arranges it and how independent language study can sometimes fit an agreed plan.',
    goodFor: 'New residents who need Finnish, working-life knowledge and a clearer route into employment or further education.',
    intro: [
      'People often talk about “integration school” as if it were one college with a sign-up form. In reality, integration training is a service arranged through municipal employment or integration services. The provider can be a vocational college, adult education organisation or language school, but your route usually begins with an assessment and integration plan.',
      'A good course is broader than grammar. It can include Finnish or Swedish, working-life vocabulary, digital skills, Finnish society, career guidance and a workplace period. The frustrating part is that availability, timing and the assigned provider differ from person to person.',
    ],
    keyFacts: [
      'Start with your municipality’s employment or integration service, not by applying blindly to every course provider.',
      'Training is normally based on an assessment of language, education, work history and current goals.',
      'Integration training can include language, society, working-life skills and workplace learning.',
      'Independent study may sometimes be supported when it is agreed in your integration or employment plan before the course begins.',
    ],
    sections: [
      {
        title: 'How you enter the system',
        paragraphs: [
          'Register with the appropriate municipal employment or integration service and ask for an initial assessment. If integration services apply to you, a plan is created around language, work and study needs. The service can then direct you to training or agree another suitable route.',
          'Do not begin an expensive full-time course assuming it will later be accepted into the plan. Ask first and get the agreement recorded. Eligibility for unemployment benefits, expense allowance or supported independent study depends on the individual decision and current rules.',
        ],
      },
      {
        title: 'What happens inside a course',
        paragraphs: [
          'Courses commonly begin with a language assessment and place learners on different tracks. Alongside Finnish or Swedish, you may study job applications, workplace behaviour, public services, digital systems and everyday civic knowledge. Many courses include a workplace learning period.',
          'Progress is not identical for everybody. Literacy, previous schooling and professional goals matter. If the course level feels seriously wrong, raise it early with the teacher and the service responsible for your plan.',
        ],
      },
      {
        title: 'Independent and employment-focused options',
        paragraphs: [
          'Supported independent study can include language courses or other full-time education that advances integration and employment. It needs approval in the plan. Labour-market training may also combine Finnish with a field such as healthcare, cleaning, construction, hospitality or technology.',
          'If you are already working, evening courses at adult education centres, universities, vocational colleges and private schools may fit better. Our Learn Finnish hub covers those broader options. Integration training is one route, not the only legitimate way to learn.',
        ],
      },
      {
        title: 'What to ask when you are offered a place',
        paragraphs: [
          'Ask about the target language level, daily timetable, remote-study expectations, workplace period and how absences affect your plan or benefit. If childcare, health or shift work makes the schedule difficult, say so before the first missed week rather than disappearing.',
          'Also ask what comes next. A course should point towards work, vocational study, a higher language level or another concrete step. “More Finnish someday” is not much of a plan.',
        ],
      },
    ],
    insiderTips: [
      'Bring translated education and work certificates to the assessment if you have them.',
      'Ask for the target CEFR language level in writing. Course names alone can be vague.',
      'Treat the workplace period as a real networking opportunity, not only a compulsory week away from class.',
      'Keep copies of the plan and decisions. They make later conversations much easier.',
    ],
    resources: [
      { title: 'Integration and employment services in Helsinki', description: 'The city route for assessment, planning, work and integration support.', url: 'https://www.hel.fi/en/business-and-work/when-you-have-moved-to-finland', source: 'City of Helsinki' },
      { title: 'Studying Finnish', description: 'Integration training, independent study and other language-course routes.', url: 'https://www.infofinland.fi/en/finnish-and-swedish/studying-finnish', source: 'InfoFinland' },
      { title: 'Finnishcourses.fi', description: 'Current Finnish and Swedish courses across the Helsinki region and online.', url: 'https://finnishcourses.fi/', source: 'Helsinki region municipalities' },
      { title: 'Learn Finnish with Expats.fi', description: 'Free resources, courses, apps, listening and language cafés.', url: 'https://expats.fi/learn-finnish/', source: 'Expats.fi' },
    ],
  },
  {
    slug: 'open-university-online-and-flexible-study',
    number: '05',
    label: 'Flexible study',
    tags: ['Open university', 'Online', 'MOOCs'],
    title: 'Open university, online courses and studying around the life you already have',
    summary: 'Flexible ways to test a subject, collect credits or update skills without immediately committing to a full degree.',
    goodFor: 'People working full-time, parents, curious learners and anyone who wants evidence before committing to a new degree.',
    intro: [
      'Finland does not have one single “correspondence university” system. Instead, flexible study is spread across open universities, open universities of applied sciences, summer universities, adult education centres, MOOCs and degree programmes marked as online or blended learning.',
      'That variety is useful, but the words matter. An online course can earn official university credits without making you a degree student. An open path can create a route into a degree, but only when the institution has published that route and you meet its conditions.',
    ],
    keyFacts: [
      'Open university and open UAS study is generally available without a previous degree or entrance examination.',
      'Courses may be online, on campus or blended, and are often paid per course or credit.',
      'Open-study credits are real higher education credits, but admission to a degree is a separate process.',
      'Mainly online study that does not require presence in Finland is not normally grounds for a study residence permit.',
    ],
    sections: [
      {
        title: 'Open university and open UAS',
        paragraphs: [
          'Open university offers courses from a university curriculum. Open UAS does the same from a professionally focused UAS curriculum. You register directly with the provider, pay any course fee and study under the same academic requirements as the course describes.',
          'These routes are excellent for testing a subject, building current knowledge or showing recent Finnish study experience to an employer. They can also help somebody returning to education prove to themselves that the timing now works.',
        ],
      },
      {
        title: 'The open path into a degree',
        paragraphs: [
          'Some programmes reserve degree places for applicants who complete a defined set of open studies with the required grades. This is called an open path or pathway. The number of places, required credits and selection rules belong to that specific programme.',
          'Do not collect a random pile of courses and assume they will unlock admission. Find the published pathway first, then follow it precisely. Even when a path does not lead to admission, the completed credits may later be recognised, but that decision belongs to the receiving programme.',
        ],
      },
      {
        title: 'MOOCs and genuinely low-risk starts',
        paragraphs: [
          'MOOCs can be free to access and are useful for subjects such as programming, artificial intelligence, sustainability and university orientation. Some offer credits after registration and assessed work; others are learning resources without formal credit.',
          'Check the workload, assessment, identity requirements and whether credits are available to non-degree students. “Free course” and “free official credits” are not always the same promise.',
        ],
      },
      {
        title: 'Online degrees and the permit catch',
        paragraphs: [
          'Studyinfo lets you search for online and blended programmes, including some full degrees. Read how often campus attendance, examinations or workplace placements require you to be in Finland. A programme can be advertised as online while still containing local practical work.',
          'Migri states that studies mainly consisting of distance learning, with no need to stay in Finland, do not qualify for a study residence permit. If the permit is part of your plan, check the programme structure and the current Migri requirements before accepting the place.',
        ],
      },
    ],
    insiderTips: [
      'Begin with one properly assessed course before buying a large study package.',
      'Check the timetable, not only the word online. Live evening sessions can still clash with work or family life.',
      'If a degree is the goal, screenshot or save the pathway requirements for your application year.',
      'Ask your employer whether the course can be supported through working time or a professional-development budget.',
    ],
    resources: [
      { title: 'University of Helsinki Open University', description: 'Open courses, MOOCs, fees and degree-programme pathways.', url: 'https://www.helsinki.fi/en/admissions-and-education/open-university', source: 'University of Helsinki' },
      { title: 'Aalto Open University', description: 'Open business, technology, arts and language studies.', url: 'https://www.aalto.fi/en/aalto-university-open-university', source: 'Aalto University' },
      { title: 'Open UAS studies at Metropolia', description: 'Professional courses, paths and flexible study in the capital region.', url: 'https://www.metropolia.fi/en/academics/open-university', source: 'Metropolia UAS' },
      { title: 'Studying in Finland', description: 'Migri’s official explanation of when study requires residence in Finland.', url: 'https://migri.fi/en/studying-in-finland', source: 'Finnish Immigration Service' },
    ],
  },
  {
    slug: 'tuition-fees-permits-and-paying-for-study',
    number: '06',
    label: 'Money & permits',
    tags: ['Tuition', 'Residence permit', 'Kela'],
    title: 'When study is free, when it is not and what the residence permit changes',
    summary: 'A careful guide to tuition, open-study fees, scholarships, Kela and the money required for a student residence permit.',
    goodFor: 'Anyone planning a study budget, especially people from outside the EU and EEA or residents unsure whether their current permit changes the fees.',
    intro: [
      '“Education is free in Finland” is one of those sentences that is true often enough to cause trouble. Many Finnish and Swedish degree programmes do not charge tuition. Doctoral programmes do not charge tuition regardless of nationality. Integration and labour-market training can be free. Open studies can be inexpensive. But English-taught bachelor’s and master’s degrees normally charge tuition to students from outside the EU and EEA unless an exemption applies.',
      'Your nationality, residence status, programme language, degree level and reason for living in Finland all matter. Tuition, residence permits and Kela support are three separate decisions, so never let one school’s marketing sentence answer all three.',
    ],
    keyFacts: [
      'Non-EU and non-EEA students generally pay tuition for English-taught bachelor’s and master’s programmes.',
      'Study in Finland currently lists typical annual tuition of €8,000 to €20,000, depending on the programme.',
      'Doctoral programmes do not charge tuition, but doctoral students still need a realistic living-cost plan.',
      'Moving to Finland solely for study does not usually make a person eligible for Finnish student financial aid.',
    ],
    sections: [
      {
        title: 'The tuition question',
        paragraphs: [
          'Check the exact programme in Studyinfo and then read the institution’s fee and exemption page. Citizenship in the EU or EEA is one common route out of English-degree tuition, but residence permits and family-member statuses can also affect the answer. The document proving an exemption may need to remain valid at a particular point in the academic year.',
          'Scholarships are offered by institutions, not through one automatic Finnish government scheme for bachelor’s and master’s students. They may cover some or all tuition and can depend on academic progress. A tuition scholarship does not necessarily pay rent, food, transport or insurance.',
        ],
      },
      {
        title: 'Residence permit money and insurance',
        paragraphs: [
          'For studies longer than 90 days, a non-EU student normally needs a residence permit for studies. EU, Nordic, Liechtenstein and Swiss citizens follow different residence rules. Migri requires proof of sufficient funds and insurance, and a fee-paying student must also show how tuition will be covered.',
          'The official minimum can change, so use Migri’s current student guide rather than an old blog post. Study in Finland listed Migri’s minimum as €800 per month in June 2026 and advised budgeting more for real life. Helsinki rent can make the minimum feel extremely optimistic.',
        ],
      },
      {
        title: 'Kela is about your reason for being here',
        paragraphs: [
          'Finnish student aid is not automatically available because you have a Finnish address or study place. If you moved to Finland specifically to study, you generally cannot receive Finnish student financial aid. People living here permanently for another reason may qualify if the other conditions are met.',
          'Ask Kela for a decision based on your situation. Do not build a budget from a friend’s benefit, especially when their citizenship, family tie, work history or residence reason differs from yours.',
        ],
      },
      {
        title: 'The costs hiding around “free” study',
        paragraphs: [
          'Even without tuition, there can be application fees, student-union or healthcare fees, books, equipment, commuting and course materials. Open university and open UAS courses often charge fees. Vocational education may be tuition-free while particular tools, work clothing or certification costs still need checking.',
          'Make a twelve-month budget, not an academic-term budget. Include housing deposits, summer income gaps and the cost of travelling to workplace placements. Part-time work can help, but official guidance warns against relying on an uncertain student job to cover tuition and living costs.',
        ],
      },
    ],
    insiderTips: [
      'Ask the school to confirm tuition and your exemption in writing before accepting the place.',
      'Read scholarship renewal conditions. The first-year discount can look very different from the full degree cost.',
      'Budget for August before moving. Deposits, basic furniture and the first travel card tend to arrive together.',
      'Use Migri and Kela calculators and decisions, not social-media certainty.',
    ],
    resources: [
      { title: 'Fees and cost of living', description: 'Current tuition ranges, living-cost guidance, scholarships and student fees.', url: 'https://www.studyinfinland.fi/funding-your-studies/fees-and-cost-living', source: 'Study in Finland' },
      { title: 'Studying in Finland', description: 'Residence permit, funds, tuition, insurance and working during study.', url: 'https://migri.fi/en/studying-in-finland', source: 'Finnish Immigration Service' },
      { title: 'Financing your studies', description: 'Who may receive Kela aid, housing supplement, meal support and scholarships.', url: 'https://www.infofinland.fi/en/education/financing-your-studies', source: 'InfoFinland' },
      { title: 'Kela benefits for students', description: 'Current eligibility, amounts, income limits and applications.', url: 'https://www.kela.fi/students', source: 'Kela' },
    ],
  },
]

export const studyProviders: StudyProvider[] = [
  { name: 'University of Helsinki', type: 'University', area: 'Helsinki', note: 'Research university with English master’s, doctoral and selected bachelor’s routes, plus wide open-university study.', url: 'https://www.helsinki.fi/en/admissions-and-education' },
  { name: 'Aalto University', type: 'University', area: 'Espoo', note: 'Technology, business, arts and design, with an international Otaniemi campus and extensive open study.', url: 'https://www.aalto.fi/en/study-at-aalto' },
  { name: 'Hanken School of Economics', type: 'University', area: 'Helsinki', note: 'Business and economics in a Swedish-language university with English master’s and doctoral options.', url: 'https://www.hanken.fi/en/apply' },
  { name: 'University of the Arts Helsinki', type: 'University', area: 'Helsinki', note: 'Fine arts, music and theatre, with programme-specific auditions, portfolios and language requirements.', url: 'https://www.uniarts.fi/en/study-programmes/' },
  { name: 'Metropolia UAS', type: 'University of applied sciences', area: 'Helsinki region', note: 'A large practical institution covering technology, health, business, culture and social services.', url: 'https://www.metropolia.fi/en/academics' },
  { name: 'Haaga-Helia UAS', type: 'University of applied sciences', area: 'Helsinki', note: 'Business, hospitality, tourism, ICT, journalism and sport with several English degree routes.', url: 'https://www.haaga-helia.fi/en/education' },
  { name: 'Arcada UAS', type: 'University of applied sciences', area: 'Helsinki', note: 'A Swedish-language UAS with selected English programmes in business, technology, culture and health.', url: 'https://www.arcada.fi/en/study-arcada' },
  { name: 'Laurea UAS', type: 'University of applied sciences', area: 'Uusimaa', note: 'Business, security, social services, health and hospitality across several campuses around the capital region.', url: 'https://www.laurea.fi/en/degree_programmes/' },
  { name: 'Stadin AO', type: 'Vocational college', area: 'Helsinki', note: 'Helsinki’s large vocational college for young people and adults, with qualifications, apprenticeships and continuing study.', url: 'https://stadinao.hel.fi/en/' },
  { name: 'Omnia', type: 'Vocational college', area: 'Espoo', note: 'Vocational qualifications, adult learning, apprenticeships and integration-related education in Espoo.', url: 'https://www.omnia.fi/en' },
  { name: 'Varia', type: 'Vocational college', area: 'Vantaa', note: 'Practical vocational education and apprenticeship routes across a wide range of fields in Vantaa.', url: 'https://varia.vantaa.fi/en' },
  { name: 'Business College Helsinki', type: 'Vocational college', area: 'Helsinki', note: 'Business and ICT-focused vocational education, including selected English-language qualifications.', url: 'https://en.bc.fi/' },
]

export function getStudyGuide(slug: string) {
  return studyGuides.find((guide) => guide.slug === slug)
}
