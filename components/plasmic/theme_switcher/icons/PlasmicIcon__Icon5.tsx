// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 800 800"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"var(--token-MXiMFqHocE9C)"} d={"M0 0h800v800H0z"}></path>

      <circle
        fill={"var(--token-MXiMFqHocE9C)"}
        cx={"400"}
        cy={"400"}
        r={"600"}
      ></circle>

      <circle
        fill={"var(--token-2S3KJRy3xPhP)"}
        cx={"400"}
        cy={"400"}
        r={"500"}
      ></circle>

      <circle
        fill={"var(--token-fr8MAwvcbLT0)"}
        cx={"400"}
        cy={"400"}
        r={"400"}
      ></circle>

      <circle
        fill={"var(--token-I13oqYGkzXEP)"}
        cx={"400"}
        cy={"400"}
        r={"300"}
      ></circle>

      <circle
        fill={"var(--token-70ODeEO-YEIi)"}
        cx={"400"}
        cy={"400"}
        r={"200"}
      ></circle>

      <circle
        fill={"var(--token-ShR07UXIaXXO)"}
        cx={"400"}
        cy={"400"}
        r={"100"}
      ></circle>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
