import Message from '../models/message'

const Query = { 
  messages: async () => {
    /*
    return Message.find()
      .limit(100)
      .sort({ _id: 1 })
      .exec((err, res) => {
        if (err) throw err
        // initialize app with existing messages
      })
      */
      return await Message.find();
      
  }
}
export { Query as default }
