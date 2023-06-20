const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const swagger = require('./swagger');

const app = express();
expressJSDocSwagger(app)(swagger);

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

/**
 * Blog
 * @typedef {object} Blog
 * @property {string} title - The title
 * @property {string} content - The content
 */

/**
 * CreatedBlog
 * @typedef {object} CreatedBlog
 * @property {number} id - 123
 */

/**
 * GET /blogs
 * @summary List all blogs
 * @description Listing all published blog from the server
 * @operationId listBlog
 * @return {array<Blog>} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * [
 *   {
 *     "title": "ini title 1",
 *     "content": "ini content 1"
 *   }
 * ]
 */
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

/**
 * POST /blogs
 * @summary Create new blog
 * @description Create new data for blog to be saved in the server
 * @operationId createBlog
 * @param {Blog} request.body.required - Blog data - application/json
 * @return {CreatedBlog} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "id": 123
 * }
 */
app.post('/api/v1/blogs', function(req, res) {
    console.info(req.body);
    res.json({
        id: 987,
    });
});

app.listen(3015, function() {
    console.info('application start at port 3015');
});
