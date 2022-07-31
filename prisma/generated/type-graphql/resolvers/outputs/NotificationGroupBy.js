"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCountAggregate_1 = require("../outputs/NotificationCountAggregate");
const NotificationMaxAggregate_1 = require("../outputs/NotificationMaxAggregate");
const NotificationMinAggregate_1 = require("../outputs/NotificationMinAggregate");
let NotificationGroupBy = class NotificationGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "actorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationGroupBy.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationGroupBy.prototype, "hasBeenViewedBySubject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCountAggregate_1.NotificationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCountAggregate_1.NotificationCountAggregate)
], NotificationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMinAggregate_1.NotificationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMinAggregate_1.NotificationMinAggregate)
], NotificationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationMaxAggregate_1.NotificationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationMaxAggregate_1.NotificationMaxAggregate)
], NotificationGroupBy.prototype, "_max", void 0);
NotificationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("NotificationGroupBy", {
        isAbstract: true
    })
], NotificationGroupBy);
exports.NotificationGroupBy = NotificationGroupBy;
