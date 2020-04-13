import userRouter from "./api/user";
import fileUploadRouter from "./api/fileupload";
import stocksRouter from "./api/stocks";
import indicesRouter from "./api/indices";
import companyRouter from "./api/company";
export default function setRoutes(app) {
  app.use('/api/user', userRouter)
  app.use('/api/company', companyRouter)
  app.use('/api/upload', fileUploadRouter)
  app.use('/api/stocks', stocksRouter)
  app.use('/api/indices', indicesRouter)
}
