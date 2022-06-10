"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ColorOrderByRelationAggregateInput = class ColorOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorOrderByRelationAggregateInput.prototype, "_count", void 0);
ColorOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ColorOrderByRelationAggregateInput);
exports.ColorOrderByRelationAggregateInput = ColorOrderByRelationAggregateInput;
