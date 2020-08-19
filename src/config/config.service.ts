import { Injectable } from '@nestjs/common';
import config from '../config.env';

@Injectable()
export class ConfigService {
    get sequelizeOrmConfig() {
        return config.database;
    }
}
