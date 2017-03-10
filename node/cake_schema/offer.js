'use strict';

var graphql = require("graphql");
var AdvertiserType = require("./advertiser");
var VerticalType = require("./vertical");
var CurrencyType = require("./currency");
var PriceFormatType = require("./price_format");
var StatusType = require("./status");
var LinkTypeType = require("./link_type");
var CreativeType = require("./creative");
var CampaignType = require("./campaign");
var ContractType = require("./contract");
var HistoryType = require("./history");

var OfferType = new graphql.GraphQLObjectType({
    name: 'Offer',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        //advertiser: { type: AdvertiserType },
        vertical: { type: VerticalType },
        currency: { type: CurrencyType },
        price_format: { type: PriceFormatType },
        third_party_name: { type: graphql.GraphQLString },
        redirect_parameters: { type: graphql.GraphQLString },
        confirmation_link: { type: graphql.GraphQLString },
        ssl: { type: graphql.GraphQLBoolean },
        received: { type: graphql.GraphQLFloat},
        default_payout: { type: graphql.GraphQLFloat},
        status : { type: StatusType },
        link_type: { type: LinkTypeType },
        hidden: { type: graphql.GraphQLBoolean },
        creatives:{ type: new graphql.GraphQLList(CreativeType) },
        campaigns:{ type: new graphql.GraphQLList(CampaignType) },
        contracts:{ type: new graphql.GraphQLList(ContractType) },
        notes:{ type: graphql.GraphQLString },
        history:{ type: new graphql.GraphQLList(HistoryType) }
    }
});

module.exports = OfferType;