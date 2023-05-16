const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const rootRouter = require('./routers/rootRouter');
const adminRouter = require('./routers/adminRouter');
const { privateAPI } = require('./utils/jwt');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
app.use(cors());
app.use(express.json());
app.use(express.static('.'));
app.use("/admin", adminRouter)
app.use("/api", privateAPI, rootRouter);
const options = {
    definition: {
        info: {
            title: "API User",
            version: "1.0.0",
            description: "Swapger User"
        }
    },
    apis: ["src/swagger/index.js"]
}
const specs = swaggerJsDoc(options);
app.use("", swaggerUi.serve, swaggerUi.setup(specs));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

