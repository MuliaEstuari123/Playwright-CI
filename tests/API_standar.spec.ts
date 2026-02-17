


import { test, expect } from '@playwright/test';
import { request } from 'http';

var userid;

test (' get user', async ( { request }) => {

 const response = await request.get('https://reqres.in/api/users?page=2')
 console.log(await response.json());
 expect(response.status()).toBe(200);

});


test (' create user', async ( { request }) => {

const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: { title: 'kumar',
      body: 'trainer',
      userId: 1 
    },
    
  });

  const res = await response.json();
  console.log(res);

  expect(response.status()).toBe(201);
  expect(res.title).toBe('kumar');
  expect(res.body).toBe('trainer');

                    
});


test.only ( 'update user ', async ( { request }) => {
  


})



