"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BrandProductOrderByRelationAggregateInput = class BrandProductOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByRelationAggregateInput.prototype, "_count", void 0);
BrandProductOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductOrderByRelationAggregateInput", {
        isAbstract: true
    })
], BrandProductOrderByRelationAggregateInput);
exports.BrandProductOrderByRelationAggregateInput = BrandProductOrderByRelationAggregateInput;
