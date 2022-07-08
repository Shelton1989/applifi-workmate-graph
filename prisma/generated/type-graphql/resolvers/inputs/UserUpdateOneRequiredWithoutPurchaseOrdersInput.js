"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutPurchaseOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPurchaseOrdersInput_1 = require("../inputs/UserCreateOrConnectWithoutPurchaseOrdersInput");
const UserCreateWithoutPurchaseOrdersInput_1 = require("../inputs/UserCreateWithoutPurchaseOrdersInput");
const UserUpdateWithoutPurchaseOrdersInput_1 = require("../inputs/UserUpdateWithoutPurchaseOrdersInput");
const UserUpsertWithoutPurchaseOrdersInput_1 = require("../inputs/UserUpsertWithoutPurchaseOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutPurchaseOrdersInput = class UserUpdateOneRequiredWithoutPurchaseOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPurchaseOrdersInput_1.UserCreateWithoutPurchaseOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPurchaseOrdersInput_1.UserCreateWithoutPurchaseOrdersInput)
], UserUpdateOneRequiredWithoutPurchaseOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPurchaseOrdersInput_1.UserCreateOrConnectWithoutPurchaseOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPurchaseOrdersInput_1.UserCreateOrConnectWithoutPurchaseOrdersInput)
], UserUpdateOneRequiredWithoutPurchaseOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutPurchaseOrdersInput_1.UserUpsertWithoutPurchaseOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutPurchaseOrdersInput_1.UserUpsertWithoutPurchaseOrdersInput)
], UserUpdateOneRequiredWithoutPurchaseOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutPurchaseOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPurchaseOrdersInput_1.UserUpdateWithoutPurchaseOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPurchaseOrdersInput_1.UserUpdateWithoutPurchaseOrdersInput)
], UserUpdateOneRequiredWithoutPurchaseOrdersInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutPurchaseOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPurchaseOrdersInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutPurchaseOrdersInput);
exports.UserUpdateOneRequiredWithoutPurchaseOrdersInput = UserUpdateOneRequiredWithoutPurchaseOrdersInput;
