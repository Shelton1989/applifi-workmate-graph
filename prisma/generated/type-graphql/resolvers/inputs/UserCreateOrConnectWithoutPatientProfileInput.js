"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutPatientProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPatientProfileInput_1 = require("../inputs/UserCreateWithoutPatientProfileInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutPatientProfileInput = class UserCreateOrConnectWithoutPatientProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutPatientProfileInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPatientProfileInput_1.UserCreateWithoutPatientProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPatientProfileInput_1.UserCreateWithoutPatientProfileInput)
], UserCreateOrConnectWithoutPatientProfileInput.prototype, "create", void 0);
UserCreateOrConnectWithoutPatientProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutPatientProfileInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutPatientProfileInput);
exports.UserCreateOrConnectWithoutPatientProfileInput = UserCreateOrConnectWithoutPatientProfileInput;
