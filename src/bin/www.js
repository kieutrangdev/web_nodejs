const app = require("../apps/app");
const config = require("config");
const server = app.listen(port=config.app.port, (req, res)=>{
    console.log(`Server running on port ${port}`);
});