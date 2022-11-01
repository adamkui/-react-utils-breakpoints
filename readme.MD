# react-breakpoint-utils

The react-breakpoint-utils library is aiming to help with declaring, and using breakpoints easily for responsive UI development in React.\
&nbsp;

## BreakPointsProvider

First, you will need BreakPointsProvider, to declare the breakpoints for your application.
Super easy to use, just wrap your application with this component, passing the breakpoints as shown below. It is a good idea to do this on the highest possible level you can, i.e. your index or App file.

You can define values optionally to the following breakpoint keys as you like:

- XS, SM, MD, LG, XL, XXL, XXXL

#### Example #1:

```js
import { createRoot } from 'react-dom/client';
import { BreakPoints, BreakPointsProvider } from 'react-breakpoint-utils';
import { App } from './App';

const container = document.getElementById("root");
const root = createRoot(container!);

const breakPoints: BreakPoints = {
  XS: 425,
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
  XXXL: 2000,
};

root.render(
  <BreakPointsProvider value={breakPoints}>
    <App />
  </BreakPointsProvider>
);
```

#### Example #2:

You might want to use less breakpoints for your app. In that case, assign values only to those keys you want to use. Based on your declaration, the hooks of this library will dynamically provide data for you. Easy as that.

```js
import { createRoot } from 'react-dom/client';
import { BreakPoints, BreakPointsProvider } from 'react-breakpoint-utils';
import { App } from './App';

const container = document.getElementById("root");
const root = createRoot(container!);

const breakPoints: BreakPoints = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
};

root.render(
  <BreakPointsProvider value={breakPoints}>
    <App />
  </BreakPointsProvider>
);
```

\
&nbsp;

## MatchMedia

MatchMedia is a super simple to use component, designed to easily hide or display your components. Props are optional, so you can provide either only one of the min/max breakpoints value. It is recommended to pass actual breakpoints, using the useBreakPoints hook, avoiding hard coded or duplicate breakpoint values in your code.

#### Example:

```js
import { FC } from "react";
import { MatchMedia, useBreakPoints } from "react-breakpoint-utils";

export const MyTestPage: FC = () => {
  const { SM, LG } = useBreakPoints();

  return (
    <>
      <MatchMedia min={SM} max={LG}>
        <p>{"You can only see me between 640px and 1024px"}</p>
      </MatchMedia>
      <MatchMedia min={SM}>
        <p>{"You can only see me above 640px"}</p>
      </MatchMedia>
      <MatchMedia max={SM}>
        <p>{"You can only see me above 640px"}</p>
      </MatchMedia>
    </>
  );
};
```

\
&nbsp;

## useWindowSize()

You can access a series of properties with the help of this hook, that you can use just as you like. This is recommended for more advanced / complex solutions compared to MatchMedia usage.

#### Example:

```js
import { FC } from "react";
import { useWindowSize } from "react-breakpoint-utils";

export const MyTestPage: FC = () => {
  const {
    width,
    height,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    is3Xl,
    underXs,
    underSm,
    underMd,
    underLg,
    underXl,
    under2Xl,
    under3Xl,
  } = useWindowSize();

  return null;
};
```

\
&nbsp;

## useBreakPoints()

You can access the globally declared breakpoint values, in case you need them. A common use case for this hook, is being combined with the MatchMedia component.

#### Example:

```js
import { FC } from "react";
import { useBreakPoints } from "react-breakpoint-utils";

export const MyTestPage: FC = () => {
  const { XS, SM, MD, LG, XL, XXL, XXXL } = useBreakPoints();

  return null;
};
```
