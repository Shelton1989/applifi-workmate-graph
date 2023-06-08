"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutCreatedDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCreatedDocumentsInput_1 = require("../inputs/UserCreateOrConnectWithoutCreatedDocumentsInput");
const UserCreateWithoutCreatedDocumentsInput_1 = require("../inputs/UserCreateWithoutCreatedDocumentsInput");
const UserUpdateWithoutCreatedDocumentsInput_1 = require("../inputs/UserUpdateWithoutCreatedDocumentsInput");
const UserUpsertWithoutCreatedDocumentsInput_1 = require("../inputs/UserUpsertWithoutCreatedDocumentsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutCreatedDocumentsInput = class UserUpdateOneWithoutCreatedDocumentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedDocumentsInput_1.UserCreateWithoutCreatedDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedDocumentsInput_1.UserCreateWithoutCreatedDocumentsInput)
], UserUpdateOneWithoutCreatedDocumentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedDocumentsInput_1.UserCreateOrConnectWithoutCreatedDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCreatedDocumentsInput_1.UserCreateOrConnectWithoutCreatedDocumentsInput)
], UserUpdateOneWithoutCreatedDocumentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutCreatedDocumentsInput_1.UserUpsertWithoutCreatedDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutCreatedDocumentsInput_1.UserUpsertWithoutCreatedDocumentsInput)
], UserUpdateOneWithoutCreatedDocumentsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutCreatedDocumentsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutCreatedDocumentsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutCreatedDocumentsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCreatedDocumentsInput_1.UserUpdateWithoutCreatedDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCreatedDocumentsInput_1.UserUpdateWithoutCreatedDocumentsInput)
], UserUpdateOneWithoutCreatedDocumentsInput.prototype, "update", void 0);
UserUpdateOneWithoutCreatedDocumentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutCreatedDocumentsInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutCreatedDocumentsInput);
exports.UserUpdateOneWithoutCreatedDocumentsInput = UserUpdateOneWithoutCreatedDocumentsInput;
