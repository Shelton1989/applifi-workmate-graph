"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutActivityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutActivityInput_1 = require("../inputs/UserCreateOrConnectWithoutActivityInput");
const UserCreateWithoutActivityInput_1 = require("../inputs/UserCreateWithoutActivityInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutActivityInput = class UserCreateNestedOneWithoutActivityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutActivityInput_1.UserCreateWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutActivityInput_1.UserCreateWithoutActivityInput)
], UserCreateNestedOneWithoutActivityInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutActivityInput_1.UserCreateOrConnectWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutActivityInput_1.UserCreateOrConnectWithoutActivityInput)
], UserCreateNestedOneWithoutActivityInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutActivityInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutActivityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutActivityInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutActivityInput);
exports.UserCreateNestedOneWithoutActivityInput = UserCreateNestedOneWithoutActivityInput;
