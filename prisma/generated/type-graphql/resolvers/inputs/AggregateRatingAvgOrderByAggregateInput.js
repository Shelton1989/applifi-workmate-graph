"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AggregateRatingAvgOrderByAggregateInput = class AggregateRatingAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingAvgOrderByAggregateInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingAvgOrderByAggregateInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingAvgOrderByAggregateInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingAvgOrderByAggregateInput.prototype, "ratingCount", void 0);
AggregateRatingAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingAvgOrderByAggregateInput", {
        isAbstract: true
    })
], AggregateRatingAvgOrderByAggregateInput);
exports.AggregateRatingAvgOrderByAggregateInput = AggregateRatingAvgOrderByAggregateInput;
