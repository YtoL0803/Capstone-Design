//import { visitor, refrigerator, outofstock } from "./db.js";
/*import Visitor from "./models/visitor.js";
import Refrigerator from "./models/refrigerator.js";
import OutOfStock from "./models/outofstock.js";


const resolvers = {
    Query: {
        visitors: () => Visitor.find()
        ,
        visitors_between: (_, {start, end}) => {
            return Visitor.find({ time: { $gte: start, $lte: end } });
        },
        opens: () => {
            return Refrigerator.find();
        },
        open: (_, {id}) => {
            return Refrigerator.find(refrigerator => refrigerator.id === id)[0];
        },
        opens_between: (_, { start, end }) => {
            return Refrigerator.filter({ time: { $gte: start, $lte: end } });
        },
        outofstocks: () => OutOfStock.find(),
        outofstock: (_, {shelf}) => {
            return OutOfStock.find(outofstock => outofstock.shelf === shelf);
        }
    },
    Mutation : {
        addVisitor: (_, {time}) => {
            let id = Visitor.length + 1;
            let visitor = new Visitor({
                id,
                time
            });
            visitor.save();

            return Visitor.find();
        },
        openRefrigerator: (_, {start, end}) => {
            let id = Refrigerator.length + 1;
            console.log('id: %d, time: %s', Refrigerator[0].id, Refrigerator[0].start);
            console.log('id: %d', id);

            let refrigerator = new Refrigerator({
                id,
                start,
                end
            });
            refrigerator.save();

            return Refrigerator.find();
        },
        addOutOfStock: (_, {shelf, time}) => {
            let outofstock = new OutOfStock({
                shelf,
                time
            });
            outofstock.save();

            return OutOfStock.find();
        }
    }
};

export default resolvers;*/

import Visitor from "./models/visitor.js";
import Refrigerator from "./models/refrigerator.js";
import OutOfStock from "./models/outofstock.js";

const resolvers = {
  Query: {
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
    addVisitor: async (_, { time }) => {
        const visitorCount = await Visitor.countDocuments();

        const visitor = new Visitor({ 
            id: visitorCount + 1,
            time 
        });

        await visitor.save();

        return visitor;;
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