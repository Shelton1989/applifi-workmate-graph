"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutLikedMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLikedMealsInput_1 = require("../inputs/UserCreateOrConnectWithoutLikedMealsInput");
const UserCreateWithoutLikedMealsInput_1 = require("../inputs/UserCreateWithoutLikedMealsInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutLikedMealsInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutLikedMealsInput");
const UserUpdateWithWhereUniqueWithoutLikedMealsInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutLikedMealsInput");
const UserUpsertWithWhereUniqueWithoutLikedMealsInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutLikedMealsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutLikedMealsInput = class UserUpdateManyWithoutLikedMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutLikedMealsInput_1.UserCreateWithoutLikedMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedMealsInput_1.UserCreateOrConnectWithoutLikedMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutLikedMealsInput_1.UserUpsertWithWhereUniqueWithoutLikedMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutLikedMealsInput_1.UserUpdateWithWhereUniqueWithoutLikedMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutLikedMealsInput_1.UserUpdateManyWithWhereWithoutLikedMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedMealsInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutLikedMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutLikedMealsInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutLikedMealsInput);
exports.UserUpdateManyWithoutLikedMealsInput = UserUpdateManyWithoutLikedMealsInput;
