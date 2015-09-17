import demoDao from '../dao/demo'

export function demoFunc (req, res, next) {
  res.send('this is demoFunc request')
}

export function testParam (req, res, next) {
  const testParam = req.params.testParam
  res.send('your param is: ' + testParam)
}