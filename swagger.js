module.exports = {
    info: {
        title: "Blog Application",
        description: "This is a sample for learning purpose",
        contact: {
            name: 'team',
            email: "myteam@binar.org"
        },
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3015/api/v1"
        }
        ],
        tags: [
        {
            name: "blog",
            description: "Everything about blog"
        }
    ],
    filesPattern: './server.js',
    baseDir: __dirname,
    swaggerUIPath: '/swagger',
};
