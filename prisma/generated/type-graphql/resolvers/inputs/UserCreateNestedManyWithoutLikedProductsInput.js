"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutLikedProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutLikedProductsInput_1 = require("../inputs/UserCreateOrConnectWithoutLikedProductsInput");
const UserCreateWithoutLikedProductsInput_1 = require("../inputs/UserCreateWithoutLikedProductsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutLikedProductsInput = class UserCreateNestedManyWithoutLikedProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutLikedProductsInput_1.UserCreateWithoutLikedProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutLikedProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedProductsInput_1.UserCreateOrConnectWithoutLikedProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutLikedProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutLikedProductsInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutLikedProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutLikedProductsInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutLikedProductsInput);
exports.UserCreateNestedManyWithoutLikedProductsInput = UserCreateNestedManyWithoutLikedProductsInput;
