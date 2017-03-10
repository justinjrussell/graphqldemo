'use strict';

var graphql = require("graphql");
var AffiliateType = require("./affiliate");
var OfferType = require("./offer");
var CurrencyType = require("./currency");
var MediaTypeType = require("./media_type");
var StatusType = require("./status");
var LinkTypeType = require("./link_type");
var CapIntervalType = require("./cap_interval");
var HistoryType = require("./history");

var CampaignType = new graphql.GraphQLObjectType({
    name: 'Campaign',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        affiliate: { type: AffiliateType },
        media_type: { type: MediaTypeType },
        //offer_contract: { type: OfferType },
        currency: { type: CurrencyType },
        payout: { type: graphql.GraphQLFloat},
        status:{ type: StatusType },
        link_type: { type: LinkTypeType },
        review:{ type: graphql.GraphQLBoolean },
        third_party_name: { type: graphql.GraphQLString },
        allow_device_click:{ type: graphql.GraphQLBoolean },
        paid_redirect: { type: graphql.GraphQLBoolean },
        click_cap:{ type: graphql.GraphQLFloat },
        click_cap_interval: { type: CapIntervalType },
        click_cap_start:{ type: graphql.GraphQLString },
        conversion_cap:{ type: graphql.GraphQLFloat },
        conversion_cap_interval: { type: CapIntervalType },
        conversion_cap_start:{ type: graphql.GraphQLString },
        //redirect_offer_contract:{ type: CampaignType },
        notes:{ type: graphql.GraphQLString },
        history:{ type: new graphql.GraphQLList(HistoryType) },
    }
});

module.exports = CampaignType;