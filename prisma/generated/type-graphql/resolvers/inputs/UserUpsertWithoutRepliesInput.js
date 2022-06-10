"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutRepliesInput_1 = require("../inputs/UserCreateWithoutRepliesInput");
const UserUpdateWithoutRepliesInput_1 = require("../inputs/UserUpdateWithoutRepliesInput");
let UserUpsertWithoutRepliesInput = class UserUpsertWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRepliesInput_1.UserUpdateWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutRepliesInput_1.UserUpdateWithoutRepliesInput)
], UserUpsertWithoutRepliesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRepliesInput_1.UserCreateWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRepliesInput_1.UserCreateWithoutRepliesInput)
], UserUpsertWithoutRepliesInput.prototype, "create", void 0);
UserUpsertWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutRepliesInput", {
        isAbstract: true
    })
], UserUpsertWithoutRepliesInput);
exports.UserUpsertWithoutRepliesInput = UserUpsertWithoutRepliesInput;
