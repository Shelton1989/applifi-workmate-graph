"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationWhereInput_1 = require("../inputs/NotificationWhereInput");
let NotificationListRelationFilter = class NotificationListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], NotificationListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], NotificationListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], NotificationListRelationFilter.prototype, "none", void 0);
NotificationListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationListRelationFilter", {
        isAbstract: true
    })
], NotificationListRelationFilter);
exports.NotificationListRelationFilter = NotificationListRelationFilter;
