import * as React from "react";
import {
  PlasmicContactButton,
  DefaultContactButtonProps
} from "./plasmic/theme_switcher/PlasmicContactButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ContactButtonProps extends DefaultContactButtonProps {
  // Feel free to add any additional props that this component should receive
}
function ContactButton_(props: ContactButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicContactButton.useBehavior<ContactButtonProps>(
    props,
    ref
  );
  return <PlasmicContactButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ContactButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ContactButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const ContactButton = React.forwardRef(
  ContactButton_
) as any as ButtonComponentType;

export default Object.assign(ContactButton, { __plumeType: "button" });
