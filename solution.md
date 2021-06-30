# Project: Purple Cow

Before getting started, ensure your local device has Node.js, npm, and Angular 10+ installed. For more information visit `https://angular.io/guide/setup-local`.

## Waking up the purple cow

To begin the Angular live development server, first open your terminal and navigate to the project's root directory; in this case, that will be `/purplecow`. From here, you can run `ng` and `npm` commands.

Usually if this were your first time opening Project: Purple Cow in your local environment, you would have to run `npm install` to install any dependencies prior to launch. We've taken the liberty of creating `graze`, a script that both installs dependencies and serves the application. Type `npm run graze` to load the development server. Your live development server should open on `http://localhost:3000`

(Any subsequent serving can be done through `ng serve`, additional ports configurable by `ng serve --port 7777`)

## Milking the purple cow

Once the page is loaded, you will see Fearless branding at the top of the page, a centered box with the live count displayed, and a button allowing you to add one hit to the counter. 

The box displaying the live count subscribes to the `getServiceCount()` method of the `CounterService`. This method returns the `currentCount` value which is updated by clicking the +1 button.

Clicking the +1 button will add one hit to the counter by calling `hitCounterAPI()` from the `CounterService`. Once the hit returns the updated value, it updates `currentCount`'s observed value `countSource` via the `updateServiceCount()` method (since countSource is private).

## Raising the purple cow

A parent's job is never done; there are a vast number of improvements in both styling and functionality that we can make moving forward on Project: Purple Cow.

- Animation Improvements
    - Animate numbers sliding to the left with a new number appearing from below when `currentCount` is updated
        - Leg work has been done in `count-box.component.css` with `@keyframe`s
    - Spice up the UI with a fancier loading animations
- Functionality Improvements
    - Provide a timestamped log of each click
        - would require database table and API to interact with
    - Add a reset button 
        - needs `enable_reset` set to `1` for `countapi` key
    - Using swipe gestures to increment on mobile, replacing the +1 button

## Preexisting conditions (known bugs)

- No animtion support for Mozilla FireFox
- Animations in Edge/Chrome are inconsistently timed: sometimes the spans and button appear simultaneously and other times they are sequentially animated in. Likely an issue with timeouts on animation due to time constraint.