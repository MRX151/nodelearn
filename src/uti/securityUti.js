import crypto from 'crypto-js'

function en_u8b6(content){
  if(content){
    return crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(content))
  }else{
    return ''
  }
}

function de_b6u8(content){
  if(content){
    return crypto.enc.Utf8.stringify(crypto.enc.Base64.parse(content))
  }else{
    return ''
  }
}

function en_sha256b6(content){
  if(content){
    let u8 = crypto.enc.Utf8.parse(content)
    let result = crypto.SHA256(u8).toString(crypto.enc.Base64)
    return result;
  }else{
    return ''
  }
}

function en_aesGsm(content,secret,timestamp){
  const srcs = crypto.enc.Utf8.parse(content)
  let u8key = crypto.enc.Utf8.parse(key)
  let sha256key = crypto.SHA256(u8key)
  let u8Nonce = crypto.enc.Utf8.parse(timestamp)
  let sha256Nonce = crypto.SHA256(u8Nonce)

  let es = crypto.AES.encrypt(srcs,sha256key,{
    iv : sha256Nonce,
    mode :crypto.mode.ECB
  })
}

export default{
  en_u8b6,
  de_b6u8,
  en_sha256b6,
}