"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryUpdateManyMutationInput_1 = require("../../../inputs/LLMQueryUpdateManyMutationInput");
const LLMQueryWhereInput_1 = require("../../../inputs/LLMQueryWhereInput");
let UpdateManyLLMQueryArgs = class UpdateManyLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateManyMutationInput_1.LLMQueryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateManyMutationInput_1.LLMQueryUpdateManyMutationInput)
], UpdateManyLLMQueryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], UpdateManyLLMQueryArgs.prototype, "where", void 0);
UpdateManyLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyLLMQueryArgs);
exports.UpdateManyLLMQueryArgs = UpdateManyLLMQueryArgs;
