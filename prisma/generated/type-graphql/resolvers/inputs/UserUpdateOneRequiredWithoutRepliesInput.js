"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutRepliesInput_1 = require("../inputs/UserCreateOrConnectWithoutRepliesInput");
const UserCreateWithoutRepliesInput_1 = require("../inputs/UserCreateWithoutRepliesInput");
const UserUpdateWithoutRepliesInput_1 = require("../inputs/UserUpdateWithoutRepliesInput");
const UserUpsertWithoutRepliesInput_1 = require("../inputs/UserUpsertWithoutRepliesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutRepliesInput = class UserUpdateOneRequiredWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRepliesInput_1.UserCreateWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRepliesInput_1.UserCreateWithoutRepliesInput)
], UserUpdateOneRequiredWithoutRepliesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRepliesInput_1.UserCreateOrConnectWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutRepliesInput_1.UserCreateOrConnectWithoutRepliesInput)
], UserUpdateOneRequiredWithoutRepliesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutRepliesInput_1.UserUpsertWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutRepliesInput_1.UserUpsertWithoutRepliesInput)
], UserUpdateOneRequiredWithoutRepliesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutRepliesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRepliesInput_1.UserUpdateWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutRepliesInput_1.UserUpdateWithoutRepliesInput)
], UserUpdateOneRequiredWithoutRepliesInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutRepliesInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutRepliesInput);
exports.UserUpdateOneRequiredWithoutRepliesInput = UserUpdateOneRequiredWithoutRepliesInput;
