import crypto from 'crypto-js'
let as = require('asmcrypto.js')

function en_u8b6(content){
  if(content){
    // return crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(content))
    return as_en_ub(content)
  }else{
    return ''
  }
}

function de_b6u8(content){
  if(content){
    // return crypto.enc.Utf8.stringify(crypto.enc.Base64.parse(content))
    return as_de_ub(content)
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

/**
 * 
 * @param {string} content 
 * @returns Unit8Array
 */
function str_sha256_bytes(content){
  if(content){
    let u8 = crypto.enc.Utf8.parse(content)
    let b6 = crypto.SHA256(u8).toString(crypto.enc.Base64)
    return as.base64_to_bytes(b6)
  }
}

function en_aesGcm(content,secret,timestamp){
  const text = as.string_to_bytes(content,true)

  let key = str_sha256_bytes(secret)
  let nonce = str_sha256_bytes(timestamp)

  let u8es = as.AES_GCM.encrypt(text,key,nonce)
  let es = as.bytes_to_base64(u8es)
  return es
}

function de_aesGcm(content,secret,timestamp){
  const body = as.base64_to_bytes(content,true)
  let key = str_sha256_bytes(secret)
  let nonce = str_sha256_bytes(timestamp)
  let u8de = as.AES_GCM.decrypt(body,key,nonce)
  let ds = as.bytes_to_string(u8de,true)
  return ds
}

function as_en_ub(content){
  if(content){
    let u8 = as.string_to_bytes(content,true)
    let b6 = as.bytes_to_base64(u8)
    return b6
  }else{
    return ''
  }
}

function as_de_ub(content){
  if(content){
    let u8 = as.base64_to_bytes(content)
    let str = as.bytes_to_string(u8,true)
    return str
  }else{
    return ''
  }
}

export default{
  en_u8b6,
  de_b6u8,
  en_sha256b6,
  en_aesGsm: en_aesGcm,
  de_aesGsm: de_aesGcm,
}