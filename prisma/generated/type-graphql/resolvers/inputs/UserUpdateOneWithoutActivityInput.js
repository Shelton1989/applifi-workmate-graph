"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutActivityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutActivityInput_1 = require("../inputs/UserCreateOrConnectWithoutActivityInput");
const UserCreateWithoutActivityInput_1 = require("../inputs/UserCreateWithoutActivityInput");
const UserUpdateWithoutActivityInput_1 = require("../inputs/UserUpdateWithoutActivityInput");
const UserUpsertWithoutActivityInput_1 = require("../inputs/UserUpsertWithoutActivityInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutActivityInput = class UserUpdateOneWithoutActivityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutActivityInput_1.UserCreateWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutActivityInput_1.UserCreateWithoutActivityInput)
], UserUpdateOneWithoutActivityInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutActivityInput_1.UserCreateOrConnectWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutActivityInput_1.UserCreateOrConnectWithoutActivityInput)
], UserUpdateOneWithoutActivityInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutActivityInput_1.UserUpsertWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutActivityInput_1.UserUpsertWithoutActivityInput)
], UserUpdateOneWithoutActivityInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutActivityInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutActivityInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutActivityInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutActivityInput_1.UserUpdateWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutActivityInput_1.UserUpdateWithoutActivityInput)
], UserUpdateOneWithoutActivityInput.prototype, "update", void 0);
UserUpdateOneWithoutActivityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutActivityInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutActivityInput);
exports.UserUpdateOneWithoutActivityInput = UserUpdateOneWithoutActivityInput;
