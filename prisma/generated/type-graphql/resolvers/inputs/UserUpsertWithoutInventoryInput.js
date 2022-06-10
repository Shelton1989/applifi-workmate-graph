"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutInventoryInput_1 = require("../inputs/UserCreateWithoutInventoryInput");
const UserUpdateWithoutInventoryInput_1 = require("../inputs/UserUpdateWithoutInventoryInput");
let UserUpsertWithoutInventoryInput = class UserUpsertWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutInventoryInput_1.UserUpdateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutInventoryInput_1.UserUpdateWithoutInventoryInput)
], UserUpsertWithoutInventoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutInventoryInput_1.UserCreateWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutInventoryInput_1.UserCreateWithoutInventoryInput)
], UserUpsertWithoutInventoryInput.prototype, "create", void 0);
UserUpsertWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutInventoryInput", {
        isAbstract: true
    })
], UserUpsertWithoutInventoryInput);
exports.UserUpsertWithoutInventoryInput = UserUpsertWithoutInventoryInput;
