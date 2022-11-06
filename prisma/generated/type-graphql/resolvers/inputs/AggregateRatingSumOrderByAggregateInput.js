"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AggregateRatingSumOrderByAggregateInput = class AggregateRatingSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingSumOrderByAggregateInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingSumOrderByAggregateInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingSumOrderByAggregateInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingSumOrderByAggregateInput.prototype, "ratingCount", void 0);
AggregateRatingSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingSumOrderByAggregateInput", {
        isAbstract: true
    })
], AggregateRatingSumOrderByAggregateInput);
exports.AggregateRatingSumOrderByAggregateInput = AggregateRatingSumOrderByAggregateInput;
