"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutBookingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutBookingsInput_1 = require("../inputs/UserCreateWithoutBookingsInput");
const UserUpdateWithoutBookingsInput_1 = require("../inputs/UserUpdateWithoutBookingsInput");
let UserUpsertWithoutBookingsInput = class UserUpsertWithoutBookingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutBookingsInput_1.UserUpdateWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutBookingsInput_1.UserUpdateWithoutBookingsInput)
], UserUpsertWithoutBookingsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBookingsInput_1.UserCreateWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBookingsInput_1.UserCreateWithoutBookingsInput)
], UserUpsertWithoutBookingsInput.prototype, "create", void 0);
UserUpsertWithoutBookingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutBookingsInput", {
        isAbstract: true
    })
], UserUpsertWithoutBookingsInput);
exports.UserUpsertWithoutBookingsInput = UserUpsertWithoutBookingsInput;
