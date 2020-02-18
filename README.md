Project created by Aldiyar Batyrbekov (https://aldibacreates.now.sh)

## Live Link

You can visit a live demo at https://camino.now.sh/

## Code

An app uses Redux for global store state, and some component contained state logic for validation. The reason behind this approach is to refrain from unnecessary action dispatches to the global store. The only time the global store updates is when the information submitted or retrieved spread across multiple components.

## Takeaways

Planning ahead makes the job easier, Redux involves lots of boilerplate, Redux is useful when complex state is involved. Context API is still viable option.

## Main Struggles

Setting up Redux was not as easy. Guessing what the data would look like when in production. (I basically assumed that the application is a 3 step object that has various questions associated with each step).

## Conclusion

Redux is great when it is set up. Recreating layouts brings me joy :D