import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
import nodeResolve from "@rollup/plugin-node-resolve";
export default {
    input: 'src/js/comic.ts',
    output: {
        dir: 'src/js',
        format: 'cjs'
    },
    plugins: [
        typescript(),
        terser(),
        nodeResolve({ browser: true })
    ],
    external: ['moment']
};
