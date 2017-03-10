var graphql = require("graphql");

var CategoryEnum = new graphql.GraphQLEnumType({
    name:'Categories',
    values:{
        SPORTS:{
            value: 'Sports'
        },
        BUSINESS:{
            value: 'Business'
        },
        ENTERTAINMENT:{
            value: 'Entertainment'
        },
        GAMING:{
            value: 'Gaming'
        },
        INSPIRATION:{
            value: 'Inspiration'
        },
        FUN_HUMOR:{
            value: 'Fun and Humor'
        },
        PHOTOGRAPHY:{
            value: 'Photography'
        },
        LIFESTYLE:{
            value: 'Lifestyle'
        },
        TRANSPORTATION:{
            value: 'Transportation'
        },
        NEWS:{
            value: 'News'
        },
        TECHNOLOGY:{
            value: 'Technology'
        },
        FOOD:{
            value: 'Food'
        },
        HEALTH_FITNESS:{
            value: 'Health and Fitness'
        },
        HOME_TRAVEL:{
            value: 'Home and Travel'
        },
        ART_DESIGN:{
            value: 'Art and Design'
        }
    }
});

var SourceType = new graphql.GraphQLObjectType({
    name: 'Source',
    fields:{
        feed_name:{ 
            type: graphql.GraphQLString,
            resolve: function(data){
                return data.FeedName;
            }
        },
        feed_url:{ 
            type: graphql.GraphQLString, 
            resolve: function(data){
                return data.Feedurl;
            }
        },
        categories:{ 
            type: new graphql.GraphQLList(graphql.GraphQLString),
            resolve:function(data){
                return data.Categories;
            }
        },
        is_active:{ 
            type: graphql.GraphQLBoolean, 
            resolve: function(data){
                return data.IsActive;
            }
        },
        error_count:{ 
            type: graphql.GraphQLInt, 
            resolve: function(data){
                return data.ErrorCount;
            }
        }
    }
});

var FeedType = new graphql.GraphQLObjectType({
    name: 'Feed',
    fields:{
        category:{ 
            type: graphql.GraphQLString,
            resolve:function(data){
                return data.Category;
            }
        },
        sources:{ 
            type: new graphql.GraphQLList(SourceType),
            resolve:function(data){
                return data.Sources;
            }
        }
    }
});

var FeedSourceType = new graphql.GraphQLObjectType({
    name:'FeedSource',
    fields:{
        feed_sources:{ type: new graphql.GraphQLList(FeedType)}
    }
});

module.exports = {
    FeedSourceType: FeedSourceType,
    FeedType: FeedType,
    SourceType:SourceType,
    CategoryEnum: CategoryEnum,
};