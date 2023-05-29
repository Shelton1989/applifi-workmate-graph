"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateInput_1 = require("../../../inputs/LLMQueryCreateInput");
const LLMQueryUpdateInput_1 = require("../../../inputs/LLMQueryUpdateInput");
const LLMQueryWhereUniqueInput_1 = require("../../../inputs/LLMQueryWhereUniqueInput");
let UpsertLLMQueryArgs = class UpsertLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], UpsertLLMQueryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateInput_1.LLMQueryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateInput_1.LLMQueryCreateInput)
], UpsertLLMQueryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateInput_1.LLMQueryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateInput_1.LLMQueryUpdateInput)
], UpsertLLMQueryArgs.prototype, "update", void 0);
UpsertLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertLLMQueryArgs);
exports.UpsertLLMQueryArgs = UpsertLLMQueryArgs;
