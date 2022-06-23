# 安装

---

## 通过npm安装

```bash
npm i --save @hnzycfcfed/storage
```

### 演示

---

```javascript
import storage from '@hnzycfcfed/storage';

storage.setLocal('test','testValue');
storage.getLocal('test');
storage.removeLocal('test');
storage.clearLocal();

storage.setSession('test','testValue');
storage.getSession('test');
storage.removeSeesion('test');
storage.clearSession();

if(!storage.test(window.localStorage)) {
    console.log('本地存储未开启');
}

if(!storage.test(window.sessionStorage)) {
    console.log('会话存储未开启');
}
```
