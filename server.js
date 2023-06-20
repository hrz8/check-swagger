const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/v1/blogs', function(req, res) {
    res.json([
        {
            title: 'title 1',
            content: 'ini content'
        },
        {
            title: 'title 2',
            content: 'ini content lagi'
        }
    ])
});

app.listen(3015, function() {
    console.info('application start at port 3015');
});
