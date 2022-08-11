const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev:{
    baseApi:'/',
    mockApi:'https://www.fastmock.site/mock/18a0ac13d04509b37863a937eae8a256/mock'
  },
  test:{
    baseApi:'//test.futurefe.com/api',
    mockApi:'https://www.fastmock.site/mock/18a0ac13d04509b37863a937eae8a256/mock'
  },
  prod:{
    baseApi:'//futurefe.com/api',
    mockApi:'https://www.fastmock.site/mock/18a0ac13d04509b37863a937eae8a256/mock'
  }
}
console.log(env)
export default{
  env,
  mock:true,
  nameSpace:'manager',
  ...EnvConfig[env]
}
