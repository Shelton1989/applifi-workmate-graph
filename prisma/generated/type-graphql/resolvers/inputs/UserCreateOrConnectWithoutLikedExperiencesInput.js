"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutLikedExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateWithoutLikedExperiencesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutLikedExperiencesInput = class UserCreateOrConnectWithoutLikedExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutLikedExperiencesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikedExperiencesInput_1.UserCreateWithoutLikedExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikedExperiencesInput_1.UserCreateWithoutLikedExperiencesInput)
], UserCreateOrConnectWithoutLikedExperiencesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutLikedExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutLikedExperiencesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutLikedExperiencesInput);
exports.UserCreateOrConnectWithoutLikedExperiencesInput = UserCreateOrConnectWithoutLikedExperiencesInput;
