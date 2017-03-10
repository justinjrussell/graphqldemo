'use strict';

var graphql = require("graphql");
var ContactType = require("./contact");
var StatusType = require("./status");
var CreditLimitOptionType = require("./credit_limit_option");
var HardCapCreditLimitType = require("./hard_cap_credit_limit");
var BillingCycleType = require("./billing_cycle");
var OfferType = require("./offer");
var HistoryType = require("./history");

var AdvertiserType = new graphql.GraphQLObjectType({
    name: 'Advertiser',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        status:{ type: StatusType },
        manager:{ type: ContactType },
        credit_limit_option:{ type: CreditLimitOptionType },
        credit_limit:{ type: graphql.GraphQLInt },
        hard_cap_credit_limit:{ type: HardCapCreditLimitType },
        billing_cycle:{ type: BillingCycleType },
        quick_books_id:{ type: graphql.GraphQLInt },
        website:{ type: graphql.GraphQLString },
        street:{ type: graphql.GraphQLString },
        street2:{ type: graphql.GraphQLString },
        city:{ type: graphql.GraphQLString },
        state:{ type: graphql.GraphQLString },
        zip:{ type: graphql.GraphQLString },
        country:{ type: graphql.GraphQLString },
        offers:{ type: new graphql.GraphQLList(OfferType) },
        notes:{ type: graphql.GraphQLString },
        history:{ type: new graphql.GraphQLList(HistoryType) },
    }
});

module.exports = AdvertiserType;