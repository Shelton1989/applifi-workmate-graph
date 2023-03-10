"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutPatientProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPatientProfileInput_1 = require("../inputs/UserCreateOrConnectWithoutPatientProfileInput");
const UserCreateWithoutPatientProfileInput_1 = require("../inputs/UserCreateWithoutPatientProfileInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutPatientProfileInput = class UserCreateNestedOneWithoutPatientProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPatientProfileInput_1.UserCreateWithoutPatientProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPatientProfileInput_1.UserCreateWithoutPatientProfileInput)
], UserCreateNestedOneWithoutPatientProfileInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPatientProfileInput_1.UserCreateOrConnectWithoutPatientProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPatientProfileInput_1.UserCreateOrConnectWithoutPatientProfileInput)
], UserCreateNestedOneWithoutPatientProfileInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutPatientProfileInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPatientProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutPatientProfileInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutPatientProfileInput);
exports.UserCreateNestedOneWithoutPatientProfileInput = UserCreateNestedOneWithoutPatientProfileInput;
