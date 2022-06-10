"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutInventoryInput_1 = require("../inputs/UserCreateOrConnectWithoutInventoryInput");
const UserCreateWithoutInventoryInput_1 = require("../inputs/UserCreateWithoutInventoryInput");
const UserUpdateWithoutInventoryInput_1 = require("../inputs/UserUpdateWithoutInventoryInput");
const UserUpsertWithoutInventoryInput_1 = require("../inputs/UserUpsertWithoutInventoryInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutInventoryInput = class UserUpdateOneRequiredWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutInventoryInput_1.UserCreateWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutInventoryInput_1.UserCreateWithoutInventoryInput)
], UserUpdateOneRequiredWithoutInventoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInventoryInput_1.UserCreateOrConnectWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutInventoryInput_1.UserCreateOrConnectWithoutInventoryInput)
], UserUpdateOneRequiredWithoutInventoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutInventoryInput_1.UserUpsertWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutInventoryInput_1.UserUpsertWithoutInventoryInput)
], UserUpdateOneRequiredWithoutInventoryInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutInventoryInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutInventoryInput_1.UserUpdateWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutInventoryInput_1.UserUpdateWithoutInventoryInput)
], UserUpdateOneRequiredWithoutInventoryInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutInventoryInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutInventoryInput);
exports.UserUpdateOneRequiredWithoutInventoryInput = UserUpdateOneRequiredWithoutInventoryInput;
