"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReplyScalarFieldEnum;
(function (ReplyScalarFieldEnum) {
    ReplyScalarFieldEnum["id"] = "id";
    ReplyScalarFieldEnum["text"] = "text";
    ReplyScalarFieldEnum["commentId"] = "commentId";
    ReplyScalarFieldEnum["authorId"] = "authorId";
    ReplyScalarFieldEnum["createdAt"] = "createdAt";
    ReplyScalarFieldEnum["updatedAt"] = "updatedAt";
})(ReplyScalarFieldEnum = exports.ReplyScalarFieldEnum || (exports.ReplyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReplyScalarFieldEnum, {
    name: "ReplyScalarFieldEnum",
    description: undefined,
});
