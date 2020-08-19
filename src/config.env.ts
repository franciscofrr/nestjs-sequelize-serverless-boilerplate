import { config as configDev } from '../config/config.dev';
import { config as configProd } from '../config/config.prod';

export default process.env.NODE_ENV === 'production' ? configProd : configDev;