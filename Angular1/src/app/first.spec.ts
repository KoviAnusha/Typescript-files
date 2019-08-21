import { First } from './first';
import { async } from 'q';
import { fakeAsync } from '@angular/core/testing';

// this is the file u want to test.
//one test case file can have more than one decribe blocks

// describe('Test First Class', () => {
//   beforeEach(()=>{});
//   afterEach(()=>{});
//   beforeAll(()=>{}); //executes only once
//   afterAll(()=>{});
// //test cases are it
//   it("",()=>
//   {
//     expect(true).toBe(true);
//   })
// // it(title of test case, function)

// it("",async()=>
// {
//   expect("1").toEqual("1");
// })

// //used when we have database call 
// //x= test case will not be executed by karma
// xit("",fakeAsync(()=>{}))
// let db:object;
// expect(db.getData()).toEqual("Data Received");
// });

//it("Pending") //pending test case

describe("First Class",()=>{

it("should be",()=>{
  expect(new First()).toBeTruthy();
})
})
