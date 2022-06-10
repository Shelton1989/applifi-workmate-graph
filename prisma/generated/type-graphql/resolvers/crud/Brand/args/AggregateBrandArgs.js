"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandOrderByWithRelationInput_1 = require("../../../inputs/BrandOrderByWithRelationInput");
const BrandWhereInput_1 = require("../../../inputs/BrandWhereInput");
const BrandWhereUniqueInput_1 = require("../../../inputs/BrandWhereUniqueInput");
let AggregateBrandArgs = class AggregateBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereInput_1.BrandWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereInput_1.BrandWhereInput)
], AggregateBrandArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandOrderByWithRelationInput_1.BrandOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBrandArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereUniqueInput_1.BrandWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereUniqueInput_1.BrandWhereUniqueInput)
], AggregateBrandArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBrandArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBrandArgs.prototype, "skip", void 0);
AggregateBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBrandArgs);
exports.AggregateBrandArgs = AggregateBrandArgs;
