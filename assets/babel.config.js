module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset',  // Preset para React Native
      '@babel/preset-env',                      // Para transformar código moderno
      '@babel/preset-react',                    // Para JSX
      '@react-native/babel-preset',             // Garante o suporte adequado no React Native
      'babel-preset-expo',                     // Caso esteja usando Expo, este preset é necessário
    ],
    
    plugins: [
      'react-native-reanimated/plugin',        // Necessário para o React Native Reanimated
      [
        '@babel/plugin-transform-class-properties',
        { loose: true },                       // Modo loose para propriedades de classe
      ],
      [
        '@babel/plugin-transform-private-methods',
        { loose: true },                       // Modo loose para métodos privados
      ],
      [
        '@babel/plugin-transform-private-property-in-object',
        { loose: true },                       // Modo loose para propriedades privadas em objetos
      ],
    ],
  };
};
