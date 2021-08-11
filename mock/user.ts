import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}

export default {
  //手机号登录
  'POST /api/login/account': (req: Request, res: Response) => {
    res.send({
      data: {
        currentAuthority: 'admin',
        token: 11111111111111111
      },
      rescode: 0,
    });
    return;
  },
  'GET /api/login/captcha': getFakeCaptcha
};
