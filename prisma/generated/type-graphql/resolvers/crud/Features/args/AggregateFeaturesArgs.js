"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesOrderByWithRelationInput_1 = require("../../../inputs/FeaturesOrderByWithRelationInput");
const FeaturesWhereInput_1 = require("../../../inputs/FeaturesWhereInput");
const FeaturesWhereUniqueInput_1 = require("../../../inputs/FeaturesWhereUniqueInput");
let AggregateFeaturesArgs = class AggregateFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereInput_1.FeaturesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereInput_1.FeaturesWhereInput)
], AggregateFeaturesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesOrderByWithRelationInput_1.FeaturesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateFeaturesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], AggregateFeaturesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateFeaturesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateFeaturesArgs.prototype, "skip", void 0);
AggregateFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateFeaturesArgs);
exports.AggregateFeaturesArgs = AggregateFeaturesArgs;
