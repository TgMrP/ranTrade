// eslint-disable-next-line no-undef
db.createUser({
  user: 'app',
  pwd: 'pass',
  roles: [
    {
      role: 'dbOwner',
      db: 'trade_mobile',
    },
  ],
});
