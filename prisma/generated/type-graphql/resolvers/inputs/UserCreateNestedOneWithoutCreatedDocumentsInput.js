"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutCreatedDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCreatedDocumentsInput_1 = require("../inputs/UserCreateOrConnectWithoutCreatedDocumentsInput");
const UserCreateWithoutCreatedDocumentsInput_1 = require("../inputs/UserCreateWithoutCreatedDocumentsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutCreatedDocumentsInput = class UserCreateNestedOneWithoutCreatedDocumentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCreatedDocumentsInput_1.UserCreateWithoutCreatedDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCreatedDocumentsInput_1.UserCreateWithoutCreatedDocumentsInput)
], UserCreateNestedOneWithoutCreatedDocumentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedDocumentsInput_1.UserCreateOrConnectWithoutCreatedDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCreatedDocumentsInput_1.UserCreateOrConnectWithoutCreatedDocumentsInput)
], UserCreateNestedOneWithoutCreatedDocumentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutCreatedDocumentsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutCreatedDocumentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatedDocumentsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutCreatedDocumentsInput);
exports.UserCreateNestedOneWithoutCreatedDocumentsInput = UserCreateNestedOneWithoutCreatedDocumentsInput;
