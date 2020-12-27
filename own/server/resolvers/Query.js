import Message from '../models/message'
let data = "";

const Query = { 
  messages: () => {
    Message.find()
      .limit(100)
      .sort({ _id: 1 })
      .exec((err, res) => {
        if (err) throw err
        data = res;
        // initialize app with existing messages
      })
      return data;
  }
}
export { Query as default }
