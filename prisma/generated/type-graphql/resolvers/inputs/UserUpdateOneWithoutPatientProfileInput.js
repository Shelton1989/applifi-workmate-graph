"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutPatientProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPatientProfileInput_1 = require("../inputs/UserCreateOrConnectWithoutPatientProfileInput");
const UserCreateWithoutPatientProfileInput_1 = require("../inputs/UserCreateWithoutPatientProfileInput");
const UserUpdateWithoutPatientProfileInput_1 = require("../inputs/UserUpdateWithoutPatientProfileInput");
const UserUpsertWithoutPatientProfileInput_1 = require("../inputs/UserUpsertWithoutPatientProfileInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutPatientProfileInput = class UserUpdateOneWithoutPatientProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPatientProfileInput_1.UserCreateWithoutPatientProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPatientProfileInput_1.UserCreateWithoutPatientProfileInput)
], UserUpdateOneWithoutPatientProfileInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPatientProfileInput_1.UserCreateOrConnectWithoutPatientProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPatientProfileInput_1.UserCreateOrConnectWithoutPatientProfileInput)
], UserUpdateOneWithoutPatientProfileInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutPatientProfileInput_1.UserUpsertWithoutPatientProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutPatientProfileInput_1.UserUpsertWithoutPatientProfileInput)
], UserUpdateOneWithoutPatientProfileInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutPatientProfileInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutPatientProfileInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutPatientProfileInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPatientProfileInput_1.UserUpdateWithoutPatientProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPatientProfileInput_1.UserUpdateWithoutPatientProfileInput)
], UserUpdateOneWithoutPatientProfileInput.prototype, "update", void 0);
UserUpdateOneWithoutPatientProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutPatientProfileInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutPatientProfileInput);
exports.UserUpdateOneWithoutPatientProfileInput = UserUpdateOneWithoutPatientProfileInput;
