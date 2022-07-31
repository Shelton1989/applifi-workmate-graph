"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutActivityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutActivityInput_1 = require("../inputs/UserCreateWithoutActivityInput");
const UserUpdateWithoutActivityInput_1 = require("../inputs/UserUpdateWithoutActivityInput");
let UserUpsertWithoutActivityInput = class UserUpsertWithoutActivityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutActivityInput_1.UserUpdateWithoutActivityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutActivityInput_1.UserUpdateWithoutActivityInput)
], UserUpsertWithoutActivityInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutActivityInput_1.UserCreateWithoutActivityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutActivityInput_1.UserCreateWithoutActivityInput)
], UserUpsertWithoutActivityInput.prototype, "create", void 0);
UserUpsertWithoutActivityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutActivityInput", {
        isAbstract: true
    })
], UserUpsertWithoutActivityInput);
exports.UserUpsertWithoutActivityInput = UserUpsertWithoutActivityInput;
