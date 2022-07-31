"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutNotificationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutNotificationsInput_1 = require("../inputs/UserCreateWithoutNotificationsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutNotificationsInput = class UserCreateOrConnectWithoutNotificationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutNotificationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNotificationsInput_1.UserCreateWithoutNotificationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNotificationsInput_1.UserCreateWithoutNotificationsInput)
], UserCreateOrConnectWithoutNotificationsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutNotificationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutNotificationsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutNotificationsInput);
exports.UserCreateOrConnectWithoutNotificationsInput = UserCreateOrConnectWithoutNotificationsInput;
