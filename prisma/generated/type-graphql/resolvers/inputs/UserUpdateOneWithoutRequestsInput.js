"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutRequestsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutRequestsInput_1 = require("../inputs/UserCreateOrConnectWithoutRequestsInput");
const UserCreateWithoutRequestsInput_1 = require("../inputs/UserCreateWithoutRequestsInput");
const UserUpdateWithoutRequestsInput_1 = require("../inputs/UserUpdateWithoutRequestsInput");
const UserUpsertWithoutRequestsInput_1 = require("../inputs/UserUpsertWithoutRequestsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutRequestsInput = class UserUpdateOneWithoutRequestsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput)
], UserUpdateOneWithoutRequestsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRequestsInput_1.UserCreateOrConnectWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutRequestsInput_1.UserCreateOrConnectWithoutRequestsInput)
], UserUpdateOneWithoutRequestsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutRequestsInput_1.UserUpsertWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutRequestsInput_1.UserUpsertWithoutRequestsInput)
], UserUpdateOneWithoutRequestsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutRequestsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutRequestsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutRequestsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRequestsInput_1.UserUpdateWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutRequestsInput_1.UserUpdateWithoutRequestsInput)
], UserUpdateOneWithoutRequestsInput.prototype, "update", void 0);
UserUpdateOneWithoutRequestsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutRequestsInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutRequestsInput);
exports.UserUpdateOneWithoutRequestsInput = UserUpdateOneWithoutRequestsInput;
