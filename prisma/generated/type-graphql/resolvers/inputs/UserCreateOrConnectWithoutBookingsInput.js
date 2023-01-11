"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutBookingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutBookingsInput_1 = require("../inputs/UserCreateWithoutBookingsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutBookingsInput = class UserCreateOrConnectWithoutBookingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutBookingsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBookingsInput_1.UserCreateWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBookingsInput_1.UserCreateWithoutBookingsInput)
], UserCreateOrConnectWithoutBookingsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutBookingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutBookingsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutBookingsInput);
exports.UserCreateOrConnectWithoutBookingsInput = UserCreateOrConnectWithoutBookingsInput;
