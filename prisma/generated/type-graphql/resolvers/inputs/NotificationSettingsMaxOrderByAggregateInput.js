"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let NotificationSettingsMaxOrderByAggregateInput = class NotificationSettingsMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "newArrivals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "orderUpdates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "promotions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "saleAlerts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "postsByArtistsIFollow", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "postsByBrandsIFollow", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
NotificationSettingsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], NotificationSettingsMaxOrderByAggregateInput);
exports.NotificationSettingsMaxOrderByAggregateInput = NotificationSettingsMaxOrderByAggregateInput;