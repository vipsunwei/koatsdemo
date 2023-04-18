// export a class named baseController

class BaseController {
  static returnBody(code = 0, msg = '', data: any = null) {
    return { code, msg, data }
  }
}

export default BaseController
