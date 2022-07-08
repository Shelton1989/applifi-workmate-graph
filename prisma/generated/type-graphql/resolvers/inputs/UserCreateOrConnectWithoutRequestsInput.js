"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutRequestsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutRequestsInput_1 = require("../inputs/UserCreateWithoutRequestsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutRequestsInput = class UserCreateOrConnectWithoutRequestsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutRequestsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput)
], UserCreateOrConnectWithoutRequestsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutRequestsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutRequestsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutRequestsInput);
exports.UserCreateOrConnectWithoutRequestsInput = UserCreateOrConnectWithoutRequestsInput;
