import Message from '../models/message'
const CREATE = "CREATE";

const Subscription = {
  createMessage: {
    subscribe:  (_,__,{pubsub}) => pubsub.asyncIterator(CREATE)
  }
}

export { Subscription as default }
