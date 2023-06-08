"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutCreatedDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCreatedDocumentsInput_1 = require("../inputs/UserCreateWithoutCreatedDocumentsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutCreatedDocumentsInput = class UserCreateOrConnectWithoutCreatedDocumentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutCreatedDocumentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedDocumentsInput_1.UserCreateWithoutCreatedDocumentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedDocumentsInput_1.UserCreateWithoutCreatedDocumentsInput)
], UserCreateOrConnectWithoutCreatedDocumentsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutCreatedDocumentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutCreatedDocumentsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutCreatedDocumentsInput);
exports.UserCreateOrConnectWithoutCreatedDocumentsInput = UserCreateOrConnectWithoutCreatedDocumentsInput;
