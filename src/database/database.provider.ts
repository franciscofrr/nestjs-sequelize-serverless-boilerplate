import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { ConfigService } from '../config/config.service';

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async (configService: ConfigService) => {
        const sequelize = new Sequelize(configService.sequelizeOrmConfig);
        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;
      },
      inject: [ConfigService]
    },
  ];