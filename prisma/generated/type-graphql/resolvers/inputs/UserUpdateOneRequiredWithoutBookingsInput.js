"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutBookingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutBookingsInput_1 = require("../inputs/UserCreateOrConnectWithoutBookingsInput");
const UserCreateWithoutBookingsInput_1 = require("../inputs/UserCreateWithoutBookingsInput");
const UserUpdateWithoutBookingsInput_1 = require("../inputs/UserUpdateWithoutBookingsInput");
const UserUpsertWithoutBookingsInput_1 = require("../inputs/UserUpsertWithoutBookingsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutBookingsInput = class UserUpdateOneRequiredWithoutBookingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBookingsInput_1.UserCreateWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBookingsInput_1.UserCreateWithoutBookingsInput)
], UserUpdateOneRequiredWithoutBookingsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookingsInput_1.UserCreateOrConnectWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutBookingsInput_1.UserCreateOrConnectWithoutBookingsInput)
], UserUpdateOneRequiredWithoutBookingsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutBookingsInput_1.UserUpsertWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutBookingsInput_1.UserUpsertWithoutBookingsInput)
], UserUpdateOneRequiredWithoutBookingsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutBookingsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutBookingsInput_1.UserUpdateWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutBookingsInput_1.UserUpdateWithoutBookingsInput)
], UserUpdateOneRequiredWithoutBookingsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutBookingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookingsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutBookingsInput);
exports.UserUpdateOneRequiredWithoutBookingsInput = UserUpdateOneRequiredWithoutBookingsInput;
