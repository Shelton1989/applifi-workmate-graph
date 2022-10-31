"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let NotificationSettingsCountOrderByAggregateInput = class NotificationSettingsCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCountOrderByAggregateInput.prototype, "newContentILike", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCountOrderByAggregateInput.prototype, "commentsOnMyReviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCountOrderByAggregateInput.prototype, "repliesToMyComments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCountOrderByAggregateInput.prototype, "repliesToThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsCountOrderByAggregateInput.prototype, "updatedAt", void 0);
NotificationSettingsCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsCountOrderByAggregateInput", {
        isAbstract: true
    })
], NotificationSettingsCountOrderByAggregateInput);
exports.NotificationSettingsCountOrderByAggregateInput = NotificationSettingsCountOrderByAggregateInput;
