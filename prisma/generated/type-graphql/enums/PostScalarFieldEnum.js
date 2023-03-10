"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["type"] = "type";
    PostScalarFieldEnum["caption"] = "caption";
    PostScalarFieldEnum["mediaUrl"] = "mediaUrl";
    PostScalarFieldEnum["rating"] = "rating";
    PostScalarFieldEnum["isCommentsEnabled"] = "isCommentsEnabled";
    PostScalarFieldEnum["canBeCounted"] = "canBeCounted";
    PostScalarFieldEnum["authorId"] = "authorId";
    PostScalarFieldEnum["mealId"] = "mealId";
    PostScalarFieldEnum["postLink"] = "postLink";
    PostScalarFieldEnum["createdAt"] = "createdAt";
    PostScalarFieldEnum["updatedAt"] = "updatedAt";
})(PostScalarFieldEnum = exports.PostScalarFieldEnum || (exports.PostScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
    name: "PostScalarFieldEnum",
    description: undefined,
});
