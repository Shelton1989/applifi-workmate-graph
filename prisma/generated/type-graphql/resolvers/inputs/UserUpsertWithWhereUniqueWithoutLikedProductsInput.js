"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutLikedProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLikedProductsInput_1 = require("../inputs/UserCreateWithoutLikedProductsInput");
const UserUpdateWithoutLikedProductsInput_1 = require("../inputs/UserUpdateWithoutLikedProductsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutLikedProductsInput = class UserUpsertWithWhereUniqueWithoutLikedProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutLikedProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLikedProductsInput_1.UserUpdateWithoutLikedProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLikedProductsInput_1.UserUpdateWithoutLikedProductsInput)
], UserUpsertWithWhereUniqueWithoutLikedProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikedProductsInput_1.UserCreateWithoutLikedProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikedProductsInput_1.UserCreateWithoutLikedProductsInput)
], UserUpsertWithWhereUniqueWithoutLikedProductsInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutLikedProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutLikedProductsInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutLikedProductsInput);
exports.UserUpsertWithWhereUniqueWithoutLikedProductsInput = UserUpsertWithWhereUniqueWithoutLikedProductsInput;
