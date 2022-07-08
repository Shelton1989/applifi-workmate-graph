"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCountOrderByAggregateInput_1 = require("../inputs/RequestCountOrderByAggregateInput");
const RequestMaxOrderByAggregateInput_1 = require("../inputs/RequestMaxOrderByAggregateInput");
const RequestMinOrderByAggregateInput_1 = require("../inputs/RequestMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RequestOrderByWithAggregationInput = class RequestOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "requestResolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCountOrderByAggregateInput_1.RequestCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCountOrderByAggregateInput_1.RequestCountOrderByAggregateInput)
], RequestOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestMaxOrderByAggregateInput_1.RequestMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestMaxOrderByAggregateInput_1.RequestMaxOrderByAggregateInput)
], RequestOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestMinOrderByAggregateInput_1.RequestMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestMinOrderByAggregateInput_1.RequestMinOrderByAggregateInput)
], RequestOrderByWithAggregationInput.prototype, "_min", void 0);
RequestOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestOrderByWithAggregationInput", {
        isAbstract: true
    })
], RequestOrderByWithAggregationInput);
exports.RequestOrderByWithAggregationInput = RequestOrderByWithAggregationInput;
