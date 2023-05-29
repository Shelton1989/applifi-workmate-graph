"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryWhereUniqueInput_1 = require("../../../inputs/LLMQueryWhereUniqueInput");
let FindUniqueLLMQueryArgs = class FindUniqueLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], FindUniqueLLMQueryArgs.prototype, "where", void 0);
FindUniqueLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLLMQueryArgs);
exports.FindUniqueLLMQueryArgs = FindUniqueLLMQueryArgs;
