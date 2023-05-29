"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryUpdateInput_1 = require("../../../inputs/LLMQueryUpdateInput");
const LLMQueryWhereUniqueInput_1 = require("../../../inputs/LLMQueryWhereUniqueInput");
let UpdateLLMQueryArgs = class UpdateLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateInput_1.LLMQueryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateInput_1.LLMQueryUpdateInput)
], UpdateLLMQueryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], UpdateLLMQueryArgs.prototype, "where", void 0);
UpdateLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateLLMQueryArgs);
exports.UpdateLLMQueryArgs = UpdateLLMQueryArgs;
