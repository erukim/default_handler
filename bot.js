const { ShardingManager } = require('discord.js');
const { token } = require('./system/src/data/config.json')
const manager = new ShardingManager('./system/index.js', { token: token });
manager.on('shardCreate', shard => console.log(`로딩된 샤드수 | ${shard.id}`));
manager.spawn();