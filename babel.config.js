module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};

// // // .babelrc or babel.config.js
// // module.exports = {
// //   presets: ['module:metro-react-native-babel-preset'],
// //   plugins: ['react-native-reanimated/plugin'],
// // };

// module.exports = function (api) {
//   api.cache(true);

//   return {
//     presets: ["module:metro-react-native-babel-preset"],
//     plugins: ["react-native-reanimated/plugin"],
//   };
// };
