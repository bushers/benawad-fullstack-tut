import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import keys from './keys';

export default {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    user: keys.dbUser,
    password: keys.dbPassword,
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
