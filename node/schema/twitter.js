var graphql = require("graphql");

var TwitterUserType = new graphql.GraphQLObjectType({
     name:'TwitterUser',
     fields: {
       id: { type: graphql.GraphQLID },
       id_str: { type: graphql.GraphQLString },
       name: { type: graphql.GraphQLString },
       screen_name: { type: graphql.GraphQLString },
       location: { type: graphql.GraphQLString },
       description: { type: graphql.GraphQLString },
       url: { type: graphql.GraphQLString },
       followers_count: { type: graphql.GraphQLInt },
       friends_count: { type: graphql.GraphQLInt },
       listed_count: { type: graphql.GraphQLInt },
       created_at: { type: graphql.GraphQLString },
       favourites_count: { type: graphql.GraphQLInt },
       utc_offset: { type: graphql.GraphQLInt },
       time_zone: { type: graphql.GraphQLString },
       geo_enabled: { type: graphql.GraphQLBoolean },
       verified: { type: graphql.GraphQLBoolean },
       statuses_count: { type: graphql.GraphQLInt },
       lang: { type: graphql.GraphQLString },
       contributors_enabled: { type: graphql.GraphQLBoolean },
       is_translator: { type: graphql.GraphQLBoolean },
       is_translation_enabled: { type: graphql.GraphQLBoolean },
       profile_background_color: { type: graphql.GraphQLString },
       profile_background_image_url: { type: graphql.GraphQLString },
       profile_background_image_url_https: { type: graphql.GraphQLString },
       profile_background_tile: { type: graphql.GraphQLBoolean },
       profile_image_url: { type: graphql.GraphQLString },
       profile_image_url_https: { type: graphql.GraphQLString },
       profile_banner_url: { type: graphql.GraphQLString },
       profile_link_color: { type: graphql.GraphQLString },
       profile_sidebar_border_color: { type: graphql.GraphQLString },
       profile_sidebar_fill_color: { type: graphql.GraphQLString },
       profile_text_color: { type: graphql.GraphQLString },
       profile_use_background_image: { type: graphql.GraphQLBoolean },
       has_extended_profile: { type: graphql.GraphQLBoolean },
       default_profile: { type: graphql.GraphQLBoolean },
       default_profile_image: { type: graphql.GraphQLBoolean },
       following: { type: graphql.GraphQLBoolean },
       follow_request_sent: { type: graphql.GraphQLBoolean },
       notifications: { type: graphql.GraphQLBoolean }
     }
});

var TwitterUserTimelineType = new graphql.GraphQLObjectType({
     name:'TwitterUserTimeline',
     fields:{
       created_at: { type: graphql.GraphQLString },
       id: { type: graphql.GraphQLID },
       id_str: { type: graphql.GraphQLString },
       text: { type: graphql.GraphQLString },
       source: { type: graphql.GraphQLString },
       truncated: { type: graphql.GraphQLBoolean },
       in_reply_to_status_id: { type: graphql.GraphQLInt },
       in_reply_to_status_id_str: { type: graphql.GraphQLString },
       in_reply_to_user_id: { type: graphql.GraphQLInt },
       in_reply_to_user_id_str: { type: graphql.GraphQLString },
       in_reply_to_screen_name: { type: graphql.GraphQLString },
       user: { type: TwitterUserType  },
       geo: { type: graphql.GraphQLString },
       coordinates: { type: graphql.GraphQLString },
       place: { type: graphql.GraphQLString },
       contributors: { type: graphql.GraphQLString },
       is_quote_status: { type: graphql.GraphQLBoolean },
       retweet_count: { type: graphql.GraphQLInt },
       favorite_count: { type: graphql.GraphQLInt },
       favorited: { type: graphql.GraphQLBoolean },
       retweeted: { type: graphql.GraphQLBoolean },
       possibly_sensitive: { type: graphql.GraphQLBoolean },
       lang: { type: graphql.GraphQLString }
     }
});

var TwitterUserTimelineListType = new graphql.GraphQLObjectType({
     name:'TwitterUserTimelineList',
     fields:{
         user_timeline: {
             type: new graphql.GraphQLList(TwitterUserTimelineType),
         }
     }
});

module.exports = TwitterUserTimelineListType