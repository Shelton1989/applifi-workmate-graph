"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutOrderInput_1 = require("../inputs/UserCreateWithoutOrderInput");
const UserUpdateWithoutOrderInput_1 = require("../inputs/UserUpdateWithoutOrderInput");
let UserUpsertWithoutOrderInput = class UserUpsertWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutOrderInput_1.UserUpdateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutOrderInput_1.UserUpdateWithoutOrderInput)
], UserUpsertWithoutOrderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrderInput_1.UserCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrderInput_1.UserCreateWithoutOrderInput)
], UserUpsertWithoutOrderInput.prototype, "create", void 0);
UserUpsertWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutOrderInput", {
        isAbstract: true
    })
], UserUpsertWithoutOrderInput);
exports.UserUpsertWithoutOrderInput = UserUpsertWithoutOrderInput;
