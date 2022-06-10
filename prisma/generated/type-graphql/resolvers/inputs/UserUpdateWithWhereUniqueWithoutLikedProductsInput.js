"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutLikedProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutLikedProductsInput_1 = require("../inputs/UserUpdateWithoutLikedProductsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutLikedProductsInput = class UserUpdateWithWhereUniqueWithoutLikedProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutLikedProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLikedProductsInput_1.UserUpdateWithoutLikedProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLikedProductsInput_1.UserUpdateWithoutLikedProductsInput)
], UserUpdateWithWhereUniqueWithoutLikedProductsInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutLikedProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutLikedProductsInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutLikedProductsInput);
exports.UserUpdateWithWhereUniqueWithoutLikedProductsInput = UserUpdateWithWhereUniqueWithoutLikedProductsInput;
