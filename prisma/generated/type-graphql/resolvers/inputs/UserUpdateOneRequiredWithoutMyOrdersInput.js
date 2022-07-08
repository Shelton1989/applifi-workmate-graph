"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutMyOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMyOrdersInput_1 = require("../inputs/UserCreateOrConnectWithoutMyOrdersInput");
const UserCreateWithoutMyOrdersInput_1 = require("../inputs/UserCreateWithoutMyOrdersInput");
const UserUpdateWithoutMyOrdersInput_1 = require("../inputs/UserUpdateWithoutMyOrdersInput");
const UserUpsertWithoutMyOrdersInput_1 = require("../inputs/UserUpsertWithoutMyOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutMyOrdersInput = class UserUpdateOneRequiredWithoutMyOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMyOrdersInput_1.UserCreateWithoutMyOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMyOrdersInput_1.UserCreateWithoutMyOrdersInput)
], UserUpdateOneRequiredWithoutMyOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMyOrdersInput_1.UserCreateOrConnectWithoutMyOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMyOrdersInput_1.UserCreateOrConnectWithoutMyOrdersInput)
], UserUpdateOneRequiredWithoutMyOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutMyOrdersInput_1.UserUpsertWithoutMyOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutMyOrdersInput_1.UserUpsertWithoutMyOrdersInput)
], UserUpdateOneRequiredWithoutMyOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutMyOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMyOrdersInput_1.UserUpdateWithoutMyOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMyOrdersInput_1.UserUpdateWithoutMyOrdersInput)
], UserUpdateOneRequiredWithoutMyOrdersInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutMyOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMyOrdersInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutMyOrdersInput);
exports.UserUpdateOneRequiredWithoutMyOrdersInput = UserUpdateOneRequiredWithoutMyOrdersInput;
