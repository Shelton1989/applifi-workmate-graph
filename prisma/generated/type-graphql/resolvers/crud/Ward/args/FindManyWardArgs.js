"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyWardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardOrderByWithRelationInput_1 = require("../../../inputs/WardOrderByWithRelationInput");
const WardWhereInput_1 = require("../../../inputs/WardWhereInput");
const WardWhereUniqueInput_1 = require("../../../inputs/WardWhereUniqueInput");
const WardScalarFieldEnum_1 = require("../../../../enums/WardScalarFieldEnum");
let FindManyWardArgs = class FindManyWardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereInput_1.WardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardWhereInput_1.WardWhereInput)
], FindManyWardArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WardOrderByWithRelationInput_1.WardOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyWardArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereUniqueInput_1.WardWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardWhereUniqueInput_1.WardWhereUniqueInput)
], FindManyWardArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyWardArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyWardArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WardScalarFieldEnum_1.WardScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyWardArgs.prototype, "distinct", void 0);
FindManyWardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyWardArgs);
exports.FindManyWardArgs = FindManyWardArgs;
