export const NavLinks = [
    { href: '/work', key: 'recent projects', text: 'recent projects'},
    { href: '/skills', key: 'skills + certifications', text: 'skills + certifications'},
    { href: '/experience', key: 'career experience', text: 'career experience'},
   
];

export const socialMediaLnks = [
    { href: 'https://medium.com/@mpeterso', key: 'medium', text: 'medium', imageUrlBlk:"/icons-medium-blk.svg", imageUrlWt:"/icons-medium-white.svg"},
    { href: 'https://www.linkedin.com/in/matthewspeterson/', key: 'linkedin', text: 'linkedIn', imageUrlBlk:"/icons-linkedin-blk.svg", imageUrlWt:"/icons-linkedin-wt.svg"},
    { href: '/contact', key: 'contact', text: 'contact', network: 'email', imageUrlBlk:"/icons-mail-blk.svg",  imageUrlWt:"/icons-mail-wt.svg"},
]

export const heroWords = [
    "Value for Value Advocate",
    "Cybersecurity Enthusiast",
    "Analytical Thinker & Problem Solver",
    "Friendly & Effective Communicator",
    "Entrepreneurial Mindset & Nice Guy",
    "Detail-Oriented & Organized",
    "Innovative Solutions Advocate",
    "Cross-Functional Team Collaborator",
    "Adaptable, Easygoing Multitasker",
]


export const workExperience = [
    { title: "CyberNOW Education", imageUrl:"/cybernow-logo.svg", dates:"2024 - present", technology: ["/icons_html.svg", "/icons_css.svg", "icons_javascript.svg", "/icons_react.svg", "/icons_python.svg", "/icons_aws.svg", "/icons_gunicorn.svg", "/icons_nodejs.svg", "/icons_nextjs.svg", "/icons_flask.svg"], highlights:["Contributed to development of the book Jump-start Your SOC Analyst Career (2nd edition) and the online course Cybersecurity: Security Operations Center (SOC) Analyst NOW! Authored a chapter on cloud and cloud security.", "Completed Cyber NOW’s SOC analyst training course. ", "Provided graphic design services for the book scheduled for release in June 2024."] },
    { title: "Contract / Freelance", imageUrl:"/logo-blk.svg", dates:"2022 - present", technology: ["/icons_html.svg", "/icons_css.svg", "icons_javascript.svg", "/icons_react.svg", "/icons_python.svg", "/icons_aws.svg", "/icons_gunicorn.svg", "/icons_nodejs.svg", "/icons_nextjs.svg", "/icons_flask.svg"], highlights:["For a comic strip artist - Developed solutions to enable storage of comics in a Wasabi S3 bucket with CockroachDB and a ReactJS frontend. Wrote Python code to scrape the legacy WordPress site and add images/data to S3/Cockroach for display on the React site. The site would display the latest piece of art and enabled users to navigate through past comics, with updates automated via GitHub Actions. Deployed on Heroku.", "For an eCommerce provider - Automated Shopify inventory updating processes by accessing vendor FTP to pull real-time product inventory data. The solution updated Shopify inventory using scheduled GitHub Actions.", "Podcasting Solution - Wrote a podcast transcription tool using Whisper AI and Python in a Google Colab Jupyter Notebook. The tool created transcripts from mp3 files and formatted transcripts with timecodes in SRT format."] },
    { title: "JP Morgan Chase", imageUrl:"/logos_chase.svg", dates:"2015 - 2022", technology: ["/icons_word.svg", "/icons_excel.svg", "/icons_outlook.svg", "/icons_python.svg"], highlights:["Managed credit exposures within the Chase Corporate Liability portfolio.", "Conducting detailed financial statement analysis, evaluating business performance.",  "Interfaced with high-level stakeholders and assessed potential risks for financial decision making."] },
    { title: "Commercial Real Estate", imageUrl:"/logos_realestate.svg", dates:"2013 - 2015", technology: ["/icons_html.svg", "/icons_css.svg", "/icons_word.svg", "/icons_excel.svg", "/icons_outlook.svg"], highlights:["Oversaw the design, development, and management of the company website.", "Produced marketing materials such as videos, email newsletters, and flyers utilizing Adobe Creative Suite.", "Conducted due diligence for commercial real estate investments, and performed financial analyses using a discounted cash flow model."] },
]

export const projectSamples = [
    { title: "CyberNOW", imageUrl:"/projectImages/socnow.webp", githubUrl:"https://github.com", liveSiteUrl:"https://www.cybernoweducation.com/", description: "Contributed to Cyber NOW Education's mission to democratize cybersecurity learning by co-developing the Jump-start Your SOC Analyst Career book (2nd edition) and the Cybersecurity: SOC Analyst NOW! online course, authoring a chapter on cloud security. Completed the SOC analyst training course and provided graphic design for the book, set for a June 2024 release, showcasing a blend of technical expertise and creative skills."},
    { title: "SiteScan", imageUrl:"/projectImages/sitescan.webp", githubUrl:"https://github.com", liveSiteUrl:"https://jupplee.com/sitescan/", description: "SiteScan is a specialized tool that scans a website's robots.txt file for potential issues that could trigger a suspension by Google Ads. Users have the option to receive a detailed report outlining any compliance issues. Additionally, SiteScan offers further services for those needing extra assistance in resolving identified problems, ensuring full adherence to Google's advertising policies and maintaining a smooth online advertising experience."},
    { title: "LeadGen", imageUrl:"/projectImages/leadgen.webp", githubUrl:"https://github.com", liveSiteUrl:"https://jupplee.com/leadgen/index.html", description: "Leadgen is a landing page designed and developed using html, css and php in order to capture leads to provide SEO services to business owners. The site integrates with a backend database to store and allow for the export of leads to a csv file allowing the owner to manage marketing campaigns."},
    { title: "First $1M", imageUrl:"/projectImages/firstmillion.webp", githubUrl:"https://github.com", liveSiteUrl:"https://youtube.com/shorts/bEkOdCFRiEs", description: "This graphic was utilized in the growth marketing book for startups 'Your First Million' by Jonathan Martinez (https://www.yourfirst1million.com/). The graphic was utilized within the book and for social media posts. In addition, I also animated the artwork, taking the viewer through the main steps required for growth marketing succcess"},
    { title: "Capagenda", imageUrl:"/projectImages/capagenda.webp", githubUrl:"https://github.com", liveSiteUrl:"https://shop.capg.me/", description: "Capagenda is a print on demand ecommerce site built with wordpress and woocommerce in order to offer merchandise collaborations with the podcasters. The site successfully integrates multiple payment platforms and print on demand providers."},
    { title: "TunedZen", imageUrl:"/projectImages/tunedzen.webp", githubUrl:"https://github.com", liveSiteUrl:"http://tunedzen.com", description: "TunedZen is a simple website that showcases the outcomes of sophisticated asset trading analysis conducted using Python. It presents detailed bullish and bearish risk-reward estimations, offering valuable insights for traders and investors. The analyses on TunedZen are data-driven and rely on advanced Python algorithms to evaluate market trends and potential investment risks. (not updated regularly)"},
  /*   { title: "Radio V", imageUrl:"/projectImages/radiov.webp", githubUrl:"https://github.com", liveSiteUrl:"https://jimmyv4v.com/category/podcasts/", description: "Radio V is a collaboration with music recording artist Jimmy V growing awareness of 'the 2wo' a group of V4V artists and musicians utilizing the lightning network, podcasting 2.0 and streaming satoshis to turn the music industry upside down, pushing the boundaries of what is possible in podcasting."}, */

   ]