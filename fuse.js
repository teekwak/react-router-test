const { FuseBox } = require('fuse-box');

const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'dist/$name.js',
    target: 'browser',
    useTypescriptCompiler: true,
});

fuse.bundle('bundle').cache(false).instructions('>index.tsx');

fuse.run();
