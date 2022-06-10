"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SizeOrderByRelationAggregateInput = class SizeOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeOrderByRelationAggregateInput.prototype, "_count", void 0);
SizeOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeOrderByRelationAggregateInput", {
        isAbstract: true
    })
], SizeOrderByRelationAggregateInput);
exports.SizeOrderByRelationAggregateInput = SizeOrderByRelationAggregateInput;
