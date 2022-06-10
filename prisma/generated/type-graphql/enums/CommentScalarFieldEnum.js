"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CommentScalarFieldEnum;
(function (CommentScalarFieldEnum) {
    CommentScalarFieldEnum["id"] = "id";
    CommentScalarFieldEnum["text"] = "text";
    CommentScalarFieldEnum["postId"] = "postId";
    CommentScalarFieldEnum["authorId"] = "authorId";
    CommentScalarFieldEnum["createdAt"] = "createdAt";
    CommentScalarFieldEnum["updatedAt"] = "updatedAt";
})(CommentScalarFieldEnum = exports.CommentScalarFieldEnum || (exports.CommentScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
    name: "CommentScalarFieldEnum",
    description: undefined,
});
