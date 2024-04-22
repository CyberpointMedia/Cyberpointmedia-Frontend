/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        name: 'static/videos/[name].[hash].[ext]',
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
