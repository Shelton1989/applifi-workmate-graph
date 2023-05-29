"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutQueriesInput_1 = require("../inputs/UserCreateOrConnectWithoutQueriesInput");
const UserCreateWithoutQueriesInput_1 = require("../inputs/UserCreateWithoutQueriesInput");
const UserUpdateWithoutQueriesInput_1 = require("../inputs/UserUpdateWithoutQueriesInput");
const UserUpsertWithoutQueriesInput_1 = require("../inputs/UserUpsertWithoutQueriesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutQueriesInput = class UserUpdateOneWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutQueriesInput_1.UserCreateWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutQueriesInput_1.UserCreateWithoutQueriesInput)
], UserUpdateOneWithoutQueriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutQueriesInput_1.UserCreateOrConnectWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutQueriesInput_1.UserCreateOrConnectWithoutQueriesInput)
], UserUpdateOneWithoutQueriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutQueriesInput_1.UserUpsertWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutQueriesInput_1.UserUpsertWithoutQueriesInput)
], UserUpdateOneWithoutQueriesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutQueriesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutQueriesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutQueriesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutQueriesInput_1.UserUpdateWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutQueriesInput_1.UserUpdateWithoutQueriesInput)
], UserUpdateOneWithoutQueriesInput.prototype, "update", void 0);
UserUpdateOneWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutQueriesInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutQueriesInput);
exports.UserUpdateOneWithoutQueriesInput = UserUpdateOneWithoutQueriesInput;
