const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const withTM = require('next-transpile-modules')(['@idscan/idvc2']); // pass the modules you would like to see transpiled

/** @type {import('next').NextConfig} */
module.exports = {
  // transpilePackages: ['@idscan/idvc2'],
  webpack: (config) => {
    config.plugins.push(
        new NodePolyfillPlugin(),
    )
    return config;
  },
}

// module.exports = withTM({
//   webpack: (config) => {
//     config.plugins.push(
//       new NodePolyfillPlugin(),
//       new CopyWebpackPlugin({
//         patterns: [
//           {
//             from: 'node_modules/@idscan/idvc2/dist/networks/*',
//             to: '../public/networks/[name][ext]',
//             toType: 'template',
//           },
//         ],
//       }),
//     )
//     // Important: return the modified config
//     return config;
//   },
// });
