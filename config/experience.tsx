import { Link } from '@chakra-ui/react'

export type Company = 'Droniq' | 'GIA' | 'Amigo'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Droniq: {
    name: 'Droniq',
    longName: 'Droniq Gesellschaft mit beschränkter Haftung',
    subDetail: 'GmBH',
    url: 'https://droniq.de/',
    position: 'Software Engineer',
    duration: 'Apr 2024 - Present',
    logo: {
      light: '/worked_at_logos/droniq/Droniq_logo.png',
      dark: '/worked_at_logos/droniq/Droniq_logo_dark.png',
    },
    roles: [
      <>
      Crafted user-friendly interfaces and robust backend systems for the POC, 
      highlighting innovative approaches to streamline drone operations.
      </>,
      <>
        Specialized in backend integration, testing the feasibility of data transfer between native apps and  
        {' '}
        <Link
          aria-label="DroniQ's systems"
          href="https://droniq.de/en/produkte/utm-trackviewer-monatslizenz/"
          target="_blank"
          rel="noreferrer"
        >
          DroniQ's systems,
        </Link>&nbsp;
        showcasing innovative approaches to streamline drone operations.
      </>,
   
    ],
  },
  GIA: {
    name: 'Governance Institute of Australia',
    longName: 'Governance Institute of Australia',
    subDetail: 'NFP',
    url: 'https://www.governanceinstitute.com.au/',
    position: 'IT Business Partner',
    duration: 'August 2022 - May 2024',
    logo: {
      light: '/worked_at_logos/gia/GIA_logo.png',
      dark: '/worked_at_logos/gia/GIA_logo_dark.png',
    },
    roles: [
      <>
        Managed 2 projects, acceptance process, installation, deployment and sign-off with team of 2 with revenue of $300k
        Supported 50 internal users whistle office move
      </>,
      <>
     Used Microsoft system to audit documents and managed change requests then communicated changes to internal stakeholders
     which improved quality of delivery by 50%
      </>,
      <>
   Optimized Power Automate flow to streamline the process of creating records by eliminating the need for staff to manually enter
   data in two separate systems, resulting in increased efficiency by 20%.
      </>,
      <>
        Migrating of existing marketing email related tools and batch jobs from
        Responsys into new platform called Braze.
      </>,

    ],
  },
  Amigo: {
    name: 'Amigo Informatics',
    longName: 'Amigo Informatics',
    subDetail: 'formerly Oscillosoft.',
    url: 'https://amigoinformatics.com/',
    position: 'Senior Technical Consultant',
    duration: 'Nov 2016 - Feb 2020',
    logo: {
      light: '/worked_at_logos/amigo/Amigo_logo.png',
      dark: '/worked_at_logos/amigo/Amigo_logo_dark.png',
    },
    roles: [
      <>
       Used Google system to audit documents and managed change requests then communicated changes to 9 clients worth up to
       $150K in revenue
      </>,
      <>
      Gathered intelligence from team of 4 to understand needs and future growth strategy which increases growth by 30%
      </>,
      <>
       Assisted in the development and testing of new business processes, capabilities, and supporting technologies to improve
       security reduced time by 30%
      </>,
      <>
        Led communications across 3 clients to analyze business data and identify areas of improvement to reduce costs by 60%
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Droniq,
  Experiences.GIA,
  Experiences.Amigo,
]
