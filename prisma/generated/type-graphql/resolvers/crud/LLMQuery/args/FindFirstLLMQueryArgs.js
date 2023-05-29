"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryOrderByWithRelationInput_1 = require("../../../inputs/LLMQueryOrderByWithRelationInput");
const LLMQueryWhereInput_1 = require("../../../inputs/LLMQueryWhereInput");
const LLMQueryWhereUniqueInput_1 = require("../../../inputs/LLMQueryWhereUniqueInput");
const LLMQueryScalarFieldEnum_1 = require("../../../../enums/LLMQueryScalarFieldEnum");
let FindFirstLLMQueryArgs = class FindFirstLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], FindFirstLLMQueryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryOrderByWithRelationInput_1.LLMQueryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLLMQueryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], FindFirstLLMQueryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLLMQueryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLLMQueryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryScalarFieldEnum_1.LLMQueryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLLMQueryArgs.prototype, "distinct", void 0);
FindFirstLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstLLMQueryArgs);
exports.FindFirstLLMQueryArgs = FindFirstLLMQueryArgs;
