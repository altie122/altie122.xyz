"use client";

import * as React from "react";

// Polymorphic type helpers
type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type LinkProps<C extends React.ElementType = "a"> =
  React.PropsWithChildren<{
    // You can add custom props here if needed
    // e.g. variant?: "primary" | "secondary";
  }> &
    AsProp<C> &
    Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, {}>>;

export const BaseLink = React.forwardRef(
  <C extends React.ElementType = "a">(
    { as, children, ...props }: LinkProps<C>,
    ref: React.Ref<any>
  ) => {
    const Component = as || "a";
    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

BaseLink.displayName = "BaseLink";

