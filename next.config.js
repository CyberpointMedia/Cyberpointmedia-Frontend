/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next', // Specifies the base path for the files
                        name: 'static/videos/[name].[hash].[ext]', // Specifies the output path and filename pattern
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;

