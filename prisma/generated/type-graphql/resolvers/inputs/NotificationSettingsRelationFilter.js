"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettingsRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationSettingsWhereInput_1 = require("../inputs/NotificationSettingsWhereInput");
let NotificationSettingsRelationFilter = class NotificationSettingsRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereInput_1.NotificationSettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereInput_1.NotificationSettingsWhereInput)
], NotificationSettingsRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsWhereInput_1.NotificationSettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsWhereInput_1.NotificationSettingsWhereInput)
], NotificationSettingsRelationFilter.prototype, "isNot", void 0);
NotificationSettingsRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationSettingsRelationFilter", {
        isAbstract: true
    })
], NotificationSettingsRelationFilter);
exports.NotificationSettingsRelationFilter = NotificationSettingsRelationFilter;
