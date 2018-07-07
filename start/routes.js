'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

// Uncomment the following code to test with mongodb

// Route.get('/test', async () => {
//   const User = use('App/Models/User')
//   await User.findOrCreate({
//     name: 'adonis-mongo-app'
//   }, {
//     name: 'adonis-mongo-app',
//     github: 'https://github.com/wxs77577/adonis-mongo-app',
//     cmd: 'adonis new api-server --blueprint wxs77577/adonis-mongo-app',
//     'cmd-cnpm': 'adonis new api-server --blueprint wxs77577/adonis-mongo-app --cnpm'
//   })
//   return await User.query().sort('-_id').paginate(1)
// })