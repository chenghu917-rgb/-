# H5 前端 API 接口参考

> 从编译后的 JS 提取，供新 H5 项目对接使用。建议用浏览器 Network 抓包确认参数和返回格式。

## 请求配置

- **baseURL**: `/`（相对当前域名）
- **Method**: POST
- **Headers**:
  - `Content-Type`: `application/json`
  - `token`: `localStorage.getItem("token")`（登录后）
  - `language`: `localStorage.getItem("lang")` 或 `"en"`
- **Body**: JSON 字符串 `JSON.stringify(data)`

## 响应规则

- `code === 0` 或 `code === 1`：成功
- `code === 401/404/302/500`：清除 token，跳转 `/login`

---

## 接口列表

| 接口 | 说明 | 控制器 |
|------|------|--------|
| `/api/user/login` | 登录 | User::login |
| `/api/user/do_register` | 注册 | User::do_register |
| `/api/user/sys` | 系统配置（如区号） | User::sys |
| `/api/index/home` | 首页数据 | Index::home |
| `/api/my/get_userinfo` | 用户信息 | My::get_userinfo |
| `/api/my/headlist` | 头像列表 | My::headlist |
| `/api/my/teamList` | 团队列表 | My::teamList |
| `/api/my/edit_user` | 编辑用户资料 | My::edit_user |
| `/api/my/transaction` | 交易/流水 | My::transaction |
| `/api/my/rechargeLog` | 充值记录 | My::rechargeLog |
| `/api/my/bind_bank` | 绑定银行卡 | My::bind_bank |
| `/api/my/getbankinfo` | 获取银行卡信息 | My::getbankinfo |
| `/api/my/del_bank` | 删除银行卡 | My::del_bank |
| `/api/my/user_recharge` | 用户充值 | My::user_recharge |
| `/api/order/order_list` | 订单列表 | Order::order_list |
| `/api/order/do_order` | 提交订单 | Order::do_order |
| `/api/order/order_info_list` | 订单详情列表 | Order::order_info_list |
| `/api/rot_order/index` | 抢单/任务首页 | RotOrder::index |
| `/api/rot_order/submit_order` | 提交抢单 | RotOrder::submit_order |
| `/api/withdraw/withdraw` | 提现 | Withdraw::withdraw |
| `/api/withdraw/withdrawlog` | 提现记录 | Withdraw::withdrawlog |
| `/api/selectPay` | 选择支付方式 | Pay |
| `/api/createStarsOrder` | 创建支付订单 | Pay |

---

## 路由（Hash 模式）

- `/` - 首页
- `/Order` - 订单
- `/Trade` - 交易/抢单
- `/Team` - 团队
- `/User` - 个人中心
- `/login` - 登录
- `/Register` - 注册（推断）

---

## 后端控制器路径

- `application/api/controller/User.php`
- `application/api/controller/Index.php`
- `application/api/controller/My.php`
- `application/api/controller/Order.php`
- `application/api/controller/RotOrder.php`
- `application/api/controller/Withdraw.php`
- `application/api/controller/Pay.php`

抓包时可在 Network 中查看每个接口的 `Request Payload` 和 `Response`，按此编写新前端的请求与数据结构。
