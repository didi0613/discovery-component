/** @flow */
import React from "react";
import classnames from "classnames";

const circlePath = `M29 58c-16 0-29-13-29-29s13-29 29-29 29 13 29 29-13 29-29
  29zm0-52c-12.7 0-23 10.3-23 23s10.3 23 23 23 23-10.3 23-23-10.3-23-23-23z`;
const arcPath = `M52 20.5c-3-8-10-14-18.4-15.6l.6-2.9c9.4 1.8 17.3 8.5 20.6
  17.5l-2.8 1z`;

type Props = {
  className ? : string;
  overlay ? : "PAGE" | "CONTAINER";
  children ? : string;
};

const Spinner = ({
  className,
  overlay,
  children,
  ...props
}: Props): React$Element < * > => ( // eslint-disable-line no-undef
  <div {...props} className={classnames("spinner-container", className, {
    ["spinner-full-page-overlay"]: overlay === "PAGE",
    ["spinner-full-container-overlay"]: overlay === "CONTAINER"
  })}>
    <svg
      className={"spinner-icon"}
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58">
      <path
        fill="#888"
        d={circlePath}
        opacity=".35" />
      <path
        fill="#fff"
        d={arcPath} />
    </svg>
    <span>{children || "Loading..."}</span>
  </div>
);

export default Spinner;
