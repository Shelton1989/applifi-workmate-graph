"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReactionScalarFieldEnum;
(function (ReactionScalarFieldEnum) {
    ReactionScalarFieldEnum["id"] = "id";
    ReactionScalarFieldEnum["type"] = "type";
    ReactionScalarFieldEnum["experienceId"] = "experienceId";
    ReactionScalarFieldEnum["postId"] = "postId";
    ReactionScalarFieldEnum["commentId"] = "commentId";
    ReactionScalarFieldEnum["replyId"] = "replyId";
    ReactionScalarFieldEnum["authorId"] = "authorId";
    ReactionScalarFieldEnum["createdAt"] = "createdAt";
    ReactionScalarFieldEnum["updatedAt"] = "updatedAt";
})(ReactionScalarFieldEnum = exports.ReactionScalarFieldEnum || (exports.ReactionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReactionScalarFieldEnum, {
    name: "ReactionScalarFieldEnum",
    description: undefined,
});
