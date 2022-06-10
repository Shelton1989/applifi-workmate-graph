"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutInventoryInput_1 = require("../inputs/UserCreateWithoutInventoryInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutInventoryInput = class UserCreateOrConnectWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutInventoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutInventoryInput_1.UserCreateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutInventoryInput_1.UserCreateWithoutInventoryInput)
], UserCreateOrConnectWithoutInventoryInput.prototype, "create", void 0);
UserCreateOrConnectWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutInventoryInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutInventoryInput);
exports.UserCreateOrConnectWithoutInventoryInput = UserCreateOrConnectWithoutInventoryInput;
