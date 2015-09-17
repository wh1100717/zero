export default app => {
  app.route('/').get((req, res) => {
    res.render('index', {config: app.config})
  })
  app.route('/api/*').get((req, res) => {
    res.send("api url")
  })
  app.route('/*').get((req, res) => {
    res.send('404')
  })
}