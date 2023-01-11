"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTenantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantOrderByWithRelationInput_1 = require("../../../inputs/TenantOrderByWithRelationInput");
const TenantWhereInput_1 = require("../../../inputs/TenantWhereInput");
const TenantWhereUniqueInput_1 = require("../../../inputs/TenantWhereUniqueInput");
const TenantScalarFieldEnum_1 = require("../../../../enums/TenantScalarFieldEnum");
let FindFirstTenantArgs = class FindFirstTenantArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereInput_1.TenantWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereInput_1.TenantWhereInput)
], FindFirstTenantArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TenantOrderByWithRelationInput_1.TenantOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTenantArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], FindFirstTenantArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTenantArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTenantArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TenantScalarFieldEnum_1.TenantScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTenantArgs.prototype, "distinct", void 0);
FindFirstTenantArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTenantArgs);
exports.FindFirstTenantArgs = FindFirstTenantArgs;
