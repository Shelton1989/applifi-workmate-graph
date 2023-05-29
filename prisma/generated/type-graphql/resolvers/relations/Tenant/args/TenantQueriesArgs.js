"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantQueriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryOrderByWithRelationInput_1 = require("../../../inputs/LLMQueryOrderByWithRelationInput");
const LLMQueryWhereInput_1 = require("../../../inputs/LLMQueryWhereInput");
const LLMQueryWhereUniqueInput_1 = require("../../../inputs/LLMQueryWhereUniqueInput");
const LLMQueryScalarFieldEnum_1 = require("../../../../enums/LLMQueryScalarFieldEnum");
let TenantQueriesArgs = class TenantQueriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], TenantQueriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryOrderByWithRelationInput_1.LLMQueryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantQueriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], TenantQueriesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TenantQueriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TenantQueriesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryScalarFieldEnum_1.LLMQueryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantQueriesArgs.prototype, "distinct", void 0);
TenantQueriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TenantQueriesArgs);
exports.TenantQueriesArgs = TenantQueriesArgs;
