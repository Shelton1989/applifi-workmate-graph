"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateInput_1 = require("../../../inputs/LLMQueryCreateInput");
let CreateLLMQueryArgs = class CreateLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateInput_1.LLMQueryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateInput_1.LLMQueryCreateInput)
], CreateLLMQueryArgs.prototype, "data", void 0);
CreateLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateLLMQueryArgs);
exports.CreateLLMQueryArgs = CreateLLMQueryArgs;
