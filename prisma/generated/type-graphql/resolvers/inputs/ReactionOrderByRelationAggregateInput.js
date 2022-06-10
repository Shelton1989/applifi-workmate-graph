"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOrderByRelationAggregateInput = class ReactionOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByRelationAggregateInput.prototype, "_count", void 0);
ReactionOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ReactionOrderByRelationAggregateInput);
exports.ReactionOrderByRelationAggregateInput = ReactionOrderByRelationAggregateInput;
