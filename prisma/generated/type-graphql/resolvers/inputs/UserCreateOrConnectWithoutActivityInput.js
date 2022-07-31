"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutActivityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutActivityInput_1 = require("../inputs/UserCreateWithoutActivityInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutActivityInput = class UserCreateOrConnectWithoutActivityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutActivityInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutActivityInput_1.UserCreateWithoutActivityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutActivityInput_1.UserCreateWithoutActivityInput)
], UserCreateOrConnectWithoutActivityInput.prototype, "create", void 0);
UserCreateOrConnectWithoutActivityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutActivityInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutActivityInput);
exports.UserCreateOrConnectWithoutActivityInput = UserCreateOrConnectWithoutActivityInput;
