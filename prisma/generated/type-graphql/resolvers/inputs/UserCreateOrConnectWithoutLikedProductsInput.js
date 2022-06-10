"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutLikedProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutLikedProductsInput_1 = require("../inputs/UserCreateWithoutLikedProductsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutLikedProductsInput = class UserCreateOrConnectWithoutLikedProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutLikedProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutLikedProductsInput_1.UserCreateWithoutLikedProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutLikedProductsInput_1.UserCreateWithoutLikedProductsInput)
], UserCreateOrConnectWithoutLikedProductsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutLikedProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutLikedProductsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutLikedProductsInput);
exports.UserCreateOrConnectWithoutLikedProductsInput = UserCreateOrConnectWithoutLikedProductsInput;
