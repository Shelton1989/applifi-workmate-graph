"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutWardInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutWardInput_1 = require("../inputs/UserUpdateWithoutWardInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutWardInput = class UserUpdateWithWhereUniqueWithoutWardInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutWardInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutWardInput_1.UserUpdateWithoutWardInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutWardInput_1.UserUpdateWithoutWardInput)
], UserUpdateWithWhereUniqueWithoutWardInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutWardInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutWardInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutWardInput);
exports.UserUpdateWithWhereUniqueWithoutWardInput = UserUpdateWithWhereUniqueWithoutWardInput;
