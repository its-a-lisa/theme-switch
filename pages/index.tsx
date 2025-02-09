import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";

import { ThemeContext } from "../components/plasmic/theme_switcher/PlasmicGlobalVariant__Theme";
import { PlasmicHomepage } from "../components/plasmic/theme_switcher/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {

  return (
    <ThemeContext.Provider value={undefined}>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicHomepage />
      </PageParamsProvider__>
    </ThemeContext.Provider>
  );
}

export default Homepage;
