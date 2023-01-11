"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutLikedExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateWithoutLikedExperiencesInput");
const UserUpdateWithoutLikedExperiencesInput_1 = require("../inputs/UserUpdateWithoutLikedExperiencesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutLikedExperiencesInput = class UserUpsertWithWhereUniqueWithoutLikedExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutLikedExperiencesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLikedExperiencesInput_1.UserUpdateWithoutLikedExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLikedExperiencesInput_1.UserUpdateWithoutLikedExperiencesInput)
], UserUpsertWithWhereUniqueWithoutLikedExperiencesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikedExperiencesInput_1.UserCreateWithoutLikedExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikedExperiencesInput_1.UserCreateWithoutLikedExperiencesInput)
], UserUpsertWithWhereUniqueWithoutLikedExperiencesInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutLikedExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutLikedExperiencesInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutLikedExperiencesInput);
exports.UserUpsertWithWhereUniqueWithoutLikedExperiencesInput = UserUpsertWithWhereUniqueWithoutLikedExperiencesInput;
