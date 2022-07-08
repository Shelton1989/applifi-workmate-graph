"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutPurchaseOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPurchaseOrdersInput_1 = require("../inputs/UserCreateWithoutPurchaseOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutPurchaseOrdersInput = class UserCreateOrConnectWithoutPurchaseOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutPurchaseOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPurchaseOrdersInput_1.UserCreateWithoutPurchaseOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPurchaseOrdersInput_1.UserCreateWithoutPurchaseOrdersInput)
], UserCreateOrConnectWithoutPurchaseOrdersInput.prototype, "create", void 0);
UserCreateOrConnectWithoutPurchaseOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutPurchaseOrdersInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutPurchaseOrdersInput);
exports.UserCreateOrConnectWithoutPurchaseOrdersInput = UserCreateOrConnectWithoutPurchaseOrdersInput;
