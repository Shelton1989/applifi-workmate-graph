"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutLikedMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLikedMealsInput_1 = require("../inputs/UserCreateOrConnectWithoutLikedMealsInput");
const UserCreateWithoutLikedMealsInput_1 = require("../inputs/UserCreateWithoutLikedMealsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutLikedMealsInput = class UserCreateNestedManyWithoutLikedMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutLikedMealsInput_1.UserCreateWithoutLikedMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutLikedMealsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedMealsInput_1.UserCreateOrConnectWithoutLikedMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutLikedMealsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutLikedMealsInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutLikedMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutLikedMealsInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutLikedMealsInput);
exports.UserCreateNestedManyWithoutLikedMealsInput = UserCreateNestedManyWithoutLikedMealsInput;
