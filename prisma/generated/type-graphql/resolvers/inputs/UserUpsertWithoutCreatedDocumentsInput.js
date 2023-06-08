"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutCreatedDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCreatedDocumentsInput_1 = require("../inputs/UserCreateWithoutCreatedDocumentsInput");
const UserUpdateWithoutCreatedDocumentsInput_1 = require("../inputs/UserUpdateWithoutCreatedDocumentsInput");
let UserUpsertWithoutCreatedDocumentsInput = class UserUpsertWithoutCreatedDocumentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCreatedDocumentsInput_1.UserUpdateWithoutCreatedDocumentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCreatedDocumentsInput_1.UserUpdateWithoutCreatedDocumentsInput)
], UserUpsertWithoutCreatedDocumentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedDocumentsInput_1.UserCreateWithoutCreatedDocumentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedDocumentsInput_1.UserCreateWithoutCreatedDocumentsInput)
], UserUpsertWithoutCreatedDocumentsInput.prototype, "create", void 0);
UserUpsertWithoutCreatedDocumentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutCreatedDocumentsInput", {
        isAbstract: true
    })
], UserUpsertWithoutCreatedDocumentsInput);
exports.UserUpsertWithoutCreatedDocumentsInput = UserUpsertWithoutCreatedDocumentsInput;
