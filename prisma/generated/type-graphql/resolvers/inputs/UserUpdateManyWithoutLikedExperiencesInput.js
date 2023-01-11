"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutLikedExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateOrConnectWithoutLikedExperiencesInput");
const UserCreateWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateWithoutLikedExperiencesInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutLikedExperiencesInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutLikedExperiencesInput");
const UserUpdateWithWhereUniqueWithoutLikedExperiencesInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutLikedExperiencesInput");
const UserUpsertWithWhereUniqueWithoutLikedExperiencesInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutLikedExperiencesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutLikedExperiencesInput = class UserUpdateManyWithoutLikedExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutLikedExperiencesInput_1.UserCreateWithoutLikedExperiencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedExperiencesInput_1.UserCreateOrConnectWithoutLikedExperiencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutLikedExperiencesInput_1.UserUpsertWithWhereUniqueWithoutLikedExperiencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutLikedExperiencesInput_1.UserUpdateWithWhereUniqueWithoutLikedExperiencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutLikedExperiencesInput_1.UserUpdateManyWithWhereWithoutLikedExperiencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedExperiencesInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutLikedExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutLikedExperiencesInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutLikedExperiencesInput);
exports.UserUpdateManyWithoutLikedExperiencesInput = UserUpdateManyWithoutLikedExperiencesInput;
