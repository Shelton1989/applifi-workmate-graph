"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithWhereWithoutLikedExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyMutationInput_1 = require("../inputs/UserUpdateManyMutationInput");
let UserUpdateManyWithWhereWithoutLikedExperiencesInput = class UserUpdateManyWithWhereWithoutLikedExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserScalarWhereInput_1.UserScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserScalarWhereInput_1.UserScalarWhereInput)
], UserUpdateManyWithWhereWithoutLikedExperiencesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyMutationInput_1.UserUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateManyMutationInput_1.UserUpdateManyMutationInput)
], UserUpdateManyWithWhereWithoutLikedExperiencesInput.prototype, "data", void 0);
UserUpdateManyWithWhereWithoutLikedExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithWhereWithoutLikedExperiencesInput", {
        isAbstract: true
    })
], UserUpdateManyWithWhereWithoutLikedExperiencesInput);
exports.UserUpdateManyWithWhereWithoutLikedExperiencesInput = UserUpdateManyWithWhereWithoutLikedExperiencesInput;
