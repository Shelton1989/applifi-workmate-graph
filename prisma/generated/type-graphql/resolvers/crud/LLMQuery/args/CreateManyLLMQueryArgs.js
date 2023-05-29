"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateManyInput_1 = require("../../../inputs/LLMQueryCreateManyInput");
let CreateManyLLMQueryArgs = class CreateManyLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryCreateManyInput_1.LLMQueryCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyLLMQueryArgs.prototype, "data", void 0);
CreateManyLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyLLMQueryArgs);
exports.CreateManyLLMQueryArgs = CreateManyLLMQueryArgs;
