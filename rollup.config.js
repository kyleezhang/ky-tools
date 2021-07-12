import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'lib/main.ts',
  output: ['esm', 'cjs'].map((format) => ({
    file: `dist/bundle.${format}.js`,
    format,
    sourcemap: true,
    exports: 'named',
  })),
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
