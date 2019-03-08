import React from "react"
import { Section, FlexWrapper } from "../index"

const index = () => {
  return (
    <Section
      // backgroundColor="#2980b9"
      // mobileFlexDirection="column"
      // tabletFlexDirection=""
        tabletFlexDirection="row"
        desktopFlexDirection="row"
      >
      <FlexWrapper>
        <h3>Air Force</h3>
        <div>I served four years in the Air Force as a Ground Radar Technician. 
        I joined in April 2015, from there I went through basic training for two months, 
        following that I went to technical training where I went through a Basic Electronics course,
        then I went through about 6 months of Radar Theory. From there I was assigned to to the 60th OSS
        at Travis AFB. I went through another year of training there to finally be certified as 
        a Radar Technician. At Travis AFB we had a unique oppurtunity to test an experimental Radar that 
        would help better identify airplanes flying over windmills, because radars have a hardtime seeing airplanes 
        over windmills due to the interference. In addition to my main job, I was also had the oppurtunity
        to serve on the base honor guard where we went and did honors for fallen veterans. I also got
        to serve on the squadron Booster Club as Treasurer, we held events for the squadron and
        raised funds to hold holiday events for the squadron. During my time at Travis my career field
        was merged with another career field called Air Field systems. During that transisition my fellow airman
        and I were responsible for training 7 personnel on all the Radar equipment and that was complete 7 months 
        ahead of time. Due to my efforts and performance, I was recognized as a top performer and was promoted to the rank
        of E-4 6 months early.
        </div>
      </FlexWrapper>
      <FlexWrapper>test</FlexWrapper>
    </Section>
  )
}

export default index
