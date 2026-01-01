module.exports = {
  // ...
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Add tsx and ts here
  },
  // ...
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader', // or babel-loader configured for TS
        exclude: /node_modules/,
      },
      // other loaders
    ],
  },
};
