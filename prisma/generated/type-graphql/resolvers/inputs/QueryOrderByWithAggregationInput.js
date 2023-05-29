"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCountOrderByAggregateInput_1 = require("../inputs/QueryCountOrderByAggregateInput");
const QueryMaxOrderByAggregateInput_1 = require("../inputs/QueryMaxOrderByAggregateInput");
const QueryMinOrderByAggregateInput_1 = require("../inputs/QueryMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let QueryOrderByWithAggregationInput = class QueryOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryOrderByWithAggregationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryOrderByWithAggregationInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryOrderByWithAggregationInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCountOrderByAggregateInput_1.QueryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryCountOrderByAggregateInput_1.QueryCountOrderByAggregateInput)
], QueryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMaxOrderByAggregateInput_1.QueryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryMaxOrderByAggregateInput_1.QueryMaxOrderByAggregateInput)
], QueryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMinOrderByAggregateInput_1.QueryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryMinOrderByAggregateInput_1.QueryMinOrderByAggregateInput)
], QueryOrderByWithAggregationInput.prototype, "_min", void 0);
QueryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryOrderByWithAggregationInput", {
        isAbstract: true
    })
], QueryOrderByWithAggregationInput);
exports.QueryOrderByWithAggregationInput = QueryOrderByWithAggregationInput;
