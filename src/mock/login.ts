import {Request, Response} from 'express';


// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'POST /auth': async (req: Request, res: Response) => {
    const {password, username} = req.body;

    if (password === '12345' && username === 'admin') {
      res.send({
        code: 0,
        msg: "",
      });
      return;
    }

    res.send({
      code: 1,
      msg: ''
    });
  }
}
