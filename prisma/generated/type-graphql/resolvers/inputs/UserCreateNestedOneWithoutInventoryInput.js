"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutInventoryInput_1 = require("../inputs/UserCreateOrConnectWithoutInventoryInput");
const UserCreateWithoutInventoryInput_1 = require("../inputs/UserCreateWithoutInventoryInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutInventoryInput = class UserCreateNestedOneWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutInventoryInput_1.UserCreateWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutInventoryInput_1.UserCreateWithoutInventoryInput)
], UserCreateNestedOneWithoutInventoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInventoryInput_1.UserCreateOrConnectWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutInventoryInput_1.UserCreateOrConnectWithoutInventoryInput)
], UserCreateNestedOneWithoutInventoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutInventoryInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutInventoryInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutInventoryInput);
exports.UserCreateNestedOneWithoutInventoryInput = UserCreateNestedOneWithoutInventoryInput;
