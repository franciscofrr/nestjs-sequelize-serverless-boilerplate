import { Injectable } from '@nestjs/common';
import { config } from '../../conf/config.dev';

@Injectable()
export class ConfigService {
    get sequelizeOrmConfig() {
        return config.database;
    }
}
