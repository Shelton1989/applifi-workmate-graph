"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReactionsInput_1 = require("../inputs/UserCreateWithoutReactionsInput");
const UserUpdateWithoutReactionsInput_1 = require("../inputs/UserUpdateWithoutReactionsInput");
let UserUpsertWithoutReactionsInput = class UserUpsertWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReactionsInput_1.UserUpdateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReactionsInput_1.UserUpdateWithoutReactionsInput)
], UserUpsertWithoutReactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionsInput_1.UserCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionsInput_1.UserCreateWithoutReactionsInput)
], UserUpsertWithoutReactionsInput.prototype, "create", void 0);
UserUpsertWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutReactionsInput", {
        isAbstract: true
    })
], UserUpsertWithoutReactionsInput);
exports.UserUpsertWithoutReactionsInput = UserUpsertWithoutReactionsInput;
