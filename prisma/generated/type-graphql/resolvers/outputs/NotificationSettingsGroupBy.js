"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsCountAggregate_1 = require("../outputs/NotificationSettingsCountAggregate");
const NotificationSettingsMaxAggregate_1 = require("../outputs/NotificationSettingsMaxAggregate");
const NotificationSettingsMinAggregate_1 = require("../outputs/NotificationSettingsMinAggregate");
let NotificationSettingsGroupBy = class NotificationSettingsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsGroupBy.prototype, "newArrivals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsGroupBy.prototype, "orderUpdates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsGroupBy.prototype, "promotions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsGroupBy.prototype, "saleAlerts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsGroupBy.prototype, "postsByArtistsIFollow", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsGroupBy.prototype, "postsByBrandsIFollow", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCountAggregate_1.NotificationSettingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCountAggregate_1.NotificationSettingsCountAggregate)
], NotificationSettingsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsMinAggregate_1.NotificationSettingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsMinAggregate_1.NotificationSettingsMinAggregate)
], NotificationSettingsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsMaxAggregate_1.NotificationSettingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsMaxAggregate_1.NotificationSettingsMaxAggregate)
], NotificationSettingsGroupBy.prototype, "_max", void 0);
NotificationSettingsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("NotificationSettingsGroupBy", {
        isAbstract: true
    })
], NotificationSettingsGroupBy);
exports.NotificationSettingsGroupBy = NotificationSettingsGroupBy;
