module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
      host: env('DATABASE_HOST', 'bilek.f0ej3.mongodb.net'),
       srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'ihdmDB'),
        username: env('DATABASE_USERNAME', 'ihdm'),
        password: env('DATABASE_PASSWORD', 'wanted'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE',null),
        ssl: env('DATABASE_SSL',true),
      },
    },
  },
});
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         client: 'mongo',
//       host: env('DATABASE_HOST', '127.0.0.1'),
//        srv: env.bool('DATABASE_SRV', false),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME', 'ihdmDB'),
//         username: env('DATABASE_USERNAME', ''),
//         password: env('DATABASE_PASSWORD', ''),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE',null),
//         ssl: env('DATABASE_SSL',false),
//       },
//     },
//   },
// });
