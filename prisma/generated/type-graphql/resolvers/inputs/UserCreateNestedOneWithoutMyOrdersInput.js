"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutMyOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMyOrdersInput_1 = require("../inputs/UserCreateOrConnectWithoutMyOrdersInput");
const UserCreateWithoutMyOrdersInput_1 = require("../inputs/UserCreateWithoutMyOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutMyOrdersInput = class UserCreateNestedOneWithoutMyOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMyOrdersInput_1.UserCreateWithoutMyOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMyOrdersInput_1.UserCreateWithoutMyOrdersInput)
], UserCreateNestedOneWithoutMyOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMyOrdersInput_1.UserCreateOrConnectWithoutMyOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMyOrdersInput_1.UserCreateOrConnectWithoutMyOrdersInput)
], UserCreateNestedOneWithoutMyOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutMyOrdersInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutMyOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutMyOrdersInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutMyOrdersInput);
exports.UserCreateNestedOneWithoutMyOrdersInput = UserCreateNestedOneWithoutMyOrdersInput;
