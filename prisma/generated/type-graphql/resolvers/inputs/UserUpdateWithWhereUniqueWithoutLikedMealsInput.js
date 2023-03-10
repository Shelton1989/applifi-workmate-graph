"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutLikedMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutLikedMealsInput_1 = require("../inputs/UserUpdateWithoutLikedMealsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutLikedMealsInput = class UserUpdateWithWhereUniqueWithoutLikedMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutLikedMealsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLikedMealsInput_1.UserUpdateWithoutLikedMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLikedMealsInput_1.UserUpdateWithoutLikedMealsInput)
], UserUpdateWithWhereUniqueWithoutLikedMealsInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutLikedMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutLikedMealsInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutLikedMealsInput);
exports.UserUpdateWithWhereUniqueWithoutLikedMealsInput = UserUpdateWithWhereUniqueWithoutLikedMealsInput;
