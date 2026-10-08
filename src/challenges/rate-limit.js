class App {
    #app_store = {
        rate_limit_time_range: 5,
        no_of_request: 5    
    }
    #rate_limit(request){}

    get_api(request) {}
}

const client = new App()

const gen_ips = (ip) => {
   const no_of_ip = ip.length * 2
   const output = []
    Array(no_of_ip).fill('').map((item, i) => {
        console.log(output, i)
    if(i === 0) item = ip.split('').join('.')
    else {
       console.log("output", output[i--], i--) 
       let spit_item = output[i--]?.split('.')
       spit_item.push(spit_item.pop())
       item = spit_item.join('.')
    }
    output.push(item)
   })
   return output
}

const static_ip = '123'  
console.log(gen_ips(static_ip))
// Array(20).fill({}).map((obj, i) => client.get_api({ ...obj, }))



