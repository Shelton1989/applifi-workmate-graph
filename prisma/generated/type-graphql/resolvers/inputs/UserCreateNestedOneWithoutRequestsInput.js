"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutRequestsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutRequestsInput_1 = require("../inputs/UserCreateOrConnectWithoutRequestsInput");
const UserCreateWithoutRequestsInput_1 = require("../inputs/UserCreateWithoutRequestsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutRequestsInput = class UserCreateNestedOneWithoutRequestsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput)
], UserCreateNestedOneWithoutRequestsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRequestsInput_1.UserCreateOrConnectWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutRequestsInput_1.UserCreateOrConnectWithoutRequestsInput)
], UserCreateNestedOneWithoutRequestsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutRequestsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutRequestsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutRequestsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutRequestsInput);
exports.UserCreateNestedOneWithoutRequestsInput = UserCreateNestedOneWithoutRequestsInput;
