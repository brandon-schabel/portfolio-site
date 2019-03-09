import React from "react"
import MediaQueries from 'react-responsive'
import { Section, sizes } from ".."

const index = () => {
  return (
    <Section mobileHeight="100px" desktopHeight="100px" tabletHeight="100px" backgroundColor="#bdc3c7">
      <MediaQueries maxWidth={sizes.tablet}>
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
        </div>
        <div>
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          {" "}
          and are licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank">
            CC 3.0 BY
          </a>
        </div>
      </MediaQueries>

      <MediaQueries minWidth={sizes.tablet}>
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

          {" "}
          and are licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank">
            CC 3.0 BY
          </a>
        </div>
      </MediaQueries>
    </Section>
  )
}

export default index
