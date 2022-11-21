# Lab 8 - Starter
Thanh Phan 

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

* Within a Github action that runs whenever code is pushed because Automated tests can quickly identify errors in code by searching for huge functions, excessive complexity in the calls or parameters, and other heuristics.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no) Yes

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   No because we may also want to test the behavior of the apllication, which are taking in input messages and sending those messages. We can not test these with using unit test since unit test only let us know if the final result matched our expectation. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
    Yes because we only need to check the number of message's length not exceed 80 characters and do not care about the behavior of the functions. Thus using unit test would be ideal for this test. 
