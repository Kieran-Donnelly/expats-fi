import * as migration_20260803_075626_initial from './20260803_075626_initial';
import * as migration_20260803_075648_seed_current_content from './20260803_075648_seed_current_content';
import * as migration_20260803_133319_add_embassies from './20260803_133319_add_embassies';
import * as migration_20260803_133320_seed_embassies from './20260803_133320_seed_embassies';
import * as migration_20260803_150000_add_embassy_addresses from './20260803_150000_add_embassy_addresses';

export const migrations = [
  {
    up: migration_20260803_075626_initial.up,
    down: migration_20260803_075626_initial.down,
    name: '20260803_075626_initial',
  },
  {
    up: migration_20260803_075648_seed_current_content.up,
    down: migration_20260803_075648_seed_current_content.down,
    name: '20260803_075648_seed_current_content',
  },
  {
    up: migration_20260803_133319_add_embassies.up,
    down: migration_20260803_133319_add_embassies.down,
    name: '20260803_133319_add_embassies'
  },
  {
    up: migration_20260803_133320_seed_embassies.up,
    down: migration_20260803_133320_seed_embassies.down,
    name: '20260803_133320_seed_embassies'
  },
  {
    up: migration_20260803_150000_add_embassy_addresses.up,
    down: migration_20260803_150000_add_embassy_addresses.down,
    name: '20260803_150000_add_embassy_addresses'
  },
];
