"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryWhereInput_1 = require("../inputs/LLMQueryWhereInput");
let LLMQueryListRelationFilter = class LLMQueryListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], LLMQueryListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], LLMQueryListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], LLMQueryListRelationFilter.prototype, "none", void 0);
LLMQueryListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryListRelationFilter", {
        isAbstract: true
    })
], LLMQueryListRelationFilter);
exports.LLMQueryListRelationFilter = LLMQueryListRelationFilter;
