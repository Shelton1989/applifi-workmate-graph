"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryWhereInput_1 = require("../../../inputs/LLMQueryWhereInput");
let DeleteManyLLMQueryArgs = class DeleteManyLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], DeleteManyLLMQueryArgs.prototype, "where", void 0);
DeleteManyLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyLLMQueryArgs);
exports.DeleteManyLLMQueryArgs = DeleteManyLLMQueryArgs;
