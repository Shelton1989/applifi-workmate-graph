"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPurchaseOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPurchaseOrdersInput_1 = require("../inputs/UserCreateWithoutPurchaseOrdersInput");
const UserUpdateWithoutPurchaseOrdersInput_1 = require("../inputs/UserUpdateWithoutPurchaseOrdersInput");
let UserUpsertWithoutPurchaseOrdersInput = class UserUpsertWithoutPurchaseOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPurchaseOrdersInput_1.UserUpdateWithoutPurchaseOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPurchaseOrdersInput_1.UserUpdateWithoutPurchaseOrdersInput)
], UserUpsertWithoutPurchaseOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPurchaseOrdersInput_1.UserCreateWithoutPurchaseOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPurchaseOrdersInput_1.UserCreateWithoutPurchaseOrdersInput)
], UserUpsertWithoutPurchaseOrdersInput.prototype, "create", void 0);
UserUpsertWithoutPurchaseOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutPurchaseOrdersInput", {
        isAbstract: true
    })
], UserUpsertWithoutPurchaseOrdersInput);
exports.UserUpsertWithoutPurchaseOrdersInput = UserUpsertWithoutPurchaseOrdersInput;
