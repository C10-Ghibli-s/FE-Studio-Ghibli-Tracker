// function debouncing(fn, delay) {
//   // init timer var.
//   let timer;
//   // return function
//   return function () {
//     // saves this in case of need it.
//     const self = this;
//     // takes and saves all the arguments.
//     const args = arguments;
//     clearTimeout(timer);
//     // giving a custom delay
//     timer = setTimeout(function () {
//       fn.apply(self, args);
//     }, delay);
//   };
// }

// export { debouncing };
