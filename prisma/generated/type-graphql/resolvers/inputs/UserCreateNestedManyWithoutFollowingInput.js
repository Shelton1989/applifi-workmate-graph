"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutFollowingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFollowingInput_1 = require("../inputs/UserCreateOrConnectWithoutFollowingInput");
const UserCreateWithoutFollowingInput_1 = require("../inputs/UserCreateWithoutFollowingInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutFollowingInput = class UserCreateNestedManyWithoutFollowingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutFollowingInput_1.UserCreateWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutFollowingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowingInput_1.UserCreateOrConnectWithoutFollowingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutFollowingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutFollowingInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutFollowingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutFollowingInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutFollowingInput);
exports.UserCreateNestedManyWithoutFollowingInput = UserCreateNestedManyWithoutFollowingInput;
