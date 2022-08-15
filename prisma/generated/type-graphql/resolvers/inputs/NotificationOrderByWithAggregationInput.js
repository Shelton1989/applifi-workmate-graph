"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCountOrderByAggregateInput_1 = require("../inputs/NotificationCountOrderByAggregateInput");
const NotificationMaxOrderByAggregateInput_1 = require("../inputs/NotificationMaxOrderByAggregateInput");
const NotificationMinOrderByAggregateInput_1 = require("../inputs/NotificationMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let NotificationOrderByWithAggregationInput = class NotificationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "actorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "hasBeenViewedBySubject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "mediaLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCountOrderByAggregateInput_1.NotificationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCountOrderByAggregateInput_1.NotificationCountOrderByAggregateInput)
], NotificationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMaxOrderByAggregateInput_1.NotificationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMaxOrderByAggregateInput_1.NotificationMaxOrderByAggregateInput)
], NotificationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMinOrderByAggregateInput_1.NotificationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMinOrderByAggregateInput_1.NotificationMinOrderByAggregateInput)
], NotificationOrderByWithAggregationInput.prototype, "_min", void 0);
NotificationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationOrderByWithAggregationInput", {
        isAbstract: true
    })
], NotificationOrderByWithAggregationInput);
exports.NotificationOrderByWithAggregationInput = NotificationOrderByWithAggregationInput;
