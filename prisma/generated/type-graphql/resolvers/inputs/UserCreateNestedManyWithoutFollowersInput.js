"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFollowersInput_1 = require("../inputs/UserCreateOrConnectWithoutFollowersInput");
const UserCreateWithoutFollowersInput_1 = require("../inputs/UserCreateWithoutFollowersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutFollowersInput = class UserCreateNestedManyWithoutFollowersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutFollowersInput_1.UserCreateWithoutFollowersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutFollowersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowersInput_1.UserCreateOrConnectWithoutFollowersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutFollowersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutFollowersInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutFollowersInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutFollowersInput);
exports.UserCreateNestedManyWithoutFollowersInput = UserCreateNestedManyWithoutFollowersInput;
