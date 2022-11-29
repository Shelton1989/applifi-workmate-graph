"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TopicListsScalarFieldEnum;
(function (TopicListsScalarFieldEnum) {
    TopicListsScalarFieldEnum["id"] = "id";
    TopicListsScalarFieldEnum["type"] = "type";
    TopicListsScalarFieldEnum["title"] = "title";
    TopicListsScalarFieldEnum["lists"] = "lists";
    TopicListsScalarFieldEnum["createdAt"] = "createdAt";
    TopicListsScalarFieldEnum["updatedAt"] = "updatedAt";
})(TopicListsScalarFieldEnum = exports.TopicListsScalarFieldEnum || (exports.TopicListsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TopicListsScalarFieldEnum, {
    name: "TopicListsScalarFieldEnum",
    description: undefined,
});
