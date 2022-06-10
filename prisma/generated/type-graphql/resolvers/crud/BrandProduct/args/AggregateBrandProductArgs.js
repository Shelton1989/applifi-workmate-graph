"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBrandProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductOrderByWithRelationInput_1 = require("../../../inputs/BrandProductOrderByWithRelationInput");
const BrandProductWhereInput_1 = require("../../../inputs/BrandProductWhereInput");
const BrandProductWhereUniqueInput_1 = require("../../../inputs/BrandProductWhereUniqueInput");
let AggregateBrandProductArgs = class AggregateBrandProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], AggregateBrandProductArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductOrderByWithRelationInput_1.BrandProductOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBrandProductArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], AggregateBrandProductArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBrandProductArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBrandProductArgs.prototype, "skip", void 0);
AggregateBrandProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBrandProductArgs);
exports.AggregateBrandProductArgs = AggregateBrandProductArgs;
