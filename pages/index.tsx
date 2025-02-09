import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";

import ScreenVariantProvider from "../components/plasmic/theme_switcher/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/theme_switcher/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {

  return (
    <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicHomepage />
        </ph.PageParamsProvider>
  );
}

export default Homepage;
