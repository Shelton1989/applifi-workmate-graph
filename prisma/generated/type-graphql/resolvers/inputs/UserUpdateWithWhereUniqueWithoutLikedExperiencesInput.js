"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutLikedExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutLikedExperiencesInput_1 = require("../inputs/UserUpdateWithoutLikedExperiencesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutLikedExperiencesInput = class UserUpdateWithWhereUniqueWithoutLikedExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutLikedExperiencesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutLikedExperiencesInput_1.UserUpdateWithoutLikedExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutLikedExperiencesInput_1.UserUpdateWithoutLikedExperiencesInput)
], UserUpdateWithWhereUniqueWithoutLikedExperiencesInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutLikedExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutLikedExperiencesInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutLikedExperiencesInput);
exports.UserUpdateWithWhereUniqueWithoutLikedExperiencesInput = UserUpdateWithWhereUniqueWithoutLikedExperiencesInput;
