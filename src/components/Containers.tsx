import React from "react";

type ContainerProps = {
  className?: string;
};

const FullWidthContainer: React.FunctionComponent<ContainerProps> = ({
  className,
  children
}) => (
  <section className={`container full-width ${className}`}>{children}</section>
);

const ContentContainer: React.FunctionComponent<ContainerProps> = ({
  className,
  children
}) => (
  <section className={`container content ${className}`}>{children}</section>
);

export { FullWidthContainer, ContentContainer };
