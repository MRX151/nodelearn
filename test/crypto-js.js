import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64'
import crypto from 'crypto-js'
let assert = require('assert')

// sha256和base64编码测试
let sha256Text = "--no-color test --machine --plain-name 加密操作 test/dartPlayground/myplayground/security/cryptography.dart";
// 被编码后的base64
let base64Sha256Text = "pWa6IrDvaEbSLbpPY04/HLHU90tEo4Ky9jHA8nADDLo=";

describe.only('sha256和base64',()=>{

    it('基础测试',()=>{

        const mdHash = crypto.MD5('message').toString(crypto.enc.Base64)
        console.log('md5',mdHash)

        const hash = crypto.SHA256('sha256').toString(crypto.enc.Base64)
        console.log('sha256',hash)

        

    })
    
})
