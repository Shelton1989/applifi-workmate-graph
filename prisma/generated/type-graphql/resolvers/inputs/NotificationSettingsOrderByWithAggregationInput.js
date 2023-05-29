"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCountOrderByAggregateInput_1 = require("../inputs/NotificationSettingsCountOrderByAggregateInput");
const NotificationSettingsMaxOrderByAggregateInput_1 = require("../inputs/NotificationSettingsMaxOrderByAggregateInput");
const NotificationSettingsMinOrderByAggregateInput_1 = require("../inputs/NotificationSettingsMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let NotificationSettingsOrderByWithAggregationInput = class NotificationSettingsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "newDocumentsIndexed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "documentUpdates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "newRequests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "requestUpdates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "commentsOnMyReviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "repliesToMyReviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCountOrderByAggregateInput_1.NotificationSettingsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCountOrderByAggregateInput_1.NotificationSettingsCountOrderByAggregateInput)
], NotificationSettingsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsMaxOrderByAggregateInput_1.NotificationSettingsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsMaxOrderByAggregateInput_1.NotificationSettingsMaxOrderByAggregateInput)
], NotificationSettingsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsMinOrderByAggregateInput_1.NotificationSettingsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsMinOrderByAggregateInput_1.NotificationSettingsMinOrderByAggregateInput)
], NotificationSettingsOrderByWithAggregationInput.prototype, "_min", void 0);
NotificationSettingsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsOrderByWithAggregationInput", {
        isAbstract: true
    })
], NotificationSettingsOrderByWithAggregationInput);
exports.NotificationSettingsOrderByWithAggregationInput = NotificationSettingsOrderByWithAggregationInput;
