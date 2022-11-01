# react-breakpoint-utils

The react-breakpoint-utils library is an easy to use utility library, aiming to help with declaring, and using breakpoints easily for responsive UI development in React.

## Usage

### BreakPointsProvider

First, you will need to import BreakPointsProvider, and set up the breakpoint values, as you like.
Super easy to use, just wrap your app with the BreakPointProvider component, for example in your index or App file, and pass the breakpoints to the value prop.

You can use the following breakpoint keys to assign values to (all of them are optional, in case you want to use less than all of the options):

- XS, SM, MD, LG, XL, XXL, XXXL

#### Example:

     import { BreakPointsProvider } from 'react-breakpoint-utils;

     ...

     return (
         <BreakPointsProvider
    	     value={{
    		     XS: 425,
    		     SM: 640,
    		     MD: 768,
    		     LG: 1024,
    		     XL: 1280,
    		     XXL: 1536,
    		     XXXL: 2000
         }}>
    	     <App />
         </BreakPointsProvider>
     )

     ...


### MatchMedia

MatchMedia is designed to easily hide or display your components. Wrap your component(s) with MatchMedia, provide the minBreakPoint and/or maxBreakPoint props, and react-breakpoint-utils will handle everything else. Props are optional, meaning that you can only provide either a min or max breakpoint value as well. It may be a good idea to provide the prop values using the useBreakPoints hook, so you actually don't have your breakpoints hard coded.

```
import { MatchMedia } from 'react-breakpoint-utils';

...

const breakPoints = useBreakPoints()

// Only show YourComponent between SM and LG breakpoints
return (
	<MatchMedia  minBreakPoint={breakpoints.SM}  maxBreakPoint={breakpoints.LG}>
		<YourComponent />
	</MatchMedia>
)

...
```

## Hooks

### useWindowSize()

```
import { useWindowSize } from 'react-breakpoint-utils';

...

const { width, height, isXs, underLg } = useWindowSize() // returns useful boolean and number constants

// or return all the information in one single object
const sizeInfo = useWindowSize()

...
```

#### Return value types:

width?: number | undefined;

height?: number | undefined;

isXs?: boolean | undefined;

isSm?: boolean | undefined;

isMd?: boolean | undefined;

isLg?: boolean | undefined;

isXl?: boolean | undefined;

is2Xl?: boolean | undefined;

is3Xl?: boolean | undefined;

underXs?: boolean | undefined;

underSm?: boolean | undefined;

underMd?: boolean | undefined;

underLg?: boolean | undefined;

underXl?: boolean | undefined;

under2Xl?: boolean | undefined;

under3Xl?: boolean | undefined;

### useBreakpoints()

```
import { useBreakPoints } from 'react-breakpoint-utils';

...

const { XS } = useBreakPoints();

console.log(breakPoints); // 425

...
```

#### Return value types:

XS?: number;
SM?: number;
MD?: number;
LG?: number;
XL?: number;
XXL?: number;
XXXL?: number;
