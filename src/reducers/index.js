// const initial = [
//   {
//     name: "Chad Chadley",
//     image:
//       "https://images.unsplash.com/photo-1589913028960-1615b1edd1db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1631&q=80",
//     content:
//       "It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.",
//     date: "Jan 23 2020",
//   },
// ];

export const reducer = (state = [], action) => {
  switch (action.type) {
    case "SUBMIT_POST":
      return [...state, action.payload];
    case "FETCH_POSTS":
      return [...action.payload];
    default:
      return state;
  }
};
