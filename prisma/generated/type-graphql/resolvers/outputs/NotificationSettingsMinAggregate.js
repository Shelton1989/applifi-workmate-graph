"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NotificationSettingsMinAggregate = class NotificationSettingsMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsMinAggregate.prototype, "newContentILike", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsMinAggregate.prototype, "commentsOnMyReviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsMinAggregate.prototype, "repliesToMyComments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettingsMinAggregate.prototype, "repliesToThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationSettingsMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationSettingsMinAggregate.prototype, "updatedAt", void 0);
NotificationSettingsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("NotificationSettingsMinAggregate", {
        isAbstract: true
    })
], NotificationSettingsMinAggregate);
exports.NotificationSettingsMinAggregate = NotificationSettingsMinAggregate;
