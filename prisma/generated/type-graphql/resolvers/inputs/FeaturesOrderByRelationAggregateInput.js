"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FeaturesOrderByRelationAggregateInput = class FeaturesOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesOrderByRelationAggregateInput.prototype, "_count", void 0);
FeaturesOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesOrderByRelationAggregateInput", {
        isAbstract: true
    })
], FeaturesOrderByRelationAggregateInput);
exports.FeaturesOrderByRelationAggregateInput = FeaturesOrderByRelationAggregateInput;
