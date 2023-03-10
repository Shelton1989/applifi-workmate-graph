"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPatientProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPatientProfileInput_1 = require("../inputs/UserCreateWithoutPatientProfileInput");
const UserUpdateWithoutPatientProfileInput_1 = require("../inputs/UserUpdateWithoutPatientProfileInput");
let UserUpsertWithoutPatientProfileInput = class UserUpsertWithoutPatientProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPatientProfileInput_1.UserUpdateWithoutPatientProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPatientProfileInput_1.UserUpdateWithoutPatientProfileInput)
], UserUpsertWithoutPatientProfileInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPatientProfileInput_1.UserCreateWithoutPatientProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPatientProfileInput_1.UserCreateWithoutPatientProfileInput)
], UserUpsertWithoutPatientProfileInput.prototype, "create", void 0);
UserUpsertWithoutPatientProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutPatientProfileInput", {
        isAbstract: true
    })
], UserUpsertWithoutPatientProfileInput);
exports.UserUpsertWithoutPatientProfileInput = UserUpsertWithoutPatientProfileInput;
