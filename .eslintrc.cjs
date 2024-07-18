module.exports = {
  root: true, // Define este archivo como la configuración raíz de ESLint
  env: { browser: true, es2020: true }, // Configura el entorno para navegador y ECMAScript 2020
  extends: [
    'eslint:recommended', // Usa las reglas recomendadas por ESLint
    'plugin:react/recommended', // Usa las reglas recomendadas para React
    'plugin:react/jsx-runtime', // Configura el plugin para la última versión del JSX en React
    'plugin:react-hooks/recommended', // Usa las reglas recomendadas para los hooks de React
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Ignora ciertos archivos y carpetas
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }, // Configura el parser para ECMAScript más reciente y módulos
  settings: { react: { version: '18.2' } }, // Configura la versión de React que estás usando
  plugins: ['react-refresh'], // Añade el plugin react-refresh para hot reloading
  rules: {
    'react/jsx-no-target-blank': 'off', // Desactiva la advertencia para target="_blank" sin rel="noopener noreferrer"
    'react-refresh/only-export-components': [
      'warn', // Muestra una advertencia si exportas algo que no es un componente
      { allowConstantExport: true }, // Permite exportaciones constantes sin advertencias
    ],
  },
}

