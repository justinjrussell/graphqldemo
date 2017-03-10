'use strict';

var graphql = require("graphql");
var ContactTypeType = require("./contact_type");
var TimezoneType = require("./timezone");
var LanguageType = require("./language");
var DepartmentType = require("./department");
var RoleType = require("./role");

var ContactType = new graphql.GraphQLObjectType({
    name: 'Contact',
    fields: {
        id: { type: graphql.GraphQLInt },
        contact_type:{ type: ContactTypeType },
        name: { type: graphql.GraphQLString },
        first_name:{ type: graphql.GraphQLString },
        last_name:{ type: graphql.GraphQLString },
        email:{ type: graphql.GraphQLString },
        include_mass_emails: { type: graphql.GraphQLBoolean },
        work_phone:{ type: graphql.GraphQLString },
        cell_phone:{ type: graphql.GraphQLString },
        im_service:{ type: graphql.GraphQLString },
        im_name:{ type: graphql.GraphQLString },
        fax:{ type: graphql.GraphQLString },
        timezone:{ type: TimezoneType },
        title:{ type: graphql.GraphQLString },
        language:{ type: LanguageType },
        department:{ type: DepartmentType },
        role:{ type: RoleType },
        notes:{ type: graphql.GraphQLString }
    }
});

module.exports = ContactType;