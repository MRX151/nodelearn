import crypto from 'crypto-js'
let assert = require('assert')
let fs = require('fs')

import su from '../src/uti/securityUti'

const FILE_PATH_DART = "f:/test/dart.file";
const FILE_PATH_JAVA = "f:/test/java.file";
const FILE_PATH_JS = "f:/test/js.file";


// sha256和base64编码测试
let sha256Text = "测试串1--no-color test --machine --plain-name 加密操作 test/dartPlayground/myplayground/security/cryptography.dart";
// 被编码后的base64
let base64Sha256Text = "pWa6IrDvaEbSLbpPY04/HLHU90tEo4Ky9jHA8nADDLo=";

describe.only('sha256和base64',()=>{

    // 内存编码
    it.skip('u8b6测试',()=>{
      let u8 = crypto.enc.Utf8.parse(sha256Text)
      let content = crypto.enc.Base64.stringify(u8)

      let deb6 = crypto.enc.Base64.parse(content)
      let result = crypto.enc.Utf8.stringify(deb6)
      assert.strictEqual(result,sha256Text)
    })

    // 文件读写编码
    it.skip('u8b6本地文件读写',async ()=>{
      let content = su.en_u8b6(sha256Text)
      fs.writeFileSync(FILE_PATH_JS,content)
      let read = fs.readFileSync(FILE_PATH_JS,'utf-8')
      let result = su.de_b6u8(read)
      assert.strictEqual(result,sha256Text)
    })

    // 解析java和dart生成的u8b6文本
    it.skip('解析java和dart生成的u8b6文本',()=>{
      let dt = fs.readFileSync(FILE_PATH_DART,'utf-8')
      let dt2 = su.de_b6u8(dt)
      assert.strictEqual(dt2,sha256Text)

      let jt = fs.readFileSync(FILE_PATH_JAVA,'utf-8')
      let jt2 = su.de_b6u8(jt)
      assert.strictEqual(jt2,sha256Text)

    })

    // sha256编码
    it.skip('探索:u8sha256b64',()=>{
      // let u8 = crypto.enc.Utf8.parse(sha256Text)
      // let result = crypto.SHA256(u8).toString(crypto.enc.Base64)
      let result = su.en_sha256b6(sha256Text)
      fs.writeFileSync(FILE_PATH_JS,result)
    })

    // aes加密探索
    it('探索:aesGsm加密',()=>{
      
    })



    it.skip('基础测试',()=>{

        // const mdHash = crypto.MD5('message').toString(crypto.enc.Base64)
        const mdHash = crypto.MD5('一段文字').toString(crypto.enc.Base64)

        console.log('md5',mdHash)

        const hash = crypto.SHA256('sha256').toString(crypto.enc.Base64)
        console.log('sha256',hash)

        

    })
    
})
