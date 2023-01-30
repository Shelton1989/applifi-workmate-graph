"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesOrderByWithRelationInput_1 = require("../../../inputs/FeaturesOrderByWithRelationInput");
const FeaturesWhereInput_1 = require("../../../inputs/FeaturesWhereInput");
const FeaturesWhereUniqueInput_1 = require("../../../inputs/FeaturesWhereUniqueInput");
const FeaturesScalarFieldEnum_1 = require("../../../../enums/FeaturesScalarFieldEnum");
let FindManyFeaturesArgs = class FindManyFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereInput_1.FeaturesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereInput_1.FeaturesWhereInput)
], FindManyFeaturesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesOrderByWithRelationInput_1.FeaturesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyFeaturesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], FindManyFeaturesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyFeaturesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyFeaturesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesScalarFieldEnum_1.FeaturesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyFeaturesArgs.prototype, "distinct", void 0);
FindManyFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyFeaturesArgs);
exports.FindManyFeaturesArgs = FindManyFeaturesArgs;
