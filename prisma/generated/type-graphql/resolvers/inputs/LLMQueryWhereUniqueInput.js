"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LLMQueryWhereUniqueInput = class LLMQueryWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryWhereUniqueInput.prototype, "id", void 0);
LLMQueryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryWhereUniqueInput", {
        isAbstract: true
    })
], LLMQueryWhereUniqueInput);
exports.LLMQueryWhereUniqueInput = LLMQueryWhereUniqueInput;
