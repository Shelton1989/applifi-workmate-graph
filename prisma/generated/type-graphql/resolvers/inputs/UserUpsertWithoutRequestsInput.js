"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutRequestsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutRequestsInput_1 = require("../inputs/UserCreateWithoutRequestsInput");
const UserUpdateWithoutRequestsInput_1 = require("../inputs/UserUpdateWithoutRequestsInput");
let UserUpsertWithoutRequestsInput = class UserUpsertWithoutRequestsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRequestsInput_1.UserUpdateWithoutRequestsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutRequestsInput_1.UserUpdateWithoutRequestsInput)
], UserUpsertWithoutRequestsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput)
], UserUpsertWithoutRequestsInput.prototype, "create", void 0);
UserUpsertWithoutRequestsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutRequestsInput", {
        isAbstract: true
    })
], UserUpsertWithoutRequestsInput);
exports.UserUpsertWithoutRequestsInput = UserUpsertWithoutRequestsInput;
