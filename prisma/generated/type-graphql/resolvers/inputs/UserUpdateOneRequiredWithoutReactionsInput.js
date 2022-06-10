"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReactionsInput_1 = require("../inputs/UserCreateOrConnectWithoutReactionsInput");
const UserCreateWithoutReactionsInput_1 = require("../inputs/UserCreateWithoutReactionsInput");
const UserUpdateWithoutReactionsInput_1 = require("../inputs/UserUpdateWithoutReactionsInput");
const UserUpsertWithoutReactionsInput_1 = require("../inputs/UserUpsertWithoutReactionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutReactionsInput = class UserUpdateOneRequiredWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionsInput_1.UserCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionsInput_1.UserCreateWithoutReactionsInput)
], UserUpdateOneRequiredWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionsInput_1.UserCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReactionsInput_1.UserCreateOrConnectWithoutReactionsInput)
], UserUpdateOneRequiredWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutReactionsInput_1.UserUpsertWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutReactionsInput_1.UserUpsertWithoutReactionsInput)
], UserUpdateOneRequiredWithoutReactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutReactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReactionsInput_1.UserUpdateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReactionsInput_1.UserUpdateWithoutReactionsInput)
], UserUpdateOneRequiredWithoutReactionsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReactionsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutReactionsInput);
exports.UserUpdateOneRequiredWithoutReactionsInput = UserUpdateOneRequiredWithoutReactionsInput;
