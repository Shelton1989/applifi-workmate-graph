"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReactionWhereUniqueInput = class ReactionWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionWhereUniqueInput.prototype, "id", void 0);
ReactionWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionWhereUniqueInput", {
        isAbstract: true
    })
], ReactionWhereUniqueInput);
exports.ReactionWhereUniqueInput = ReactionWhereUniqueInput;
