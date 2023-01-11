"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutBookingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutBookingsInput_1 = require("../inputs/UserCreateOrConnectWithoutBookingsInput");
const UserCreateWithoutBookingsInput_1 = require("../inputs/UserCreateWithoutBookingsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutBookingsInput = class UserCreateNestedOneWithoutBookingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBookingsInput_1.UserCreateWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBookingsInput_1.UserCreateWithoutBookingsInput)
], UserCreateNestedOneWithoutBookingsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookingsInput_1.UserCreateOrConnectWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutBookingsInput_1.UserCreateOrConnectWithoutBookingsInput)
], UserCreateNestedOneWithoutBookingsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutBookingsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutBookingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutBookingsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutBookingsInput);
exports.UserCreateNestedOneWithoutBookingsInput = UserCreateNestedOneWithoutBookingsInput;
