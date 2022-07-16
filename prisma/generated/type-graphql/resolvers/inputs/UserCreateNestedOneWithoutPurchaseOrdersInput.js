"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutPurchaseOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPurchaseOrdersInput_1 = require("../inputs/UserCreateOrConnectWithoutPurchaseOrdersInput");
const UserCreateWithoutPurchaseOrdersInput_1 = require("../inputs/UserCreateWithoutPurchaseOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutPurchaseOrdersInput = class UserCreateNestedOneWithoutPurchaseOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPurchaseOrdersInput_1.UserCreateWithoutPurchaseOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPurchaseOrdersInput_1.UserCreateWithoutPurchaseOrdersInput)
], UserCreateNestedOneWithoutPurchaseOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPurchaseOrdersInput_1.UserCreateOrConnectWithoutPurchaseOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPurchaseOrdersInput_1.UserCreateOrConnectWithoutPurchaseOrdersInput)
], UserCreateNestedOneWithoutPurchaseOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutPurchaseOrdersInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPurchaseOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutPurchaseOrdersInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutPurchaseOrdersInput);
exports.UserCreateNestedOneWithoutPurchaseOrdersInput = UserCreateNestedOneWithoutPurchaseOrdersInput;