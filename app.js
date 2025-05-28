import express from "express";
import cors from "cors";
// import mainRouter from "./src/routes/mainRouter.js";

const app = express();

app.use(cors());

app.use(express.json());

// Middleware para configurar encabezados de seguridad
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});

app.use("/", (req,res)=>{
    res.send("Hola si");
});

export default app;
