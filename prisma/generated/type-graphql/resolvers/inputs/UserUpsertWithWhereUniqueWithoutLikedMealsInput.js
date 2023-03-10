"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutLikedMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLikedMealsInput_1 = require("../inputs/UserCreateWithoutLikedMealsInput");
const UserUpdateWithoutLikedMealsInput_1 = require("../inputs/UserUpdateWithoutLikedMealsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutLikedMealsInput = class UserUpsertWithWhereUniqueWithoutLikedMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutLikedMealsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLikedMealsInput_1.UserUpdateWithoutLikedMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLikedMealsInput_1.UserUpdateWithoutLikedMealsInput)
], UserUpsertWithWhereUniqueWithoutLikedMealsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikedMealsInput_1.UserCreateWithoutLikedMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikedMealsInput_1.UserCreateWithoutLikedMealsInput)
], UserUpsertWithWhereUniqueWithoutLikedMealsInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutLikedMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutLikedMealsInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutLikedMealsInput);
exports.UserUpsertWithWhereUniqueWithoutLikedMealsInput = UserUpsertWithWhereUniqueWithoutLikedMealsInput;
