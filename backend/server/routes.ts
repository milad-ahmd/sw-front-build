import userRouter from "./api/user";
import fileUploadRouter from "./api/fileupload";
import companyRouter from "./api/company";
export default function setRoutes(app) {
  app.use('/api/user', userRouter)
  app.use('/api/company', companyRouter)
  app.use('/api/upload', fileUploadRouter)
}
