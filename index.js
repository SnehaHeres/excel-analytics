import mongoose from "mongoose";
import  app from "express" "./app.js "


( async () => {
    try {
        await mongoose.connect ("mongoose:localhost://27017/gitsetup")
        console.log("DB CONNECT");

        const onlistening= () => {
            console.log("listening on port 5000");
        }

        app.listen(5000,onlistening)

    } catch (error) {
        console.error("error:",error);
        throw err;
    }
    })()