module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // URL of your Spring Boot server
                ws: true,
                changeOrigin: true
            }
        }
    }
};
