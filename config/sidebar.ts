import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
 
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mini98_16/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/menelik-asfaw-226388140/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/19133858/mini98i',
    icon: FaStackOverflow,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/UCCWIWBYbduRYSXN9zcDQ_CQ',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/mini96',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/mini96',
    icon: FaDev,
  },
]
