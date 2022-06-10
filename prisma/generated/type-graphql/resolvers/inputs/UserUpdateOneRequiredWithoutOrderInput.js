"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutOrderInput_1 = require("../inputs/UserCreateOrConnectWithoutOrderInput");
const UserCreateWithoutOrderInput_1 = require("../inputs/UserCreateWithoutOrderInput");
const UserUpdateWithoutOrderInput_1 = require("../inputs/UserUpdateWithoutOrderInput");
const UserUpsertWithoutOrderInput_1 = require("../inputs/UserUpsertWithoutOrderInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutOrderInput = class UserUpdateOneRequiredWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrderInput_1.UserCreateWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrderInput_1.UserCreateWithoutOrderInput)
], UserUpdateOneRequiredWithoutOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOrderInput_1.UserCreateOrConnectWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutOrderInput_1.UserCreateOrConnectWithoutOrderInput)
], UserUpdateOneRequiredWithoutOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutOrderInput_1.UserUpsertWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutOrderInput_1.UserUpsertWithoutOrderInput)
], UserUpdateOneRequiredWithoutOrderInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutOrderInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutOrderInput_1.UserUpdateWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutOrderInput_1.UserUpdateWithoutOrderInput)
], UserUpdateOneRequiredWithoutOrderInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutOrderInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutOrderInput);
exports.UserUpdateOneRequiredWithoutOrderInput = UserUpdateOneRequiredWithoutOrderInput;
