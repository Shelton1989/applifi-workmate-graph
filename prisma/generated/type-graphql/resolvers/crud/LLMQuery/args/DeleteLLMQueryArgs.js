"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryWhereUniqueInput_1 = require("../../../inputs/LLMQueryWhereUniqueInput");
let DeleteLLMQueryArgs = class DeleteLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], DeleteLLMQueryArgs.prototype, "where", void 0);
DeleteLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteLLMQueryArgs);
exports.DeleteLLMQueryArgs = DeleteLLMQueryArgs;
