"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["uid"] = "uid";
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["username"] = "username";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["role"] = "role";
    UserScalarFieldEnum["firstName"] = "firstName";
    UserScalarFieldEnum["lastName"] = "lastName";
    UserScalarFieldEnum["avatar"] = "avatar";
    UserScalarFieldEnum["coverImage"] = "coverImage";
    UserScalarFieldEnum["dateOfBirth"] = "dateOfBirth";
    UserScalarFieldEnum["biography"] = "biography";
    UserScalarFieldEnum["hasAcceptedTerms"] = "hasAcceptedTerms";
    UserScalarFieldEnum["isFirstTimeUser"] = "isFirstTimeUser";
    UserScalarFieldEnum["isVerified"] = "isVerified";
    UserScalarFieldEnum["followingIds"] = "followingIds";
    UserScalarFieldEnum["followerIds"] = "followerIds";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
