"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductLikedByArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserOrderByWithRelationInput_1 = require("../../../inputs/UserOrderByWithRelationInput");
const UserWhereInput_1 = require("../../../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
const UserScalarFieldEnum_1 = require("../../../../enums/UserScalarFieldEnum");
let ProductLikedByArgs = class ProductLikedByArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], ProductLikedByArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserOrderByWithRelationInput_1.UserOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductLikedByArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], ProductLikedByArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductLikedByArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductLikedByArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarFieldEnum_1.UserScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductLikedByArgs.prototype, "distinct", void 0);
ProductLikedByArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductLikedByArgs);
exports.ProductLikedByArgs = ProductLikedByArgs;