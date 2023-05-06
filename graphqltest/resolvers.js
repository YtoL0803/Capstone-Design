import { visitor, refrigerator, outofstock } from "./db.js";

const resolvers = {
    Query: {
        visitors: () => visitor,
        visitors_between: (_, {start, end}) => {
            return visitor.filter(visitors_day => visitors_day.time >= start && visitors_day.time <= end)
        },
        opens: () => refrigerator,
        open: (_, {id}) => {
            return refrigerator.filter(refrigerator => refrigerator.id === id)[0];
        },
        opens_between: (_, { start, end }) => {
            return refrigerator.filter(refrigerator => refrigerator.start >= start && refrigerator.end <= end);
        },
        outofstocks: () => outofstock,
        outofstock: (_, {shelf}) => {
            return outofstock.filter(outofstock => outofstock.shelf === shelf);
        }
    },
    Mutation : {
        addVisitor: (_, {time}) => {
            visitor.push({id: (visitor.length + 1), time})
            return visitor
        },
        openRefrigerator: (_, {start, end}) => {
            refrigerator.push({id: (refrigerator.length + 1), start, end})
            return refrigerator
        },
        addOutOfStock: (_, {shelf, time}) => {
            outofstock.push({shelf, time})
            return outofstock
        }
    }
};

export default resolvers;