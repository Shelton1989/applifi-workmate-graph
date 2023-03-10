"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutLikedMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLikedMealsInput_1 = require("../inputs/UserCreateWithoutLikedMealsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutLikedMealsInput = class UserCreateOrConnectWithoutLikedMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutLikedMealsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikedMealsInput_1.UserCreateWithoutLikedMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikedMealsInput_1.UserCreateWithoutLikedMealsInput)
], UserCreateOrConnectWithoutLikedMealsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutLikedMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutLikedMealsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutLikedMealsInput);
exports.UserCreateOrConnectWithoutLikedMealsInput = UserCreateOrConnectWithoutLikedMealsInput;
