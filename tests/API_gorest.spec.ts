import { test, expect } from "@playwright/test";
 
test ('create user', async ( { request } ) => {

const response = await request.post ('https://gorest.co.in/public/v2/users', {

    headers: {

        
    }

}




);



})


