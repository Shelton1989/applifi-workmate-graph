"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutLikedExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateOrConnectWithoutLikedExperiencesInput");
const UserCreateWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateWithoutLikedExperiencesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutLikedExperiencesInput = class UserCreateNestedManyWithoutLikedExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutLikedExperiencesInput_1.UserCreateWithoutLikedExperiencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutLikedExperiencesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedExperiencesInput_1.UserCreateOrConnectWithoutLikedExperiencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutLikedExperiencesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutLikedExperiencesInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutLikedExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutLikedExperiencesInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutLikedExperiencesInput);
exports.UserCreateNestedManyWithoutLikedExperiencesInput = UserCreateNestedManyWithoutLikedExperiencesInput;
