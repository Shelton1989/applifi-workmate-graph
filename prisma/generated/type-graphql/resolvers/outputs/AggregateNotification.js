"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNotification = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCountAggregate_1 = require("../outputs/NotificationCountAggregate");
const NotificationMaxAggregate_1 = require("../outputs/NotificationMaxAggregate");
const NotificationMinAggregate_1 = require("../outputs/NotificationMinAggregate");
let AggregateNotification = class AggregateNotification {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCountAggregate_1.NotificationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCountAggregate_1.NotificationCountAggregate)
], AggregateNotification.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMinAggregate_1.NotificationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMinAggregate_1.NotificationMinAggregate)
], AggregateNotification.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMaxAggregate_1.NotificationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMaxAggregate_1.NotificationMaxAggregate)
], AggregateNotification.prototype, "_max", void 0);
AggregateNotification = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateNotification", {
        isAbstract: true
    })
], AggregateNotification);
exports.AggregateNotification = AggregateNotification;
