import uuidv4 from 'uuid/v4'
import Message from '../models/message'

const Mutation = {
  createMessage: async (parent, args, { db, pubsub }, info) => {
    pubsub.publish("CREATE",{
      createMessage: {
        name: args.data.name, 
        body: args.data.body
      }
    })
    const message = new Message({
      name: args.data.name, body: args.data.body});

    const handleError = function(err) {
      console.error(err);
      // handle your error
  };

    await message.save(function (err) {
      if (err) return handleError(err);
      // saved!
    });
    return ({ name: args.data.name, body: args.data.body });
  },
  clearMessages: async () => {
    await Message.remove({},function (err) {
      if (err) return handleError(err);
      // saved!
    })
    return 'Messages cleared!'
    
  }

}
export { Mutation as default }
