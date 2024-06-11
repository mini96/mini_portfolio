import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Zoho CRM x Power BI"
            src="/works/powerbilogo1.webp"
            description="Power BI is a powerful tool businesses use to visualize information for informed decisions, 
            but it lacks an easy link to connect with Zoho CRM."
          
            ctaUrl="https://www.linkedin.com/in/menelik-asfaw-226388140/details/projects/"
            
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Hubspot to Zoho CRM Migration"
            description="A client required all of his data and automation migrated from Hubspot to Zoho CRM"
            src="/works/hubspotlogo.png"
            
            ctaUrl="https://www.linkedin.com/in/menelik-asfaw-226388140/details/projects/"
            isMobile={isMobile}
          />
        </MotionGridItem>

    

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Custom Lead Allocation"
            description="A medium-sized business wanted custom lead allocation system implemented using Deluge"
            src="/works/Leadallo.webp"
            ctaUrl="https://www.linkedin.com/in/menelik-asfaw-226388140/details/projects/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
