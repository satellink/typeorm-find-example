import { assert } from 'chai';
import * as mocha from 'mocha';

import Team from '../models/team';
import TeamPlayer from '../models/team.player';
import User from '../models/user';

import { createConnection, Connection, getRepository } from "typeorm";

let dbConnection: Connection

beforeEach(async function() {
  dbConnection = await createConnection()
});

afterEach(async function() {
  await dbConnection.close()
})

describe('when fetching TeamPlayers', function() {
  it('there should be 0 teams', async () => {
    try {
      const count = await getRepository(TeamPlayer).findAndCount({where: { number: 5 }})
      console.log(count)
    } catch(error) {
      console.log('error!', error)
      assert(!error)
    }
  })

  it('with non-existing teamId, it should return 0 count', async () => {
    try {
      const count = await getRepository(TeamPlayer).findAndCount({where: { teamId: 5 }})
      console.log(count)
    } catch(error) {
      console.log('error!', error)
      assert(!error)
    }
  })
});
