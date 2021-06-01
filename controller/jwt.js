const jwt = require('jsonwebtoken')

let { private_key, client_email } = require('../config/serviceAccountKey.json')
let uid = require('../config/uid')

const options = {
    /* 算法 @def{ 'HS256' }
    ** 自動轉換為附加到 JWT["Header"]["alt"] */
    algorithm: 'RS256',
    /* 發行人，項目的服務帳戶email
    ** 自動轉換為附加到 JWT["Payload"]["iss"] */
    issuer: client_email,
    /* 項目，項目的服務帳戶email
    ** 自動轉換為附加到 JWT["Payload"]["sub"] */
    subject: client_email,
    /* 觀眾，接收jwt的對象
    ** 自動轉換為附加到 JWT["Payload"]["aud"] */
    audience: "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit",
    /* 發行時間(issued at) @def{ 自主生成 }
    ** 自動轉換為附加到 JWT["Payload"]["iat"] */
    // 若要自訂義，需在 payload 設定 
    /* 時限，相對於iat
    ** 自動轉換為附加到 JWT["Payload"]["exp"] */
    expiresIn: "1 m",
}

let payload = {
    uid: 'xxx'    
}

const sign = (cb) => {
    return jwt.sign(payload, private_key, options, (err, token) => {
        if(err) return console.log('err ==> ', err)
        console.log('token ===> ', token)
        cb(token)
    })
}

module.exports = { sign }