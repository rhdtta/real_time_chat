## Real time chat
Build a simple chat applications using raw websockets in Node.js that supports the following features - 

- Allow an admin to create a new chat session/room. Admin should be allowed to set the following properties on the room - 
- Name
- start_time
- is_open 
- cool_down_time
- Allow a users to join the room and send messages
- Allow users to upvote chat messages.
- If chat messages reach more than 3 upvotes, move them over to a separate section.
- If chat messages reach more than 10 upvotes, alert the admin to answer.



////


So we first setup our project. Install dependencies like webscoket and its @types.

Now, we need to store the state of the current room. We will need a inmemory object that will do this for us.