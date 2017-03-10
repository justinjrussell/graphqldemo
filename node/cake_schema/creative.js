'use strict';

var graphql = require("graphql");
var OfferType = require("./offer");
var StatusType = require("./status");
var HistoryType = require("./history");
var CreativeTypeType = require("./creative_type");

var CreativeType = new graphql.GraphQLObjectType({
    name: 'Creative',
    fields:{
        id: { type: graphql.GraphQLInt },
        //offer: { type: OfferType },
        name: { type: graphql.GraphQLString },
        third_party_name: { type: graphql.GraphQLString },
        creative_type:{ type: CreativeTypeType },
        width:{ type: graphql.GraphQLFloat },
        height:{ type: graphql.GraphQLFloat },
        status:{ type: StatusType },
        expiration_date:{ type: graphql.GraphQLString },
        offer_link:{ type: graphql.GraphQLString },
        allow_link_override:{ type: graphql.GraphQLBoolean },
        notes:{ type: graphql.GraphQLString },
        history:{ type: new graphql.GraphQLList(HistoryType) }
    }
});

module.exports = CreativeType;