"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutNotificationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutNotificationsInput_1 = require("../inputs/UserCreateOrConnectWithoutNotificationsInput");
const UserCreateWithoutNotificationsInput_1 = require("../inputs/UserCreateWithoutNotificationsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutNotificationsInput = class UserCreateNestedOneWithoutNotificationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNotificationsInput_1.UserCreateWithoutNotificationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNotificationsInput_1.UserCreateWithoutNotificationsInput)
], UserCreateNestedOneWithoutNotificationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotificationsInput_1.UserCreateOrConnectWithoutNotificationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutNotificationsInput_1.UserCreateOrConnectWithoutNotificationsInput)
], UserCreateNestedOneWithoutNotificationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutNotificationsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutNotificationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutNotificationsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutNotificationsInput);
exports.UserCreateNestedOneWithoutNotificationsInput = UserCreateNestedOneWithoutNotificationsInput;
