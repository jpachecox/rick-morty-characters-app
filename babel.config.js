module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }], // JSX automático
    '@babel/preset-typescript',
  ],
};
