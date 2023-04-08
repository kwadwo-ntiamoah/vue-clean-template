import AuthDataSource from "../Data/dataSource/auth.dataSource";
import AuthRepository from "../Data/repositoryImpl/auth.repositoryImpl";
import { AxiosClient } from "./httpClient/index"

import { container } from "tsyringe";

class DI {
  static init() {
    container.register("IAuthRepository", { useClass: AuthRepository });
    container.register("IAuthDataSource", { useClass: AuthDataSource, });
    container.register("IHttpClient", { useClass: AxiosClient });
  }
}

export default DI;