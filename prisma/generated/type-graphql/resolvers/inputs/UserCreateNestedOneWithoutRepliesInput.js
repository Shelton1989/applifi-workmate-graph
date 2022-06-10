"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutRepliesInput_1 = require("../inputs/UserCreateOrConnectWithoutRepliesInput");
const UserCreateWithoutRepliesInput_1 = require("../inputs/UserCreateWithoutRepliesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutRepliesInput = class UserCreateNestedOneWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRepliesInput_1.UserCreateWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRepliesInput_1.UserCreateWithoutRepliesInput)
], UserCreateNestedOneWithoutRepliesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRepliesInput_1.UserCreateOrConnectWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutRepliesInput_1.UserCreateOrConnectWithoutRepliesInput)
], UserCreateNestedOneWithoutRepliesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutRepliesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutRepliesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutRepliesInput);
exports.UserCreateNestedOneWithoutRepliesInput = UserCreateNestedOneWithoutRepliesInput;
