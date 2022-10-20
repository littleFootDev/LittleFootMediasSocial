import {serverSetup} from './setupServer';
import {databaseSetup} from './setupDatabase';


async function init () {
    await serverSetup()
    await databaseSetup();
};

init();
