import {demoFunc, testParam} from '../controller/demo'

export default app => {
  app.route('/api/demo/testParam/:testParam').get(testParam)
  app.route('/api/demo/demoFunc').get(demoFunc)
}