"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutQueriesInput_1 = require("../inputs/UserCreateWithoutQueriesInput");
const UserUpdateWithoutQueriesInput_1 = require("../inputs/UserUpdateWithoutQueriesInput");
let UserUpsertWithoutQueriesInput = class UserUpsertWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutQueriesInput_1.UserUpdateWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutQueriesInput_1.UserUpdateWithoutQueriesInput)
], UserUpsertWithoutQueriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutQueriesInput_1.UserCreateWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutQueriesInput_1.UserCreateWithoutQueriesInput)
], UserUpsertWithoutQueriesInput.prototype, "create", void 0);
UserUpsertWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutQueriesInput", {
        isAbstract: true
    })
], UserUpsertWithoutQueriesInput);
exports.UserUpsertWithoutQueriesInput = UserUpsertWithoutQueriesInput;
