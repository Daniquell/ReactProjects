const crypto=require('crypto')

const start =Date.now()
    
    crypto.pdkdf2('123ttt','5',10000000,64,'sha512',()=>{
        console.log('1 end', Date.now()-start)
    }
    )