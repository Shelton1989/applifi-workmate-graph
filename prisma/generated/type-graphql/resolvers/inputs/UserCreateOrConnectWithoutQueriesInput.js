"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutQueriesInput_1 = require("../inputs/UserCreateWithoutQueriesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutQueriesInput = class UserCreateOrConnectWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutQueriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutQueriesInput_1.UserCreateWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutQueriesInput_1.UserCreateWithoutQueriesInput)
], UserCreateOrConnectWithoutQueriesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutQueriesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutQueriesInput);
exports.UserCreateOrConnectWithoutQueriesInput = UserCreateOrConnectWithoutQueriesInput;
