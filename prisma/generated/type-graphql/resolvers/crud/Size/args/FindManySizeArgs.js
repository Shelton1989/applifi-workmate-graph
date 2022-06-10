"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeOrderByWithRelationInput_1 = require("../../../inputs/SizeOrderByWithRelationInput");
const SizeWhereInput_1 = require("../../../inputs/SizeWhereInput");
const SizeWhereUniqueInput_1 = require("../../../inputs/SizeWhereUniqueInput");
const SizeScalarFieldEnum_1 = require("../../../../enums/SizeScalarFieldEnum");
let FindManySizeArgs = class FindManySizeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereInput_1.SizeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereInput_1.SizeWhereInput)
], FindManySizeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeOrderByWithRelationInput_1.SizeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySizeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], FindManySizeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySizeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySizeArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeScalarFieldEnum_1.SizeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySizeArgs.prototype, "distinct", void 0);
FindManySizeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySizeArgs);
exports.FindManySizeArgs = FindManySizeArgs;
