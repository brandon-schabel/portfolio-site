import React from "react"
import { StyledFooter } from "./styles"
import { Section } from ".."

const index = () => {
  return (
    <Section mobileHeight="100px" desktopHeight="100px" tabletHeight="100px">
      <div>Copyright © Brandon Schabel 2019</div>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com/" title="Freepik">
          Freepik{" "}
        </a>{" "}
        and{" "}
        <a
          href="https://www.flaticon.com/authors/prosymbols"
          title="Prosymbols">
          Prosymbols
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
        </div>
        <div>
        {" "} and are licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank">
          CC 3.0 BY
        </a>
        </div>
      
    </Section>
  )
}

export default index
