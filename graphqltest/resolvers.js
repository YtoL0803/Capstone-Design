import User from "./models/user.js";
import Visitor from "./models/visitor.js";
import Refrigerator from "./models/refrigerator.js";
import OutOfStock from "./models/outofstock.js";
import bcrypt from 'bcryptjs';

const resolvers = {
  Query: {
    getUser: (_, { id }) => {
      return User.findById(id);
    },
    visitors: async () => {
      const visitors = await Visitor.find({});
      return visitors;
    },
    visitors_between: async (_, { start, end }) => {
      const visitors = await Visitor.find({
        time: { $gte: start, $lte: end },
      });
      return visitors;
    },
    opens: async () => {
      const refrigerators = await Refrigerator.find({});
      return refrigerators;
    },
    open: async (_, { id }) => {
      const refrigerator = await Refrigerator.findOne({ id });
      return refrigerator;
    },
    opens_between: async (_, { start, end }) => {
      const refrigerators = await Refrigerator.find({
        start: { $gte: start },
        end: { $lte: end },
      });
      return refrigerators;
    },
    outofstocks: async () => {
      const outOfStocks = await OutOfStock.find({});
      return outOfStocks;
    },
    outofstock: async (_, { shelf }) => {
        const outOfStocks = await OutOfStock.find({ shelf });
        return outOfStocks;
    },
  },
  Mutation: {
    registerUser: async (_, { username, email, password }) => {
      const userCount = await User.countDocuments();
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        id: userCount + 1,
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      return newUser;
    },
    loginUser: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('Invalid email or password');
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        throw new Error('Invalid email or password');
      }

      console.log('login success');

      return user;
    },
    addVisitor: async (_, { time }) => {
        const visitorCount = await Visitor.countDocuments();

        const visitor = new Visitor({ 
            id: visitorCount + 1,
            time 
        });

        await visitor.save();

        return visitor;
    },
    openRefrigerator: async (_, { start, end }) => {
        const refrigeratorCount = await Refrigerator.countDocuments();

        const refrigerator = new Refrigerator({ 
            id: refrigeratorCount + 1,
            start, 
            end 
        });
        
        await refrigerator.save();
        return refrigerator;
    },
    addOutOfStock: async (_, { shelf, time }) => {
        const outOfStock = new OutOfStock({ shelf, time });
        await outOfStock.save();
        return outOfStock;
    },
  },
};
        
export default resolvers;