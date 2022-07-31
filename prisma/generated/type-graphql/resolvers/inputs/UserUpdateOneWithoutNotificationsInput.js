"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutNotificationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutNotificationsInput_1 = require("../inputs/UserCreateOrConnectWithoutNotificationsInput");
const UserCreateWithoutNotificationsInput_1 = require("../inputs/UserCreateWithoutNotificationsInput");
const UserUpdateWithoutNotificationsInput_1 = require("../inputs/UserUpdateWithoutNotificationsInput");
const UserUpsertWithoutNotificationsInput_1 = require("../inputs/UserUpsertWithoutNotificationsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutNotificationsInput = class UserUpdateOneWithoutNotificationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNotificationsInput_1.UserCreateWithoutNotificationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNotificationsInput_1.UserCreateWithoutNotificationsInput)
], UserUpdateOneWithoutNotificationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotificationsInput_1.UserCreateOrConnectWithoutNotificationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutNotificationsInput_1.UserCreateOrConnectWithoutNotificationsInput)
], UserUpdateOneWithoutNotificationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutNotificationsInput_1.UserUpsertWithoutNotificationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutNotificationsInput_1.UserUpsertWithoutNotificationsInput)
], UserUpdateOneWithoutNotificationsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutNotificationsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutNotificationsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutNotificationsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutNotificationsInput_1.UserUpdateWithoutNotificationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutNotificationsInput_1.UserUpdateWithoutNotificationsInput)
], UserUpdateOneWithoutNotificationsInput.prototype, "update", void 0);
UserUpdateOneWithoutNotificationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutNotificationsInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutNotificationsInput);
exports.UserUpdateOneWithoutNotificationsInput = UserUpdateOneWithoutNotificationsInput;
