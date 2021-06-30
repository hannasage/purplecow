# Project: Purple Cow

Before getting started, ensure your local device has Node.js, npm, and Angular 10+ installed. For more information visit `https://angular.io/guide/setup-local`.

## Waking up the purple cow

To begin the Angular live development server, first open your terminal and navigate to the project's root directory; in this case, that will be `/fearless-purplecow`. From here, you can run `ng` commands.

If this is your first time opening Project: Purple Cow in your local environment, you may have to run `npm install` to install any dependencies prior to launch.

Once you're in this root directory, run `ng serve`. Your live development server should open on `http://localhost:3000`

## Milking the purple cow

Once the page is loaded, you will see Fearless branding at the top of the page, a centered box with the live count displayed, and a button allowing you to add one hit to the counter. 

The box displaying the live count subscribes to the `getServiceCount()` method of the `CounterService`. This method returns the `currentCount` value which is updated by clicking the +1 button.

Clicking the +1 button will add one hit to the counter by calling `hitCounterAPI()` from the `CounterService`. Once the hit returns the updated value, it updates `currentCount`'s observed value `countSource` via the `updateServiceCount()` method (since countSource is private).

## Raising the purple cow

A parent's job is never done; there are a vast number of improvements in both styling and functionality that we can make moving forward on Project: Purple Cow.

- Animation Improvements
    - Animate numbers sliding to the left with a new number appearing from below when `currentCount` is updated
    - Spice up the UI with a fancier loading animation
- Functionality Improvements
    - Provide a timestamped log of each click
    - Add a reset button (needs `enable_reset` set to `1` for `countapi` key)
    - Using swipe gestures to increment on mobile, replacing the +1 button