module.exports = async function (context, req) {
    const axios = require('axios');

    try {
        const response = await axios.get('https://appservice-workflow-bara.azurewebsites.net/'); 
        if (response.status === 200) {
            context.res = {
                status: 200,
                body: 'Smoke test passed!',
            };
        } else {
            context.res = {
                status: 500,
                body: 'Smoke test failed! Unexpected status code.',
            };
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: `Smoke test failed! ${error.message}`,
        };
    }
};