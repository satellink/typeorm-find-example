# typeorm-find-example
Unit test to represent a bug (?) in typeorm.

The unit test that represents the error I get in typeorm. Do the following:
```
npm install
npm run test
```

Sample output:
```
executing query:  SELECT "TeamPlayer"."number" AS "TeamPlayer_number", "TeamPlayer"."teamId" AS "TeamPlayer_teamId", "TeamPlayer"."userId" AS "TeamPlayer_userId" FROM "team_player" "TeamPlayer" WHERE TeamPlayer.teamId=$1 -- PARAMETERS: [5]
query failed:  SELECT "TeamPlayer"."number" AS "TeamPlayer_number", "TeamPlayer"."teamId" AS "TeamPlayer_teamId", "TeamPlayer"."userId" AS "TeamPlayer_userId" FROM "team_player" "TeamPlayer" WHERE TeamPlayer.teamId=$1 -- PARAMETERS: [5]
error:  { error: missing FROM-clause entry for table "teamplayer"
at Connection.parseE (/Users/azvonkov/projects/typeorm-find-example/node_modules/pg/lib/connection.js:546:11)
at Connection.parseMessage (/Users/azvonkov/projects/typeorm-find-example/node_modules/pg/lib/connection.js:371:19)
at Socket.<anonymous> (/Users/azvonkov/projects/typeorm-find-example/node_modules/pg/lib/connection.js:114:22)
at emitOne (events.js:116:13)
at Socket.emit (events.js:211:7)
at addChunk (_stream_readable.js:263:12)
at readableAddChunk (_stream_readable.js:250:11)
at Socket.Readable.push (_stream_readable.js:208:10)
at TCP.onread (net.js:594:20)
name: 'error',
length: 122,
severity: 'ERROR',
code: '42P01',
detail: undefined,
hint: undefined,
position: '183',
internalPosition: undefined,
internalQuery: undefined,
where: undefined,
schema: undefined,
table: undefined,
column: undefined,
dataType: undefined,
constraint: undefined,
file: 'parse_relation.c',
line: '3140',
routine: 'errorMissingRTE' }
error! { QueryFailedError: missing FROM-clause entry for table "teamplayer"
at new QueryFailedError (/Users/azvonkov/projects/typeorm-find-example/src/error/QueryFailedError.ts:7:9)
at Query.callback (/Users/azvonkov/projects/typeorm-find-example/src/driver/postgres/PostgresQueryRunner.ts:216:26)
at Query.handleError (/Users/azvonkov/projects/typeorm-find-example/node_modules/pg/lib/query.js:143:17)
at Connection.connectedErrorHandler (/Users/azvonkov/projects/typeorm-find-example/node_modules/pg/lib/client.js:132:26)
at emitOne (events.js:116:13)
at Connection.emit (events.js:211:7)
at Socket.<anonymous> (/Users/azvonkov/projects/typeorm-find-example/node_modules/pg/lib/connection.js:118:12)
at emitOne (events.js:116:13)
at Socket.emit (events.js:211:7)
at addChunk (_stream_readable.js:263:12)
at readableAddChunk (_stream_readable.js:250:11)
at Socket.Readable.push (_stream_readable.js:208:10)
at TCP.onread (net.js:594:20)
message: 'missing FROM-clause entry for table "teamplayer"',
name: 'QueryFailedError',
length: 122,
severity: 'ERROR',
code: '42P01',
detail: undefined,
hint: undefined,
position: '183',
internalPosition: undefined,
internalQuery: undefined,
where: undefined,
schema: undefined,
table: undefined,
column: undefined,
dataType: undefined,
constraint: undefined,
file: 'parse_relation.c',
line: '3140',
routine: 'errorMissingRTE',
query: 'SELECT "TeamPlayer"."number" AS "TeamPlayer_number", "TeamPlayer"."teamId" AS "TeamPlayer_teamId", "TeamPlayer"."userId" AS "TeamPlayer_userId" FROM "team_player" "TeamPlayer" WHERE TeamPlayer.teamId=$1',
parameters: [ 5 ] }
1) with non-existing teamId, it should return 0 count
```
