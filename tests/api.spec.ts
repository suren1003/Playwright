import {test,expect, APIResponse} from '@playwright/test';

test("Api Testing",async({request}) =>
{
const response:APIResponse =await request.get("https://reqres.in/api/users/2");
console.log(await response.json());
expect(await response.status()).toBe(200)

const responsePost =await request.post("https://reqres.in/api/users",
{  
    data:{
        "name": "morpheus",
        "job": "leader"
         },
    headers:{"Accept":"application/json"}
});
console.log(await responsePost.json());
expect(await responsePost.status()).toBe(201)
let res=await responsePost.json();
let userid=res.id;
console.log(userid)

const responsePut =await request.put("https://reqres.in/api/users/"+userid,
    {  
        data:{
            "name": "babu",
            "job": "Manager"
             },
        headers:{"Accept":"application/json"}
    });
    console.log(await responsePut.json());
    expect(await responsePut.status()).toBe(200)   


    const del =await request.delete("https://reqres.in/api/users/"+userid);
expect(await del.status()).toBe(204)

});