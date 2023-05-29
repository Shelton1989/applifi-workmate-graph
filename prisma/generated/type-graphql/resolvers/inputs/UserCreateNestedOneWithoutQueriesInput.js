"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutQueriesInput_1 = require("../inputs/UserCreateOrConnectWithoutQueriesInput");
const UserCreateWithoutQueriesInput_1 = require("../inputs/UserCreateWithoutQueriesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutQueriesInput = class UserCreateNestedOneWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutQueriesInput_1.UserCreateWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutQueriesInput_1.UserCreateWithoutQueriesInput)
], UserCreateNestedOneWithoutQueriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutQueriesInput_1.UserCreateOrConnectWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutQueriesInput_1.UserCreateOrConnectWithoutQueriesInput)
], UserCreateNestedOneWithoutQueriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutQueriesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutQueriesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutQueriesInput);
exports.UserCreateNestedOneWithoutQueriesInput = UserCreateNestedOneWithoutQueriesInput;
