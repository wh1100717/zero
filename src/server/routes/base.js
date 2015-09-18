export default app => {
  app.route('/').get((req, res) => {
    res.render('index', {config: app.config})
  })
  app.route('/api/*').get((req, res) => {
    res.send("api url")
  })
  if (app.config.debug) {
    app.route(/^\/(.*)\.woff2/).get((req, res) => {
      res.redirect(`http://localhost:3001/${req.params[0]}.woff2`)
    })
    app.route(/^\/(.*)\.woff/).get((req, res) => {
      res.redirect(`http://localhost:3001/${req.params[0]}.woff`)
    })
    app.route(/^\/(.*)\.ttf/).get((req, res) => {
      res.redirect(`http://localhost:3001/${req.params[0]}.ttf`)
    })    
  }
  app.route('/*').get((req, res) => {
    res.send('404')
  })
}