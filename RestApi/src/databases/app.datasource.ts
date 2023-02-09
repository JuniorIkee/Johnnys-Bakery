import { host, port,username,password,database } from "../config";
import { DataSource } from "typeorm";
import { join } from "path";

import * as path from 'path';

const dataSource = new DataSource({
    type: "mysql",
    host,
    port: Number(port),
    username,
    password,
    database,
    entities: [
        path.resolve(__dirname, '..', 'models/*.ts'),
        path.resolve(__dirname, '..', 'models/*.js'),
      ],
    logging: false,
    synchronize: false,
});

export default dataSource;