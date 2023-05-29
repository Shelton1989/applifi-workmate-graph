"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryOrderByWithRelationInput_1 = require("../../../inputs/LLMQueryOrderByWithRelationInput");
const LLMQueryWhereInput_1 = require("../../../inputs/LLMQueryWhereInput");
const LLMQueryWhereUniqueInput_1 = require("../../../inputs/LLMQueryWhereUniqueInput");
let AggregateLLMQueryArgs = class AggregateLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], AggregateLLMQueryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryOrderByWithRelationInput_1.LLMQueryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateLLMQueryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], AggregateLLMQueryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLLMQueryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLLMQueryArgs.prototype, "skip", void 0);
AggregateLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateLLMQueryArgs);
exports.AggregateLLMQueryArgs = AggregateLLMQueryArgs;
