var assert = require('assert')


describe('开始使用' ,function(){

    before(()=>{
        console.log('describe生命周期只执行一次,在开始的时候')
    })

    after(()=>{
        console.log('所有it执行完毕后执行一次')
    })

    beforeEach(()=>{
        console.log('每个it开始前执行')
    })

    afterEach(()=>{
        console.log('每个it结束后执行')
    })

    it('断言测试',function(){
        assert.strictEqual(1+1,2)
    })

    // 使用skip,则这个测试不会被执行,但是会打印出来
    it.skip('不会执行的测试',()=>{
        console.log('我不会执行')
        assert.strictEqual(1+1,3)
    })

    // 如果一个it(或describe)用了only,那么只有这一个会执行,其他的都不会打印
    it('只会执行我',()=>{
        console.log('只会执行我')
        assert.strictEqual(1+1,2)
    })
})


// describe中也可以使用only/skip
describe.only('被skip的describe',()=>{
    it('skip describe 中的it',()=>{
        console.log('123')
    })
})