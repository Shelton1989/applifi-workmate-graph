"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutRequestsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutRequestsInput_1 = require("../inputs/UserCreateOrConnectWithoutRequestsInput");
const UserCreateWithoutRequestsInput_1 = require("../inputs/UserCreateWithoutRequestsInput");
const UserUpdateWithoutRequestsInput_1 = require("../inputs/UserUpdateWithoutRequestsInput");
const UserUpsertWithoutRequestsInput_1 = require("../inputs/UserUpsertWithoutRequestsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutRequestsInput = class UserUpdateOneRequiredWithoutRequestsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRequestsInput_1.UserCreateWithoutRequestsInput)
], UserUpdateOneRequiredWithoutRequestsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRequestsInput_1.UserCreateOrConnectWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutRequestsInput_1.UserCreateOrConnectWithoutRequestsInput)
], UserUpdateOneRequiredWithoutRequestsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutRequestsInput_1.UserUpsertWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutRequestsInput_1.UserUpsertWithoutRequestsInput)
], UserUpdateOneRequiredWithoutRequestsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutRequestsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRequestsInput_1.UserUpdateWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutRequestsInput_1.UserUpdateWithoutRequestsInput)
], UserUpdateOneRequiredWithoutRequestsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutRequestsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutRequestsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutRequestsInput);
exports.UserUpdateOneRequiredWithoutRequestsInput = UserUpdateOneRequiredWithoutRequestsInput;
