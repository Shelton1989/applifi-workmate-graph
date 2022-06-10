"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutLikedProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLikedProductsInput_1 = require("../inputs/UserCreateOrConnectWithoutLikedProductsInput");
const UserCreateWithoutLikedProductsInput_1 = require("../inputs/UserCreateWithoutLikedProductsInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutLikedProductsInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutLikedProductsInput");
const UserUpdateWithWhereUniqueWithoutLikedProductsInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutLikedProductsInput");
const UserUpsertWithWhereUniqueWithoutLikedProductsInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutLikedProductsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutLikedProductsInput = class UserUpdateManyWithoutLikedProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutLikedProductsInput_1.UserCreateWithoutLikedProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedProductsInput_1.UserCreateOrConnectWithoutLikedProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutLikedProductsInput_1.UserUpsertWithWhereUniqueWithoutLikedProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutLikedProductsInput_1.UserUpdateWithWhereUniqueWithoutLikedProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutLikedProductsInput_1.UserUpdateManyWithWhereWithoutLikedProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutLikedProductsInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutLikedProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutLikedProductsInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutLikedProductsInput);
exports.UserUpdateManyWithoutLikedProductsInput = UserUpdateManyWithoutLikedProductsInput;
