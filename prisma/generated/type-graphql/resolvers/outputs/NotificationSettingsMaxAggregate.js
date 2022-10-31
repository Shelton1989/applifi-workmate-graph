"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NotificationSettingsMaxAggregate = class NotificationSettingsMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsMaxAggregate.prototype, "newContentILike", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsMaxAggregate.prototype, "commentsOnMyReviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsMaxAggregate.prototype, "repliesToMyComments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsMaxAggregate.prototype, "repliesToThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsMaxAggregate.prototype, "updatedAt", void 0);
NotificationSettingsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("NotificationSettingsMaxAggregate", {
        isAbstract: true
    })
], NotificationSettingsMaxAggregate);
exports.NotificationSettingsMaxAggregate = NotificationSettingsMaxAggregate;
